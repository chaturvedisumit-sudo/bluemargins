// Delicate blue botanical sprig — hand-drawn feel, for About + accents
export default function Botanical({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 200"
      className={className}
      fill="none"
      aria-hidden="true"
      stroke="#295A9B"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* main stem */}
      <path d="M40 196C40 150 40 90 44 40" opacity="0.8" />
      {/* leaves */}
      {[
        [44, 52, 1],
        [42, 74, -1],
        [41, 96, 1],
        [40, 118, -1],
        [40, 140, 1],
        [40, 160, -1],
      ].map(([x, y, dir], i) => (
        <path
          key={i}
          d={`M${x} ${y} C ${x + dir * 20} ${y - 12}, ${x + dir * 26} ${y + 4}, ${x + dir * 6} ${y + 14}`}
          fill="#DCE8F3"
          fillOpacity="0.55"
        />
      ))}
      {/* top bud */}
      <path d="M44 40c-3-8-2-16 2-22 4 6 5 14 2 22" fill="#DCE8F3" fillOpacity="0.6" />
    </svg>
  );
}
