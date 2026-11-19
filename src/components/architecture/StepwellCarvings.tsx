import React from "react";

/**
 * Ashtadala / Shodashadala Padma — Carved Indian Lotus Rosette Medallion
 * Inspired by ceiling & spandrel medallions of Rani ki Vav and Adalaj Stepwell.
 */
export function LotusMedallion({
  className = "",
  spin = false,
}: {
  className?: string;
  spin?: boolean;
}) {
  const outerPetals = 16;
  const innerPetals = 8;

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      className={className}
      data-lotus-spin={spin ? "true" : undefined}
      aria-hidden
    >
      <path d="M28 28 H212 V212 H28 Z" strokeWidth="0.65" strokeOpacity="0.3" />
      <path
        d="M120 8 L232 120 L120 232 L8 120 Z"
        strokeWidth="0.65"
        strokeOpacity="0.26"
      />

      <circle cx="120" cy="120" r="106" strokeWidth="1" strokeOpacity="0.65" />
      <circle
        cx="120"
        cy="120"
        r="100"
        strokeWidth="0.85"
        strokeDasharray="3 5"
        strokeOpacity="0.55"
      />
      <circle cx="120" cy="120" r="94" strokeWidth="0.75" strokeOpacity="0.45" />

      {Array.from({ length: outerPetals }).map((_, i) => {
        const angle = (i * 360) / outerPetals;
        return (
          <g key={`outer-${i}`} transform={`rotate(${angle} 120 120)`}>
            <path
              d="M120 28 C129 42 134 56 128 72 C124 66 116 66 112 72 C106 56 111 42 120 28 Z"
              strokeWidth="0.9"
              strokeOpacity="0.78"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <line
              x1="120"
              y1="32"
              x2="120"
              y2="66"
              strokeWidth="0.5"
              strokeOpacity="0.45"
            />
          </g>
        );
      })}

      <circle cx="120" cy="120" r="68" strokeWidth="0.95" strokeOpacity="0.68" />
      <circle
        cx="120"
        cy="120"
        r="63"
        strokeWidth="0.75"
        strokeDasharray="2 4"
        strokeOpacity="0.5"
      />

      {Array.from({ length: innerPetals }).map((_, i) => {
        const angle = (i * 360) / innerPetals;
        return (
          <g key={`inner-${i}`} transform={`rotate(${angle} 120 120)`}>
            <path
              d="M120 58 C132 72 135 88 120 102 C105 88 108 72 120 58 Z"
              strokeWidth="1.05"
              strokeOpacity="0.88"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <circle
              cx="120"
              cy="75"
              r="2"
              fill="currentColor"
              fillOpacity="0.65"
            />
          </g>
        );
      })}

      <circle cx="120" cy="120" r="22" strokeWidth="1" strokeOpacity="0.85" />
      <circle
        cx="120"
        cy="120"
        r="14"
        strokeWidth="0.75"
        strokeOpacity="0.65"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="120" cy="120" r="4" fill="currentColor" fillOpacity="0.9" />
    </svg>
  );
}

/**
 * Maru-Gurjara / Stepwell Multifoil Cusped Archway (Torana)
 */
