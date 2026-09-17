# RARE Tutorial — Website

Production Next.js (App Router) + TypeScript + Tailwind rebuild of the RARE
Tutorial Home website, driven by the content and imagery supplied in
`Rare Website Content.zip`.

## Project Setup

Requirements: Node.js 18.18+ (LTS recommended), pnpm (or npm/yarn).

```bash
pnpm install     # or: npm install
cp .env.example .env.local
```

## Development

```bash
pnpm dev         # http://localhost:3000
```

## Build & Production

```bash
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
pnpm build       # production build
pnpm start       # serve the production build locally
```

## Deployment

The app is a standard Next.js App Router project and deploys to Vercel with
zero configuration (`vercel deploy`), or to any Node hosting that can run
`next build && next start`. Before going live:

1. Set every variable in `.env.example` in your hosting provider's dashboard
   — in particular `NEXT_PUBLIC_SITE_URL` (replace the `.example` placeholder
   with the real domain), `EMAIL_PROVIDER_API_KEY` and `EMAIL_FROM` (without
   these the enquiry form validates and logs submissions but sends no real
   email), and `CONTACT_FORM_RECIPIENT_EMAIL`.
2. Run `npm run typecheck && npm run lint && npm run build` locally and
   confirm all three pass with zero errors before deploying.
3. After deploying, submit a real test enquiry through `/contact` and
   confirm the notification email arrives.
4. Optional but recommended for production: set `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   and `TURNSTILE_SECRET_KEY` for bot verification on the enquiry form (see
   "Security & Anti-Spam" below — the form works without these, just with
   one fewer layer of protection).
5. If deploying to a serverless platform with multiple concurrent instances
   (e.g. Vercel), be aware the enquiry form's rate limiter is in-memory per
   instance (see "Security & Anti-Spam" below) — fine for moderate traffic,
   but swap in Upstash Redis or similar for a hard guarantee at scale.

## Security & Anti-Spam

- **Security headers** (`middleware.ts`): Content-Security-Policy,
  Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy on every response. The CSP uses
  `'unsafe-inline'` for `script-src` rather than a nonce — deliberately: a
  nonce-based CSP was tried first and reverted because it's fundamentally
  incompatible with this site's static generation (a nonce must be unique
  per request, but a statically-generated page's HTML is built once). See
  the comment at the top of `middleware.ts` for the full reasoning.
- **Enquiry form** (`components/forms/ContactForm.tsx` +
  `app/api/contact/route.ts`) is layered: a honeypot field, a minimum
  fill-time check, per-IP rate limiting (`lib/rate-limit.ts` — in-memory,
  see its own doc comment for the multi-instance caveat and upgrade path),
  server-side validation and sanitization (`lib/validation/contactForm.ts`),
  optional Cloudflare Turnstile verification (`lib/turnstile.ts`,
  `components/forms/Turnstile.tsx` — inactive until you set the Turnstile
  env vars), and a request body size cap. Bots get an identical "success"
  response with nothing actually sent, so there's no signal telling them
  which check they tripped.
- **Double opt-in confirmation** (`lib/email/confirmationToken.ts`,
  `app/api/contact/confirm/route.ts`) — when a visitor gives an email
  address, RARE is *not* notified immediately. Instead the visitor gets a
  confirmation link; only clicking it triggers the actual notification to
  RARE. This is what filters for genuine interest specifically (not just
  bots) — a real, interested parent confirms; spam and careless submissions
  don't. The token is a signed (HMAC-SHA256), stateless payload — no
  database needed — valid for 48 hours, single-purpose (it can only trigger
  sending that one enquiry, nothing else). Submissions with no email skip
  straight to notifying RARE, since there's nothing to confirm against —
  they're still covered by every other layer above. Requires
  `CONFIRMATION_TOKEN_SECRET` to be set (see .env.example); without it, any
  submission that includes an email address will fail with a clear
  server-side error rather than silently skipping confirmation.
- **Email delivery** (`lib/email/sendEmail.ts`) is provider-agnostic —
  without `EMAIL_PROVIDER_API_KEY` set it logs instead of sending (safe for
  local dev). Wired to Resend's REST API by default; swap the one `fetch`
  call to use SES/SendGrid/Mailgun instead if preferred.
- The email's From address always comes from server configuration
  (`EMAIL_FROM`), never from user input — a visitor's own address is only
  ever used as Reply-To.

## Content Updates — "Where do I change...?"

Everything editorial lives under `content/` and `config/` as plain
TypeScript data — no JSX to touch for a copy change.

| I want to change...                          | Edit this file                                   |
| --------------------------------------------- | ------------------------------------------------- |
| Homepage headings/copy                        | `content/home.ts`                                  |
| About page copy                               | `content/about.ts`                                 |
| The RARE Way copy                             | `content/rareWay.ts`                               |
| Courses (add/edit/remove a subject)           | `content/courses.ts`                               |
| Resources articles                            | `content/resources.ts`                             |
| Stories / testimonials                        | `content/stories.ts`                               |
| FAQ questions & answers                       | `content/faq.ts`                                   |
| Contact page copy                             | `content/contact.ts`                               |
| Phone / WhatsApp / email / address            | `config/contact.ts` (or the `NEXT_PUBLIC_CONTACT_*` env vars) |
| Navigation links                              | `content/navigation.ts`                            |
| Site name, tagline, founding year             | `config/site.ts`                                   |
| SEO defaults, per-page metadata helper        | `config/seo.ts`                                    |
| Colours, spacing, radii, fonts                | `tailwind.config.ts` + CSS variables in `app/globals.css` |
| Animation durations / easing / reveal timing  | `config/animations.ts`                             |
| Routes / URL structure                        | `config/routes.ts`                                 |

### Images

Every image used on the site is declared once in `content/assets.ts` as a
typed `ImageAsset` (`src`, `width`, `height`, `alt`). Components import
`images.xxx` from that file — they never hard-code an image path. To
replace a photograph:

1. Drop the new file into the matching folder under `public/images/<section>/`.
2. Update the `src` (and `width`/`height`/`alt` if the new image differs) for
   that key in `content/assets.ts`.

No component code needs to change. Folders: `public/images/{home,about,rare-way,courses,resources,stories,contact,faq}/`.

### Adding a Course

Add one object to the `courses` array in `content/courses.ts` (slug, name,
class range, icon, blurb, intro, "what students work on" list, teaching-flow
steps, closing line, image). The course automatically gets:

- a card on `/courses`
- a full detail page at `/courses/<slug>` (statically generated)
- an entry in the header's Courses dropdown and the footer, once you also add
  it to `footerCourseLinks` / `schoolProgrammeLinks` in `content/navigation.ts`

No changes to `CourseGrid`, `CourseCard` or the `[slug]` route are required.

### Adding a Testimonial / Story

Add an object (`quote`, `name`, `role`) to the relevant array in
`content/home.ts` or `content/stories.ts`. Per the source content brief,
only genuine, permissioned testimonials should be published — do not invent
placeholder quotes.

### Adding a New Page

1. Create `app/<route>/page.tsx` following the pattern in any existing page
   (banner → sections → closing CTA).
2. Add the route to `config/routes.ts`.
3. Add a content file under `content/<route>.ts` for its copy.
4. Add a link in `content/navigation.ts` if it should appear in the header or
   footer, and to `app/sitemap.ts`.

### Changing the Logo

The logo is currently a text wordmark rendered inline in
`components/navigation/Header.tsx` and `components/footer/Footer.tsx` (no
image asset was supplied). To use an image logo instead, add the file to
`public/images/brand/` and swap the wordmark markup in both components for
an `<Image>` referencing it.

### Animation Configuration

Reveal-on-scroll timing (distance, stagger, threshold) and hero/parallax
tuning live in `config/animations.ts`. The reveal effect itself is the
`<Reveal>` component in `animations/reveal.tsx` (IntersectionObserver +
CSS transition — no animation library needed for it). Parallax imagery uses
GSAP + ScrollTrigger (`animations/parallax.tsx`), and site-wide smooth
scrolling uses Lenis (`animations/smooth-scroll-provider.tsx`). Both are
automatically disabled for visitors with `prefers-reduced-motion` set.

## Architecture

```
app/            Routes (App Router). Each page.tsx composes content + components.
components/     Reusable UI, grouped by purpose (layout, navigation, hero,
                cards, buttons, forms, footer, sections, common).
