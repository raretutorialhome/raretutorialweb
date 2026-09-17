/**
 * Runs `callback` once the browser is idle (or after `timeout` ms, whichever
 * comes first), falling back to setTimeout(0) on browsers without
 * requestIdleCallback (Safari). Used to defer non-critical JS (GSAP/Lenis
 * setup) off the critical initial-render path — see animations/parallax.tsx
 * and animations/smooth-scroll-provider.tsx, both of which measurably
 * improved Total Blocking Time once their setup stopped competing with
 * hydration for main-thread time.
 */
export function whenIdle(callback: () => void, timeout = 1500): () => void {
  if (typeof window === "undefined") return () => {};

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, 0);
  return () => window.clearTimeout(id);
}
