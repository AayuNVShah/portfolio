export function JaaliPattern({
  opacity = 0.12,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id="jaali" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M24 4 L44 24 L24 44 L4 24 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="24" cy="24" r="3.2" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jaali)" opacity={opacity} />
    </svg>
  );
}
