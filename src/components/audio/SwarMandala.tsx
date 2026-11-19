"use client";

import { useRef, useState } from "react";
import { useRaga } from "@/components/audio/RagaProvider";
import type { SwaraName } from "@/lib/audio/raga";

const SWARAS: SwaraName[] = ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"];

export function SwarMandala() {
  const { playSwara, hud, on, enable } = useRaga();
  const [active, setActive] = useState<SwaraName | null>(null);
  const dragging = useRef(false);

  const fromPoint = (clientX: number, clientY: number, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(clientY - cy, clientX - cx);
    const t = (angle + Math.PI * 1.5) / (Math.PI * 2);
    const idx = ((Math.round(t * SWARAS.length) % SWARAS.length) + SWARAS.length) % SWARAS.length;
    return SWARAS[idx];
  };

  return (
    <div className="relative">
      <p className="font-sans text-[0.65rem] tracking-[0.32em] text-gold uppercase">
        Swar mandala · drag around the jaali
      </p>
      <p className="mt-1 font-display text-sm italic text-ivory/70">
        {on
          ? `${hud.raga.name} · ${hud.raga.taal.name} · ${hud.swara}`
          : "Touch or drag to begin. Scroll then carries the theka."}
      </p>
      <div
        className="relative mx-auto mt-6 aspect-square w-full max-w-md cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={async (e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          if (!on) await enable();
          const swara = fromPoint(e.clientX, e.clientY, e.currentTarget);
          setActive(swara);
          playSwara(swara, true);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          const swara = fromPoint(e.clientX, e.clientY, e.currentTarget);
          if (swara !== active) {
            setActive(swara);
            playSwara(swara, true);
          }
        }}
        onPointerUp={() => {
          dragging.current = false;
          setActive(null);
        }}
        onPointerCancel={() => {
          dragging.current = false;
          setActive(null);
        }}
        role="application"
        aria-label="Drag around the circle to play Hindustani swaras"
      >
        <svg viewBox="0 0 320 320" className="h-full w-full text-gold">
          <circle cx="160" cy="160" r="148" fill="none" stroke="currentColor" strokeOpacity="0.25" />
          <circle cx="160" cy="160" r="92" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          {SWARAS.map((swara, i) => {
            const a = (i / SWARAS.length) * Math.PI * 2 - Math.PI / 2;
            const x = 160 + Math.cos(a) * 118;
            const y = 160 + Math.sin(a) * 118;
            const lit = active === swara || hud.swara === swara;
            return (
              <g key={swara}>
                <circle
                  cx={x}
                  cy={y}
                  r={lit ? 22 : 18}
                  fill={lit ? "rgba(195,166,107,0.35)" : "#171715"}
                  stroke="currentColor"
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill="#f4efe5"
                  fontSize="13"
                  fontFamily="Cormorant Garamond, serif"
                >
                  {swara}
                </text>
                <line
                  x1="160"
                  y1="160"
                  x2={160 + Math.cos(a) * 92}
                  y2={160 + Math.sin(a) * 92}
                  stroke="currentColor"
                  strokeOpacity="0.2"
                />
              </g>
            );
          })}
          <circle cx="160" cy="160" r="28" fill="#632e36" stroke="currentColor" />
          <text
            x="160"
            y="166"
            textAnchor="middle"
            fill="#e0c98a"
            fontSize="14"
            fontFamily="Cormorant Garamond, serif"
          >
            Sa
          </text>
        </svg>
      </div>
    </div>
  );
}
