"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

function drawGeometry(shape: SVGGeometryElement, index: number) {
  try {
    const length = shape.getTotalLength();
    gsap.set(shape, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(shape, {
      strokeDashoffset: 0,
      duration: 1.8,
      delay: 0.2 + index * 0.03,
      ease: "power2.out",
    });
  } catch {
    // Ignore non-measurable SVG elements
  }
}

export function cinematicContext(scope: HTMLElement) {
  registerGsap();
  const ctx = gsap.context(() => {
    // Keep all [data-reveal] elements 100% visible so no chapter content is ever hidden
    gsap.set("[data-reveal]", { opacity: 1, x: 0, y: 0, clipPath: "none" });

    const plans = scope.querySelectorAll<SVGGeometryElement>(
      "[data-stepwell-drawing] path, [data-stepwell-drawing] rect, [data-stepwell-drawing] line, [data-stepwell-drawing] circle",
    );
    plans.forEach((shape, index) => drawGeometry(shape, index));

    const silhouette = scope.querySelector<HTMLElement>("[data-architectural-silhouette]");
    if (silhouette) {
      gsap.fromTo(
        silhouette,
        { x: 40, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 1.8, ease: "power3.out", delay: 0.15 },
      );
    }

    const opening = scope.querySelector<HTMLElement>("[data-cinematic-opening]");
    if (opening) {
      gsap.fromTo(
        opening.querySelectorAll<HTMLElement>("[data-intro-reveal]"),
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 1.15,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }

    const progressBar = scope.querySelector<HTMLElement>("[data-scroll-progress-bar]");
    const spinningLotuses = gsap.utils.toArray<SVGElement>('[data-lotus-spin="true"]');

    const onScroll = () => {
      const pos = Math.max(window.scrollX, window.scrollY);
      const max = Math.max(
        1,
        document.documentElement.scrollWidth - window.innerWidth,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, pos / max));

      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }

      const deg = pos * 0.03;
      for (const lotus of spinningLotuses) {
        lotus.style.transform = `rotate(${deg}deg)`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, scope);

  return ctx;
}
