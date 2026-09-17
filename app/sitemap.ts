import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/routes";
import { courses } from "@/content/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    routes.home,
    routes.about,
    routes.rareWay,
    routes.courses,
    routes.resources,
    routes.stories,
    routes.contact,
    routes.faq,
    routes.privacy,
    routes.terms,
    routes.disclaimer,
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${siteConfig.url}${routes.courseDetail(course.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes];
}