export function CuspedArchway({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <path d="M16 900 V24 H1424 V900" strokeWidth="1" strokeOpacity="0.32" />
      <path d="M36 900 V40 H1404 V900" strokeWidth="0.7" strokeOpacity="0.22" />

      {/* Multifoil Scalloped Cusped Arch (9-cusp Rajput / Stepwell Torana) */}
      <path
        d="M68 900 V290
           Q68 230 130 220
           Q155 160 230 155
           Q275 105 360 105
           Q430 68 530 72
           Q630 34 720 18
           Q810 34 910 72
           Q1010 68 1080 105
           Q1165 105 1210 155
           Q1285 160 1310 220
           Q1372 230 1372 290
           V900"
        strokeWidth="1.4"
        strokeOpacity="0.55"
      />

      <path
        d="M54 900 V284
           Q54 216 122 206
           Q148 144 224 140
           Q270 90 356 90
           Q426 52 528 56
           Q628 20 720 6
           Q812 20 912 56
           Q1014 52 1084 90
           Q1170 90 1216 140
           Q1292 144 1318 206
           Q1386 216 1386 284
           V900"
        strokeWidth="0.75"
        strokeOpacity="0.32"
        strokeDasharray="6 4"
      />

      {/* Hanging Lotus Buds at Cusp Tips (Padma-Lata) */}
      {[
        [130, 220],
        [230, 155],
        [360, 105],
        [530, 72],
        [720, 18],
        [910, 72],
        [1080, 105],
        [1210, 155],
        [1310, 220],
      ].map(([cx, cy], idx) => (
        <g key={idx}>
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy + 16}
            strokeWidth="0.9"
            strokeOpacity="0.55"
          />
          <path
            d={`M${cx} ${cy + 16} l-5 7 l5 7 l5 -7 Z`}
            fill="currentColor"
            fillOpacity="0.22"
            strokeWidth="0.8"
            strokeOpacity="0.65"
          />
        </g>
      ))}

      {/* Left & Right Spandrel Carved Lotus Rosettes */}
      {[135, 1305].map((cx) => (
        <g key={cx} transform={`translate(${cx}, 95)`} strokeOpacity="0.45">
          <circle cx="0" cy="0" r="34" strokeWidth="0.9" />
          <circle cx="0" cy="0" r="24" strokeWidth="0.6" strokeDasharray="2 3" />
          <circle cx="0" cy="0" r="8" strokeWidth="0.8" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={Math.cos(a) * 8}
                y1={Math.sin(a) * 8}
                x2={Math.cos(a) * 32}
                y2={Math.sin(a) * 32}
                strokeWidth="0.6"
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

/**
 * Continuous Stepwell Frieze (Padma-Patta & Stepwell Chevron Carving)
 */
export function StepwellFrieze({
  position = "bottom",
  className = "",
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  const patternId = `stepwell-frieze-${position}`;
  return (
    <svg
      className={`pointer-events-none h-9 w-full text-gold ${
        position === "top" ? "rotate-180" : ""
      } ${className}`}
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          width="96"
          height="36"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="2"
            x2="96"
            y2="2"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeOpacity="0.45"
          />
          <line
            x1="0"
            y1="13"
            x2="96"
            y2="13"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeOpacity="0.3"
          />
          <line
            x1="0"
            y1="34"
            x2="96"
            y2="34"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeOpacity="0.55"
          />
          {[12, 36, 60, 84].map((cx) => (
            <path
              key={cx}
              d={`M${cx} 4 L${cx + 4.5} 7.5 L${cx} 11 L${cx - 4.5} 7.5 Z`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeOpacity="0.45"
            />
          ))}
          <path
            d="M0 34 C8 20 16 15 24 15 C32 15 40 20 48 34 C56 20 64 15 72 15 C80 15 88 20 96 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeOpacity="0.5"
          />
          <path
            d="M12 34 C17 24 21 20 24 20 C27 20 31 24 36 34 M60 34 C65 24 69 20 72 20 C75 20 79 24 84 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeOpacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Carved Stone Stambha (Pillar Divider) separating consecutive chambers in the horizontal stepwell.
 */
export function PillarArcadeDivider({
  roman,
  label,
}: {
  roman: string;
  label: string;
}) {
  return (
    <div
      className="relative flex h-svh w-20 shrink-0 flex-col items-center justify-between border-x border-gold/30 bg-[#14110e] py-16 text-gold select-none sm:w-24"
      aria-hidden
    >
      <svg
        viewBox="0 0 96 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-gold"
        fill="none"
        stroke="currentColor"
      >
        <line x1="20" y1="0" x2="20" y2="900" strokeWidth="0.6" strokeOpacity="0.22" />
        <line x1="32" y1="0" x2="32" y2="900" strokeWidth="0.5" strokeOpacity="0.16" />
        <line x1="64" y1="0" x2="64" y2="900" strokeWidth="0.5" strokeOpacity="0.16" />
        <line x1="76" y1="0" x2="76" y2="900" strokeWidth="0.6" strokeOpacity="0.22" />
        <path
          d="M6 70 H90 M12 86 H84 M18 102 H78 M12 118 Q48 142 84 118"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <line
          x1="48"
          y1="130"
          x2="48"
          y2="275"
          strokeWidth="0.9"
          strokeOpacity="0.45"
          strokeDasharray="3 4"
        />
        <path
          d="M36 285 Q48 265 60 285 L64 304 H32 Z"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <circle cx="48" cy="310" r="3" fill="currentColor" fillOpacity="0.65" />
        <path
          d="M12 760 Q48 736 84 760 M18 778 H78 M12 794 H84 M6 812 H90"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <path
          d="M16 850 L32 828 L48 850 L64 828 L80 850"
          strokeWidth="0.9"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="relative z-10 size-11 text-gold/80">
        <LotusMedallion spin className="h-full w-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 border border-gold/40 bg-charcoal px-2 py-4 shadow-[0_0_30px_rgba(195,166,107,0.15)]">
        <span className="font-sans text-[0.6rem] tracking-[0.28em] text-gold-bright uppercase">
          {roman}
        </span>
        <span className="h-6 w-px bg-gold/40" />
        <span
          className="font-display text-xs tracking-[0.22em] text-ivory/75 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          {label}
        </span>
      </div>

      <div className="relative z-10 size-11 text-gold/80">
        <LotusMedallion spin className="h-full w-full" />
      </div>
    </div>
  );
}
