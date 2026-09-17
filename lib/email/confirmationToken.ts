import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signs the enquiry data itself into the confirmation-link token (rather
 * than storing it server-side and handing out an opaque id), so double
 * opt-in works without a database: verifying the signature on the click-
 * through is enough to trust the payload, since only this server could have
 * produced a valid signature for it.
 *
 * Token shape: base64url(JSON payload) + "." + base64url(HMAC-SHA256 signature)
 */

const TOKEN_TTL_MS = 48 * 60 * 60 * 1000; // 48 hours — long enough for someone to check email later, short enough to limit a leaked link's usefulness

export type EnquiryPayload = {
  parentName: string;
  studentName: string;
  className: string;
  school: string;
  phone: string;
  email: string;
  course: string;
  mode: string;
  message: string;
  submittedAt: number;
};

function getSecret(): string {
  const secret = process.env.CONFIRMATION_TOKEN_SECRET;
  if (!secret) {
    throw new Error(
      "CONFIRMATION_TOKEN_SECRET is not set. Generate one (e.g. `openssl rand -hex 32`) and set it in your environment before enabling double opt-in — see .env.example."
    );
  }
  return secret;
}

function base64url(input: Buffer): string {
  return input.toString("base64url");
}

function sign(data: string): string {
  return base64url(createHmac("sha256", getSecret()).update(data).digest());
}

export function createConfirmationToken(payload: EnquiryPayload): string {
  const encodedPayload = base64url(Buffer.from(JSON.stringify(payload), "utf8"));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyConfirmationToken(token: string): EnquiryPayload | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [encodedPayload, signature] = parts;

  const expectedSignature = sign(encodedPayload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  // Constant-time comparison so response timing can't leak how much of the
  // signature was correct.
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as EnquiryPayload;
    if (typeof payload.submittedAt !== "number" || Date.now() - payload.submittedAt > TOKEN_TTL_MS) {
      return null; // expired
    }
    return payload;
  } catch {
    return null;
  }
}
