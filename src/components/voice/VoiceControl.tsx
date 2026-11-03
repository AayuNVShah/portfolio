"use client";

import { Mic, MicOff } from "lucide-react";
import { useVoiceNavigation } from "@/hooks/useVoiceNavigation";

export function VoiceControl() {
  const { supported, listening, transcript, error, toggle } = useVoiceNavigation();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        disabled={!supported}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-sans text-[0.6rem] tracking-[0.22em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
          listening
            ? "border-gold bg-gold/20 text-gold-bright"
            : "border-ivory/20 text-ivory/80 hover:border-gold hover:text-gold-bright"
        } disabled:cursor-not-allowed disabled:opacity-40`}
        aria-pressed={listening}
        aria-label={listening ? "Stop listening" : "Start voice navigation"}
      >
        {listening ? <Mic className="size-3.5 animate-pulse" /> : <MicOff className="size-3.5" />}
        {listening ? "Listening" : "Voice"}
      </button>
      {listening && transcript ? (
        <span className="hidden max-w-[14rem] truncate font-sans text-[0.65rem] text-gold-bright/90 md:inline">
          “{transcript}”
        </span>
      ) : null}
      {!supported ? (
        <span className="sr-only">Voice navigation is not supported in this browser.</span>
      ) : null}
      {error ? (
        <span className="hidden font-sans text-[0.65rem] text-terracotta md:inline">{error}</span>
      ) : null}
    </div>
  );
}
