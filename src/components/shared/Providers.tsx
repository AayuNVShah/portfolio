"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { cinematicContext, registerGsap } from "@/lib/animations/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortalTransition } from "@/components/architecture/PortalTransition";
import { RagaProvider } from "@/components/audio/RagaProvider";
import { RagaHud } from "@/components/audio/RagaHud";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();
    const isHome = pathname === "/";
    let rafId = 0;

    const lenis = new Lenis({
      orientation: isHome ? "horizontal" : "vertical",
      gestureOrientation: isHome ? "both" : "vertical",
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
      respectReducedMotion: false,
    });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = root.current ? cinematicContext(root.current) : null;
    return () => {
      ctx?.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [pathname]);

  return (
    <RagaProvider>
      <div ref={root}>
        <PortalTransition />
        {children}
        <RagaHud />
      </div>
    </RagaProvider>
  );
}
