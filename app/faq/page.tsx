import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { Accordion } from "@/components/common/Accordion";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import { faqBanner, faqGroups, faqClosing } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about RARE Tutorial's courses, learning modes, fees, timings and how to get in touch.",
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "FAQ", path: routes.faq }])} />
      <PageBanner heading={faqBanner.heading} intro={faqBanner.intro} image={faqBanner.image} />

      <Section>
        <Container narrow>
          {faqGroups.map((group, gi) => (
            <div key={group.id} className={gi > 0 ? "mt-14" : ""}>
              <Reveal>
                <h2 className="mb-1 font-serif text-[22px] font-bold text-primary-dark">{group.title}</h2>
                <p className="mb-5 text-[14.5px] text-gold-dark">{group.subtitle}</p>
              </Reveal>
              <Accordion items={group.items} />
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="cream" className="text-center">
        <Container narrow>
          <Reveal>
            <h2 className="mb-3 font-serif text-[clamp(24px,3.4vw,34px)] font-bold text-primary-dark">{faqClosing.heading}</h2>
            <p className="mb-2 text-[15px] font-semibold text-gold-dark">{faqClosing.subheading}</p>
            <p className="mx-auto mb-4 max-w-xl whitespace-pre-line text-[16px] leading-relaxed text-ink-soft">{faqClosing.text}</p>
            <p className="mb-8 text-[14.5px] font-medium text-ink-muted">{faqClosing.supporting}</p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Button href={contactConfig.phoneHref()}>
                <Phone className="h-[17px] w-[17px]" aria-hidden /> Call Us
              </Button>
              <Button href={contactConfig.whatsapp.href()} external variant="outline">
                <MessageCircle className="h-[17px] w-[17px]" aria-hidden /> WhatsApp Us
              </Button>
            </div>
            <p className="mt-8 font-serif italic text-primary">{faqClosing.closingNote}</p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
