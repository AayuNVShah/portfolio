export function StepwellPlan({ className = "" }: { className?: string }) {
  return (
    <svg
      data-stepwell-drawing
      viewBox="0 0 360 440"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <rect x="16" y="16" width="328" height="408" strokeWidth="1.1" strokeOpacity="0.65" />
      <rect x="24" y="24" width="312" height="392" strokeWidth="0.6" strokeOpacity="0.4" />

      {[
        [42, 42],
        [318, 42],
        [42, 398],
        [318, 398],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx={cx} cy={cy} r="4" strokeWidth="0.6" strokeOpacity="0.5" />
        </g>
      ))}

      <rect x="52" y="54" width="256" height="332" strokeWidth="0.95" strokeOpacity="0.7" />
      <rect x="84" y="92" width="192" height="256" strokeWidth="0.95" strokeOpacity="0.75" />
      <rect x="114" y="130" width="132" height="180" strokeWidth="1" strokeOpacity="0.85" />
      <rect x="142" y="168" width="76" height="104" strokeWidth="1.1" strokeOpacity="0.95" />

      <line x1="16" y1="16" x2="142" y2="168" strokeWidth="0.6" strokeOpacity="0.35" />
      <line x1="344" y1="16" x2="218" y2="168" strokeWidth="0.6" strokeOpacity="0.35" />
      <line x1="16" y1="424" x2="142" y2="272" strokeWidth="0.6" strokeOpacity="0.35" />
      <line x1="344" y1="424" x2="218" y2="272" strokeWidth="0.6" strokeOpacity="0.35" />

      {[66, 102, 138].map((y, idx) => (
        <g key={`top-stair-${idx}`} strokeOpacity="0.65">
          <path
            d={`M${88 + idx * 18} ${y} L180 ${y + 26} L${272 - idx * 18} ${y}`}
            strokeWidth="0.85"
          />
          <line
            x1={76 + idx * 16}
            y1={y + 12}
            x2={284 - idx * 16}
            y2={y + 12}
            strokeWidth="0.45"
          />
        </g>
      ))}

      {[374, 338, 302].map((y, idx) => (
        <g key={`bot-stair-${idx}`} strokeOpacity="0.65">
          <path
            d={`M${88 + idx * 18} ${y} L180 ${y - 26} L${272 - idx * 18} ${y}`}
            strokeWidth="0.85"
          />
          <line
            x1={76 + idx * 16}
            y1={y - 12}
            x2={284 - idx * 16}
            y2={y - 12}
            strokeWidth="0.45"
          />
        </g>
      ))}

      <circle cx="180" cy="220" r="28" strokeWidth="1" strokeOpacity="0.9" />
      <circle cx="180" cy="220" r="18" strokeWidth="0.7" strokeDasharray="2 3" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <path
            key={`kund-petal-${i}`}
            transform={`rotate(${angle} 180 220)`}
            d="M180 194 C185 202 186 210 180 216 C174 210 175 202 180 194 Z"
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx="180" cy="220" r="5" strokeWidth="1" />
    </svg>
  );
}
