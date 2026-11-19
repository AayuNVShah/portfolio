import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { GoldRule } from "@/components/architecture/GoldRule";
import { TempleFrame } from "@/components/architecture/TempleFrame";
import { LotusMedallion } from "@/components/architecture/StepwellCarvings";

const contacts = [
  { label: "Email", href: `mailto:${profile.links.email}`, pending: profile.placeholders.email },
  { label: "LinkedIn", href: profile.links.linkedin, pending: false },
  { label: "GitHub", href: profile.links.github, pending: profile.placeholders.github },
  { label: "Resume", href: profile.links.resume, pending: profile.placeholders.resume },
];

export function Epilogue() {
  return (
    <section
      id="epilogue"
      className="relative flex h-svh w-screen shrink-0 items-center justify-center overflow-hidden bg-charcoal pt-20 pb-24 text-ivory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(195,166,107,0.28),transparent_50%)]" />
      <JaaliPattern className="text-gold" opacity={0.08} variant="star" patternId="jaali-epilogue" />
      <TempleFrame tone="dark" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 text-gold/15">
        <LotusMedallion spin className="h-full w-full" />
      </div>
      <Container className="relative z-20 text-center">
        <p className="font-sans text-[0.68rem] tracking-[0.42em] text-gold uppercase">
          The final courtyard
        </p>
        <blockquote className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {profile.epilogueQuote.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
        <GoldRule className="mx-auto my-8 max-w-xs" />
        <p className="font-display text-2xl italic text-gold-bright">{profile.epilogueInvite}</p>
        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 font-sans text-[0.7rem] tracking-[0.22em] uppercase hover:bg-gold/15"
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {c.label}
                {c.pending ? (
                  <span className="text-ivory/40"> · forthcoming</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-sans text-[0.65rem] tracking-[0.2em] text-ivory/40 uppercase">
          © {new Date().getFullYear()} {profile.name}. An Engineer&apos;s Odyssey.
        </p>
      </Container>
    </section>
  );
}
