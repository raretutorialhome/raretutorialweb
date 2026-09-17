import { Reveal } from "@/animations/reveal";
import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[13px] font-bold uppercase tracking-[0.08em]",
            tone === "dark" ? "text-gold-dark" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-[clamp(26px,3.4vw,38px)] font-bold leading-tight",
          tone === "dark" ? "text-primary-dark" : "text-white"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "dark" ? "text-ink-soft" : "text-white/85")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
