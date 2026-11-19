import { LotusMedallion } from "@/components/architecture/StepwellCarvings";

export function ArchitecturalSilhouette() {
  return (
    <div
      data-architectural-silhouette
      className="pointer-events-none absolute inset-0 overflow-hidden text-gold"
      aria-hidden
    >
      {/* Celestial Rotating Padma Chakra (Sacred Lotus Wheel behind the Stepwell Mandapa) */}
      <div className="absolute top-[10%] right-[6%] size-[24rem] text-gold/25 sm:size-[34rem] lg:right-[9%] lg:size-[42rem]">
        <LotusMedallion spin className="h-full w-full" />
      </div>

      <svg
        viewBox="0 0 1440 900"
        className="absolute inset-x-0 bottom-0 h-[82%] w-full text-gold"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="arch-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#171715" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#171715" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#171715" />
          </linearGradient>
          <linearGradient id="gold-wash" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e0c98a" stopOpacity="0" />
            <stop offset="40%" stopColor="#c3a66b" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#c3a66b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="420" rx="310" ry="190" fill="url(#gold-wash)" />
        <path
          fill="url(#arch-fill)"
          stroke="currentColor"
          strokeWidth="1.2"
          d="M80 900 V520 C80 420 180 360 250 360 H390 C430 280 520 220 720 200 C920 220 1010 280 1050 360 H1190 C1260 360 1360 420 1360 520 V900 Z"
        />
        {/* Kalasha Finial */}
        <path
          d="M720 150 L728 170 L720 180 L712 170 Z M706 188 H734 M720 180 V200"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="currentColor"
          fillOpacity="0.25"
        />
        <path
          d="M250 360 V900 M390 360 V900 M1050 360 V900 M1190 360 V900"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.85"
        />
        {/* Multifoil Cusped Sanctuary Arch */}
        <path
          d="M430 900 V440
             Q430 390 470 380
             Q495 335 545 330
             Q585 288 640 288
             Q682 252 720 235
             Q758 252 800 288
             Q855 288 895 330
             Q945 335 970 380
             Q1010 390 1010 440
             V900"
          fill="#171715"
          stroke="currentColor"
          strokeWidth="1.15"
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
        {/* Stepwell Baori V-Staircase Flights */}
        {[660, 725, 790, 850].map((y, idx) => (
          <path
            key={y}
            d={`M${390 + idx * 32} ${y} L720 ${y + 48} L${1050 - idx * 32} ${y}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.35 + idx * 0.08}
            strokeWidth="0.85"
          />
        ))}
        <circle cx="720" cy="390" r="46" fill="none" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="720" cy="390" r="34" fill="none" stroke="currentColor" strokeDasharray="3 4" strokeOpacity="0.6" />
        <circle cx="720" cy="390" r="16" fill="none" stroke="currentColor" strokeOpacity="0.7" />
      </svg>
    </div>
  );
}
