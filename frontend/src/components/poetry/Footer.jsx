import { Instagram, BookOpen, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative pt-24 pb-16 border-t border-[#1E3A4A]/10 bg-[#EDDEBE]"
      data-testid="main-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7A8E94] mb-6">
            postcards &amp; poetry
          </p>
          <h3 className="font-serif-display italic text-5xl md:text-7xl font-light text-[#1E3A4A] leading-none">
            Shalini Chaturvedi
          </h3>
          <p className="mt-6 font-serif-display italic text-[#5C7682] text-lg">
            &ldquo;until the next tide —&rdquo;
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 text-[#5C7682]">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C76F4E] transition-colors"
              data-testid="footer-instagram"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.2} />
            </a>
            <a
              href="https://www.goodreads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C76F4E] transition-colors"
              data-testid="footer-goodreads"
              aria-label="Goodreads"
            >
              <BookOpen size={18} strokeWidth={1.2} />
            </a>
            <a
              href="#contact"
              className="hover:text-[#C76F4E] transition-colors"
              data-testid="footer-email"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={1.2} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 border-t border-[#1E3A4A]/10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#7A8E94]">
            © {new Date().getFullYear()} postcardsandpoetry
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#7A8E94]">
            written slowly · sent gladly
          </p>
        </div>
      </div>
    </footer>
  );
}
