"use client";

import dynamic from "next/dynamic";
import { Headphones, Compass } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/shared/Button";
import { ArchitecturalSilhouette } from "@/components/cinematic/ArchitecturalSilhouette";
import { Particles } from "@/components/cinematic/Particles";
import { ScrollCue } from "@/components/cinematic/ScrollCue";
import { scrollToChapter } from "@/lib/navigation/scroll";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { CuspedArchway } from "@/components/architecture/StepwellCarvings";

const PrologueScene = dynamic(() => import("./PrologueScene"), {
  ssr: false,
});

export function Prologue() {
  return (
    <section
      id="prologue"
      data-cinematic-opening
      className="relative h-svh w-screen shrink-0 overflow-hidden bg-charcoal text-ivory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(195,166,107,0.18),transparent_55%)]" />
      <JaaliPattern className="text-gold" opacity={0.07} variant="star" patternId="jaali-prologue" />
      <PrologueScene />
      <Particles />
      <ArchitecturalSilhouette />
      <CuspedArchway className="absolute inset-0 z-10 h-full w-full text-gold" />
      <div className="relative z-20 flex h-full flex-col justify-center pt-20 pb-24">
        <div className="mx-auto w-full max-w-5xl px-8 sm:px-12">
          <p data-intro-reveal className="font-sans text-[0.68rem] tracking-[0.48em] text-gold uppercase">
            {profile.creativeDirection}
          </p>
          <h1 data-intro-reveal className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.88] tracking-tight">
            {profile.name}
          </h1>
          <p data-intro-reveal className="mt-6 max-w-xl font-sans text-sm tracking-[0.08em] text-ivory/70 sm:text-base">
            {profile.title}
          </p>
          <p data-intro-reveal className="mt-6 max-w-lg font-display text-2xl italic text-gold-bright/90 sm:text-3xl">
            “{profile.openingLine}”
          </p>
          <div data-intro-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollToChapter("workshop")}>
              <Compass className="size-3.5" />
              Explore my work
            </Button>
            <Button
              tone="ghost"
              onClick={() => {
                scrollToChapter("person");
                window.dispatchEvent(new CustomEvent("odyssey:play-intro"));
              }}
            >
              <Headphones className="size-3.5" />
              Listen to my introduction
            </Button>
            <Button tone="ghost" onClick={() => scrollToChapter("person")}>
              Skip opening
            </Button>
          </div>
          <div className="mt-10">
            <ScrollCue />
          </div>
        </div>
      </div>
    </section>
  );
}
