export const routes = {
  home: "/",
  about: "/about",
  rareWay: "/rare-way",
  courses: "/courses",
  courseDetail: (slug: string) => `/courses/${slug}`,
  resources: "/resources",
  stories: "/stories",
  contact: "/contact",
  contactConfirmed: "/contact/confirmed",
  contactConfirmInvalid: "/contact/confirm-invalid",
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
  disclaimer: "/disclaimer",
} as const;

export type RouteKey = keyof typeof routes;
