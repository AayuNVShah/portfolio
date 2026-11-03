"use client";

import { useCallback, useEffect, useState } from "react";
import { voiceCommands, type ChapterId } from "@/data/navigation";
import { scrollToChapter } from "@/lib/navigation/scroll";

type SpeechRec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
};

function getRecognition(): SpeechRec | null {
  if (typeof window === "undefined") return null;
  const Ctor =
    (window as unknown as { SpeechRecognition?: new () => SpeechRec }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: new () => SpeechRec })
      .webkitSpeechRecognition;
  if (!Ctor) return null;
  return new Ctor();
}

function matchCommand(transcript: string): ChapterId | null {
  const t = transcript.toLowerCase();
  for (const command of voiceCommands) {
    if (command.phrases.some((phrase) => t.includes(phrase))) {
      return command.target;
    }
  }
  return null;
}

export function useVoiceNavigation() {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recRef = useState<{ current: SpeechRec | null }>({ current: null })[0];

  useEffect(() => {
    setSupported(Boolean(getRecognition()));
  }, []);

  const stop = useCallback(() => {
    recRef.current?.stop();
    recRef.current = null;
    setListening(false);
  }, [recRef]);

  const start = useCallback(() => {
    setError(null);
    const rec = getRecognition();
    if (!rec) {
      setError("Voice navigation is not supported in this browser.");
      return;
    }
    rec.lang = "en-IN";
    rec.continuous = false;
    rec.interimResults = true;
    rec.onresult = (ev) => {
      const last = ev.results[ev.results.length - 1];
      const text = last?.[0]?.transcript ?? "";
      setTranscript(text);
      const target = matchCommand(text);
      if (target) {
        scrollToChapter(target);
        rec.stop();
      }
    };
    rec.onerror = (ev) => {
      if (ev.error === "not-allowed") {
        setError("Microphone permission was denied.");
      } else if (ev.error !== "no-speech") {
        setError("Could not hear a command. Try again.");
      }
      setListening(false);
    };
    rec.onend = () => setListening(false);
    recRef.current = rec;
    try {
      rec.start();
      setListening(true);
    } catch {
      setError("Could not start the microphone.");
    }
  }, [recRef]);

  const toggle = useCallback(() => {
    if (listening) stop();
    else start();
  }, [listening, start, stop]);

  return { supported, listening, transcript, error, toggle, stop };
}
