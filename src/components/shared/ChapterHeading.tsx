export function ChapterHeading({
  roman,
  kicker,
  title,
  light = false,
}: {
  roman: string;
  kicker: string;
  title: string;
  light?: boolean;
}) {
  return (
    <header className="max-w-3xl" data-reveal>
      <p
        className={`font-sans text-[0.7rem] tracking-[0.42em] uppercase ${
          light ? "text-gold-bright/80" : "text-terracotta"
        }`}
      >
        Chapter {roman}
      </p>
      <p
        className={`mt-3 font-display italic text-lg ${
          light ? "text-ivory/70" : "text-forest/70"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-2 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
    </header>
  );
}
