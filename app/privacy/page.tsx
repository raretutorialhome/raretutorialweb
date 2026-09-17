import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How RARE Tutorial Home collects, uses and protects information shared through this website.",
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <Section>
      <Container narrow>
        <h1 className="mb-2 font-serif text-3xl font-bold text-primary-dark">Privacy Policy</h1>
        <p className="mb-8 text-sm text-ink-muted">Effective Date: [Date of Launch]</p>

        <div className="space-y-6 text-[15.5px] leading-relaxed text-ink-soft">
          <p>
            At RARE Tutorial Home, we respect your privacy and are committed to protecting the personal information
            you share with us.
          </p>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Information We Collect</h2>
            <p className="mb-3">We may collect information such as:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Class of the student</li>
              <li>School/Board</li>
              <li>Any information you choose to provide through our enquiry form or WhatsApp.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">How We Use Your Information</h2>
            <p className="mb-3">We use your information only to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Respond to your enquiries</li>
              <li>Provide information about our courses</li>
              <li>Contact you regarding admissions</li>
              <li>Improve our educational services</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Website Analytics</h2>
            <p>
              Our website may use cookies or analytics tools to understand how visitors use our website so that we
              can improve the user experience.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no internet transmission
              is completely secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">External Links</h2>
            <p>
              Our website may contain links to social media platforms and other websites. We are not responsible
              for the privacy practices of those websites.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Changes to this Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be published on this page.</p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-xl font-bold text-primary-dark">Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us through the details
              provided on our Contact page.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
