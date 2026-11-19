"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ClassicalEngine } from "@/lib/audio/classicalEngine";
import { ragaForSection, type Raga, type SwaraName } from "@/lib/audio/raga";
import { writeAmbientPreference } from "@/lib/audio/ambient";

type Hud = {
  raga: Raga;
  swara: SwaraName;
  matra: number;
  laya: string;
  section: string;
};

type Ctx = {
  on: boolean;
  hud: Hud;
  toggle: () => void;
  enable: () => Promise<void>;
  playSwara: (swara: SwaraName, glide?: boolean) => void;
};

const RagaCtx = createContext<Ctx | null>(null);

const SECTIONS = ["prologue", "person", "craft", "workshop", "journal", "beyond", "epilogue"];

function currentSection() {
  let active = "prologue";
  const isHorizontal =
    typeof document !== "undefined" &&
    document.documentElement.scrollWidth > window.innerWidth * 1.2;
  for (const id of SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (isHorizontal) {
      if (rect.left <= window.innerWidth * 0.55) active = id;
    } else if (rect.top < window.innerHeight * 0.45) {
      active = id;
    }
  }
  return active;
}

function layaName(bpm: number) {
  if (bpm < 55) return "Vilambit";
  if (bpm < 85) return "Madhya";
  return "Drut";
}

export function RagaProvider({ children }: { children: ReactNode }) {
  const engineRef = useRef<ClassicalEngine | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const matraRef = useRef(0);
  const lastBeatRef = useRef(0);
  const lastSwaraIndexRef = useRef(-1);
  const lastSectionRef = useRef("prologue");
  const lastPosRef = useRef(0);
  const onRef = useRef(false);
  const [on, setOn] = useState(false);
  const [hud, setHud] = useState<Hud>(() => ({
    raga: ragaForSection("prologue"),
    swara: "Sa",
    matra: 1,
    laya: "Madhya",
    section: "prologue",
  }));

  const ensure = useCallback(async () => {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!ctxRef.current) ctxRef.current = new AudioCtx();
    await ctxRef.current.resume();
    if (!engineRef.current) {
      engineRef.current = new ClassicalEngine(ctxRef.current);
    }
    return engineRef.current;
  }, []);

  const enable = useCallback(async () => {
    const engine = await ensure();
    const section = typeof document === "undefined" ? "prologue" : currentSection();
    const raga = ragaForSection(section);
    engine.master.gain.setValueAtTime(0.6, engine.ctx.currentTime);
    engine.startTanpura(raga.saHz);
    // Immediately play an audible opening Alap Swara and Tabla Bol so the user hears it right away
    engine.playBol("Dha");
    engine.playSwara(raga, "Sa", 1, false);
    const secondSwara = raga.aroha[1] ?? "Re";
    window.setTimeout(() => {
      if (onRef.current && engineRef.current) {
        engineRef.current.playSwara(raga, secondSwara, 1, true);
      }
    }, 360);

    onRef.current = true;
    setOn(true);
    writeAmbientPreference(true);
    lastSectionRef.current = section;
    setHud((h) => ({ ...h, raga, section, swara: secondSwara }));
  }, [ensure]);

  const stop = useCallback(() => {
    engineRef.current?.stop();
    engineRef.current = null;
    void ctxRef.current?.suspend();
    onRef.current = false;
    setOn(false);
    writeAmbientPreference(false);
  }, []);

  const toggle = useCallback(() => {
    if (onRef.current) stop();
    else void enable();
  }, [enable, stop]);

  const playSwara = useCallback(
    (swara: SwaraName, glide = false) => {
      void (async () => {
        if (!onRef.current) await enable();
        const engine = engineRef.current;
        if (!engine) return;
        const section = currentSection();
        const raga = ragaForSection(section);
        if (glide) engine.meendTo(raga, swara);
        else engine.playSwara(raga, swara, 1, true);
        setHud((h) => ({ ...h, raga, swara, section }));
      })();
    },
    [enable],
  );

  useEffect(() => {
    const tick = (energy: number, forceNote = false) => {
      if (!onRef.current) return;
      const engine = engineRef.current;
      if (!engine) return;
      const pos = Math.max(window.scrollX, window.scrollY);
      const section = currentSection();
      const raga = ragaForSection(section);
      if (section !== lastSectionRef.current) {
        engine.retuneTanpura(raga.saHz);
        lastSectionRef.current = section;
        matraRef.current = 0;
        engine.playSwara(raga, raga.aroha[0] ?? "Sa", 1, true);
      }
      const bpm = Math.min(120, Math.max(46, 48 + energy * 1.6));
      const interval = 60 / bpm;
      const now = performance.now() / 1000;
      if (!forceNote && now - lastBeatRef.current < interval) return;
      lastBeatRef.current = now;
      const bol = raga.taal.theka[matraRef.current % raga.taal.matras];
      engine.playBol(bol);
      const scale = raga.avaroha.length ? raga.avaroha : raga.aroha;
      const max = Math.max(
        1,
        document.documentElement.scrollWidth - window.innerWidth,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = max > 0 ? Math.min(1, Math.max(0, pos / max)) : 0;
      const idx = Math.min(
        scale.length - 1,
        forceNote
          ? matraRef.current % scale.length
          : Math.floor(progress * scale.length),
      );
      if (forceNote || idx !== lastSwaraIndexRef.current) {
        lastSwaraIndexRef.current = idx;
        engine.playSwara(raga, scale[idx], 1, true);
      }
      matraRef.current += 1;
      setHud({
        raga,
        swara: scale[idx],
        matra: (matraRef.current % raga.taal.matras) + 1,
        laya: layaName(bpm),
        section,
      });
    };

    const onScroll = () => {
      const pos = Math.max(window.scrollX, window.scrollY);
      const d = Math.abs(pos - lastPosRef.current);
      lastPosRef.current = pos;
      tick(d);
    };

    // Gentle Vilambit Laya pulse while Raga is enabled so it plays continuously even while reading
    const ambientPulse = window.setInterval(() => {
      if (onRef.current) {
        tick(4, true);
      }
    }, 1750);

    let dragging = false;
    const onDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("a,button,input,textarea,audio,[role='application']")) return;
      dragging = true;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      tick(Math.abs(e.movementY) + Math.abs(e.movementX) * 0.6);
    };
    const onUp = () => {
      dragging = false;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.clearInterval(ambientPulse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  useEffect(() => {
    return () => {
      engineRef.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  const value = useMemo(
    () => ({ on, hud, toggle, enable, playSwara }),
    [on, hud, toggle, enable, playSwara],
  );

  return <RagaCtx.Provider value={value}>{children}</RagaCtx.Provider>;
}

export function useRaga() {
  const ctx = useContext(RagaCtx);
  if (!ctx) {
    throw new Error("useRaga must be used within RagaProvider");
  }
  return ctx;
}
