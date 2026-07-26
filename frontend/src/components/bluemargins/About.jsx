import { about, site } from "@/content";
import Botanical from "@/components/bluemargins/Botanical";
// Decorative About illustration. NOTE: this watercolor may be replaced with
// Shalini's photograph — see about.portraitAlt in content.js.
import inkwell from "@/assets/about-inkwell.webp";

function Paragraph({ block }) {
  if (block.type === "lead") {
    return (
      <p className="font-display italic text-2xl md:text-[1.6rem] leading-snug text-[#295A9B]">
        {block.text}
      </p>
    );
  }
  if (block.type === "emphasis") {
    return <p className="font-display text-2xl md:text-3xl text-[#123A70]">{block.text}</p>;
  }
  return (
    <p className="font-body text-[1.05rem] leading-[1.85] text-[#34383D]">{block.text}</p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#EFE9DC] border-y border-[#295A9B]/12"
      data-testid="section-about"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Inkwell watercolor (portrait-replaceable) */}
          <div className="md:col-span-3">
            <div
              className="mx-auto md:mx-0 w-[240px] h-[240px] rounded-full overflow-hidden ring-1 ring-[#295A9B]/25"
              data-testid="about-portrait-placeholder"
            >
              <img
                src={inkwell}
                alt={about.portraitAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1024"
                height="1024"
              />
            </div>
          </div>

          {/* Intro text with dotted divider */}
          <div className="md:col-span-6 md:border-l md:border-dotted md:border-[#295A9B]/35 md:pl-10">
            <h2 className="font-display text-4xl md:text-5xl text-[#123A70] mb-3">About the Poet</h2>
            <div className="h-px w-14 bg-[#295A9B]/50 mb-8" aria-hidden="true" />
            <div className="max-w-[680px] space-y-5">
              {about.intro.map((block, i) => (
                <Paragraph key={i} block={block} />
              ))}
              <p className="font-hand text-2xl text-[#295A9B] pt-2">— {site.name}</p>
            </div>
          </div>

          {/* Botanical sprig */}
          <div className="hidden md:flex md:col-span-3 justify-center pt-4">
            <Botanical className="h-56 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
