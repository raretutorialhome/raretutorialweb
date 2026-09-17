import type { Metadata } from "next";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { CTASection } from "@/components/sections/CTASection";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import {
  aboutBanner,
  ourStory,
  meaningOfRare,
  missionVision,
  ourValues,
  learningEnvironment,
  aboutTimeline,
  aboutPeople,
  whatMakesDifferent,
  growingWithoutLosingIdentity,
  aboutCallToAction,
} from "@/content/about";

export const metadata: Metadata = pageMetadata({
  title: "About RARE Tutorial",
  description: "A tradition of learning since 1988 — the story, mission, values and people behind RARE Tutorial.",
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About RARE", path: routes.about }])} />
      <PageBanner heading={aboutBanner.heading} intro={aboutBanner.intro} image={aboutBanner.image} />

      {/* Our Story */}
      <Section>
        <Container className="grid items-center gap-14 [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
          <Reveal>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-dark">{ourStory.eyebrow}</p>
            <h2 className="mb-5 font-serif text-[clamp(26px,3.4vw,36px)] font-bold text-primary-dark">{ourStory.heading}</h2>
            {ourStory.sections[0].paragraphs.map((p) => (
              <p key={p} className="mb-3.5 text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="aspect-[4/5]">
            <ResponsiveImage asset={ourStory.founderTeachingImage} className="h-full rounded-lg" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
        </Container>
        <Container className="mt-14">
          <Reveal className="mx-auto max-w-narrow rounded-lg border border-surface-border bg-surface-cream p-8 text-center">
            <p className="font-serif text-xl italic text-primary">&ldquo;{ourStory.quote.text}&rdquo;</p>
            <p className="mt-3 text-sm font-semibold text-gold-dark">— {ourStory.quote.attribution}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Meaning of RARE */}
      <Section tone="cream">
        <Container narrow className="text-center">
          <Reveal>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-dark">{meaningOfRare.eyebrow}</p>
            <h2 className="mb-6 font-serif text-[clamp(26px,3.4vw,36px)] font-bold text-primary-dark">{meaningOfRare.heading}</h2>
            <div className="mb-6 inline-block rounded-lg border border-surface-border bg-white px-9 py-8">
              <div className="font-serif text-[22px] font-semibold italic text-primary">{meaningOfRare.acronym}</div>
            </div>
            {meaningOfRare.paragraphs.map((p) => (
              <p key={p} className="mb-3.5 text-left text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container narrow>
          <SectionHeading eyebrow="Our Journey" heading="A Timeline of Growth" />
          <div className="relative border-l-2 border-surface-border pl-8">
            {aboutTimeline.map((item, i) => (
              <Reveal key={item.year} index={i} className="relative pb-9">
                <div className="absolute -left-[41px] top-0.5 h-4 w-4 rounded-full border-[3px] border-white bg-gold shadow-[0_0_0_2px_#E9E2D0]" />
                <div className="mb-1 font-serif text-lg font-bold text-primary">{item.year}</div>
                <div className="text-[15.5px] leading-relaxed text-ink-soft">{item.text}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* People */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow="Our People" heading="Meet the People Behind RARE" />
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
            {aboutPeople.map((person, i) => (
              <Reveal key={person.name} index={i}>
                <div className="rounded-lg border border-surface-border bg-white p-8 text-center">
                  <div className="mx-auto mb-5 h-[140px] w-[140px] overflow-hidden rounded-full">
                    <ResponsiveImage asset={person.image} className="h-full" sizes="140px" />
                  </div>
                  <div className="font-serif text-xl font-bold text-primary-dark">{person.name}</div>
                  <div className="mb-4 mt-0.5 text-[13.5px] font-semibold text-gold-dark">{person.role}</div>
                  <p className="text-left text-[14.5px] leading-relaxed text-ink-muted">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission, Vision, Promise */}
      <Section>
        <Container>
          <SectionHeading eyebrow={missionVision.eyebrow} heading={missionVision.heading} description={missionVision.intro} />
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {missionVision.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="h-full rounded-lg border border-surface-border bg-surface-cream p-7">
                  <Icon name={card.icon} className="h-[26px] w-[26px] text-primary" aria-hidden />
                  <h3 className="mb-2.5 mt-4 font-serif text-[19px] text-primary-dark">{card.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{card.text}</p>
                  {card.checklist && (
                    <ul className="mt-4 space-y-2">
                      {card.checklist.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[14px] text-primary-dark">
                          <span className="text-gold">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-[15.5px] leading-relaxed text-ink-muted">{missionVision.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow={ourValues.eyebrow} heading={ourValues.heading} description={ourValues.intro} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ourValues.values.map((value, i) => (
              <Reveal key={value.title} index={i}>
                <div className="h-full rounded-md border border-surface-border bg-white p-7 shadow-soft transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#F2E6C9]">
                    <Icon name={value.icon} className="h-[22px] w-[22px] text-primary" aria-hidden />
                  </div>
                  <h3 className="mb-2 font-serif text-[16.5px] text-primary-dark">{value.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-2xl font-serif text-lg italic text-primary">{ourValues.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Meet Founder highlight (short — full profile lives here per the brief) */}

      {/* Learning Environment */}
      <Section>
        <Container>
          <SectionHeading eyebrow={learningEnvironment.eyebrow} heading={learningEnvironment.heading} />
          <Reveal className="mx-auto mb-10 max-w-narrow text-center">
            {learningEnvironment.paragraphs.slice(0, 2).map((p) => (
              <p key={p} className="mb-3.5 text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningEnvironment.gallery.map((item, i) => (
              <Reveal key={item.caption} index={i}>
                <div className="overflow-hidden rounded-md">
                  <ResponsiveImage asset={item.image} className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <p className="mt-2.5 text-center text-[14px] font-medium text-ink-muted">{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-2xl rounded-lg border border-surface-border bg-surface-cream p-8 text-center">
            <h3 className="mb-4 font-serif text-lg text-primary-dark">{learningEnvironment.highlight.title}</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14.5px] text-primary-dark">
              {learningEnvironment.highlight.items.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <p className="font-serif text-lg italic text-primary">{learningEnvironment.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* What Makes RARE Different */}
      <Section tone="navy">
        <Container>
          <SectionHeading eyebrow="Our Difference" heading="What Makes RARE Different?" tone="light" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatMakesDifferent.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                  <Icon name={card.icon} className="h-[22px] w-[22px] text-gold" aria-hidden />
                  <div className="mt-3.5 text-[15.5px] font-bold text-white">{card.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-9 text-center">
            <Button href={routes.rareWay} variant="gold">
              Discover The RARE Way
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Looking ahead */}
      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-dark">{growingWithoutLosingIdentity.eyebrow}</p>
            <h2 className="mb-5 font-serif text-[clamp(24px,3.2vw,34px)] font-bold text-primary-dark">
              {growingWithoutLosingIdentity.heading}
            </h2>
            {growingWithoutLosingIdentity.paragraphs.map((p) => (
              <p key={p} className="mb-3.5 text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CTASection heading={aboutCallToAction.heading} text={aboutCallToAction.text} tone="cream">
        <Button href={routes.contact}>Book a Free Consultation</Button>
        <Button href={routes.contact} variant="outline">
          Contact Us
        </Button>
      </CTASection>
    </>
  );
}
