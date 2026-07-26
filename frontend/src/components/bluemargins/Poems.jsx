import { poems } from "@/content";
import { PoemArt } from "@/components/bluemargins/PoemArt";
import { ArrowRight } from "lucide-react";

export default function Poems() {
  return (
    <section
      id="poems"
      className="relative border-t border-[#295A9B]/12 bg-[#FFFDF8]"
      data-testid="section-poems"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-28">
        <div className="mb-14">
          <p className="font-hand text-2xl text-[#295A9B] mb-3">from the collection</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#123A70]">Selected Poems</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {poems.map((p) => (
            <article
              key={p.id}
              className="paper-card deckle p-8 flex flex-col"
              data-testid={`poem-card-${p.id}`}
            >
              <PoemArt kind={p.art} className="w-9 h-9 mb-6" />
              <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-[#295A9B] mb-3">
                {p.category}
              </p>
              <h3 className="font-display text-2xl md:text-[1.7rem] text-[#123A70] leading-tight mb-4">
                {p.title}
              </h3>
              <p className="font-body italic text-[1.02rem] leading-[1.8] text-[#34383D] mb-8 whitespace-pre-line">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
