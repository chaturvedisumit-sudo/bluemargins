import { journal } from "@/content";
import { ArrowRight } from "lucide-react";

export default function Journal() {
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
                <p className="font-body text-[1.02rem] leading-[1.8] text-[#34383D] mt-3 max-w-[60ch]">
                  {entry.description}
                </p>
                <a
                  href={entry.href}
                  className="mt-4 inline-flex items-center gap-2 font-body text-[0.9rem] text-[#123A70] link-underline w-fit"
                  data-testid={`journal-entry-${entry.id}-read`}
                >
                  Continue reading
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
