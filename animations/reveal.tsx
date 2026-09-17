"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animationConfig } from "@/config/animations";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplies the configured stagger delay. */
  index?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Backed by the `[data-reveal]` CSS in globals.css so there is no
 * flash-of-hidden-content before hydration finishes, and by a single shared
 * IntersectionObserver per component instance (cheap; there can be dozens on
 * a page).
 */
export function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: animationConfig.reveal.thresholdViewport }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  const delay = index * animationConfig.reveal.staggerSeconds;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ transitionDelay: index ? `${delay}s` : undefined }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}

/** Reveals each direct child with an incrementing stagger delay. */
export function StaggerChildren({
  children,
  className,
}: {
  children: ReactNode[];
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} index={i} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