content/        All editorial copy and the image map, as typed data.
config/         Site-wide configuration: routes, contact details, SEO, animation tuning.
lib/            Framework-agnostic logic: form validation, rate limiting,
                email delivery, Turnstile verification, analytics abstraction, SEO helpers.
hooks/          Small reusable hooks (reduced-motion, media query).
animations/     Reveal-on-scroll, GSAP parallax, Lenis smooth-scroll provider
                (both GSAP/Lenis init deferred to idle time — see their doc comments).
middleware.ts   Security headers (CSP, HSTS, etc.) applied to every response.
public/images/  Photographs, organised by the section they belong to.
```

The guiding rule: **content ≠ UI ≠ animation ≠ configuration**. A copy change,
an image swap, or a new course should never require editing a component.

## Testing

The project is set up for `tsc --noEmit` (type safety) and `next lint`
(ESLint via `eslint-config-next`) as the baseline checks — both run in CI
before a deploy. A full Jest/Playwright suite was intentionally left out of
this delivery to keep the handoff focused; the component boundaries
(`CourseGrid`, `Accordion`, `ContactForm`, `Header`) are written to be easy
to add unit/E2E coverage to when the team is ready — `ContactForm` and the
`/api/contact` route are the highest-value places to start, since form
validation is shared logic in `lib/validation/contactForm.ts` that both the
client and the API route already call.

## Known Follow-ups

- The in-memory rate limiter (`lib/rate-limit.ts`) resets on redeploy and
  doesn't share state across concurrent serverless instances — fine for
  moderate traffic, swap for Upstash Redis or similar before relying on it
  as a hard cap under heavy load.
- Fees, class timings and batch sizes are intentionally not published on the
  site (per the source content brief) — the FAQ and Contact copy directs
  visitors to ask directly instead.
- Resources currently ship with the four "container" categories and one
  article per category from the source brief. Add further articles by
  appending to `resourceArticles` in `content/resources.ts`.
- Stories currently show only the real testimonials supplied in the source
  content; Parent/Teacher/"Through the Years" story categories are
  placeholders per the brief's explicit instruction not to fabricate
  testimonials.
