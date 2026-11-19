import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

export function scrollToChapter(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const isHorizontal =
    typeof document !== "undefined" &&
    document.documentElement.scrollWidth > window.innerWidth * 1.2;

  if (isHorizontal) {
    const rect = el.getBoundingClientRect();
    const targetX = Math.max(0, window.scrollX + rect.left);
    if (window.__lenis) {
      window.__lenis.scrollTo(targetX, { duration: 1.25 });
    } else {
      window.scrollTo({ left: targetX, behavior: "smooth" });
    }
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
}
