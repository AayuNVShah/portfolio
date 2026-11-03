import { experience } from "@/data/experience";
import { Container } from "@/components/shared/Container";
import { ChapterHeading } from "@/components/shared/ChapterHeading";

export function Craft() {
  return (
    <section id="craft" className="relative bg-ivory-deep py-28 text-ink">
      <Container>
        <ChapterHeading
          roman="II"
          kicker="The craft of engineering"
          title="A journey of increasingly complex systems."
        />
        <ol className="relative mt-20 border-l border-gold/50 pl-8 sm:pl-12">
          {experience.map((item, index) => (
            <li key={item.id} className="relative mb-20 last:mb-0" data-reveal>
              <span className="absolute top-1.5 -left-[2.15rem] size-3 rounded-full border border-gold bg-ivory sm:-left-[3.15rem]" />
              <p className="font-sans text-[0.65rem] tracking-[0.32em] text-terracotta uppercase">
                {String(index + 1).padStart(2, "0")} · {item.period}
              </p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">{item.organisation}</h3>
              <p className="mt-1 font-sans text-sm tracking-wide text-forest/70">{item.role}</p>
              <p className="mt-4 max-w-2xl text-forest">{item.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="border border-charcoal/10 bg-ivory/60 px-4 py-3 font-sans text-sm leading-relaxed"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
