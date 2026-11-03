import { Container } from "@/components/shared/Container";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { CategoryFilter } from "@/components/journal/CategoryFilter";
import Link from "next/link";

export function Journal() {
  return (
    <section id="journal" className="bg-[#f7f1e6] py-28 text-ink">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ChapterHeading
            roman="IV"
            kicker="The journal of ideas"
            title="A manuscript of systems, networks, and notes."
          />
          <Link
            href="/writings"
            className="font-sans text-[0.7rem] tracking-[0.28em] text-terracotta uppercase hover:text-maroon"
          >
            Full archive
          </Link>
        </div>
        <div
          className="mt-14 border border-maroon/10 bg-[#fbf6ec] px-4 py-6 sm:px-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(99,46,54,0.06) 32px)",
          }}
        >
          <CategoryFilter />
        </div>
      </Container>
    </section>
  );
}
