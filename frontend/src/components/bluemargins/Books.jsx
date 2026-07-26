import { books, site } from "@/content";
import { ArrowUpRight } from "lucide-react";

// Elegant ivory-and-blue book cover rendered in CSS/SVG (no raster/text image)
function BookCover({ title }) {
  return (
    <div
      className="relative w-[210px] max-w-full aspect-[3/4] bg-[#FBF8F1] border border-[#295A9B]/30 shadow-[0_18px_40px_-22px_rgba(18,58,112,0.45)] shrink-0"
      aria-hidden="true"
    >
      {/* spine line */}
      <div className="absolute inset-y-0 left-3 w-px bg-[#295A9B]/25" />
      {/* top label */}
      <p className="absolute top-8 inset-x-0 text-center font-body text-[0.6rem] uppercase tracking-[0.35em] text-[#295A9B]">
        Poems
      </p>
      {/* title */}
      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center">
        <p className="font-display text-[1.7rem] leading-[1.05] italic text-[#123A70]">
          {title}
        </p>
        <p className="mt-4 font-body text-[0.62rem] uppercase tracking-[0.3em] text-[#295A9B]/80">
          {site.author}
        </p>
      </div>
      {/* watercolor wave line-art at base */}
      <svg viewBox="0 0 210 40" className="absolute bottom-6 inset-x-0 w-full" fill="none" aria-hidden="true">
        <path d="M18 20c22-10 44 8 66 0s44-12 66-2 30 6 42 2" stroke="#295A9B" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <path d="M18 27c22-8 44 6 66 0s44-9 66-1 30 5 42 1" stroke="#295A9B" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

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
                <BookCover title={b.title} />
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
