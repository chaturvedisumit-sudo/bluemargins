import { ArrowUpRight } from "lucide-react";

const UPCOMING = [
  {
    id: "sea-sand-wind",
    year: "Now — Pre-order",
    title: "Sea, Sand, Wind",
    note: "The debut hardcover. Verses shaped by shoreline weather.",
    status: "Pre-order now",
  },
  {
    id: "salt-silence",
    year: "Spring 2026",
    title: "The Salt and the Silence",
    note: "A chapbook of coastal nocturnes.",
    status: "Pre-order soon",
  },
  {
    id: "midnight-tide",
    year: "Autumn 2026",
    title: "Midnight Tide",
    note: "Forty poems on memory and the sea.",
    status: "In progress",
  },
];

const PUBLISHED = [
  {
    id: "letters-yesterday",
    year: "2023",
    title: "Letters to Yesterday",
    note: "A debut collection — small, slow, and very loved.",
    cta: "View",
  },
  {
    id: "paper-boats",
    year: "2021",
    title: "Paper Boats & Other Promises",
    note: "Verses written between rain and routine.",
    cta: "View",
  },
  {
    id: "borrowed-sky",
    year: "2019",
    title: "A Borrowed Sky",
    note: "Selected early poems, 2014–2019.",
    cta: "View",
  },
];

function BookRow({ b, primary, testid }) {
  return (
    <div
      className="book-row group grid grid-cols-12 items-baseline gap-4 py-7 border-t border-[#1E3A4A]/10"
      data-testid={testid}
    >
      <div className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.25em] text-[#7A8E94] font-sans-ui">
        {b.year}
      </div>
      <div className="col-span-12 md:col-span-7">
        <h3 className="font-serif-display text-2xl md:text-3xl font-light text-[#1E3A4A] group-hover:text-[#C76F4E] transition-colors">
          {b.title}
        </h3>
        <p className="mt-2 text-sm text-[#5C7682] font-light italic font-serif-display">
          {b.note}
        </p>
      </div>
      <div className="col-span-12 md:col-span-3 flex md:justify-end">
        <a
          href="#shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C76F4E] hover:text-[#A85838] border-b border-[#C76F4E]/40 pb-1"
          data-testid={`${testid}-cta`}
        >
          {primary ? b.status : b.cta}
          <ArrowUpRight size={14} className="book-arrow" />
        </a>
      </div>
    </div>
  );
}

export default function Books() {
  return (
    <section
      id="books"
      className="relative py-24 md:py-36"
      data-testid="section-books"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C76F4E] mb-5">
              The shelf
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-[#1E3A4A]">
              Books, like the sea,
              <br />
              <span className="italic">arrive in waves.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
            <p className="text-[#3F5963] font-light leading-relaxed max-w-md">
              A small but slow-growing body of work — written by candlelight,
              edited by ocean. Below: what&apos;s coming, and what already exists in
              print.
            </p>
          </div>
        </div>

        {/* Upcoming */}
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7A8E94] mb-2">
            Upcoming works
          </p>
          <div className="border-b border-[#1E3A4A]/10">
            {UPCOMING.map((b) => (
              <BookRow
                key={b.id}
                b={b}
                primary
                testid={`book-item-${b.id}`}
              />
            ))}
          </div>
        </div>

        {/* Published */}
        <div className="reveal mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7A8E94] mb-2">
            Published volumes
          </p>
          <div className="border-b border-[#1E3A4A]/10">
            {PUBLISHED.map((b) => (
              <BookRow key={b.id} b={b} testid={`book-item-${b.id}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
