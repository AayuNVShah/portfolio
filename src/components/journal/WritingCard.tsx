import Link from "next/link";
import type { Writing } from "@/data/writings";

export function WritingCard({ writing, compact = false }: { writing: Writing; compact?: boolean }) {
  return (
    <article className={`border-b border-maroon/15 ${compact ? "py-5" : "py-8"}`}>
      <p className="font-sans text-[0.62rem] tracking-[0.28em] text-terracotta uppercase">
        {writing.category} · {writing.kind}
      </p>
      <h3 className={`mt-2 font-display text-charcoal ${compact ? "text-2xl leading-tight" : "text-3xl"}`}>
        <Link href={`/writings/${writing.slug}`} className="hover:text-maroon">
          {writing.title}
        </Link>
      </h3>
      <p className={`mt-2 max-w-2xl text-forest/80 ${compact ? "line-clamp-3 text-sm" : ""}`}>
        {writing.summary}
      </p>
    </article>
  );
}
