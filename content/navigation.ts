import { routes } from "@/config/routes";
import { courses, type Course } from "./courses";

export type NavLink = { label: string; href: string };

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "About RARE", href: routes.about },
  { label: "The RARE Way", href: routes.rareWay },
];

export const tailNavLinks: NavLink[] = [
  { label: "Resources", href: routes.resources },
  { label: "Stories", href: routes.stories },
  { label: "Contact", href: routes.contact },
];

/**
 * Every "courses" link across the header dropdown, mobile menu and footer is
 * derived from `content/courses.ts` rather than kept as a separate hand-typed
 * list — so adding a course automatically wires up its nav entries, and it is
 * impossible for a label here to point at the wrong course.
 */
function courseNavLink(course: Course): NavLink {
  return { label: `${course.name} (${course.classes})`, href: routes.courseDetail(course.slug) };
}

export const schoolProgrammeLinks: NavLink[] = courses
  .filter((c) => c.category === "school")
  .map(courseNavLink);

export const spokenEnglishNavLink: NavLink = courseNavLink(
  courses.find((c) => c.category === "spoken-english")!
);

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "About RARE", href: routes.about },
  { label: "The RARE Way", href: routes.rareWay },
  { label: "Courses", href: routes.courses },
  { label: "Resources", href: routes.resources },
  { label: "Stories", href: routes.stories },
  { label: "FAQ", href: routes.faq },
  { label: "Contact", href: routes.contact },
];

export const footerCourseLinks: NavLink[] = courses.map((c) => ({
  label: c.name,
  href: routes.courseDetail(c.slug),
}));

export const ctaLabels = {
  primary: "Book a Free Consultation",
  exploreCourses: "Explore Our Courses",
  whatsapp: "WhatsApp Us",
  contact: "Contact Us",
} as const;
