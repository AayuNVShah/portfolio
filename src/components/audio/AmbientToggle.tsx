"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAmbientSound } from "@/hooks/useAmbientSound";

export function AmbientToggle() {
  const { on, toggle } = useAmbientSound();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-3 py-1.5 font-sans text-[0.6rem] tracking-[0.22em] text-ivory/80 uppercase transition-colors hover:border-gold hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      aria-pressed={on}
      aria-label={on ? "Pause ambient sound" : "Play ambient sound"}
    >
      {on ? <Volume2 className="size-3.5" /> : <VolumeX className="size-3.5" />}
      Ambient
    </button>
  );
}
