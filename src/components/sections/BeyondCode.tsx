import { interests } from "@/data/interests";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { Panel, PanelColumn } from "@/components/shared/Panel";
import { TanpuraWave } from "@/components/animations/TanpuraWave";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { TempleFrame } from "@/components/architecture/TempleFrame";
import { SwarMandala } from "@/components/audio/SwarMandala";
import { LotusMedallion } from "@/components/architecture/StepwellCarvings";

const galleries = [
  { title: "Stepwell descent", note: "Geometry as narrative" },
  { title: "Jaali light", note: "Pattern as filter" },
  { title: "Mandapa hush", note: "Columns as rhythm" },
  { title: "Courtyard hour", note: "Gold as weather" },
];

export function BeyondCode() {
  return (
    <Panel
      id="beyond"
      className="bg-forest text-ivory"
      decor={
        <>
          <JaaliPattern className="text-gold" opacity={0.1} variant="lotus" patternId="jaali-beyond" />
          <TempleFrame tone="dark" />
        </>
      }
    >
      <PanelColumn className="w-[min(24rem,80vw)]">
        <ChapterHeading
          roman="V"
          kicker="Beyond code"
          title="A composition in ragas, courtyards, and curiosity."
          light
        />
        <div className="mt-6 border border-gold/25 bg-charcoal/30 px-4 py-3" data-reveal>
          <p className="font-sans text-[0.62rem] tracking-[0.32em] text-gold uppercase">Tanpura drone</p>
          <TanpuraWave />
        </div>
      </PanelColumn>

      <PanelColumn className="w-[min(20rem,80vw)] border border-gold/25 bg-charcoal/30 px-4 py-4" >
        <SwarMandala />
      </PanelColumn>

      <PanelColumn className="grid w-[min(36rem,80vw)] gap-x-8 gap-y-4 sm:grid-cols-2">
        {interests.map((item) => (
          <div key={item.title} className="border-t border-gold/25 pt-3" data-reveal>
            <h3 className="font-display text-xl text-gold-bright">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ivory/75">{item.body}</p>
          </div>
        ))}
      </PanelColumn>

      <PanelColumn className="grid w-[min(22rem,80vw)] grid-cols-2 gap-3">
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
            <div className="pointer-events-none absolute top-2 right-2 size-14 text-gold/35" aria-hidden>
              <LotusMedallion className="h-full w-full" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-3">
              <p className="font-display text-lg leading-tight">{g.title}</p>
              <p className="font-sans text-[0.6rem] tracking-widest text-gold uppercase">{g.note}</p>
            </figcaption>
          </figure>
        ))}
      </PanelColumn>
    </Panel>
  );
}
