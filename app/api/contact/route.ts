import { NextResponse } from "next/server";
import { validateContactForm, sanitizeText, FIELD_MAX_LENGTHS } from "@/lib/validation/contactForm";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendEnquiryNotification, sendConfirmationRequest } from "@/lib/email/enquiryEmail";
import { createConfirmationToken } from "@/lib/email/confirmationToken";
import { siteConfig } from "@/config/site";

// Reject grossly oversized payloads before even parsing JSON — a legitimate
// enquiry (all fields at their max length) is well under 3KB.
const MAX_BODY_BYTES = 20_000;
const MIN_FILL_TIME_MS = 800; // see components/forms/ContactForm.tsx's formRenderedAt

/**
 * Enquiry pipeline, in order:
 *  1. Body-size guard
 *  2. Rate limiting (per IP)
 *  3. JSON parsing
 *  4. Honeypot + fill-time check (silently accepted, never emailed — see
 *     note below on why bots get a fake "success")
 *  5. Field validation (same rules as the client, re-run server-side)
 *  6. Turnstile verification (only if configured)
 *  7. Sanitization of every field
 *  8. Double opt-in: if an email address was given, send THEM a
 *     confirmation link instead of emailing RARE directly — the actual
 *     notification only goes out once they click through (see
 *     app/api/contact/confirm/route.ts). This is the layer that filters for
 *     genuine interest, not just bots: a real, interested visitor confirms;
 *     junk doesn't. Submissions with no email (it's an optional field) skip
 *     straight to notifying RARE, since there's nothing to confirm against —
 *     they're still covered by every layer above.
 *
 * Every rejection returns a generic message; no internals, stack traces or
 * validation internals beyond field-level messages are ever exposed.
 */
export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  const ip = getClientIp(request.headers);
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many enquiries from this connection. Please try again shortly, or contact us by phone or WhatsApp." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 600) } }
    );
  }

  let body: unknown;
  try {
    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }
    body = JSON.parse(rawText);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const asString = (v: unknown) => (typeof v === "string" ? v : "");

  const honeypot = asString(raw.website);
  const formRenderedAt = typeof raw.formRenderedAt === "number" ? raw.formRenderedAt : 0;
  const filledInMs = formRenderedAt ? Date.now() - formRenderedAt : Infinity;
  const looksLikeBot = honeypot.trim().length > 0 || filledInMs < MIN_FILL_TIME_MS;

  const values = {
    parentName: asString(raw.parentName),
    studentName: asString(raw.studentName),
    className: asString(raw.className),
    school: asString(raw.school),
    phone: asString(raw.phone),
    email: asString(raw.email),
    course: asString(raw.course),
    mode: asString(raw.mode),
    message: asString(raw.message),
  };

  // Bots get an identical "success" response to a real submission — telling
  // them what tripped the filter only helps them adapt. Nothing is sent.
  if (looksLikeBot) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContactForm(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", fields: errors }, { status: 422 });
  }

  const turnstileOk = await verifyTurnstileToken(
    typeof raw.turnstileToken === "string" ? raw.turnstileToken : undefined,
    ip
  );
  if (!turnstileOk) {
    return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
  }

  const clean = {
    parentName: sanitizeText(values.parentName, FIELD_MAX_LENGTHS.parentName),
    studentName: sanitizeText(values.studentName, FIELD_MAX_LENGTHS.studentName),
    className: sanitizeText(values.className, FIELD_MAX_LENGTHS.className),
    school: sanitizeText(values.school ?? "", FIELD_MAX_LENGTHS.school),
    phone: sanitizeText(values.phone, FIELD_MAX_LENGTHS.phone),
    email: sanitizeText(values.email ?? "", FIELD_MAX_LENGTHS.email),
    course: sanitizeText(values.course, FIELD_MAX_LENGTHS.course),
    mode: sanitizeText(values.mode ?? "", FIELD_MAX_LENGTHS.mode),
    message: sanitizeText(values.message ?? "", FIELD_MAX_LENGTHS.message),
  };

  // No email given → nothing to confirm against; notify RARE directly.
  // Still covered by honeypot/timing/rate-limit/Turnstile/validation above.
  if (!clean.email) {
    const result = await sendEnquiryNotification(clean);
    if (!result.ok) {
      return NextResponse.json(
        { error: "We couldn't submit your enquiry right now. Please try again or contact RARE directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, confirmationRequired: false });
  }

  // Email given → double opt-in. RARE never sees this enquiry unless the
  // visitor clicks the link sent to their own inbox.
  let token: string;
  try {
    token = createConfirmationToken({ ...clean, submittedAt: Date.now() });
  } catch (err) {
    // Missing CONFIRMATION_TOKEN_SECRET in production is a config error, not
    // a visitor-facing one — but we can't silently skip confirmation either,
    // since that would defeat the point. Surface a generic failure.
    // eslint-disable-next-line no-console
    console.error("[contact] could not create confirmation token", err);
    return NextResponse.json(
      { error: "We couldn't submit your enquiry right now. Please try again or contact RARE directly." },
      { status: 500 }
    );
  }

  const confirmUrl = `${siteConfig.url}/api/contact/confirm?token=${encodeURIComponent(token)}`;
  const result = await sendConfirmationRequest(clean, confirmUrl);
  if (!result.ok) {
    return NextResponse.json(
      { error: "We couldn't submit your enquiry right now. Please try again or contact RARE directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, confirmationRequired: true });
}
