import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "books", label: "Books" },
  { id: "poems", label: "Poems" },
  { id: "shop", label: "Shop" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#040810]/70 border-b border-white/5"
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif-display italic text-xl text-[#F1F5F9] tracking-wide"
          data-testid="brand-logo"
        >
          postcards<span className="text-[#D4B886]">&amp;</span>poetry
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link text-xs uppercase tracking-[0.25em] font-sans-ui ${
                active === l.id ? "active text-white" : "text-slate-400"
              }`}
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen((s) => !s)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#040810]/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-[0.25em] ${
                  active === l.id ? "text-[#D4B886]" : "text-slate-300"
                }`}
                data-testid={`nav-link-mobile-${l.id}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
