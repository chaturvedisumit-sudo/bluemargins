import { featuredQuote } from "@/content";

export default function FeaturedQuote() {
  return (
    <section
      className="relative border-t border-[#295A9B]/12 bg-[#EDF3F8]"
      data-testid="section-featured-quote"
      aria-label="Featured quote"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-16 md:py-24">
        <blockquote className="max-w-[820px] mx-auto text-center">
          <span className="font-display text-6xl text-[#295A9B]/50 leading-none block mb-2" aria-hidden="true">
            &ldquo;
          </span>
          <p className="font-display italic text-[1.7rem] md:text-[2.1rem] leading-snug text-[#123A70]">
            {featuredQuote}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
