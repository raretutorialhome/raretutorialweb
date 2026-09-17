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
  wayBanner,
  wayIntro,
  wayPrinciples,
  howWeTeach,
  rareExperience,
  promiseToParents,
  wayClosingQuote,
} from "@/content/rareWay";

export const metadata: Metadata = pageMetadata({
  title: "The RARE Way",
  description: "The teaching philosophy that has guided RARE Tutorial since 1988 — understanding before memorising, patient guidance and a love of learning.",
  path: routes.rareWay,
});

export default function RareWayPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "The RARE Way", path: routes.rareWay }])} />
      <PageBanner heading={wayBanner.heading} intro={wayBanner.intro} image={wayBanner.image} />

      {/* What is The RARE Way */}
      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-[clamp(24px,3.2vw,34px)] font-bold text-primary-dark">{wayIntro.heading}</h2>
            {wayIntro.paragraphs.map((p) => (
              <p key={p} className="mb-3.5 text-[16px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3 font-serif text-lg font-semibold text-primary">
            {wayIntro.flow.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold">→</span>}
                {step}
              </span>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Principles */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow={wayPrinciples.eyebrow} heading={wayPrinciples.heading} description={wayPrinciples.intro} />
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {wayPrinciples.principles.map((p, i) => (
              <Reveal key={p.title} index={i}>
                <div className="h-full rounded-md border border-surface-border bg-white p-7 shadow-soft transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#F2E6C9]">
                    <Icon name={p.icon} className="h-[22px] w-[22px] text-primary" aria-hidden />
                  </div>
                  <h3 className="mb-2 font-serif text-[16.5px] text-primary-dark">{p.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-[15.5px] leading-relaxed text-ink-muted">{wayPrinciples.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* How We Teach */}
      <Section>
        <Container>
          <SectionHeading eyebrow={howWeTeach.eyebrow} heading={howWeTeach.heading} description={howWeTeach.intro} />
          <div className="space-y-14">
            {howWeTeach.steps.map((step, i) => (
              <Reveal key={step.title} index={i}>
                <div
                  className={`grid items-center gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ${
                    i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <ResponsiveImage asset={step.image} className="h-full" sizes="(min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div>
                    <div className="mb-2 text-[13px] font-bold uppercase tracking-[0.06em] text-gold-dark">Step {i + 1}</div>
                    <h3 className="mb-3 font-serif text-[20px] text-primary-dark">{step.title}</h3>
                    <p className="text-[15.5px] leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-3 text-center font-serif text-base font-semibold text-primary">
            {howWeTeach.timeline.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold">→</span>}
                {step}
              </span>
            ))}
          </Reveal>
          <Reveal className="mt-8 text-center">
            <p className="mx-auto max-w-xl font-serif text-lg italic text-primary">{howWeTeach.closing}</p>
          </Reveal>
        </Container>
      </Section>

      {/* The RARE Experience */}
      <Section tone="cream">
        <Container>
          <SectionHeading eyebrow={rareExperience.eyebrow} heading={rareExperience.heading} description={rareExperience.intro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rareExperience.stages.map((stage, i) => (
              <Reveal key={stage.title} index={i}>
                <div className="h-full overflow-hidden rounded-md border border-surface-border bg-white">
                  <ResponsiveImage asset={stage.image} className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-[16px] text-primary-dark">{stage.title}</h3>
                    <p className="text-[14px] leading-relaxed text-ink-muted">{stage.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-2xl rounded-lg border border-surface-border bg-white p-8 text-center">
            <h3 className="mb-4 font-serif text-lg text-primary-dark">What Students Take Home</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14.5px] text-primary-dark">
              {rareExperience.takeHome.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <p className="mx-auto max-w-xl font-serif text-lg italic text-primary">{rareExperience.closingThought}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Promise to Parents */}
      <Section>
        <Container narrow>
          <SectionHeading eyebrow={promiseToParents.eyebrow} heading={promiseToParents.heading} description={promiseToParents.intro} />
          <div className="space-y-6">
            {promiseToParents.promises.map((promise, i) => (
              <Reveal key={promise.title} index={i} className="border-b border-surface-border pb-6 last:border-0">
                <h3 className="mb-1.5 font-serif text-[17px] text-primary-dark">{promise.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">{promise.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-lg bg-primary-dark p-8 text-center text-white">
            {promiseToParents.finalMessage.map((line) => (
              <p key={line} className="mb-3 text-[15.5px] leading-relaxed last:mb-0">
                {line}
              </p>
            ))}
          </Reveal>
          <Reveal className="mt-8 text-center text-[15px] text-ink-muted">
            <p className="mb-1">With warm wishes,</p>
            {promiseToParents.signatures.map((s) => (
              <p key={s.name} className="font-serif font-semibold text-primary-dark">
                {s.name}, {s.role}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <p className="font-serif text-[clamp(20px,2.6vw,28px)] font-semibold italic leading-relaxed text-primary">
              &ldquo;{wayClosingQuote}&rdquo;
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection heading="Experience The RARE Way" text="The best way to understand our approach is to experience it. We would be happy to discuss your child's learning needs and help you choose the right programme." tone="cream">
        <Button href={routes.contact}>Book a Free Consultation</Button>
        <Button href={routes.courses} variant="outline">
          Explore Our Courses
        </Button>
      </CTASection>
    </>
  );
}
