const FEATURED = {
  title: "The Lighthouse Forgets",
  award: "Winner — Coastal Verse Prize, 2024",
  body: [
    "Some nights the lighthouse forgets",
    "what it is keeping watch for —",
    "and turns, instead, toward the small lit",
    "windows of the town behind it.",
    "",
    "Even the brave look back, sometimes,",
    "at the soft, breathing rooms",
    "where someone left a kettle on,",
    "and meant it kindly.",
  ],
};

const SELECTED = [
  {
    id: "december-tides",
    title: "December Tides",
    excerpt:
      "I learned that grief, too, has a coastline — that it pulls back only to return, fuller.",
  },
  {
    id: "paper-prayers",
    title: "Paper Prayers",
    excerpt:
      "I fold the day into a smaller square each evening, until it fits inside a pocket.",
  },
  {
    id: "afternoon-translation",
    title: "An Afternoon Translation",
    excerpt:
      "The bougainvillea spelt your name in a language only summers understand.",
  },
  {
    id: "salt-mother",
    title: "Salt, Mother",
    excerpt:
      "She kept the windows open even in monsoon — said the sea was a guest worth ruining the floor for.",
  },
];

export default function Poems() {
  return (
    <section
      id="poems"
      className="relative py-24 md:py-36 border-t border-[#1E3A4A]/10 bg-[#EDDEBE]"
      data-testid="section-poems"
    >
      {/* paper texture (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1705837863332-7162639852d8?crop=entropy&cs=srgb&fm=jpg&q=85)",
          backgroundSize: "cover",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 reveal">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C76F4E] mb-5">
              From the notebook
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-[#1E3A4A]">
              Award-winning &amp;
              <br />
              <span className="italic">quietly held.</span>
            </h2>
          </div>
        </div>

        {/* Featured / Award-winning */}
        <div
          className="grid grid-cols-12 gap-8 md:gap-12 reveal"
          data-testid="poem-featured"
        >
          <div className="col-span-12 md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C76F4E] mb-3">
              {FEATURED.award}
            </p>
            <h3 className="font-serif-display text-3xl md:text-4xl italic font-light leading-tight text-[#1E3A4A]">
              {FEATURED.title}
            </h3>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#7A8E94]">
              From the forthcoming
              <br />
              <span className="text-[#3F5963] normal-case tracking-normal font-serif-display italic text-base">
                The Salt and the Silence
              </span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="poem-block font-serif-display text-xl md:text-2xl italic font-light leading-loose text-[#1E3A4A]">
              {FEATURED.body.map((line, i) => (
                <div key={i} className={line === "" ? "h-5" : ""}>
                  {line || "\u00A0"}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected poems grid */}
        <div className="mt-28 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7A8E94] mb-10">
            Selected poems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {SELECTED.map((p) => (
              <article
                key={p.id}
                className="group border-t border-[#1E3A4A]/15 pt-8"
                data-testid={`poem-card-${p.id}`}
              >
                <h4 className="font-serif-display text-2xl md:text-3xl font-light text-[#1E3A4A] group-hover:text-[#C76F4E] transition-colors">
                  {p.title}
                </h4>
                <p className="mt-4 font-serif-display italic text-lg leading-loose text-[#3F5963] max-w-md">
                  &ldquo;{p.excerpt}&rdquo;
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-block text-[10px] uppercase tracking-[0.3em] text-[#7A8E94] hover:text-[#C76F4E] transition-colors"
                  data-testid={`poem-card-${p.id}-read`}
                >
                  Read in full →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
