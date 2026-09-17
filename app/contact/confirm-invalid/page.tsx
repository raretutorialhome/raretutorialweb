import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/buttons/Button";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Confirmation Link Expired",
  description: "This confirmation link is invalid or has expired.",
  path: routes.contactConfirmInvalid,
});

export default function ContactConfirmInvalidPage() {
  return (
    <Section className="min-h-[60vh]">
      <Container narrow className="text-center">
        <AlertCircle className="mx-auto h-14 w-14 text-gold-dark" aria-hidden />
        <h1 className="mb-3 mt-5 font-serif text-2xl font-bold text-primary-dark">
          This Link Has Expired or Is Invalid
        </h1>
        <p className="mx-auto mb-8 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
          Confirmation links are valid for 48 hours after an enquiry is submitted. Please submit your enquiry again,
          or reach us directly by phone or WhatsApp.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Button href={routes.contact}>Submit Again</Button>
          <Button href={contactConfig.whatsapp.href()} external variant="outline">
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
