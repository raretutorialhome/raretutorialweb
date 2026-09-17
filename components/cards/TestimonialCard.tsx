import { Quote } from "lucide-react";
import { Reveal } from "@/animations/reveal";

export type Testimonial = { quote: string; name: string; role: string };

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <Reveal index={index}>
      <div className="h-full rounded-md border border-surface-border bg-white p-7 transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
        <Quote className="h-6 w-6 text-gold" aria-hidden />
        <p className="my-4 text-[15px] leading-relaxed text-ink-soft">{testimonial.quote}</p>
        <div>
          <div className="text-[14.5px] font-bold text-primary-dark">{testimonial.name}</div>
          <div className="text-[13px] text-ink-muted">{testimonial.role}</div>
        </div>
      </div>
    </Reveal>
  );
}
