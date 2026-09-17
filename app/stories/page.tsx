import type { Metadata } from "next";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import {
  storiesBanner,
  storiesIntro,
  studentStories,
  parentStoriesNote,
  storiesClosing,
  shareYourStory,
} from "@/content/stories";

export const metadata: Metadata = pageMetadata({
  title: "Stories from the RARE Family",
  description: "Real experiences shared by students and parents who have been part of the RARE Tutorial journey since 1988.",
  path: routes.stories,
});

export default function StoriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Stories from the RARE Family", path: routes.stories }])} />
      <PageBanner heading={storiesBanner.heading} intro={storiesBanner.intro} image={storiesBanner.image} />

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-ink-soft">{storiesIntro}</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <h2 className="mb-8 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Student Stories</h2>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {studentStories.map((t, i) => (
              <TestimonialCard key={t.name + i} testimonial={t} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <h2 className="mb-6 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Parent Experiences</h2>
          <Reveal className="rounded-lg border border-surface-border bg-surface-cream p-8 text-center">
            <p className="text-[15.5px] italic text-ink-muted">{parentStoriesNote}</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream">
        <Container narrow className="text-center">
          {storiesClosing.paragraphs.map((p) => (
            <Reveal key={p} className="mb-3 text-[16px] leading-relaxed text-ink-soft">
              {p}
            </Reveal>
          ))}
          <Reveal className="text-[16px] font-semibold text-primary-dark">{storiesClosing.emphasis}</Reveal>
        </Container>
      </Section>

      <CTASection heading={shareYourStory.heading} text={shareYourStory.text}>
        <Button href={routes.contact}>Book a Free Consultation</Button>
        <Button href={routes.contact} variant="outline">
          Contact Us
        </Button>
      </CTASection>
    </>
  );
}
