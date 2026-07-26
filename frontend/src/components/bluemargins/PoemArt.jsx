// Small delicate blue illustrations for poem cards
export function PoemArt({ kind, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": true,
    stroke: "#295A9B",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (kind === "moon") {
    return (
      <svg {...common}>
        <path d="M40 12a20 20 0 1 0 12 36 16 16 0 0 1-12-36Z" fill="#DCE8F3" />
        <circle cx="18" cy="20" r="1.2" fill="#295A9B" stroke="none" />
        <circle cx="26" cy="14" r="1" fill="#295A9B" stroke="none" />
      </svg>
    );
  }
  if (kind === "page") {
    return (
      <svg {...common}>
        <path d="M20 10h18l8 8v36H20Z" fill="#FFFDF8" />
        <path d="M38 10v8h8" />
        <path d="M26 28h14M26 34h14M26 40h9" opacity="0.6" />
      </svg>
    );
  }
  // default: branch
  return (
    <svg {...common}>
      <path d="M32 54V16" />
      <path d="M32 30c-6-2-10-6-12-12M32 30c6-2 10-6 12-12" />
      <path d="M32 42c-5-2-8-5-10-10M32 42c5-2 8-5 10-10" />
      <circle cx="18" cy="17" r="1.6" fill="#DCE8F3" />
      <circle cx="46" cy="17" r="1.6" fill="#DCE8F3" />
    </svg>
  );
}
