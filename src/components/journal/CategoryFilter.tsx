"use client";

import { useMemo, useState } from "react";
import { writingCategories, writings } from "@/data/writings";
import { WritingCard } from "@/components/journal/WritingCard";

export function CategoryFilter({
  layout = "vertical",
}: {
  /** "horizontal" lays cards out in two rows that grow sideways (home page panel). */
  layout?: "vertical" | "horizontal";
}) {
  const [active, setActive] = useState<string>("All");
  const items = useMemo(
    () =>
      active === "All" ? writings : writings.filter((w) => w.category === active),
    [active],
  );
  const horizontal = layout === "horizontal";

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Writing categories">
        {["All", ...writingCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-3 py-1 font-sans text-[0.65rem] tracking-[0.18em] uppercase ${
              active === cat
                ? "border-maroon bg-maroon text-ivory"
                : "border-maroon/20 text-forest hover:border-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        className={
          horizontal
            ? "mt-2 grid auto-cols-[min(20rem,75vw)] grid-flow-col grid-rows-2 gap-x-8"
            : "mt-4"
        }
      >
        {items.length === 0 ? (
          <p className="py-10 font-display text-xl italic text-forest/60">
            Nothing filed in this drawer yet — the manuscript grows as new notes arrive.
          </p>
        ) : (
          items.map((writing) => (
            <WritingCard key={writing.slug} writing={writing} compact={horizontal} />
          ))
        )}
      </div>
    </div>
  );
}
