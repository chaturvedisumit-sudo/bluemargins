import { poems } from "@/content";
import { PoemArt } from "@/components/bluemargins/PoemArt";
import { ArrowRight } from "lucide-react";

export default function Poems() {
  return (
    <section
      id="poems"
      className="relative bg-[#FBF8F1]"
      data-testid="section-poems"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-24">
        {/* centered heading with small ornament */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-[#123A70]">Selected Poems</h2>
          <svg width="70" height="12" viewBox="0 0 70 12" className="mx-auto mt-3" aria-hidden="true">
            <path d="M2 6 H30 M40 6 H68" stroke="#295A9B" strokeWidth="1" opacity="0.5" />
            <path d="M35 2 L38 6 L35 10 L32 6 Z" fill="#295A9B" opacity="0.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {poems.map((p) => (
            <article
              key={p.id}
              className="paper-fragment px-8 pt-8 pb-10 flex gap-5"
              data-testid={`poem-card-${p.id}`}
            >
              <PoemArt kind={p.art} className="w-9 h-9 shrink-0 mt-1" />
              <div className="flex flex-col">
                <h3 className="font-display text-2xl text-[#123A70] leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="font-body italic text-[1.02rem] leading-[1.8] text-[#34383D] mb-6 whitespace-pre-line">
                  {p.excerpt}
                </p>
                <a
                  href={p.href}
                  className="mt-auto group inline-flex items-center gap-2 font-body text-[0.9rem] text-[#123A70] link-underline w-fit"
                  data-testid={`poem-card-${p.id}-read`}
                >
                  Read poem
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
