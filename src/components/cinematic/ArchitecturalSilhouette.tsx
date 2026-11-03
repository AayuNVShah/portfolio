export function ArchitecturalSilhouette() {
  return (
    <svg
      data-architectural-silhouette
      viewBox="0 0 1440 900"
      className="absolute inset-x-0 bottom-0 h-[78%] w-full text-gold"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="arch-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#171715" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#171715" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#171715" />
        </linearGradient>
        <linearGradient id="gold-wash" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e0c98a" stopOpacity="0" />
          <stop offset="40%" stopColor="#c3a66b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c3a66b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="720" cy="420" rx="280" ry="180" fill="url(#gold-wash)" />
      <path
        fill="url(#arch-fill)"
        stroke="currentColor"
        strokeWidth="1.2"
        d="M80 900 V520 C80 420 180 360 250 360 H390 C430 280 520 220 720 200 C920 220 1010 280 1050 360 H1190 C1260 360 1360 420 1360 520 V900 Z"
      />
      <path
        d="M250 360 V900 M390 360 V900 M1050 360 V900 M1190 360 V900"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
      <path
        d="M430 900 V430 C430 360 530 300 720 280 C910 300 1010 360 1010 430 V900"
        fill="#171715"
        stroke="currentColor"
        strokeWidth="1"
      />
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 470 + i * 45;
        return (
          <path
            key={x}
            d={`M${x} 900 V${480 - (i % 2) * 20} Q${x + 18} ${430 - (i % 2) * 20} ${x + 36} ${480 - (i % 2) * 20} V900`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
        );
      })}
      <circle cx="720" cy="390" r="46" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="720" cy="390" r="18" fill="none" stroke="currentColor" strokeOpacity="0.6" />
    </svg>
  );
}

