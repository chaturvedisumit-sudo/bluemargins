import { about } from "@/content";

function Paragraph({ block }) {
  if (block.type === "lead") {
    return (
      <p className="font-display italic text-2xl md:text-[1.7rem] leading-snug text-[#295A9B]">
        {block.text}
      </p>
    );
  }
  if (block.type === "emphasis") {
    return (
      <p className="font-display text-2xl md:text-3xl text-[#123A70]">{block.text}</p>
    );
  }
  return (
    <p className="font-body text-[1.05rem] leading-[1.85] text-[#34383D]">
      {block.text}
    </p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[#295A9B]/12"
      data-testid="section-about"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Portrait placeholder */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="font-hand text-2xl text-[#295A9B] mb-5">about the poet</p>
              <div
                className="aspect-square w-full max-w-[300px] rounded-full border border-[#295A9B]/25 bg-[#EDF3F8] flex items-center justify-center text-center p-8"
                data-testid="about-portrait-placeholder"
                role="img"
                aria-label={about.portraitAlt}
              >
                <span className="font-body text-sm text-[#295A9B]/80 leading-relaxed">
                  {about.portraitAlt}
                </span>
              </div>
            </div>
          </div>

          {/* dotted divider + text */}
          <div className="md:col-span-8 md:border-l md:border-dotted md:border-[#295A9B]/30 md:pl-12">
            <h2 className="font-display text-4xl md:text-5xl text-[#123A70] mb-8">
              About the Poet
            </h2>
            <div className="max-w-[720px] space-y-6">
              {about.intro.map((block, i) => (
                <Paragraph key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
