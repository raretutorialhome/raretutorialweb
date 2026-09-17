import { Suspense } from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import { contactBanner, contactIntro, contactVisit, contactClosingCta } from "@/content/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with RARE Tutorial by phone, WhatsApp, email or our enquiry form.",
  path: routes.contact,
});

const contactCards = [
  { title: "Phone", icon: Phone, value: contactConfig.phones.display, href: contactConfig.phoneHref() },
  { title: "WhatsApp", icon: MessageCircle, value: contactConfig.whatsapp.display, href: contactConfig.whatsapp.href() },
  { title: "Email", icon: Mail, value: contactConfig.email.address, href: contactConfig.email.href },
  {
    title: "Office Hours",
    icon: Clock,
    value: `${contactConfig.officeHours.days}\n${contactConfig.officeHours.hours}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: routes.contact }])} />
      <PageBanner heading={contactBanner.heading} intro={contactBanner.intro} image={contactBanner.image} />

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="mb-4 font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">{contactIntro.heading}</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{contactIntro.text}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="!py-8 sm:!py-10">
        <Container>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {contactCards.map((card, i) => {
              const CardIcon = card.icon;
              const content = (
                <div className="h-full rounded-md border border-surface-border bg-surface-cream p-6 text-center transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-md bg-[#F2E6C9]">
                    <CardIcon className="h-[22px] w-[22px] text-primary" aria-hidden />
                  </div>
                  <div className="mb-1.5 text-[15px] font-bold text-primary-dark">{card.title}</div>
                  <div className="whitespace-pre-line text-[14.5px] text-ink-muted">{card.value}</div>
                </div>
              );
              return (
                <Reveal key={card.title} index={i}>
                  {card.href ? (
                    <a href={card.href} className="focus-ring block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="cream" className="!pt-[80px] sm:!pt-[104px] lg:!pt-[120px]">
        <Container narrow>
          <h2 className="mb-7 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Send Us an Enquiry</h2>
          <Reveal>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <Reveal className="rounded-lg bg-surface-cream p-9 text-center">
            <MapPin className="mx-auto h-[26px] w-[26px] text-primary" aria-hidden />
            <h3 className="mb-2.5 mt-3.5 font-serif text-[19px] text-primary-dark">{contactVisit.heading}</h3>
            <p className="text-[15px] leading-relaxed text-ink-muted">{contactVisit.text}</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="navy" className="text-center !pb-[92px] sm:!pb-[116px] lg:!pb-[132px]">
        <Container narrow>
          <Reveal>
            <h2 className="mb-4 font-serif text-[clamp(24px,3.4vw,36px)] font-bold text-white">{contactClosingCta.heading}</h2>
            <p className="mx-auto mb-8 max-w-xl text-[16px] leading-relaxed text-white/85">{contactClosingCta.text}</p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Button href={contactConfig.phoneHref()} variant="gold">
                <Phone className="h-[17px] w-[17px]" aria-hidden /> Call Us
              </Button>
              <Button href={contactConfig.whatsapp.href()} external variant="outline-light">
                <MessageCircle className="h-[17px] w-[17px]" aria-hidden /> WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
