"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

function drawGeometry(shape: SVGGeometryElement, index: number) {
  const length = shape.getTotalLength();
  gsap.set(shape, { strokeDasharray: length, strokeDashoffset: length });
  gsap.to(shape, {
    strokeDashoffset: 0,
    duration: 1.8,
    delay: index * 0.035,
    ease: "power2.out",
    scrollTrigger: {
      trigger: shape.closest("[data-reveal]") ?? shape,
      start: "top 78%",
      once: true,
    },
  });
}

export function cinematicContext(scope: HTMLElement) {
  registerGsap();
  const reduced = prefersReducedMotion();
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray<HTMLElement>("main > section");
    const portal = scope.querySelector<HTMLElement>("[data-architectural-transition]");

    if (reduced) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0, clipPath: "none" });
      gsap.set(portal, { autoAlpha: 0 });
      return;
    }

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 34, clipPath: "inset(0 0 14% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true,
          },
        },
      );
    });

    const plans = scope.querySelectorAll<SVGGeometryElement>(
      "[data-stepwell-drawing] path, [data-stepwell-drawing] rect, [data-stepwell-drawing] line, [data-stepwell-drawing] circle",
    );
    plans.forEach((shape, index) => drawGeometry(shape, index));

    const silhouette = scope.querySelector<SVGSVGElement>("[data-architectural-silhouette]");
    if (silhouette) {
      gsap.fromTo(
        silhouette,
        { y: 70, autoAlpha: 0 },
        { y: 0, autoAlpha: 0.9, duration: 2.2, ease: "power3.out", delay: 0.2 },
      );
    }

    const opening = scope.querySelector<HTMLElement>("[data-cinematic-opening]");
    if (opening) {
      gsap.fromTo(
        opening.querySelectorAll<HTMLElement>("[data-intro-reveal]"),
        { opacity: 0, y: 30, clipPath: "inset(0 0 35% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.35,
          stagger: 0.14,
          ease: "power4.out",
          delay: 0.4,
        },
      );
    }

    if (portal && sections.length) {
      const leftDoor = portal.querySelector<HTMLElement>('[data-portal-door="left"]');
      const rightDoor = portal.querySelector<HTMLElement>('[data-portal-door="right"]');
      const arch = portal.querySelector<SVGPathElement>("[data-portal-arch]");
      const label = portal.querySelector<HTMLElement>("[data-portal-label]");
      const archLength = arch?.getTotalLength() ?? 0;
      let activeTransition: gsap.core.Timeline | null = null;

      gsap.set(portal, { autoAlpha: 0 });
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 72%",
          once: true,
          onEnter: () => {
            if (!leftDoor || !rightDoor || !arch || !label) return;
            activeTransition?.kill();
            gsap.set(portal, { autoAlpha: 1 });
            gsap.set([leftDoor, rightDoor], { xPercent: 0 });
            gsap.set(arch, { strokeDasharray: archLength, strokeDashoffset: archLength });
            const chapterNames: Record<string, string> = {
              prologue: "The first light",
              person: "The inner courtyard",
              craft: "The carved arcade",
              workshop: "The builders pavilion",
              journal: "The manuscript hall",
              beyond: "The garden beyond",
              epilogue: "The final courtyard",
            };
            label.textContent = chapterNames[section.id] ?? "A new courtyard";
            activeTransition = gsap.timeline({
              onComplete: () => gsap.set(portal, { autoAlpha: 0 }),
            });
            activeTransition
              .to(arch, { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" })
              .fromTo(
                label,
                { autoAlpha: 0, y: 10 },
                { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
                "-=0.25",
              )
              .to(leftDoor, { xPercent: -105, duration: 1.05, ease: "power4.inOut" }, "+=0.18")
              .to(rightDoor, { xPercent: 105, duration: 1.05, ease: "power4.inOut" }, "<")
              .to(label, { autoAlpha: 0, duration: 0.2 }, "<");
          },
        });
      });
    }
  }, scope);

  return ctx;
}


