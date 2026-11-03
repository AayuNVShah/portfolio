export function StepwellPlan({ className = "" }: { className?: string }) {
  return (
    <svg
      data-stepwell-drawing
      viewBox="0 0 320 420"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <rect x="24" y="16" width="272" height="388" strokeWidth="0.8" opacity="0.5" />
      <rect x="56" y="48" width="208" height="324" strokeWidth="0.8" />
      <rect x="88" y="88" width="144" height="244" strokeWidth="0.8" />
      <rect x="116" y="128" width="88" height="164" strokeWidth="0.9" />
      <rect x="140" y="168" width="40" height="84" strokeWidth="1" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1="56"
          x2="264"
          y1={80 + i * 32}
          y2={80 + i * 32}
          strokeWidth="0.4"
          opacity="0.45"
        />
      ))}
      <circle cx="160" cy="210" r="10" strokeWidth="0.9" />
      <path d="M24 210 H296" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

