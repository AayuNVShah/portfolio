"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { cinematicContext, registerGsap } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortalTransition } from "@/components/architecture/PortalTransition";

export function Providers({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const reduced = prefersReducedMotion();
    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const ctx = root.current ? cinematicContext(root.current) : null;
    return () => {
      ctx?.revert();
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div ref={root}>
      <PortalTransition />
      {children}
    </div>
  );
}



