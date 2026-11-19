"use client";

import { scrollToChapter } from "@/lib/navigation/scroll";

export function ScrollCue() {
  return (
    <button
      type="button"
      onClick={() => scrollToChapter("person")}
      className="group inline-flex items-center gap-4 text-ivory/75 transition-colors hover:text-gold-bright"
    >
      <span className="font-sans text-[0.6rem] tracking-[0.35em] uppercase">
        Scroll to glide through the stepwell
      </span>
      <span className="relative h-px w-16 overflow-hidden bg-ivory/25">
        <span className="absolute inset-y-0 left-0 w-6 bg-gold motion-safe:animate-[scrollcue-x_1.8s_ease-in-out_infinite]" />
      </span>
    </button>
  );
}
