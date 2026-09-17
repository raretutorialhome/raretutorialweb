/**
 * Verifies a Cloudflare Turnstile token server-side. Only active when
 * TURNSTILE_SECRET_KEY is configured — without it, verification is skipped
 * entirely (returns ok) so the enquiry form keeps working with zero setup in
 * development. The matching client widget (components/forms/Turnstile.tsx)
 * is gated the same way on NEXT_PUBLIC_TURNSTILE_SITE_KEY, so client and
 * server always agree on whether the challenge is active.
 */
export async function verifyTurnstileToken(token: string | undefined, remoteIp: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) return true; // Turnstile not configured — nothing to verify.

  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token, remoteip: remoteIp }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[turnstile] verification request failed", err);
    return false;
  }
}
