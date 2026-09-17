import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/common/JsonLd";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { CTASection } from "@/components/sections/CTASection";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd, courseJsonLd } from "@/config/seo";
import { courses } from "@/content/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return pageMetadata({
    title: `${course.name} — ${course.classes}`,
    description: course.introduction,
    path: routes.courseDetail(course.slug),
  });
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Courses", path: routes.courses },
          { name: course.name, path: routes.courseDetail(course.slug) },
        ])}
      />
      <JsonLd data={courseJsonLd(course)} />
      <section className="relative overflow-hidden pb-16 pt-[110px]">
        <Image src={course.image.src} alt={course.image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(18,44,67,0.78)]" aria-hidden />
        <div className="relative z-[2] mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2.5 rounded-pill bg-gold/20 px-4 py-1.5 text-[13px] font-semibold text-gold-light">
            <Icon name={course.icon} className="h-4 w-4" aria-hidden />
            {course.classes}
          </div>
          <h1 className="mb-3 mt-5 font-serif text-[clamp(30px,4.6vw,46px)] font-bold text-white">{course.name}</h1>
          <p className="text-[clamp(15px,1.6vw,19px)] text-white/90">{course.subheading}</p>
        </div>
      </section>

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-ink-soft">{course.introduction}</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <h2 className="mb-8 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">
            What Students Work On
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {course.workOn.map((item, i) => (
              <Reveal key={item.title} index={i}>
                <div className="h-full rounded-md border border-surface-border bg-white p-6 transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <h3 className="mb-2 font-serif text-[16px] text-primary-dark">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow className="text-center">
          <h2 className="mb-8 font-serif text-[clamp(22px,3vw,30px)] font-bold text-primary-dark">
            How We Teach {course.name}
          </h2>
          <Reveal className="flex flex-wrap items-center justify-center gap-3 font-serif text-base font-semibold text-primary">
            {course.teachingFlow.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold">→</span>}
                {step}
              </span>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CTASection heading="Closing Thought" text={course.closingHighlight} tone="cream" />

      <CTASection heading={`Ready to Begin ${course.name}?`} text="We would be happy to discuss your child's learning needs and confirm whether this programme is the right fit.">
        <Button href={`${routes.contact}?course=${encodeURIComponent(course.slug)}`}>Book a Free Consultation</Button>
        <Button href={routes.courses} variant="outline">
          View All Courses
        </Button>
      </CTASection>
    </>
  );
}
