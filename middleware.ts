import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Applies security headers to every response.
 *
 * CSP note: this site is intentionally almost entirely statically generated
 * (see the build output — everything but /api/contact is prerendered). A
 * nonce-based script-src (Next's documented pattern for App Router CSPs)
 * was tried here first and reverted: a nonce must be unique per request,
 * but a static page's HTML — including any nonce baked into its script
 * tags — is generated once at build time. Middleware still runs per request
 * and would hand out a fresh random nonce on every request that could never
 * match what's in the already-built HTML, which blocked every single
 * script on every page (confirmed via an actual browser console check
 * against the production build — not just reasoned about). Rather than
 * force the whole site into dynamic rendering just to make a nonce viable
 * (a real, measured performance cost — see the production report), this
 * uses a static CSP with 'unsafe-inline' for scripts as the honest
 * trade-off: every other directive stays strict (no external script/frame
 * origins beyond what's explicitly needed, no arbitrary framing, no mixed
 * content).
 *
 * Turnstile's script/frame/connect origins are only added to the policy
 * when NEXT_PUBLIC_TURNSTILE_SITE_KEY is actually configured, so the CSP
 * stays as tight as possible until that feature is turned on (see
 * app/api/contact/route.ts).
 */
export function middleware(_request: NextRequest) {
  const isDev = process.env.NODE_ENV !== "production";
  const turnstileEnabled = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${turnstileEnabled ? " https://challenges.cloudflare.com" : ""}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `connect-src 'self'${turnstileEnabled ? " https://challenges.cloudflare.com" : ""}`,
    `frame-src ${turnstileEnabled ? "https://challenges.cloudflare.com" : "'none'"}`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'self'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  const response = NextResponse.next();

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );
  if (!isDev) {
    response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  }

  return response;
}

export const config = {
  matcher: [
    // Skip static assets and Next's own image optimizer — they're immutable/
    // already-cached responses that don't need per-request header work.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
