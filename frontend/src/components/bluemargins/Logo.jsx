// Blue Margins wordmark logo — inline SVG quill + margin lines + serif wordmark
export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 group ${className}`}
      data-testid="brand-logo"
      aria-label="Blue Margins — home"
    >
      <svg
        width="30"
        height="38"
        viewBox="0 0 30 38"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* margin lines */}
        <line x1="3" y1="2" x2="3" y2="36" stroke="#295A9B" strokeWidth="1" opacity="0.5" />
        <line x1="6" y1="2" x2="6" y2="36" stroke="#295A9B" strokeWidth="1" opacity="0.25" />
        {/* quill nib + feather */}
        <path
          d="M25.5 4.5c-6 1.5-11 6-13.5 12.5-.8 2-1.2 3.8-1.4 5.6l-1.6 4.3 3.9-2c1.7-.4 3.4-1 5.2-2C24.4 24.2 27 17.5 25.5 4.5Z"
          fill="#DCE8F3"
          stroke="#123A70"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path d="M22.5 8.5C18 11.5 14.5 16 12.4 21.6" stroke="#295A9B" strokeWidth="1" strokeLinecap="round" />
        {/* ink stroke beneath */}
        <path d="M8 33c3-1.6 8-1.6 14 0" stroke="#123A70" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-xl md:text-[1.55rem] tracking-wide text-[#123A70]">
          Blue
        </span>
        <span className="block font-display text-xl md:text-[1.55rem] tracking-wide text-[#123A70] -mt-1">
          Margins
        </span>
      </span>
    </a>
  );
}
