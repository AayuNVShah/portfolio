export function ScrollCue() {
  return (
    <a
      href="#person"
      className="group inline-flex flex-col items-center gap-2 text-ivory/70 transition-colors hover:text-gold-bright"
    >
      <span className="font-sans text-[0.6rem] tracking-[0.35em] uppercase">Scroll to discover</span>
      <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
        <span className="absolute inset-x-0 top-0 h-4 bg-gold motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]" />
      </span>
    </a>
  );
}
