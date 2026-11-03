import { Container } from "@/components/shared/Container";
import { CategoryFilter } from "@/components/journal/CategoryFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Technical writing on backend engineering, systems, and networks.",
};

export default function WritingsPage() {
  return (
    <main className="min-h-svh bg-[#f7f1e6] pt-28 pb-24 text-ink">
      <Container>
        <p className="font-sans text-[0.68rem] tracking-[0.42em] text-terracotta uppercase">
          Chapter IV
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl">The Journal of Ideas</h1>
        <p className="mt-4 max-w-xl text-forest/75">
          Add a new essay by creating an MDX file and one object in{" "}
          <code>src/data/writings.ts</code>. The page does not change.
        </p>
        <div className="mt-12 border border-maroon/10 bg-[#fbf6ec] px-4 py-6 sm:px-10">
          <CategoryFilter />
        </div>
      </Container>
    </main>
  );
}
