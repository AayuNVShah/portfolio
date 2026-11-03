import { profile } from "@/data/profile";
import { Container } from "@/components/shared/Container";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { GoldRule } from "@/components/architecture/GoldRule";

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
      className="relative overflow-hidden bg-charcoal py-32 text-ivory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(195,166,107,0.28),transparent_50%)]" />
      <JaaliPattern className="text-gold" opacity={0.08} />
      <Container className="relative text-center">
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
        <GoldRule className="mx-auto my-10 max-w-xs" />
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
        <p className="mt-16 font-sans text-[0.65rem] tracking-[0.2em] text-ivory/40 uppercase">
          © {new Date().getFullYear()} {profile.name}. An Engineer&apos;s Odyssey.
        </p>
      </Container>
    </section>
  );
}
