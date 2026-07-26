// Blue Margins wordmark — a quill rising between two page-margin lines,
// with a small curved ink stroke at the base, and a two-line serif wordmark.
export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-4 group ${className}`}
      data-testid="brand-logo"
      aria-label="Blue Margins — home"
    >
      <svg width="52" height="72" viewBox="0 0 52 72" fill="none" aria-hidden="true" className="shrink-0">
        {/* two vertical margin lines */}
        <line x1="14" y1="6" x2="14" y2="66" stroke="#295A9B" strokeWidth="1.1" opacity="0.55" />
        <line x1="19" y1="6" x2="19" y2="66" stroke="#295A9B" strokeWidth="1.1" opacity="0.3" />
        {/* quill feather rising */}
        <path
          d="M44 8c-9 3-17 10-22 20-2 4-3 8-3.5 12l-2.5 8 6.5-3.5c3-1 6-2.5 9-4.5C42 30 45 20 44 8Z"
          fill="#DCE8F3"
          stroke="#123A70"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M39 15c-6 5-11 12-14 20" stroke="#295A9B" strokeWidth="1" strokeLinecap="round" />
        {/* shaft into base */}
        <path d="M25 47l-6 12" stroke="#123A70" strokeWidth="1.2" strokeLinecap="round" />
        {/* curved ink stroke at base */}
        <path d="M9 62c6-3 16-3 26 0" stroke="#123A70" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
      </svg>
      <span className="leading-[0.92]">
        <span className="block font-display text-[1.9rem] md:text-[2.3rem] tracking-wide text-[#123A70]">Blue</span>
        <span className="block font-display text-[1.9rem] md:text-[2.3rem] tracking-wide text-[#123A70]">Margins</span>
      </span>
    </a>
  );
}
