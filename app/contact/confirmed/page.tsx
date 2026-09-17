import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/buttons/Button";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Enquiry Confirmed",
  description: "Your enquiry has been confirmed and sent to RARE Tutorial.",
  path: routes.contactConfirmed,
});

export default function ContactConfirmedPage() {
  return (
    <Section className="min-h-[60vh]">
      <Container narrow className="text-center">
        <CheckCircle className="mx-auto h-14 w-14 text-primary" aria-hidden />
        <h1 className="mb-3 mt-5 font-serif text-2xl font-bold text-primary-dark">Your Enquiry Is Confirmed</h1>
        <p className="mx-auto mb-8 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
          Thank you for confirming. Your enquiry has now been sent to the RARE Tutorial team, and we&apos;ll get back
          to you shortly.
        </p>
        <Button href={routes.home}>Back to Homepage</Button>
      </Container>
    </Section>
  );
}
