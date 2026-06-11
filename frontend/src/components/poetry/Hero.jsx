import { ArrowRight } from "lucide-react";

const POET_IMG =
  "https://customer-assets.emergentagent.com/job_5518da31-3818-4830-8b4a-5491945b0483/artifacts/q983tzlw_20260426_205838.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
      data-testid="section-home"
    >
      {/* Soft watercolor wash — sea meets sand */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#9CC5CF] opacity-40 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-[#E8B89A] opacity-50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left: copy */}
        <div className="md:col-span-7 reveal order-2 md:order-1">
          <p
            className="text-xs uppercase tracking-[0.35em] text-[#C76F4E] mb-8 font-sans-ui"
            data-testid="hero-overline"
          >
            A word from the poet
          </p>

          <h1
            className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light text-[#1E3A4A] mb-10"
            data-testid="hero-title"
          >
            Words washed
            <br />
            <span className="italic text-[#C76F4E]">ashore</span>, between
            <br />
            tide and twilight.
          </h1>

          <div className="max-w-xl space-y-5 text-[#3F5963] leading-relaxed font-light text-base md:text-lg">
            <p>
              Some evenings the sea writes for me. I only sit close enough to
              listen — to the salt, to the lit-up boats, to the bougainvillea
              forgetting it is December.
            </p>
            <p className="text-[#5C7682] italic font-serif-display text-lg">
              &ldquo;Every poem here is a postcard. Slip it into your pocket. Carry
              it somewhere quieter.&rdquo;
            </p>
            <p
              className="font-serif-display italic text-[#C76F4E] text-lg pt-2"
              data-testid="hero-signature"
            >
              — Shalini Chaturvedi
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <a
              href="#poems"
              className="group inline-flex items-center gap-3 bg-[#1E3A4A] text-[#F5EBD3] hover:bg-[#2D6E7E] transition-colors px-8 py-4 text-xs font-medium tracking-[0.25em] uppercase"
              data-testid="hero-read-collection-btn"
            >
              Read the collection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#books"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#1E3A4A] hover:text-[#C76F4E] border-b border-[#1E3A4A]/30 hover:border-[#C76F4E] pb-1 transition-colors"
              data-testid="hero-browse-books-btn"
            >
              Browse the books
            </a>
          </div>
        </div>

        {/* Right: postcard with poet image */}
        <div className="md:col-span-5 reveal flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-sm">
            <div className="postcard">
              <img
                src={POET_IMG}
                alt="Shalini Chaturvedi"
                className="w-full h-[420px] object-cover"
                style={{ filter: "saturate(0.9) contrast(1.02)" }}
                data-testid="hero-poet-image"
              />
              <div className="postcard-stamp-text">par avion</div>
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 bg-[#FFFBF1] border border-[#1E3A4A]/10 px-5 py-3 hidden sm:block shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5C7682]">
                From the balcony
              </p>
              <p className="font-serif-display italic text-[#C76F4E] text-sm mt-1">
                somewhere by the sea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
