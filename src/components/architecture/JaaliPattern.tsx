export function JaaliPattern({
  opacity = 0.12,
  className = "",
  variant = "diamond",
  patternId,
}: {
  opacity?: number;
  className?: string;
  variant?: "diamond" | "star" | "lotus";
  patternId?: string;
}) {
  const id = patternId ?? `jaali-${variant}`;
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        {variant === "diamond" ? (
          <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M24 4 L44 24 L24 44 L4 24 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <circle cx="24" cy="24" r="3.2" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        ) : variant === "star" ? (
          <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M28 6 L32 22 L48 22 L35 32 L40 48 L28 38 L16 48 L21 32 L8 22 L24 22 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <circle cx="28" cy="28" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        ) : (
          <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i / 8) * Math.PI * 2;
              return (
                <line
                  key={i}
                  x1="32"
                  y1="32"
                  x2={32 + Math.cos(a) * 14}
                  y2={32 + Math.sin(a) * 14}
                  stroke="currentColor"
                  strokeWidth="0.45"
                />
              );
            })}
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  );
}
