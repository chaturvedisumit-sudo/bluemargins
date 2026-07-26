import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/bluemargins/Logo";
import { nav } from "@/content";

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-[#FBF8F1]/85 backdrop-blur-sm border-b border-[#295A9B]/12"
      data-testid="main-navigation"
    >
      <div className="max-w-[1280px] mx-auto pl-[76px] pr-[76px] max-[900px]:px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`link-underline font-body text-[0.95rem] text-[#123A70] ${
                active === l.id ? "is-active" : "text-[#123A70]/70"
              }`}
              data-testid={`nav-link-${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[#123A70]"
          onClick={() => setOpen((s) => !s)}
          data-testid="mobile-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#295A9B]/12 bg-[#FBF8F1]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {nav.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`font-body text-base ${
                  active === l.id ? "text-[#123A70]" : "text-[#123A70]/70"
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
