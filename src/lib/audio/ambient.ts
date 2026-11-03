const STORAGE_KEY = "odyssey-ambient";

export function readAmbientPreference() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) === "on";
}

export function writeAmbientPreference(on: boolean) {
  sessionStorage.setItem(STORAGE_KEY, on ? "on" : "off");
}

export function createTanpuraDrone(ctx: AudioContext) {
  const master = ctx.createGain();
  master.gain.value = 0.045;
  master.connect(ctx.destination);

  const freqs = [110, 165, 220, 329.63];
  const oscs = freqs.map((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = i === 0 ? "triangle" : "sine";
    osc.frequency.value = freq;
    filter.type = "lowpass";
    filter.frequency.value = 900;
    gain.gain.value = 0.2 / (i + 1);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start();
    return { osc, gain };
  });

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.08;
  lfoGain.gain.value = 0.012;
  lfo.connect(lfoGain);
  lfoGain.connect(master.gain);
  lfo.start();

  return {
    stop() {
      oscs.forEach(({ osc }) => osc.stop());
      lfo.stop();
      master.disconnect();
    },
  };
}
