"use client";

import { Music2, Music } from "lucide-react";
import { useRaga } from "@/components/audio/RagaProvider";

export function AmbientToggle() {
  const { on, toggle } = useRaga();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-3 py-1.5 font-sans text-[0.6rem] tracking-[0.22em] text-ivory/80 uppercase transition-colors hover:border-gold hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      aria-pressed={on}
      aria-label={on ? "Stop raga and taal" : "Play raga and taal"}
    >
      {on ? <Music2 className="size-3.5" /> : <Music className="size-3.5" />}
      Raga
    </button>
  );
}
