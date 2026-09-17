import type { ReactNode } from "react";
import { Reveal } from "@/animations/reveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils/cn";

export function CTASection({
  heading,
  text,
  children,
  tone = "navy",
  className,
}: {
  heading: string;
  text?: string;
  children?: ReactNode;
  tone?: "navy" | "cream" | "white";
  className?: string;
}) {
  return (
    <Section tone={tone} className={cn("text-center", className)}>
      <Container narrow>
        <Reveal>
          <h2
            className={cn(
              "font-serif text-[clamp(24px,3.4vw,36px)] font-bold leading-tight",
              tone === "navy" ? "text-white" : "text-primary-dark"
            )}
          >
            {heading}
          </h2>
          {text && (
            <p className={cn("mx-auto mt-4 max-w-xl text-base leading-relaxed", tone === "navy" ? "text-white/85" : "text-ink-muted")}>
              {text}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">{children}</div>}
        </Reveal>
      </Container>
    </Section>
  );
}
