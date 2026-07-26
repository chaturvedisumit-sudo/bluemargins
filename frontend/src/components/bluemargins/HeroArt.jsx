// Restrained monochrome-blue hero artwork: a page fading into a
// watercolor horizon, with an ink bottle, quill and faint handwritten lines.
export default function HeroArt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 560"
      className={className}
      fill="none"
      role="img"
      aria-label="A page of writing dissolving into a soft blue watercolor horizon"
    >
      <defs>
        <linearGradient id="wash" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDF3F8" />
          <stop offset="55%" stopColor="#DCE8F3" />
          <stop offset="100%" stopColor="#C4D8ED" />
        </linearGradient>
        <linearGradient id="horizon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#295A9B" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#295A9B" stopOpacity="0.35" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* paper page */}
      <rect x="70" y="40" width="380" height="470" rx="2" fill="#FFFDF8" stroke="#295A9B" strokeOpacity="0.18" />

      {/* watercolor horizon wash filling lower half of page */}
      <g clipPath="none">
        <rect x="70" y="300" width="380" height="210" fill="url(#wash)" opacity="0.9" />
        <ellipse cx="210" cy="330" rx="150" ry="40" fill="#B7D0E8" opacity="0.5" filter="url(#soft)" />
        <ellipse cx="360" cy="360" rx="120" ry="34" fill="#9CBFE0" opacity="0.45" filter="url(#soft)" />
        <rect x="70" y="330" width="380" height="180" fill="url(#horizon)" />
        {/* horizon line */}
        <line x1="70" y1="332" x2="450" y2="332" stroke="#295A9B" strokeOpacity="0.3" />
      </g>

      {/* faint handwritten ruled lines (upper half) */}
      {[90, 116, 142, 168, 194, 220, 246].map((y, i) => (
        <line
          key={y}
          x1="110"
          y1={y}
          x2={i % 2 === 0 ? 410 : 360}
          y2={y}
          stroke="#295A9B"
          strokeOpacity="0.14"
        />
      ))}
      {/* a couple of "written" ink strokes */}
      <path d="M110 128c30-10 60 8 92-2s60-8 96 4" stroke="#123A70" strokeOpacity="0.28" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M110 180c26 6 52-8 82 0s58 10 84 2" stroke="#123A70" strokeOpacity="0.22" strokeWidth="1.4" fill="none" strokeLinecap="round" />

      {/* left red-margin rule of the page */}
      <line x1="102" y1="40" x2="102" y2="300" stroke="#295A9B" strokeOpacity="0.35" />

      {/* ink bottle */}
      <g>
        <rect x="300" y="392" width="78" height="70" rx="6" fill="#123A70" opacity="0.9" />
        <rect x="322" y="376" width="34" height="20" rx="3" fill="#0E2B52" />
        <ellipse cx="339" cy="418" rx="22" ry="10" fill="#295A9B" />
      </g>

      {/* quill */}
      <path
        d="M356 400c40-40 78-96 96-150-8 64-34 122-74 168-6 7-13 13-20 18l-10-16c3-7 5-14 8-20Z"
        fill="#EDF3F8"
        stroke="#123A70"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M440 268c-30 30-54 68-70 110" stroke="#295A9B" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
