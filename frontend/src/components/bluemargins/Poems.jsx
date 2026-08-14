import { useState } from "react";
import { poems } from "@/content";
import { PoemArt } from "@/components/bluemargins/PoemArt";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Poems() {
  const [active, setActive] = useState(null);

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
                {p.award && (
                  <p className="font-body text-[0.68rem] uppercase tracking-[0.2em] text-[#295A9B] mb-2">
                    {p.award}
                  </p>
                )}
                <h3 className="font-display text-2xl text-[#123A70] leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="font-body italic text-[1.02rem] leading-[1.8] text-[#34383D] mb-6 whitespace-pre-line">
                  {p.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="mt-auto group inline-flex items-center gap-2 font-body text-[0.9rem] text-[#123A70] link-underline w-fit"
                  data-testid={`poem-card-${p.id}-read`}
                  aria-label={`Read the full poem: ${p.title}`}
                >
                  Read poem
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-[720px] w-[92vw] max-h-[88vh] overflow-y-auto bg-[#FFFDF8] border border-[#295A9B]/25 rounded-none p-0 shadow-[0_30px_80px_-20px_rgba(18,58,112,0.45)]"
          data-testid="poem-modal"
        >
          {active && (
            <div className="p-8 md:p-12 relative">
              {/* blue margin rail inside the modal */}
              <div className="absolute top-0 bottom-0 left-6 md:left-10 w-px bg-[#295A9B]/25" aria-hidden="true" />

              {active.award && (
                <p className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-[#295A9B] mb-3">
                  {active.award}
                </p>
              )}
              <DialogTitle className="font-display text-3xl md:text-[2.3rem] text-[#123A70] leading-tight mb-2">
                {active.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Full poem by Shalini Chaturvedi.
              </DialogDescription>
              <div className="h-px w-14 bg-[#295A9B]/50 my-6" aria-hidden="true" />
              <div className="font-display italic text-[1.15rem] md:text-[1.25rem] leading-[1.9] text-[#34383D] whitespace-pre-line">
                {active.full}
              </div>
              <p className="font-hand text-xl text-[#295A9B] pt-8">— Shalini</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
