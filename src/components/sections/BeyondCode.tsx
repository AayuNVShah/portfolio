import { interests } from "@/data/interests";
import { Container } from "@/components/shared/Container";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { TanpuraWave } from "@/components/animations/TanpuraWave";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";

const galleries = [
  { title: "Stepwell descent", note: "Geometry as narrative" },
  { title: "Jaali light", note: "Pattern as filter" },
  { title: "Mandapa hush", note: "Columns as rhythm" },
  { title: "Courtyard hour", note: "Gold as weather" },
];

export function BeyondCode() {
  return (
    <section id="beyond" className="relative overflow-hidden bg-forest py-28 text-ivory">
      <JaaliPattern className="text-gold" opacity={0.1} />
      <Container className="relative">
        <ChapterHeading
          roman="V"
          kicker="Beyond code"
          title="A composition in ragas, courtyards, and curiosity."
          light
        />
        <div className="mt-12 border border-gold/25 bg-charcoal/30 px-4 py-6" data-reveal>
          <p className="font-sans text-[0.65rem] tracking-[0.32em] text-gold uppercase">
            Tanpura — visual drone, not a player
          </p>
          <TanpuraWave />
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {interests.map((item) => (
            <li key={item.title} className="border-t border-gold/25 pt-5" data-reveal>
              <h3 className="font-display text-2xl text-gold-bright">{item.title}</h3>
              <p className="mt-2 text-ivory/75">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleries.map((g, i) => (
            <figure
              key={g.title}
              className="relative aspect-3/4 overflow-hidden border border-gold/20 bg-charcoal-soft"
              data-reveal
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at ${30 + i * 12}% ${40 - i * 6}%, rgba(195,166,107,0.45), transparent 55%), linear-gradient(160deg, #632e36, #171715)`,
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-display text-lg">{g.title}</p>
                <p className="font-sans text-[0.65rem] tracking-widest text-gold uppercase">
                  {g.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
