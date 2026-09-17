import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { routes } from "@/config/routes";
import type { Course } from "@/content/courses";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <Reveal index={index}>
      <Link
        href={routes.courseDetail(course.slug)}
        className="focus-ring group block h-full rounded-md border border-surface-border bg-surface-cream p-7 transition-transform duration-base hover:-translate-y-1 hover:shadow-card"
      >
        <Icon name={course.icon} className="h-7 w-7 text-primary" aria-hidden />
        <h3 className="mt-4 font-serif text-lg text-primary-dark">{course.name}</h3>
        <div className="mb-2 mt-1 text-[13px] font-semibold text-gold-dark">{course.classes}</div>
        <p className="mb-4 text-[14.5px] leading-relaxed text-ink-muted">{course.cardBlurb}</p>
        <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-base group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </Reveal>
  );
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <CourseCard key={course.slug} course={course} index={i} />
      ))}
    </div>
  );
}
