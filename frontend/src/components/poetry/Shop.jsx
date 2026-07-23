import { ExternalLink } from "lucide-react";

const SHOP_BOOKS = [
  {
    id: "sea-sand-wind",
    title: "Sea, Sand, Wind",
    year: "Hardcover · 2026",
    tag: "New — pre-order",
    spine: "linear-gradient(160deg, #1E3A4A 0%, #2D6E7E 55%, #E8B89A 100%)",
    accent: "#F5EBD3",
    price: "Available now",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.in/dp/B0H9LYMYY5Z",
        testid: "amazon",
      },
      {
        label: "Notion Press",
        href: "https://direct.notionpress.com/in/read/sea-sand-wind-hardcover",
        testid: "notionpress",
      },
    ],
    featured: true,
  },
  {
    id: "letters-yesterday",
    title: "Letters to Yesterday",
    year: "2023",
    spine: "linear-gradient(135deg, #2D6E7E 0%, #5DA6B5 100%)",
    accent: "#FFFBF1",
    price: "₹ 349",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/",
        testid: "amazon",
      },
    ],
  },
  {
    id: "paper-boats",
    title: "Paper Boats & Other Promises",
    year: "2021",
    spine: "linear-gradient(135deg, #C76F4E 0%, #E8B89A 100%)",
    accent: "#FFFBF1",
    price: "₹ 299",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/",
        testid: "amazon",
      },
    ],
  },
  {
    id: "borrowed-sky",
    title: "A Borrowed Sky",
    year: "2019",
    spine: "linear-gradient(135deg, #1E3A4A 0%, #4A6B7A 100%)",
    accent: "#F5EBD3",
    price: "₹ 279",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/",
        testid: "amazon",
      },
    ],
  },
];

function BookCover({ b }) {
  return (
    <div className="group block" data-testid={`shop-book-cover-${b.id}`}>
      <div
        className="aspect-[3/4] w-full relative overflow-hidden border border-[#1E3A4A]/10 transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_25px_40px_-25px_rgba(30,58,74,0.35)]"
        style={{ background: b.spine }}
      >
        <div className="absolute top-0 bottom-0 left-3 w-px bg-white/15" />
        {b.tag && (
          <div
            className="absolute top-5 right-5 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 border"
            style={{ color: b.accent, borderColor: `${b.accent}55` }}
          >
            {b.tag}
          </div>
        )}
        <div className="absolute inset-x-6 top-10">
          <p
            className="text-[10px] uppercase tracking-[0.35em] mb-3"
            style={{ color: b.accent, opacity: 0.85 }}
          >
            Poems
          </p>
          <p
            className="font-serif-display text-2xl md:text-3xl italic font-light leading-tight"
            style={{ color: b.accent }}
          >
            {b.title}
          </p>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <p
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ color: b.accent, opacity: 0.75 }}
          >
            Shalini Chaturvedi
          </p>
          <p
            className="font-serif-display italic text-sm"
            style={{ color: b.accent, opacity: 0.75 }}
          >
            {b.year}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif-display italic text-lg text-[#1E3A4A]">
              {b.title}
            </p>
            <p className="text-xs text-[#7A8E94] mt-1 tracking-wider uppercase">
              {b.price}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {b.links.map((lnk) => (
            <a
              key={lnk.testid}
              href={lnk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C76F4E] hover:text-[#A85838] border-b border-[#C76F4E]/40 hover:border-[#A85838] pb-1 transition-colors"
              data-testid={`shop-${lnk.testid}-redirect-btn-${b.id}`}
            >
              Buy on {lnk.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <section
      id="shop"
      className="relative py-24 md:py-36 border-t border-[#1E3A4A]/10"
      data-testid="section-shop"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 reveal">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C76F4E] mb-5">
              The shop
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-[#1E3A4A]">
              Take a book home,
              <br />
              <span className="italic">leave a window open.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
            <p className="text-[#3F5963] font-light leading-relaxed">
              Available as paperback, hardcover and Kindle. Each purchase
              keeps a small poet writing slowly, by hand, by sea.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 reveal">
          {SHOP_BOOKS.map((b) => (
            <BookCover key={b.id} b={b} />
          ))}
        </div>

        <div className="mt-20 reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#1E3A4A]/10 pt-10">
          <p className="font-serif-display italic text-xl text-[#3F5963] max-w-lg">
            Looking for signed copies, postcards, or bundle deals?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-transparent border border-[#1E3A4A]/30 text-[#1E3A4A] hover:bg-[#1E3A4A] hover:text-[#F5EBD3] transition-colors px-8 py-4 text-xs font-medium tracking-[0.25em] uppercase"
            data-testid="shop-contact-cta"
          >
            Write to me
          </a>
        </div>
      </div>
    </section>
  );
}
