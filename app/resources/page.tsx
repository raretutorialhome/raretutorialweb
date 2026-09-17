import type { Metadata } from "next";
import { PageBanner } from "@/components/hero/PageBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/buttons/Button";
import { CTASection } from "@/components/sections/CTASection";
import { routes } from "@/config/routes";
import { pageMetadata, breadcrumbJsonLd } from "@/config/seo";
import {
  resourcesBanner,
  resourcesWelcome,
  resourceCategories,
  resourceArticles,
  readingChangesLives,
  resourcesClosing,
} from "@/content/resources";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description: "Study tips, reading recommendations, writing guidance and parent guides from RARE Tutorial.",
  path: routes.resources,
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Resources", path: routes.resources }])} />
      <PageBanner heading={resourcesBanner.heading} intro={resourcesBanner.intro} image={resourcesBanner.image} />

      <Section>
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="mb-4 font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">{resourcesWelcome.heading}</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{resourcesWelcome.text}</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream" className="!pt-[80px] sm:!pt-[104px] lg:!pt-[120px]">
        <Container>
          <h2 className="mb-14 sm:mb-16 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">
            Explore Our Resources
          </h2>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {resourceCategories.map((cat, i) => (
              <Reveal key={cat.title} index={i}>
                <div className="h-full rounded-md border border-surface-border bg-white p-6 transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <Icon name={cat.icon} className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="mb-1.5 mt-3.5 font-serif text-[17px] text-primary-dark">{cat.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-muted">{cat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-8 text-center font-serif text-[clamp(24px,3.2vw,32px)] font-bold text-primary-dark">Featured Resources</h2>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {resourceArticles.map((article, i) => (
              <Reveal key={article.slug} index={i}>
                <article className="h-full overflow-hidden rounded-md border border-surface-border transition-transform duration-base hover:-translate-y-1 hover:shadow-card">
                  <ResponsiveImage asset={article.image} className="h-[170px]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <div className="p-5">
                    <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-gold-dark">{article.category}</div>
                    <h3 className="mb-2 font-serif text-[16.5px] leading-tight text-primary-dark">{article.title}</h3>
                    <p className="mb-3 text-[14px] leading-relaxed text-ink-muted">{article.summary}</p>
                    {article.body.map((p) => (
                      <p key={p} className="mb-2 text-[13.5px] leading-relaxed text-ink-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection heading={readingChangesLives.heading} text={readingChangesLives.text}>
        <Button href={routes.resources} variant="gold">
          {readingChangesLives.cta}
        </Button>
      </CTASection>

      <CTASection heading={resourcesClosing.heading} text={resourcesClosing.text} tone="cream">
        <Button href={routes.contact}>Contact Us</Button>
      </CTASection>
    </>
  );
}
