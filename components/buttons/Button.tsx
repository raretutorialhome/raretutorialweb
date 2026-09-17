import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 ease-out focus-ring whitespace-nowrap active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-[0_4px_14px_rgba(19,74,120,0.25)] hover:bg-primary-dark hover:shadow-[0_6px_18px_rgba(19,74,120,0.32)]",
  gold: "bg-gold text-primary-dark shadow-[0_4px_14px_rgba(217,164,49,0.3)] hover:bg-gold-light hover:shadow-[0_6px_18px_rgba(217,164,49,0.4)]",
  outline: "bg-white border-[1.5px] border-primary text-primary hover:bg-surface-cream",
  "outline-light": "bg-white/10 border-[1.5px] border-white/55 text-white hover:bg-white/20 hover:border-white/80",
  "ghost-light": "bg-transparent text-white/90 hover:text-white",
};

const sizes: Record<Size, string> = {
  // Fixed height (not just vertical padding) so every button is exactly the
  // same height regardless of whether it has an icon, per design feedback.
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-[15.5px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", children, className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as ButtonAsLink;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
