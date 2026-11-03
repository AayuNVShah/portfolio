import Link from "next/link";
import type { Writing } from "@/data/writings";

export function WritingCard({ writing }: { writing: Writing }) {
  return (
    <article className="border-b border-maroon/15 py-8">
      <p className="font-sans text-[0.62rem] tracking-[0.28em] text-terracotta uppercase">
        {writing.category} · {writing.kind}
      </p>
      <h3 className="mt-2 font-display text-3xl text-charcoal">
        <Link href={`/writings/${writing.slug}`} className="hover:text-maroon">
          {writing.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-2xl text-forest/80">{writing.summary}</p>
    </article>
  );
}
