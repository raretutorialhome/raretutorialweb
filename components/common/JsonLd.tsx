/** Renders a single structured-data <script> tag.
 *
 * Deliberately does NOT read the CSP nonce via headers()/cookies(): doing so
 * would opt every page that renders this component into fully dynamic
 * rendering (Next.js treats any use of a per-request API as "this page can't
 * be static"), which cost every content page its static generation for no
 * real security benefit — script-src does not govern <script type=
 * "application/ld+json"> tags in the first place, since they aren't
 * executable. Next's own framework scripts still get the nonce automatically
 * from the CSP header set in middleware.ts, with no headers() call needed. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
