import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionTone = "white" | "cream" | "navy";

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  cream: "bg-surface-cream",
  navy: "bg-primary-dark text-white",
};

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20 lg:py-24", toneClasses[tone], className)}>
      {children}
    </section>
  );
}
