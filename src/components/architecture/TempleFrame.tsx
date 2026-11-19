import { CuspedArchway } from "./StepwellCarvings";

export function TempleFrame({
  tone = "ivory",
}: {
  tone?: "ivory" | "dark";
}) {
  const stroke = tone === "dark" ? "text-gold" : "text-maroon";
  return (
    <>
      <CuspedArchway
        className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${stroke}`}
      />
      <svg
        className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-24 w-full ${stroke}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 120 V72 H80 C120 72 140 8 180 8 H1260 C1300 8 1320 72 1360 72 H1440 V120"
          fill="currentColor"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M180 8 V120 M1260 8 V120" stroke="currentColor" strokeOpacity="0.35" />
        {Array.from({ length: 17 }).map((_, i) => {
          const x = 200 + i * 60;
          return (
            <path
              key={x}
              d={`M${x} 120 V36 Q${x + 14} 18 ${x + 28} 36 V120`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="0.8"
            />
          );
        })}
        <circle cx="720" cy="40" r="12" fill="none" stroke="currentColor" />
        <circle cx="720" cy="40" r="4" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </>
  );
}

export function PillarFlanks({ tone = "ivory" }: { tone?: "ivory" | "dark" }) {
  const stroke = tone === "dark" ? "text-gold/40" : "text-maroon/25";
  return (
    <>
      <svg
        className={`pointer-events-none absolute top-24 bottom-0 left-0 hidden w-16 lg:block ${stroke}`}
        viewBox="0 0 64 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect x="18" y="0" width="8" height="800" fill="currentColor" opacity="0.5" />
        <rect x="34" y="0" width="3" height="800" fill="currentColor" opacity="0.4" />
        {[140, 300, 460, 620].map((y) => (
          <path
            key={y}
            d={`M10 ${y} L26 ${y - 14} L42 ${y} L26 ${y + 14} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
      <svg
        className={`pointer-events-none absolute top-24 right-0 bottom-0 hidden w-16 lg:block ${stroke}`}
        viewBox="0 0 64 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect x="38" y="0" width="8" height="800" fill="currentColor" opacity="0.5" />
        <rect x="27" y="0" width="3" height="800" fill="currentColor" opacity="0.4" />
        {[140, 300, 460, 620].map((y) => (
          <path
            key={y}
            d={`M22 ${y} L38 ${y - 14} L54 ${y} L38 ${y + 14} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </>
  );
}
