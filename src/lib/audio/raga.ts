export type SwaraName =
  | "Sa"
  | "re"
  | "Re"
  | "ga"
  | "Ga"
  | "Ma"
  | "Ma#"
  | "Pa"
  | "dha"
  | "Dha"
  | "ni"
  | "Ni";

export type Bol = "Dha" | "Dhin" | "Dhi" | "Na" | "Tin" | "Ta" | "Ti" | "-";

export type Taal = {
  name: string;
  matras: number;
  theka: Bol[];
};

export type Raga = {
  name: string;
  time: string;
  mood: string;
  saHz: number;
  aroha: SwaraName[];
  avaroha: SwaraName[];
  taal: Taal;
};

/** Just-intonation ratios from Sa — closer to Hindustani shruti than equal temperament. */
export const SHRUTI: Record<SwaraName, number> = {
  Sa: 1,
  re: 16 / 15,
  Re: 9 / 8,
  ga: 6 / 5,
  Ga: 5 / 4,
  Ma: 4 / 3,
  "Ma#": 45 / 32,
  Pa: 3 / 2,
  dha: 8 / 5,
  Dha: 5 / 3,
  ni: 9 / 5,
  Ni: 15 / 8,
};

export const SA_HZ = 130.81;

export const TEENTAAL: Taal = {
  name: "Teentaal",
  matras: 16,
  theka: [
    "Dha",
    "Dhin",
    "Dhin",
    "Dha",
    "Dha",
    "Dhin",
    "Dhin",
    "Dha",
    "Dha",
    "Tin",
    "Tin",
    "Ta",
    "Ta",
    "Dhin",
    "Dhin",
    "Dha",
  ],
};

export const DADRA: Taal = {
  name: "Dadra",
  matras: 6,
  theka: ["Dha", "Dhin", "Na", "Dha", "Tin", "Na"],
};

export const RUPAK: Taal = {
  name: "Rupak",
  matras: 7,
  theka: ["Tin", "Tin", "Na", "Dhin", "Na", "Dhin", "Na"],
};

export const JHAPTAAL: Taal = {
  name: "Jhaptaal",
  matras: 10,
  theka: ["Dhi", "Na", "Dhi", "Dhi", "Na", "Ti", "Na", "Dhi", "Dhi", "Na"],
};

export const EKTAAL: Taal = {
  name: "Ektaal",
  matras: 12,
  theka: [
    "Dhin",
    "Dhin",
    "Dha",
    "Ti",
    "Na",
    "Ka",
    "Tin",
    "Tin",
    "Dha",
    "Ti",
    "Na",
    "Ka",
  ].map((b) => (b === "Ka" ? "Ta" : b)) as Bol[],
};

export const RAGAS: Record<string, Raga> = {
  prologue: {
    name: "Yaman",
    time: "Evening · golden hour",
    mood: "Expansive, luminous",
    saHz: SA_HZ,
    aroha: ["Ni", "Re", "Ga", "Ma#", "Dha", "Ni", "Sa"],
    avaroha: ["Sa", "Ni", "Dha", "Pa", "Ma#", "Ga", "Re", "Sa"],
    taal: TEENTAAL,
  },
  person: {
    name: "Bhairav",
    time: "Dawn",
    mood: "Grave, architectural",
    saHz: SA_HZ,
    aroha: ["Sa", "re", "Ga", "Ma", "Pa", "dha", "Ni", "Sa"],
    avaroha: ["Sa", "Ni", "dha", "Pa", "Ma", "Ga", "re", "Sa"],
    taal: EKTAAL,
  },
  craft: {
    name: "Bhimpalasi",
    time: "Afternoon",
    mood: "Measured, unfolding",
    saHz: SA_HZ,
    aroha: ["Ni", "Sa", "ga", "Ma", "Pa", "ni", "Sa"],
    avaroha: ["Sa", "ni", "Dha", "Pa", "Ma", "ga", "Re", "Sa"],
    taal: JHAPTAAL,
  },
  workshop: {
    name: "Malkauns",
    time: "Late night",
    mood: "Deep, pentatonic",
    saHz: SA_HZ * 0.75,
    aroha: ["Sa", "ga", "Ma", "dha", "ni", "Sa"],
    avaroha: ["Sa", "ni", "dha", "Ma", "ga", "Sa"],
    taal: RUPAK,
  },
  journal: {
    name: "Brindavani Sarang",
    time: "Midday",
    mood: "Clear, manuscript",
    saHz: SA_HZ,
    aroha: ["Sa", "Re", "Ma", "Pa", "Ni", "Sa"],
    avaroha: ["Sa", "Ni", "Pa", "Ma", "Re", "Sa"],
    taal: DADRA,
  },
  beyond: {
    name: "Bageshri",
    time: "Night",
    mood: "Intimate, lyrical",
    saHz: SA_HZ,
    aroha: ["ni", "Sa", "ga", "Ma", "Dha", "ni", "Sa"],
    avaroha: ["Sa", "ni", "Dha", "Ma", "Pa", "Ma", "ga", "Re", "Sa"],
    taal: DADRA,
  },
  epilogue: {
    name: "Yaman Kalyan",
    time: "Evening courtyard",
    mood: "Return, resolution",
    saHz: SA_HZ,
    aroha: ["Ni", "Re", "Ga", "Ma#", "Pa", "Dha", "Ni", "Sa"],
    avaroha: ["Sa", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"],
    taal: TEENTAAL,
  },
};

export function hzFor(sa: number, swara: SwaraName, octave = 0) {
  return sa * SHRUTI[swara] * 2 ** octave;
}

export function ragaForSection(id: string) {
  return RAGAS[id] ?? RAGAS.prologue;
}
