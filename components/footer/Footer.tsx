import Link from "next/link";
import { Phone, Mail, MessageCircle, Clock, MapPin, Facebook, Instagram, Youtube, Linkedin, X as XIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { footerCourseLinks, footerQuickLinks } from "@/content/navigation";

const socialIcons = { Facebook, Instagram, YouTube: Youtube, LinkedIn: Linkedin, X: XIcon } as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker pt-14 text-white/75 sm:pt-16">
      <Container>
        <div className="grid gap-10 pb-12 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-primary-dark">
                <span className="font-serif text-sm font-bold italic text-gold">rare</span>
              </div>
              <span className="font-serif text-[17px] font-bold text-white">{siteConfig.name}</span>
            </div>
            <div className="mb-3 text-[13px] font-semibold text-gold">{siteConfig.tagline}</div>
            <p className="text-[14px] leading-relaxed">
              Founded in {siteConfig.founded}, RARE Tutorial helps students build knowledge, confidence and a
              lifelong love of learning through clear teaching, personal attention and small batches.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[15px] font-bold text-white">Quick Links</div>
            <div className="flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="focus-ring text-[14px] text-white/75 hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[15px] font-bold text-white">Courses</div>
            <div className="flex flex-col gap-2.5">
              {footerCourseLinks.map((link) => (
                <Link key={link.href} href={link.href} className="focus-ring text-[14px] text-white/75 hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[15px] font-bold text-white">Contact</div>
            <div className="flex flex-col gap-3 text-[14px]">
              <a href={contactConfig.phoneHref()} className="focus-ring flex items-center gap-2.5 text-white/75 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" aria-hidden /> {contactConfig.phones.display}
              </a>
              <a href={contactConfig.whatsapp.href()} className="focus-ring flex items-center gap-2.5 text-white/75 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden /> {contactConfig.whatsapp.display}
              </a>
              <a href={contactConfig.email.href} className="focus-ring flex items-center gap-2.5 text-white/75 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" aria-hidden /> {contactConfig.email.address}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                <span>{contactConfig.address.line2}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                <span>
                  {contactConfig.officeHours.days}
                  <br />
                  {contactConfig.officeHours.hours}
                </span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {contactConfig.socials.map((social) => {
                  const SocialIcon = socialIcons[social.name as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`RARE Tutorial on ${social.name}`}
                      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors duration-150 hover:border-gold hover:text-gold"
                    >
                      <SocialIcon className="h-4 w-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 py-6">
          <div className="text-[13px] text-white/55">
            {/* "RARE Tutorial Home" here is deliberate, not a leftover from
                before the site's rename to "RARE Tutorial" — this copyright
                line uses the fuller legal/registered name as explicitly
                requested, distinct from the shorter brand name used
                elsewhere on the site. */}
            © {siteConfig.founded}–{currentYear} RARE Tutorial Home. All Rights Reserved.
          </div>
          <div className="flex gap-5">
            <Link href={routes.privacy} className="focus-ring text-[13px] text-white/55 hover:text-gold">
              Privacy Policy
            </Link>
            <Link href={routes.terms} className="focus-ring text-[13px] text-white/55 hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link href={routes.disclaimer} className="focus-ring text-[13px] text-white/55 hover:text-gold">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
