/**
 * Central animation tuning. Components read these instead of hard-coding
 * durations/easing so the whole site's motion feel can be adjusted in one
 * place. Keep durations restrained — RARE's brand direction is calm and
 * trustworthy, not flashy.
 */
export const animationConfig = {
  durations: {
    fast: 0.2,
    base: 0.6,
    slow: 0.9,
  },
  ease: {
    standard: "power2.out",
    entrance: "power3.out",
  },
  reveal: {
    distancePx: 22,
    staggerSeconds: 0.08,
    thresholdViewport: 0.15, // IntersectionObserver threshold
  },
  hero: {
    imageScaleFrom: 1.04,
    imageScaleTo: 1,
    textDelaySeconds: 0.1,
  },
  pageTransitionMs: 450,
} as const;
