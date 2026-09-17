import type { Metadata } from "next";
import { siteConfig } from "./site";
import { contactConfig } from "./contact";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "RARE Tutorial",
    "tuition Ballygunge",
    "Kolkata tutorial home",
    "spoken English classes Kolkata",
    "WBCHSE English tuition",
    "school tuition Kolkata",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/home/hero-image.jpg", width: 1490, height: 1056, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/home/hero-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      images: opts.image ? [{ url: opts.image }] : undefined,
    },
    twitter: {
      title: opts.title,
      description: opts.description,
      images: opts.image ? [opts.image] : undefined,
    },
  };
}

/**
 * Combined Organization + WebSite structured data, injected once in the root
 * layout via a single @graph script. Only fields backed by real, supplied
 * RARE information are included — no invented ratings, review counts or
 * social profiles.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        foundingDate: String(siteConfig.founded),
        description: siteConfig.description,
        email: contactConfig.email.address,
        telephone: contactConfig.phones.primary,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ballygunge, Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

/** Breadcrumb structured data for an interior page. `items` excludes Home — it's added automatically. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Course structured data for a course detail page, built only from real course content. */
export function courseJsonLd(course: { name: string; introduction: string; classes: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.introduction,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    coursePrerequisites: course.classes,
    url: `${siteConfig.url}/courses/${course.slug}`,
  };
}
