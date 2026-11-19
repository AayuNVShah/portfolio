import { profile, personStory } from "@/data/profile";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { Panel, PanelColumn } from "@/components/shared/Panel";
import { GoldRule } from "@/components/architecture/GoldRule";
import { StepwellPlan } from "@/components/architecture/StepwellPlan";
import { IntroPlayer } from "@/components/audio/IntroPlayer";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { TempleFrame } from "@/components/architecture/TempleFrame";

export function Person() {
  return (
    <Panel
      id="person"
      className="bg-ivory text-ink"
      decor={
        <>
          <JaaliPattern className="text-maroon" opacity={0.06} variant="lotus" patternId="jaali-person" />
          <TempleFrame tone="ivory" />
        </>
      }
    >
      <PanelColumn className="w-[min(26rem,80vw)]">
        <ChapterHeading roman="I" kicker="The person behind the engineer" title={personStory.heading} />
        <GoldRule className="my-6 max-w-xs" />
        <dl className="grid gap-4" data-reveal>
          {profile.education.map((ed) => (
            <div key={ed.school} className="border-t border-gold/40 pt-3">
              <dt className="font-display text-2xl">{ed.school}</dt>
              <dd className="mt-0.5 font-sans text-sm text-forest/70">{ed.credential}</dd>
              <dd className="font-sans text-xs tracking-[0.2em] text-terracotta uppercase">{ed.years}</dd>
            </div>
          ))}
        </dl>
      </PanelColumn>

      <PanelColumn className="grid w-[min(44rem,80vw)] gap-x-10 gap-y-5 text-[0.95rem] leading-relaxed text-forest md:grid-cols-2">
        {personStory.paragraphs.map((p) => (
          <p key={p.slice(0, 32)} data-reveal>
            {p}
          </p>
        ))}
      </PanelColumn>

      <PanelColumn className="w-[min(24rem,80vw)] space-y-5">
        <IntroPlayer />
        <div className="border border-gold/30 bg-ivory/80 p-4 text-maroon" data-reveal>
          <p className="font-sans text-[0.62rem] tracking-[0.3em] uppercase">
            Rani ki Vav · Stepwell kund plan
          </p>
          <StepwellPlan className="mt-2 h-44 w-full opacity-85" />
        </div>
      </PanelColumn>
    </Panel>
  );
}
