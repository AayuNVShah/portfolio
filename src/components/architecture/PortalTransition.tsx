"use client";

import { StepwellFrieze } from "./StepwellCarvings";

export function PortalTransition() {
  return (
    <div
      data-architectural-transition
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top & Bottom Continuous Carved Lotus & Stepwell Friezes */}
      <div className="absolute inset-x-0 top-12 opacity-65">
        <StepwellFrieze position="top" />
      </div>
      <div className="absolute inset-x-0 bottom-0 opacity-75">
        <StepwellFrieze position="bottom" />
      </div>

      {/* Bottom Continuous Horizontal Progress Thread */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gold/15">
        <div
          data-scroll-progress-bar
          className="h-full w-full origin-left scale-x-0 bg-linear-to-r from-terracotta via-gold to-gold-bright"
        />
      </div>
    </div>
  );
}
