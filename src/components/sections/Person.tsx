import { profile, personStory } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { GoldRule } from "@/components/architecture/GoldRule";
import { StepwellPlan } from "@/components/architecture/StepwellPlan";
import { IntroPlayer } from "@/components/audio/IntroPlayer";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";

export function Person() {
  return (
    <section id="person" className="relative overflow-hidden bg-ivory py-28 text-ink">
      <JaaliPattern className="text-maroon" opacity={0.06} />
      <Container className="relative">
        <ChapterHeading roman="I" kicker="The person behind the engineer" title={personStory.heading} />
        <GoldRule className="my-12 max-w-md" />
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6 text-lg leading-relaxed text-forest">
            {personStory.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} data-reveal>
                {p}
              </p>
            ))}
            <dl className="mt-10 grid gap-6 sm:grid-cols-2" data-reveal>
              {profile.education.map((ed) => (
                <div key={ed.school} className="border-t border-gold/40 pt-4">
                  <dt className="font-display text-2xl">{ed.school}</dt>
                  <dd className="mt-1 font-sans text-sm text-forest/70">{ed.credential}</dd>
                  <dd className="font-sans text-xs tracking-[0.2em] text-terracotta uppercase">
                    {ed.years}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-8">
            <IntroPlayer />
            <div
              className="relative border border-gold/30 p-6 text-maroon"
              data-reveal
            >
              <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase">
                Plan of a courtyard
              </p>
              <StepwellPlan className="mt-4 h-80 w-full opacity-80" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
