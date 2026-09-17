"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export type AccordionItem = { question: string; answer: string };

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-surface-border", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-semibold text-primary-dark"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className={cn("h-5 w-5 flex-shrink-0 text-ink-faint transition-transform duration-base", isOpen && "rotate-180")}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid overflow-hidden transition-all duration-base", isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}
            >
              <p className="min-h-0 whitespace-pre-line text-[15px] leading-relaxed text-ink-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
