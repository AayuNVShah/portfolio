export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-gold/70" />
      <span className="size-1.5 rotate-45 border border-gold/80" />
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-gold/70" />
    </div>
  );
}
