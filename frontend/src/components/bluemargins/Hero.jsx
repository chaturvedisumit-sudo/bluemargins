import heroCoast from "@/assets/hero-coast.webp";
import { hero } from "@/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative" data-testid="section-home">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 pt-4 md:pt-2 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          {/* Text — ~43% */}
          <div className="md:col-span-5 relative z-10 md:pt-16">
            <h1 className="font-display text-[2.7rem] leading-[1.04] sm:text-5xl lg:text-[3.5rem] text-[#123A70]">
              {hero.heading}
            </h1>

            {/* short blue rule */}
            <div className="mt-6 mb-6 h-px w-16 bg-[#295A9B]/60" aria-hidden="true" />

            <p className="font-display italic text-xl md:text-[1.4rem] text-[#295A9B] leading-snug">
              {hero.question}
            </p>

            <p className="mt-5 font-body text-[1.05rem] leading-relaxed text-[#34383D] max-w-[40ch]">
              {hero.support}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-7">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 font-body text-[1.02rem] text-[#123A70] link-underline"
                data-testid="hero-primary-cta"
              >
                {hero.primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="link-underline font-body text-[1.02rem] text-[#295A9B]/80"
                data-testid="hero-secondary-cta"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Watercolor landscape — ~57%, painted onto the page, pulled up near the nav */}
          <div className="md:col-span-7 relative md:-mt-8 lg:-mt-14">
            <img
              src={heroCoast}
              alt="Blue watercolor illustration of a quiet sea meeting a pale shoreline beneath distant cliffs."
              className="w-full h-auto select-none pointer-events-none"
              loading="eager"
              decoding="async"
              width="1200"
              height="896"
              data-testid="hero-artwork"
            />
            {/* handwritten marginal note near the far-right margin */}
            <p className="hidden lg:block font-hand text-[1.35rem] text-[#295A9B]/75 absolute -right-10 top-[46%] -translate-y-1/2 rotate-90 origin-center whitespace-nowrap">
              {hero.marginNote}
            </p>
          </div>
        </div>

        {/* mobile margin note */}
        <p className="lg:hidden font-hand text-lg text-[#295A9B]/75 mt-4 text-center">
          {hero.marginNote}
        </p>
      </div>
    </section>
  );
}
