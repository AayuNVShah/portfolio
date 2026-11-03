"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createTanpuraDrone,
  readAmbientPreference,
  writeAmbientPreference,
} from "@/lib/audio/ambient";

export function useAmbientSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const droneRef = useRef<{ stop: () => void } | null>(null);
  const [on, setOn] = useState(false);

  const stop = useCallback(() => {
    droneRef.current?.stop();
    droneRef.current = null;
    void ctxRef.current?.suspend();
    setOn(false);
    writeAmbientPreference(false);
  }, []);

  const start = useCallback(async () => {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!ctxRef.current) ctxRef.current = new AudioCtx();
    await ctxRef.current.resume();
    if (!droneRef.current) droneRef.current = createTanpuraDrone(ctxRef.current);
    setOn(true);
    writeAmbientPreference(true);
  }, []);

  const toggle = useCallback(() => {
    if (on) stop();
    else void start();
  }, [on, start, stop]);

  useEffect(() => {
    return () => {
      droneRef.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  useEffect(() => {
    if (readAmbientPreference()) {
      /* Preference is remembered, but never autoplayed. */
    }
  }, []);

  return { on, toggle };
}
