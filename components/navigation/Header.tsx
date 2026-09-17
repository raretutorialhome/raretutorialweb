"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/buttons/Button";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import {
  ctaLabels,
  mainNavLinks,
  schoolProgrammeLinks,
  spokenEnglishNavLink,
  tailNavLinks,
  type NavLink,
} from "@/content/navigation";
import { cn } from "@/lib/utils/cn";

const navLinkClasses =
  "focus-ring group relative flex h-[42px] items-center whitespace-nowrap rounded-sm px-3.5 text-[15px] font-medium transition-colors duration-200 hover:bg-surface-cream";

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-x-3.5 -bottom-px h-[2px] origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 ease-out",
        active ? "scale-x-100" : "group-hover:scale-x-100"
      )}
    />
  );
}

function Logo() {
  return (
    <Link href={routes.home} className="focus-ring group flex flex-shrink-0 items-center gap-2.5">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-primary-dark shadow-[0_3px_10px_rgba(15,46,72,0.25)] transition-transform duration-300 group-hover:scale-105">
        <span className="font-serif text-base font-bold italic text-gold">rare</span>
      </div>
      <div className="flex flex-col leading-[1.15]">
        <span className="font-serif text-lg font-bold text-primary-dark">{siteConfig.name}</span>
        <span className="text-[10.5px] font-medium uppercase tracking-[0.06em] text-ink-muted">
          Since {siteConfig.founded}
        </span>
      </div>
    </Link>
  );
}

function DesktopCoursesMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = pathname.startsWith("/courses");

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={routes.courses}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(navLinkClasses, "gap-1", active ? "text-primary" : "text-primary-dark")}
      >
        Courses
        <ChevronDown className={cn("mt-0.5 h-[15px] w-[15px] transition-transform duration-200", open && "rotate-180")} aria-hidden />
        <NavUnderline active={active} />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full w-[300px] rounded-lg border border-surface-border bg-white p-3.5 shadow-card transition-all duration-200 ease-out",
          open ? "translate-y-1.5 opacity-100" : "pointer-events-none translate-y-0 opacity-0"
        )}
      >
        <div className="px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
          School Programmes
        </div>
        {schoolProgrammeLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring block rounded-md px-2.5 py-1.5 text-[14px] text-ink transition-colors duration-150 hover:bg-surface-cream hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
        <div className="my-2 h-px bg-surface-border" />
        <div className="px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
          Spoken English
        </div>
        <Link
          href={spokenEnglishNavLink.href}
          className="focus-ring block rounded-md px-2.5 py-1.5 text-[14px] text-ink transition-colors duration-150 hover:bg-surface-cream hover:text-primary"
        >
          {spokenEnglishNavLink.label}
        </Link>
      </div>
    </div>
  );
}

function DesktopLink({ link, active }: { link: NavLink; active: boolean }) {
  return (
    <Link href={link.href} className={cn(navLinkClasses, active ? "text-primary" : "text-primary-dark")}>
      {link.label}
      <NavUnderline active={active} />
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and support Escape-to-close while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileCoursesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[200] border-b bg-white/95 backdrop-blur transition-all duration-300",
          scrolled ? "border-surface-border shadow-header" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-[78px] max-w-container items-center justify-between gap-5 px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 [@media(min-width:1180px)]:flex">
            {mainNavLinks.map((link) => (
              <DesktopLink key={link.href} link={link} active={pathname === link.href} />
            ))}
            <DesktopCoursesMenu />
            {tailNavLinks.map((link) => (
              <DesktopLink key={link.href} link={link} active={pathname === link.href} />
            ))}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-3">
            <div className="hidden [@media(min-width:1180px)]:block">
              <Button href={routes.contact}>{ctaLabels.primary}</Button>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="focus-ring rounded-sm p-2 text-primary-dark transition-colors duration-150 hover:bg-surface-cream [@media(min-width:1180px)]:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, not a child: <header> uses
          backdrop-blur, and per the CSS spec a backdrop-filter/filter/transform
          on an ancestor creates a new containing block for `position: fixed`
          descendants. Nesting this overlay inside <header> silently re-scoped
          "fixed inset-0" to the ~78px header box instead of the viewport,
          collapsing the full-screen menu into a translucent sliver. Always
          mounted (not conditionally rendered) so open/close can transition
          smoothly instead of appearing/disappearing instantly. */}
      <div
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[300] flex flex-col overflow-y-auto bg-white px-5 py-5 transition-[opacity,transform] duration-300 ease-out sm:px-8",
          mobileOpen ? "scale-100 opacity-100" : "pointer-events-none scale-[0.98] opacity-0"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-primary-dark">{siteConfig.name}</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="focus-ring rounded-sm p-2 text-primary-dark transition-colors duration-150 hover:bg-surface-cream"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring border-b border-surface-border py-4 text-[19px] font-semibold text-primary-dark transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMobileCoursesOpen((v) => !v)}
            aria-expanded={mobileCoursesOpen}
            className="focus-ring flex items-center justify-between border-b border-surface-border py-4 text-left text-[19px] font-semibold text-primary-dark"
          >
            Courses
            <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", mobileCoursesOpen && "rotate-180")} aria-hidden />
          </button>
          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 ease-out",
              mobileCoursesOpen ? "grid-rows-[1fr] pb-2 opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="flex min-h-0 flex-col gap-0.5 pl-3 pt-2">
              {[...schoolProgrammeLinks, spokenEnglishNavLink].map((link) => (
                <Link key={link.href} href={link.href} className="focus-ring py-2.5 text-[15px] text-ink-muted transition-colors duration-150 hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {tailNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring border-b border-surface-border py-4 text-[19px] font-semibold text-primary-dark transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href={routes.contact} size="lg" className="mt-7 w-full justify-center">
          {ctaLabels.primary}
        </Button>
      </div>
    </>
  );
}
