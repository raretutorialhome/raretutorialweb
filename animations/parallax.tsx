"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { whenIdle } from "@/lib/utils/idle";
import { cn } from "@/lib/utils/cn";

type ParallaxImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  /** How far the image drifts, in pixels, across the scroll range. Kept small on purpose. */
  strength?: number;
};

/**
 * A gentle vertical parallax drift on a contained image, built with GSAP's
 * ScrollTrigger. Disabled automatically under `prefers-reduced-motion` and
 * skipped entirely on touch-primary viewports narrower than 768px, where
 * parallax mostly just costs battery without adding much.
 *
 * The underlying <Image> (including `priority` for LCP images like the
 * hero) always renders immediately and is completely unaffected by this —
 * only the GSAP setup that drives the scroll-linked drift is deferred to
 * idle time, so it doesn't compete with hydration for main-thread time on
 * first load (confirmed via Lighthouse's Total Blocking Time before/after).
 */
export function ParallaxImage({ className, strength = 40, ...imageProps }: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;
    let mounted = true;

    const cancelIdle = whenIdle(async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          img,
          { y: -strength },
          {
            y: strength,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, wrapper);
    });

    return () => {
      mounted = false;
      cancelIdle();
      ctx?.revert();
    };
  }, [reducedMotion, strength]);

  return (
    // No hardcoded position class here on purpose: an earlier version set a
    // default "relative" alongside overflow-hidden and expected a caller's
    // `absolute` (passed via `className`) to override it. Tailwind's
    // generated stylesheet happens to order `.relative` after `.absolute`,
    // so the hardcoded default silently won regardless of class-string
    // order, collapsing this wrapper to 0×0 and making the Hero's fully-
    // loaded background image invisible. Callers must supply their own
    // position utility (Hero.tsx uses `absolute inset-0`).
    <div ref={wrapperRef} className={cn("overflow-hidden", className)}>
      <div ref={imgRef} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image {...imageProps} fill className="object-cover" />
      </div>
    </div>
  );
}
