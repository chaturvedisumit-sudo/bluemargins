import { site } from "@/content";

// Small circular "BM" seal used near the footer / contact
export default function Seal({ size = 116 }) {
  const id = "bm-seal-path";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className="shrink-0"
      role="img"
      aria-label={`Blue Margins seal — ${site.seal}`}
    >
      <defs>
        <path
          id={id}
          d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          fill="none"
        />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="#295A9B" strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="60" r="47" fill="none" stroke="#295A9B" strokeWidth="0.75" opacity="0.35" />
      <text fill="#123A70" fontFamily="'Source Serif 4', serif" fontSize="8.2" letterSpacing="2.4">
        <textPath href={`#${id}`} startOffset="0%">
          {`${site.seal} · `}
        </textPath>
      </text>
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#123A70"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="34"
        fontStyle="italic"
      >
        BM
      </text>
      <path d="M44 74c10-3 22-3 32 0" stroke="#295A9B" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}
