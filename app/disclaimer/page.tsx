import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { routes } from "@/config/routes";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description: "Disclaimer regarding results, admissions and information provided by RARE Tutorial Home.",
  path: routes.disclaimer,
});

export default function DisclaimerPage() {
  return (
    <Section>
      <Container narrow>
        <h1 className="mb-8 font-serif text-3xl font-bold text-primary-dark">Disclaimer</h1>

        <div className="space-y-4 text-[15.5px] leading-relaxed text-ink-soft">
          <ul className="list-disc space-y-3 pl-5">
            <li>Results vary from student to student based on effort, attendance and participation.</li>
            <li>Past examination results do not guarantee future performance.</li>
            <li>Admission does not guarantee board examination scores or ranks.</li>
            <li>Information on the website is provided in good faith and may change without notice.</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
