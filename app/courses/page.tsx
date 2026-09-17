import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { CourseGrid } from "@/components/cards/CourseCard";
import { CTASection } from "@/components/sections/CTASection";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import {
  courses,
  learningModes,
  whyFamiliesChooseCourses,
  spokenEnglishCourse,
} from "@/content/courses";
import { images } from "@/content/assets";

export const metadata: Metadata = pageMetadata({
  title: "Our Courses",
  description: "School programmes in English, Mathematics, Science, Biology, Social Science and Bengali, plus Spoken English — offline, online or hybrid.",
  path: routes.courses,
});

export default function CoursesPage() {
  const schoolCourses = courses.filter((c) => c.category === "school");

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Courses", path: routes.courses }])} />
      <PageBanner
        heading="Our Courses"
        intro="Helping learners of different ages build knowledge, confidence and strong foundations."
        image={images.coursesBanner}
      />

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="mb-4 font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Find the Right Programme</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              Every learner has different goals and different learning needs. Whether your child needs support with school
              subjects or you wish to improve your spoken English, RARE offers programmes designed to build understanding,
              confidence and steady progress.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream" className="!pt-[80px] sm:!pt-[104px] lg:!pt-[120px] !pb-[92px] sm:!pb-[116px] lg:!pb-[132px]">
        <Container>
          <h2 className="mb-14 sm:mb-16 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">
            School Programmes
          </h2>
          <CourseGrid courses={schoolCourses} />
        </Container>
      </Section>

      {/* Featured: Spoken English */}
      <Section tone="navy">
        <Container narrow className="text-center">
          <SectionHeading eyebrow="Featured Programme" heading="Speak English with Confidence" tone="light" description={spokenEnglishCourse.introduction} />
          <div className="mt-10 grid gap-8 text-left [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            <Reveal>
              <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-gold">Levels</div>
              <div className="flex flex-col gap-2.5">
                {spokenEnglishCourse.classes.split(" · ").map((level) => (
                  <div key={level} className="rounded-[10px] border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] font-semibold text-white">
                    {level}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal index={1}>
              <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-gold">Teaching Approach</div>
              <div className="flex flex-col gap-2.5">
                {["Speak from Day One", "Small Batches", "Practical English", "Confidence Before Perfection", "No Rote Grammar"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[15px] text-white">
                    <CheckCircle className="h-[17px] w-[17px] text-gold" aria-hidden /> {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <Button href={routes.courseDetail("spoken-english")} variant="gold">
              Explore Spoken English
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Learning modes */}
      <Section>
        <Container>
          <h2 className="mb-8 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Learn Your Way</h2>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {learningModes.map((mode, i) => (
              <Reveal key={mode.title} index={i}>
                <div className="rounded-md border border-surface-border bg-surface-cream p-7 text-center transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <Icon name={mode.icon} className="mx-auto h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mb-2 mt-4 font-serif text-[18px] text-primary-dark">{mode.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{mode.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-[14px] text-ink-muted">Students can switch between learning modes whenever required.</p>
        </Container>
      </Section>

      {/* Why families choose */}
      <Section tone="cream">
        <Container>
          <h2 className="mb-8 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Why Families Choose RARE</h2>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {whyFamiliesChooseCourses.map((item, i) => (
              <Reveal key={item.title} index={i}>
                <div className="rounded-md border border-surface-border bg-white p-6 text-center transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <Icon name={item.icon} className="mx-auto h-[26px] w-[26px] text-primary" aria-hidden />
                  <div className="mt-3 text-[15px] font-bold text-primary-dark">{item.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection heading="Not Sure Which Programme Is Right?" text="Choosing the right programme is an important decision. We would be happy to understand your learning needs and recommend the most suitable option.">
        <Button href={routes.contact}>Book a Free Consultation</Button>
        <Button href={routes.contact} variant="outline">
          Contact Us
        </Button>
      </CTASection>
    </>
  );
}
