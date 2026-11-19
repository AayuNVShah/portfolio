import { experience } from "@/data/experience";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { Panel, PanelColumn } from "@/components/shared/Panel";
import { TempleFrame } from "@/components/architecture/TempleFrame";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { LotusMedallion } from "@/components/architecture/StepwellCarvings";

export function Craft() {
  return (
    <Panel
      id="craft"
      className="bg-ivory-deep text-ink"
      decor={
        <>
          <JaaliPattern className="text-terracotta" opacity={0.05} variant="star" patternId="jaali-craft" />
          <TempleFrame tone="ivory" />
        </>
      }
    >
      <PanelColumn className="w-[min(24rem,80vw)]">
        <ChapterHeading
          roman="II"
          kicker="The craft of engineering"
          title="A journey of increasingly complex systems."
        />
      </PanelColumn>

      {/* Horizontal timeline: a gold thread with a lotus node above each role */}
      <PanelColumn className="relative flex items-start gap-6 pt-8">
        <span
          className="pointer-events-none absolute inset-x-0 top-2 h-px bg-linear-to-r from-gold/70 via-gold/50 to-gold/10"
          aria-hidden
        />
        {experience.map((item, index) => {
          const wide = item.highlights.length > 3;
          return (
            <article
              key={item.id}
              data-reveal
              className={`relative shrink-0 border border-maroon/15 bg-ivory/85 p-5 shadow-[0_14px_40px_rgba(23,23,21,0.05)] ${
                wide ? "w-[min(36rem,80vw)]" : "w-[min(19rem,80vw)]"
              }`}
            >
              <span
                className="absolute -top-[1.85rem] left-5 size-3 rotate-45 border border-gold bg-ivory-deep"
                aria-hidden
              />
              <div className="pointer-events-none absolute -right-8 -bottom-8 size-28 text-maroon/10" aria-hidden>
                <LotusMedallion className="h-full w-full" />
              </div>
              <p className="font-sans text-[0.62rem] tracking-[0.3em] text-terracotta uppercase">
                {String(index + 1).padStart(2, "0")} · {item.period}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight lg:text-3xl">{item.organisation}</h3>
              <p className="mt-1 font-sans text-xs tracking-wide text-forest/70">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-forest">{item.summary}</p>
              <ul className={`mt-4 grid gap-2 ${wide ? "sm:grid-cols-2" : ""}`}>
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="border border-charcoal/10 bg-ivory px-3 py-1.5 font-sans text-xs leading-snug"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </PanelColumn>
    </Panel>
  );
}
