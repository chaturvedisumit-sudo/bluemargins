import { useState } from "react";
import { journal } from "@/content";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Journal() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="journal"
      className="relative border-t border-[#295A9B]/12"
      data-testid="section-journal"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-28">
        <div className="mb-14">
          <p className="font-hand text-2xl text-[#295A9B] mb-3">notes &amp; essays</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#123A70]">From the Margins</h2>
        </div>

        <div className="max-w-[900px]">
          {journal.map((entry) => (
            <article
              key={entry.id}
              className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-t border-[#295A9B]/15 first:border-t-0 md:first:border-t"
              data-testid={`journal-entry-${entry.id}`}
            >
              <div className="col-span-12 md:col-span-3">
                <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-[#295A9B]">
                  {entry.kind}
                </p>
                <p className="font-body text-sm text-[#34383D]/60 mt-1">{entry.date}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl md:text-[1.7rem] text-[#123A70] leading-tight">
                  {entry.title}
                </h3>
                <p className="font-body text-[1.02rem] leading-[1.8] text-[#34383D] mt-3 max-w-[60ch] italic">
                  {entry.description}
                </p>
                {entry.full ? (
                  <button
                    type="button"
                    onClick={() => setActive(entry)}
                    className="mt-4 inline-flex items-center gap-2 font-body text-[0.9rem] text-[#123A70] link-underline w-fit"
                    data-testid={`journal-entry-${entry.id}-read`}
                    aria-label={`Continue reading: ${entry.title}`}
                  >
                    Continue reading
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <p
                    className="mt-4 font-body text-[0.85rem] uppercase tracking-[0.2em] text-[#295A9B]/70"
                    data-testid={`journal-entry-${entry.id}-coming-soon`}
                  >
                    Coming soon
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-[760px] w-[92vw] max-h-[88vh] overflow-y-auto bg-[#FFFDF8] border border-[#295A9B]/25 rounded-none p-0 shadow-[0_30px_80px_-20px_rgba(18,58,112,0.45)]"
          data-testid="journal-modal"
        >
          {active && (
            <div className="p-8 md:p-12 relative">
              <div className="absolute top-0 bottom-0 left-6 md:left-10 w-px bg-[#295A9B]/25" aria-hidden="true" />
              <p className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-[#295A9B] mb-3">
                {active.kind}
                {active.date && !active.date.startsWith("[") ? ` · ${active.date}` : ""}
              </p>
              <DialogTitle className="font-display text-3xl md:text-[2.3rem] text-[#123A70] leading-tight mb-2">
                {active.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Full essay or story by Shalini Chaturvedi.
              </DialogDescription>
              <div className="h-px w-14 bg-[#295A9B]/50 my-6" aria-hidden="true" />
              <div className="font-body text-[1.05rem] md:text-[1.08rem] leading-[1.9] text-[#34383D] space-y-5 whitespace-pre-line">
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
