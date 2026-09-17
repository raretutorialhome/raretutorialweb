import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { CourseGrid } from "@/components/cards/CourseCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Accordion } from "@/components/common/Accordion";
import { CTASection } from "@/components/sections/CTASection";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";
import { courses } from "@/content/courses";
import {
  homeWelcome,
  homeWhyChoose,
  homeFounder,
  homeCoursesIntro,
  homeWayIntro,
  homeTrust,
  homePeople,
  homeResources,
  homeStories,
  homeFaqPreview,
  homeClosingCta,
} from "@/content/home";

export const metadata: Metadata = pageMetadata({
  title: "RARE Tutorial | Helping Students Learn with Confidence Since 1988",
  description:
    "RARE Tutorial has helped students in Ballygunge, Kolkata learn with confidence since 1988 — English, Mathematics, Science, Biology, Social Science, Bengali and Spoken English, offline, online and hybrid.",
  path: routes.home,
});

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Welcome / Our Story teaser — extra bottom space added per design feedback
          ("Where It All Began" needs more room before the next section). */}
      <Section className="!pb-[92px] sm:!pb-[116px] lg:!pb-[132px]">
        <Container className="grid items-center gap-14 [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
          <Reveal className="mx-auto aspect-[4/5] max-w-[460px]">
            <ResponsiveImage asset={homeWelcome.image} className="h-full rounded-lg" sizes="(min-width: 1024px) 460px, 90vw" />
          </Reveal>
          <Reveal>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-dark">{homeWelcome.eyebrow}</p>
            <h2 className="mb-5 font-serif text-[clamp(26px,3.4vw,38px)] font-bold leading-tight text-primary-dark">
              {homeWelcome.heading}
            </h2>
            {homeWelcome.paragraphs.map((p) => (
              <p key={p} className="mb-4 text-[16.5px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <Button href={routes.about} variant="ghost-light" className="!text-primary hover:!text-primary-dark">
              {homeWelcome.cta} <ArrowRight className="h-[17px] w-[17px]" aria-hidden />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Why Choose RARE — highest priority spacing fix per design feedback:
          more room above the heading and after the cards. */}
      <Section tone="cream" className="!pt-[80px] sm:!pt-[104px] lg:!pt-[120px] !pb-[92px] sm:!pb-[116px] lg:!pb-[132px]">
        <Container>
          <SectionHeading eyebrow={homeWhyChoose.eyebrow} heading={homeWhyChoose.heading} description={homeWhyChoose.intro} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeWhyChoose.reasons.map((reason, i) => (
              <Reveal key={reason.title} index={i}>
                <div className="h-full rounded-md border border-surface-border bg-white p-7 shadow-soft transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#F2E6C9]">
                    <Icon name={reason.icon} className="h-[22px] w-[22px] text-primary" aria-hidden />
                  </div>
                  <div className="mb-1 text-[13px] font-bold text-gold-dark">{reason.tagline}</div>
                  <h3 className="mb-2 font-serif text-[17px] text-primary-dark">{reason.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="font-serif text-lg italic text-primary">{homeWhyChoose.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Meet Our Founder */}
      <Section>
        <Container className="grid items-center gap-14 [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
          <Reveal>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-dark">{homeFounder.eyebrow}</p>
            <h2 className="mb-5 font-serif text-[clamp(26px,3.4vw,38px)] font-bold leading-tight text-primary-dark">
              {homeFounder.heading}
            </h2>
            {homeFounder.paragraphs.map((p) => (
              <p key={p} className="mb-4 text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <blockquote className="my-6 border-l-[3px] border-gold py-1 pl-5">
              <p className="font-serif text-lg italic leading-relaxed text-primary">&ldquo;{homeFounder.quote.text}&rdquo;</p>
              <cite className="mt-2 block text-sm font-semibold not-italic text-gold-dark">— {homeFounder.quote.attribution}</cite>
            </blockquote>
            <Button href={routes.about} variant="outline">
              {homeFounder.cta} <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Reveal>
          <Reveal index={1} className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] translate-y-6">
              <ResponsiveImage asset={homeFounder.portrait} className="h-full rounded-lg" sizes="(min-width: 1024px) 25vw, 45vw" />
            </div>
            <div className="aspect-[3/4]">
              <ResponsiveImage asset={homeFounder.teaching} className="h-full rounded-lg" sizes="(min-width: 1024px) 25vw, 45vw" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Courses intro — extra breathing room above heading→tiles and after
          the last row, per design feedback. */}
      <Section className="!pb-[92px] sm:!pb-[116px] lg:!pb-[132px]">
        <Container>
          <SectionHeading
            eyebrow={homeCoursesIntro.eyebrow}
            heading={homeCoursesIntro.heading}
            description={homeCoursesIntro.intro}
            className="!mb-14 sm:!mb-16"
          />
          <div className="mb-10 grid gap-6 sm:grid-cols-3">
            {homeCoursesIntro.tiles.map((tile, i) => (
              <Reveal key={tile.title} index={i}>
                <div className="rounded-md border border-surface-border bg-surface-cream p-8 transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <Icon name={tile.icon} className="h-[30px] w-[30px] text-primary" aria-hidden />
                  <h3 className="mb-2.5 mt-4 font-serif text-[21px] text-primary-dark">{tile.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{tile.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <CourseGrid courses={featuredCourses} />
          <Reveal className="mt-10 text-center">
            <Button href={routes.courses} variant="outline">
              {homeCoursesIntro.cta}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* The RARE Way teaser */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow={homeWayIntro.eyebrow} heading={homeWayIntro.heading} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeWayIntro.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="rounded-md border border-surface-border bg-white p-7 shadow-soft transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#F2E6C9]">
                    <Icon name={card.icon} className="h-[22px] w-[22px] text-primary" aria-hidden />
                  </div>
                  <div className="font-serif text-[16.5px] font-bold text-primary-dark">{card.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href={routes.rareWay}>{homeWayIntro.cta}</Button>
          </Reveal>
        </Container>
      </Section>

      {/* Trust cards */}
      <Section tone="navy">
        <Container>
          <SectionHeading eyebrow={homeTrust.eyebrow} heading={homeTrust.heading} tone="light" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeTrust.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                  <Icon name={card.icon} className="h-6 w-6 text-gold" aria-hidden />
                  <div className="mt-3.5 text-[16px] font-bold text-white">{card.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* People */}
      <Section>
        <Container>
          <SectionHeading eyebrow={homePeople.eyebrow} heading={homePeople.heading} />
          <div className="mx-auto grid max-w-[820px] gap-8 sm:grid-cols-2">
            {homePeople.people.map((person, i) => (
              <Reveal key={person.name} index={i} className="text-center">
                <div className="mx-auto mb-4.5 h-[180px] w-[180px] overflow-hidden rounded-full">
                  <ResponsiveImage asset={person.image} className="h-full" sizes="180px" />
                </div>
                <div className="font-serif text-[19px] font-bold text-primary-dark">{person.name}</div>
                <div className="mt-0.5 text-[13.5px] font-semibold text-gold-dark">{person.role}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-7 max-w-xl text-center text-[15.5px] leading-relaxed text-ink-muted">
            {homePeople.text}
          </Reveal>
          <Reveal className="mt-7 text-center">
            <Button href={routes.about} variant="ghost-light" className="!text-primary" aria-label="Meet our founder and director on the About page">
              {homePeople.cta} <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Resources — more room above the heading and before the card grid,
          per design feedback. */}
      <Section tone="cream" className="!pt-[80px] sm:!pt-[104px] lg:!pt-[120px]">
        <Container>
          <SectionHeading
            eyebrow={homeResources.eyebrow}
            heading={homeResources.heading}
            description={homeResources.intro}
            className="!mb-14 sm:!mb-16"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeResources.cards.map((card, i) => (
              <Reveal key={card.title} index={i}>
                <div className="h-full overflow-hidden rounded-md border border-surface-border bg-white transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <ResponsiveImage asset={card.image} className="h-[150px]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="p-5">
                    <h3 className="mb-2 font-serif text-[16px] leading-tight text-primary-dark">{card.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-ink-muted">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href={routes.resources} variant="outline">
              {homeResources.cta}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Stories */}
      <Section>
        <Container>
          <SectionHeading eyebrow={homeStories.eyebrow} heading={homeStories.heading} description={homeStories.intro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeStories.testimonials.map((t, i) => (
              <TestimonialCard key={t.name + i} testimonial={t} index={i} />
            ))}
          </div>
          <Reveal className="mx-auto mt-8 max-w-xl text-center text-[15px] leading-relaxed text-ink-muted">
            {homeStories.closing}
          </Reveal>
          <Reveal className="mt-6 text-center">
            <Button href={routes.stories} variant="outline">
              {homeStories.cta}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ preview */}
      <Section tone="cream">
        <Container narrow>
          <SectionHeading eyebrow="FAQ" heading="Frequently Asked Questions" />
          <Accordion items={homeFaqPreview} />
          <Reveal className="mt-8 text-center">
            <Button href={routes.faq} variant="outline">
              View All FAQs
            </Button>
          </Reveal>
        </Container>
      </Section>

      <CTASection heading={homeClosingCta.heading} text={homeClosingCta.text}>
        <Button href={routes.contact} variant="gold">
          Book Consultation
        </Button>
        <Button
          href={contactConfig.whatsapp.href()}
          external
          variant="outline-light"
        >
          <MessageCircle className="h-[18px] w-[18px]" aria-hidden /> WhatsApp
        </Button>
        <Button href={contactConfig.phoneHref()} variant="outline-light">
          <Phone className="h-[18px] w-[18px]" aria-hidden /> Call
        </Button>
      </CTASection>
    </>
  );
}
