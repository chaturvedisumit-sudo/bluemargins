import HeroArt from "@/components/bluemargins/HeroArt";
import { hero } from "@/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative" data-testid="section-home">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Text — ~42% */}
          <div className="md:col-span-5">
            <p className="font-hand text-2xl text-[#295A9B] mb-6">a quiet welcome</p>

            <h1 className="font-display text-[2.7rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem] text-[#123A70] font-500">
              {hero.heading}
            </h1>

            <p className="mt-6 font-display italic text-2xl md:text-[1.7rem] text-[#295A9B] leading-snug">
              {hero.question}
            </p>

            <p className="mt-6 font-body text-[1.05rem] leading-relaxed text-[#34383D] max-w-[36ch]">
              {hero.support}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2.5 bg-[#123A70] text-[#FBF8F1] hover:bg-[#0E2B52] transition-colors px-7 py-3.5 font-body text-[0.95rem]"
                data-testid="hero-primary-cta"
              >
                {hero.primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="link-underline font-body text-[0.95rem] text-[#123A70]"
                data-testid="hero-secondary-cta"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Artwork — ~58% */}
          <div className="md:col-span-7 relative">
            <div className="relative mx-auto max-w-[440px]">
              <HeroArt className="w-full h-auto" />
              {/* marginal handwritten note near the far-right margin */}
              <p className="hidden lg:block font-hand text-xl text-[#295A9B]/80 absolute -right-2 top-1/2 -translate-y-1/2 rotate-90 origin-right whitespace-nowrap">
                {hero.marginNote}
              </p>
            </div>
            {/* mobile version of margin note */}
            <p className="lg:hidden font-hand text-lg text-[#295A9B]/80 mt-4 text-center">
              {hero.marginNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
