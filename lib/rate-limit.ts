/**
 * Best-effort in-memory sliding-window rate limiter, keyed by a caller-
 * supplied string (typically the request IP).
 *
 * LIMITATION: this store lives in the Node.js process's memory. On a single
 * long-running server it works correctly. On a serverless platform that
 * spins up multiple concurrent instances (e.g. Vercel), each instance has
 * its own counter, so the *effective* limit is (MAX_REQUESTS × number of
 * warm instances) rather than a hard global cap, and it resets on every
 * cold start/redeploy. For a hard guarantee in a multi-instance production
 * deployment, swap the Map below for a durable, shared store (e.g. Upstash
 * Redis via @upstash/ratelimit) behind this same `checkRateLimit` signature
 * — no caller code needs to change.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const requestLog = new Map<string, number[]>();

// Prevent unbounded memory growth from one-off IPs that never return.
const MAX_TRACKED_KEYS = 5000;

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const existing = requestLog.get(key) ?? [];
  const recent = existing.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((WINDOW_MS - (now - recent[0])) / 1000);
    requestLog.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  requestLog.set(key, recent);

  if (requestLog.size > MAX_TRACKED_KEYS) {
    const oldestKey = requestLog.keys().next().value;
    if (oldestKey) requestLog.delete(oldestKey);
  }

  return { allowed: true };
}

/** Best-effort client IP extraction behind a proxy/CDN (Vercel, Cloudflare, etc). */
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
