import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/buttons/Button";
import { routes } from "@/config/routes";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] text-center">
      <Container narrow>
        <p className="mb-3 font-serif text-6xl font-bold text-gold">404</p>
        <h1 className="mb-4 font-serif text-2xl font-bold text-primary-dark">We couldn&apos;t find that page</h1>
        <p className="mx-auto mb-8 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
          The page you&apos;re looking for may have moved. Try one of the links below, or head back to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Button href={routes.home}>Go to Homepage</Button>
          <Button href={routes.courses} variant="outline">
            Explore Courses
          </Button>
          <Button href={routes.contact} variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
