import { ArrowRight } from "lucide-react";

const POET_IMG =
  "https://customer-assets.emergentagent.com/job_5518da31-3818-4830-8b4a-5491945b0483/artifacts/q983tzlw_20260426_205838.jpg";
const OCEAN_BG =
  "https://images.unsplash.com/photo-1594293390817-a4554dc6a713?crop=entropy&cs=srgb&fm=jpg&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
      data-testid="section-home"
    >
      {/* Ambient ocean background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${OCEAN_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040810] via-[#040810]/85 to-[#040810]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left: copy */}
        <div className="md:col-span-7 reveal">
          <p
            className="text-xs uppercase tracking-[0.35em] text-[#D4B886] mb-8 font-sans-ui"
            data-testid="hero-overline"
          >
            A word from the poet
          </p>

          <h1
            className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light text-[#F1F5F9] mb-10"
            data-testid="hero-title"
          >
            Words washed
            <br />
            <span className="italic text-[#D4B886]">ashore</span>, between
            <br />
            tide and twilight.
          </h1>

          <div className="max-w-xl space-y-5 text-slate-300 leading-relaxed font-light text-base md:text-lg">
            <p>
              Some evenings the sea writes for me. I only sit close enough to
              listen — to the salt, to the lit-up boats, to the bougainvillea
              forgetting it is December.
            </p>
            <p className="text-slate-400 italic font-serif-display text-lg">
              &ldquo;Every poem here is a postcard. Slip it into your pocket. Carry
              it somewhere quieter.&rdquo;
            </p>
            <p
              className="font-serif-display italic text-[#D4B886] text-lg pt-2"
              data-testid="hero-signature"
            >
              — Shalini Chaturvedi
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <a
              href="#poems"
              className="group inline-flex items-center gap-3 bg-[#D4B886] text-[#040810] hover:bg-[#E8CFA1] transition-colors px-8 py-4 text-xs font-medium tracking-[0.25em] uppercase"
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-300 hover:text-white border-b border-white/20 hover:border-[#D4B886] pb-1 transition-colors"
              data-testid="hero-browse-books-btn"
            >
              Browse the books
            </a>
          </div>
        </div>

        {/* Right: postcard with poet image */}
        <div className="md:col-span-5 reveal flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="postcard">
              <img
                src={POET_IMG}
                alt="Shalini Chaturvedi"
                className="w-full h-[420px] object-cover"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
                data-testid="hero-poet-image"
              />
              <div className="postcard-stamp-text">par avion</div>
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 bg-[#040810] border border-white/10 px-5 py-3 hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                From the balcony
              </p>
              <p className="font-serif-display italic text-[#D4B886] text-sm mt-1">
                somewhere by the sea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
