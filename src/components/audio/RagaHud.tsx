"use client";

import { useRaga } from "@/components/audio/RagaProvider";

export function RagaHud() {
  const { on, hud } = useRaga();
  if (!on) return null;
  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-50 max-w-[min(22rem,calc(100vw-2rem))] border border-gold/30 bg-charcoal/80 px-4 py-3 backdrop-blur-md">
      <p className="font-sans text-[0.58rem] tracking-[0.32em] text-gold uppercase">
        {hud.raga.time}
      </p>
      <p className="font-display text-xl text-ivory">
        Raga {hud.raga.name}
        <span className="text-gold"> · </span>
        {hud.raga.taal.name}
      </p>
      <p className="mt-1 font-sans text-[0.7rem] tracking-[0.14em] text-ivory/70 uppercase">
        Swara {hud.swara} · matra {hud.matra}/{hud.raga.taal.matras} · {hud.laya} laya
      </p>
      <p className="mt-2 font-display text-sm italic text-ivory/55">
        Scroll for theka. Drag the mandala for meend.
      </p>
    </div>
  );
}
