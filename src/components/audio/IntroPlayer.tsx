"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

function format(time: number) {
  if (!Number.isFinite(time) || time <= 0) return "0:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function IntroPlayer() {
  const { playing, progress, duration, current, toggle, seek } = useAudioPlayer(
    "/audio/intro.mp3",
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = (canvas.width = canvas.offsetWidth * 2);
    const h = (canvas.height = 64);
    ctx.clearRect(0, 0, w, h);
    const bars = 48;
    for (let i = 0; i < bars; i++) {
      const amp = Math.abs(Math.sin(i * 0.45) * 0.55 + 0.2);
      const bh = amp * h * (playing ? 0.9 : 0.55);
      const x = (i / bars) * w;
      const active = i / bars < progress;
      ctx.fillStyle = active ? "#c3a66b" : "rgba(99, 46, 54, 0.25)";
      ctx.fillRect(x, (h - bh) / 2, w / bars - 3, bh);
    }
  }, [playing, progress]);

  return (
    <div className="border border-maroon/15 bg-ivory/80 p-5 shadow-[0_20px_60px_rgba(23,23,21,0.06)]">
      <p className="font-sans text-[0.65rem] tracking-[0.32em] text-terracotta uppercase">
        Listen to my story
      </p>
      <p className="mt-2 font-display text-2xl text-charcoal">A personal introduction</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          className="flex size-12 items-center justify-center rounded-full border border-gold bg-gold/15 text-maroon transition-colors hover:bg-gold/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label={playing ? "Pause introduction" : "Play introduction"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4 translate-x-0.5" />}
        </button>
        <div className="min-w-0 flex-1">
          <button
            type="button"
            className="block w-full"
            aria-label="Seek introduction"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              seek((e.clientX - rect.left) / rect.width);
            }}
          >
            <canvas ref={canvasRef} className="h-8 w-full" />
          </button>
          <div className="mt-2 flex justify-between font-sans text-[0.65rem] tracking-widest text-forest/60">
            <span>{format(current)}</span>
            <span>{format(duration)}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 font-sans text-xs text-forest/60">
        Placeholder audio at <code>/public/audio/intro.mp3</code> — replace with your recording.
      </p>
    </div>
  );
}
