import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/buttons/Button";
import { Reveal } from "@/animations/reveal";
import { ParallaxImage } from "@/animations/parallax";
import { routes } from "@/config/routes";
import { homeHero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative flex min-h-[min(720px,92vh)] items-center overflow-hidden">
      <ParallaxImage
        src={homeHero.image.src}
        alt={homeHero.image.alt}
        priority
        sizes="100vw"
        strength={30}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[rgba(15,42,64,0.72)]" aria-hidden />
      <div
        className="absolute -right-16 -top-16 h-80 w-80 animate-floatSlow rounded-full bg-gold opacity-15 blur-[70px]"
        aria-hidden
      />
      <div className="relative z-[2] w-full px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-container">
          <div className="max-w-[680px] rounded-lg bg-[rgba(15,42,64,0.5)] p-6 backdrop-blur-sm sm:p-11">
            <Reveal
              index={0}
              className="mb-6 inline-flex items-center gap-2 rounded-pill border border-gold/50 bg-primary-darker/70 px-4 py-1.5 text-[13px] font-semibold text-gold-light"
            >
              {homeHero.eyebrow}
            </Reveal>
            <Reveal index={1}>
              <h1 className="mb-5 font-serif text-[clamp(34px,5.2vw,58px)] font-bold leading-[1.12] text-white">
                {homeHero.heading}
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mb-8 max-w-[560px] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-white/90">
                {homeHero.subheading}
              </p>
            </Reveal>
            <Reveal index={3} className="mb-10 flex flex-wrap gap-3.5">
              <Button href={routes.contact} variant="gold" size="lg">
                {homeHero.primaryCta}
              </Button>
              <Button href={routes.courses} variant="outline-light" size="lg">
                {homeHero.secondaryCta}
              </Button>
            </Reveal>
            <Reveal index={4} className="flex flex-wrap gap-7">
              {homeHero.trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5 text-[14.5px] font-medium text-white/90">
                  <Icon name={badge.icon} className="h-[19px] w-[19px] text-gold" aria-hidden />
                  {badge.label}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
