import Image from "next/image";
import type { ImageAsset } from "@/content/assets";

export function PageBanner({ heading, intro, image }: { heading: string; intro: string; image: ImageAsset }) {
  return (
    <section className="relative overflow-hidden pb-[70px] pt-[110px]">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[rgba(18,44,67,0.75)]" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <div className="inline-block rounded-lg bg-[rgba(15,42,64,0.55)] px-7 py-8 backdrop-blur-sm sm:px-12 sm:py-11">
          <h1 className="mb-4 font-serif text-[clamp(30px,4.6vw,50px)] font-bold text-white">{heading}</h1>
          <p className="text-[clamp(15px,1.6vw,19px)] text-white/90">{intro}</p>
        </div>
      </div>
    </section>
  );
}
