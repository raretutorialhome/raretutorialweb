/**
 * Analytics abstraction. Nothing in the UI should call a specific analytics
 * SDK directly — components call `trackEvent(name, props)` and this file is
 * the only place that needs to change when a provider (GA4, Plausible,
 * PostHog, ...) is actually wired up.
 *
 * Until NEXT_PUBLIC_ANALYTICS_PROVIDER is set, events are only logged in
 * development so the call sites can be verified without sending real data.
 */
export type AnalyticsEvent =
  | "consultation_click"
  | "whatsapp_click"
  | "phone_click"
  | "course_enquiry"
  | "course_view"
  | "contact_form_submit"
  | "contact_form_error";

type EventProps = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: AnalyticsEvent, props?: EventProps) {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;

  if (!provider) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.debug("[analytics:noop]", name, props ?? {});
    }
    return;
  }

  // Example wiring for GA4's gtag, added once a provider is chosen:
  // if (provider === "ga4" && typeof window !== "undefined" && "gtag" in window) {
  //   (window as any).gtag("event", name, props);
  // }
}
