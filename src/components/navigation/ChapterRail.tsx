"use client";

import { chapters } from "@/data/navigation";
import { scrollToChapter } from "@/lib/navigation/scroll";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ChapterRail() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <nav
      aria-label="Chapter rail"
      className="pointer-events-none fixed top-1/2 left-3 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-3 border-l border-gold/30 pl-3">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <button
              type="button"
              onClick={() => scrollToChapter(chapter.id)}
              className="group flex flex-col items-start text-left"
            >
              <span className="font-sans text-[0.58rem] tracking-[0.28em] text-gold uppercase">
                {chapter.roman}
              </span>
              <span className="font-display text-sm text-ivory/55 group-hover:text-gold-bright">
                {chapter.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
