/**
 * Minimal, provider-agnostic email sender. The API route only calls
 * `sendEmail(...)` — swapping providers (Resend → SES → SendGrid → Mailgun)
 * means editing the single fetch call below, not any caller.
 *
 * Without EMAIL_PROVIDER_API_KEY set, this logs the message and returns
 * success, so the enquiry flow and its UI states are fully testable in
 * development without real credentials. Wire up a real key before
 * production — see .env.example.
 */

export type EmailPayload = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmail(payload: EmailPayload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;

  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.info("[email:noop] EMAIL_PROVIDER_API_KEY not set — logging instead of sending", {
      to: payload.to,
      subject: payload.subject,
    });
    return { ok: true };
  }

  try {
    // Default provider: Resend. Its REST API is simple enough not to need an
    // SDK dependency. To use a different provider, change only this block —
    // the function signature callers rely on stays the same.
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: payload.from,
        to: payload.to,
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      // eslint-disable-next-line no-console
      console.error("[email] provider returned an error", res.status, body);
      return { ok: false, error: "email_provider_error" };
    }

    return { ok: true };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] request to provider failed", err);
    return { ok: false, error: "email_request_failed" };
  }
}
