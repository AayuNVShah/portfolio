"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function TanpuraWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    const reduced = prefersReducedMotion();

    const draw = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.2;
      const strings = [0.18, 0.32, 0.5, 0.66];
      strings.forEach((base, i) => {
        ctx.beginPath();
        ctx.strokeStyle = i === 2 ? "#c3a66b" : "rgba(244,239,229,0.35)";
        for (let x = 0; x <= w; x += 4) {
          const y =
            h * 0.5 +
            Math.sin(x * 0.012 + t * (0.8 + i * 0.15) + i) * (18 - i * 3) +
            Math.sin(x * 0.04 + t * 0.4) * 4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        void base;
      });
      if (!reduced) {
        t += 0.035;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} className="h-40 w-full" aria-hidden />;
}
