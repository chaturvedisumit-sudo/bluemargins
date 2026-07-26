import { books, site } from "@/content";
import { ArrowUpRight } from "lucide-react";
import seaSandWind from "@/assets/book-sea-sand-wind.webp";

const COVERS = {
  "sea-sand-wind": seaSandWind,
};

export default function Books() {
  return (
    <section id="books" className="relative bg-[#FBF8F1] border-t border-[#295A9B]/12" data-testid="section-books">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-24">
        <div className="mb-12">
          <p className="font-hand text-2xl text-[#295A9B] mb-3">in print</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#123A70]">{books.heading}</h2>
          <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-[#34383D] max-w-[52ch]">
            {books.intro}
          </p>
        </div>

        <div className="space-y-16 max-w-[920px]">
          {books.items.map((b) => (
            <article
              key={b.id}
              className="grid grid-cols-1 sm:grid-cols-12 gap-8 md:gap-12 items-center"
              data-testid={`book-item-${b.id}`}
            >
              <div className="sm:col-span-4 flex justify-center sm:justify-start">
                <img
                  src={COVERS[b.cover]}
                  alt={`Front cover of ${b.title} by ${site.author}`}
                  className="w-[210px] max-w-full h-auto shadow-[0_20px_44px_-20px_rgba(18,58,112,0.5)] ring-1 ring-[#295A9B]/15"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="sm:col-span-8">
                <p className="font-body text-[0.72rem] uppercase tracking-[0.25em] text-[#295A9B] mb-3">
                  {b.format} · {b.status}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-[#123A70] mb-4">{b.title}</h3>
                <p className="font-body italic text-[1.05rem] leading-[1.8] text-[#34383D] max-w-[52ch] mb-7">
                  {b.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  {b.links.map((lnk) => (
                    <a
                      key={lnk.label}
                      href={lnk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-body text-[0.98rem] text-[#123A70] link-underline"
                      data-testid={`book-${b.id}-link-${lnk.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Order on {lnk.label}
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
