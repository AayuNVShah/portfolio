export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-gold ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-linear-to-r from-transparent via-gold/45 to-gold/80" />
      <svg viewBox="0 0 64 24" className="h-5 w-14 shrink-0" fill="none" stroke="currentColor">
        <path d="M6 12 L14 6 L22 12 L14 18 Z" strokeWidth="0.9" strokeOpacity="0.7" />
        <path d="M42 12 L50 6 L58 12 L50 18 Z" strokeWidth="0.9" strokeOpacity="0.7" />
        <path
          d="M32 2 C36 7 37 10 32 15 C27 10 28 7 32 2 Z"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M32 22 C36 17 37 14 32 9 C27 14 28 17 32 22 Z"
          strokeWidth="0.9"
          strokeOpacity="0.75"
        />
        <circle cx="32" cy="12" r="2.2" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-linear-to-l from-transparent via-gold/45 to-gold/80" />
    </div>
  );
}
