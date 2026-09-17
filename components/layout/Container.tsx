import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", narrow ? "max-w-narrow" : "max-w-container", className)}>
      {children}
    </div>
  );
}
