import { hzFor, type Bol, type Raga, type SwaraName } from "@/lib/audio/raga";

function envGain(ctx: AudioContext, peak: number, attack: number, release: number) {
  const g = ctx.createGain();
  const t = ctx.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
  return g;
}

export class ClassicalEngine {
  ctx: AudioContext;
  master: GainNode;
  tanpura: OscillatorNode[] = [];
  private tanpuraGains: GainNode[] = [];
  private lastSwara: OscillatorNode | null = null;
  private lastSwaraGain: GainNode | null = null;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.6;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -16;
    compressor.knee.value = 12;
    compressor.ratio.value = 3;
    this.master.connect(compressor);
    compressor.connect(ctx.destination);
  }

  startTanpura(saHz: number) {
    this.stopTanpura();
    const freqs = [saHz, saHz * 1.5, saHz * 2, saHz * 3, saHz * 4.01];
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      osc.type = i < 2 ? "triangle" : "sine";
      osc.frequency.value = freq;
      filter.type = "lowpass";
      filter.frequency.value = 2200;
      gain.gain.value = 0;
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.master);
      osc.start();
      gain.gain.linearRampToValueAtTime(0.18 / (i + 1), this.ctx.currentTime + 0.35);
      this.tanpura.push(osc);
      this.tanpuraGains.push(gain);
    });
  }

  retuneTanpura(saHz: number) {
    if (this.tanpura.length < 5) {
      this.startTanpura(saHz);
      return;
    }
    const freqs = [saHz, saHz * 1.5, saHz * 2, saHz * 3, saHz * 4.01];
    this.tanpura.forEach((osc, i) => {
      osc.frequency.exponentialRampToValueAtTime(freqs[i], this.ctx.currentTime + 0.5);
    });
  }

  stopTanpura() {
    this.tanpura.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
    });
    this.tanpura = [];
    this.tanpuraGains = [];
  }

  playSwara(raga: Raga, swara: SwaraName, octave = 1, glide = false) {
    const freq = hzFor(raga.saHz, swara, octave);
    const osc = this.ctx.createOscillator();
    const partial = this.ctx.createOscillator();
    const gain = envGain(this.ctx, 0.28, 0.025, 1.35);
    const filter = this.ctx.createBiquadFilter();
    osc.type = "sine";
    partial.type = "triangle";
    osc.frequency.value = freq;
    partial.frequency.value = freq * 2;
    filter.type = "lowpass";
    filter.frequency.value = 2400;
    if (glide && this.lastSwara) {
      const from = this.lastSwara.frequency.value || freq;
      osc.frequency.setValueAtTime(from, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(Math.max(freq, 40), this.ctx.currentTime + 0.16);
    }
    osc.connect(filter);
    partial.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    osc.start();
    partial.start();
    osc.stop(this.ctx.currentTime + 1.45);
    partial.stop(this.ctx.currentTime + 1.45);
    this.lastSwara = osc;
    this.lastSwaraGain = gain;
  }

  meendTo(raga: Raga, swara: SwaraName, octave = 1) {
    const freq = hzFor(raga.saHz, swara, octave);
    if (this.lastSwara && this.lastSwaraGain) {
      this.lastSwara.frequency.exponentialRampToValueAtTime(
        Math.max(freq, 40),
        this.ctx.currentTime + 0.12,
      );
      this.lastSwaraGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.lastSwaraGain.gain.setValueAtTime(0.24, this.ctx.currentTime);
      this.lastSwaraGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.1);
      return;
    }
    this.playSwara(raga, swara, octave, true);
  }

  playBol(bol: Bol) {
    if (bol === "-") return;
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.12, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    const noiseGain = this.ctx.createGain();
    const tone = this.ctx.createOscillator();
    const toneGain = this.ctx.createGain();

    const map: Record<Exclude<Bol, "-">, { f: number; n: number; type: BiquadFilterType }> = {
      Dha: { f: 110, n: 0.16, type: "lowpass" },
      Dhin: { f: 135, n: 0.11, type: "lowpass" },
      Dhi: { f: 145, n: 0.11, type: "lowpass" },
      Na: { f: 410, n: 0.14, type: "highpass" },
      Tin: { f: 560, n: 0.1, type: "bandpass" },
      Ta: { f: 700, n: 0.12, type: "highpass" },
      Ti: { f: 520, n: 0.09, type: "bandpass" },
    };
    const spec = map[bol];
    noiseFilter.type = spec.type;
    noiseFilter.frequency.value = spec.f * 4;
    noiseGain.gain.setValueAtTime(spec.n, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    tone.type = "sine";
    tone.frequency.value = spec.f;
    toneGain.gain.setValueAtTime(0.32, t);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.master);
    tone.connect(toneGain);
    toneGain.connect(this.master);
    noise.start(t);
    tone.start(t);
    noise.stop(t + 0.14);
    tone.stop(t + 0.27);
  }

  stop() {
    this.stopTanpura();
    this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.2);
  }
}
