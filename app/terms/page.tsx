import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms governing the use of the RARE Tutorial Home website.",
  path: routes.terms,
});

export default function TermsPage() {
  return (
    <Section>
      <Container narrow>
        <h1 className="mb-2 font-serif text-3xl font-bold text-primary-dark">Terms &amp; Conditions</h1>
        <p className="mb-8 text-sm text-ink-muted">Effective Date: [Date of Launch]</p>

        <div className="space-y-6 text-[15.5px] leading-relaxed text-ink-soft">
          <p>
            Welcome to the website of RARE Tutorial Home. By accessing or using this website, you agree to these
            Terms and Conditions.
          </p>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Educational Information</h2>
            <p>
              The information provided on this website is intended to help parents and students understand our
              courses and services. While we strive to keep all information accurate and up to date, course
              details, schedules and fees may change without prior notice.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Intellectual Property</h2>
            <p>
              Unless otherwise stated, all content on this website—including text, photographs, graphics, logos,
              videos and study material—is the property of RARE Tutorial Home and may not be copied, reproduced or
              distributed without written permission.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Use of Website</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Use this website for unlawful purposes.</li>
              <li>Attempt to interfere with the functioning or security of the website.</li>
              <li>Copy or misuse any educational material without permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites and social media platforms. We are not
              responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Limitation of Liability</h2>
            <p>
              RARE Tutorial Home will not be liable for any direct or indirect loss arising from the use of this
              website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Governing Law</h2>
            <p>These Terms and Conditions shall be governed by the laws of India.</p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Contact</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us through the Contact page.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
