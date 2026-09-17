"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { whenIdle } from "@/lib/utils/idle";

/**
 * Mounts Lenis for smooth scrolling site-wide, driven by GSAP's ticker
 * rather than a raw requestAnimationFrame loop. This is the pairing GSAP and
 * Lenis both recommend: it keeps ScrollTrigger-based animations (see
 * animations/parallax.tsx) perfectly in sync with the smoothed scroll
 * position — without this sync, parallax/scroll-linked effects visibly lag
 * a frame or two behind the actual scroll, which reads as jank.
 *
 * Setup is deferred to idle time (see lib/utils/idle.ts): a Lighthouse audit
 * showed GSAP+Lenis initializing immediately on mount was contributing
 * measurably to Total Blocking Time by competing with hydration for
 * main-thread time. Smooth-scroll is a progressive enhancement, not
 * something the initial render depends on, so it can safely wait a beat.
 *
 * A no-op under prefers-reduced-motion, so keyboard/screen-reader scrolling
 * and anchor jumps stay instant for anyone who has asked for that. Touch
 * scrolling is left as native browser scrolling (Lenis's default), which is
 * what avoids the "laggy/rubbery" feel smoothed touch-scroll libraries can
 * introduce on phones and tablets.
 */
export function SmoothScrollProvider() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let mounted = true;
    let lenis: import("lenis").default | undefined;
    let tickerFn: ((time: number) => void) | undefined;
    let gsapRef: typeof import("gsap").gsap | undefined;

    const cancelIdle = whenIdle(async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      gsapRef = gsap;

      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic — brisk, not floaty
        wheelMultiplier: 1,
      });

      // Keep GSAP's ScrollTrigger measurements aligned with Lenis's smoothed
      // scroll position every time it updates.
      lenis.on("scroll", ScrollTrigger.update);

      // Drive Lenis from GSAP's ticker (in raf-synced milliseconds) instead
      // of a separate requestAnimationFrame loop, so there is exactly one
      // scroll-driving clock on the page.
      tickerFn = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      // Prevents a large animation jump after the tab regains focus, which
      // otherwise reads as a stutter.
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      mounted = false;
      cancelIdle();
      if (tickerFn && gsapRef) gsapRef.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, [reducedMotion]);

  return null;
}
