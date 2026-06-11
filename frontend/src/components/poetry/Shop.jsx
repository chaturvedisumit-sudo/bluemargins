import { ExternalLink } from "lucide-react";

const SHOP_BOOKS = [
  {
    id: "letters-yesterday",
    title: "Letters to Yesterday",
    year: "2023",
    spine: "linear-gradient(135deg, #1f2d44 0%, #2d4a6b 100%)",
    accent: "#D4B886",
    amazon: "https://www.amazon.com/",
    price: "₹ 349",
  },
  {
    id: "paper-boats",
    title: "Paper Boats & Other Promises",
    year: "2021",
    spine: "linear-gradient(135deg, #2a1f44 0%, #4a3a6b 100%)",
    accent: "#E8CFA1",
    amazon: "https://www.amazon.com/",
    price: "₹ 299",
  },
  {
    id: "borrowed-sky",
    title: "A Borrowed Sky",
    year: "2019",
    spine: "linear-gradient(135deg, #44321f 0%, #6b5232 100%)",
    accent: "#F1F5F9",
    amazon: "https://www.amazon.com/",
    price: "₹ 279",
  },
];

function BookCover({ b }) {
  return (
    <a
      href={b.amazon}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      data-testid={`shop-book-cover-${b.id}`}
    >
      <div
        className="aspect-[3/4] w-full relative overflow-hidden border border-white/5 transition-transform duration-500 group-hover:-translate-y-2"
        style={{ background: b.spine }}
      >
        {/* Spine line */}
        <div className="absolute top-0 bottom-0 left-3 w-px bg-white/10" />
        {/* Title plate */}
        <div className="absolute inset-x-6 top-10">
          <p
            className="text-[10px] uppercase tracking-[0.35em] mb-3"
            style={{ color: b.accent }}
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
            style={{ color: b.accent, opacity: 0.7 }}
          >
            Shalini Chaturvedi
          </p>
          <p
            className="font-serif-display italic text-sm"
            style={{ color: b.accent, opacity: 0.7 }}
          >
            {b.year}
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="font-serif-display italic text-lg text-[#F1F5F9]">
            {b.title}
          </p>
          <p className="text-xs text-slate-500 mt-1 tracking-wider uppercase">
            {b.price}
          </p>
        </div>
        <span
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#D4B886] border-b border-[#D4B886]/40 pb-1 group-hover:text-[#E8CFA1]"
          data-testid={`shop-amazon-redirect-btn-${b.id}`}
        >
          Buy on Amazon
          <ExternalLink size={12} />
        </span>
      </div>
    </a>
  );
}

export default function Shop() {
  return (
    <section
      id="shop"
      className="relative py-24 md:py-36 border-t border-white/5"
      data-testid="section-shop"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 reveal">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4B886] mb-5">
              The shop
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight">
              Take a book home,
              <br />
              <span className="italic">leave a window open.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
            <p className="text-slate-400 font-light leading-relaxed">
              Available as paperback and Kindle. Each purchase keeps a small
              poet writing slowly, by hand, by sea.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 reveal">
          {SHOP_BOOKS.map((b) => (
            <BookCover key={b.id} b={b} />
          ))}
        </div>

        <div className="mt-20 reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5 pt-10">
          <p className="font-serif-display italic text-xl text-slate-300 max-w-lg">
            Looking for signed copies, postcards, or bundle deals?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-[#F1F5F9] hover:bg-white/5 hover:border-[#D4B886] transition-colors px-8 py-4 text-xs font-medium tracking-[0.25em] uppercase"
            data-testid="shop-contact-cta"
          >
            Write to me
          </a>
        </div>
      </div>
    </section>
  );
}
