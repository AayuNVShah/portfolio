export type ChapterId =
  | "prologue"
  | "person"
  | "craft"
  | "workshop"
  | "journal"
  | "beyond"
  | "epilogue";

export const chapters: {
  id: ChapterId;
  roman: string;
  label: string;
  href: string;
}[] = [
  { id: "prologue", roman: "00", label: "Prologue", href: "#prologue" },
  { id: "person", roman: "I", label: "The Person", href: "#person" },
  { id: "craft", roman: "II", label: "The Craft", href: "#craft" },
  { id: "workshop", roman: "III", label: "The Workshop", href: "#workshop" },
  { id: "journal", roman: "IV", label: "The Journal", href: "#journal" },
  { id: "beyond", roman: "V", label: "Beyond Code", href: "#beyond" },
  { id: "epilogue", roman: "∞", label: "Epilogue", href: "#epilogue" },
];

export const voiceCommands: { phrases: string[]; target: ChapterId }[] = [
  {
    phrases: ["show me your projects", "projects", "workshop", "builder"],
    target: "workshop",
  },
  {
    phrases: ["tell me about yourself", "about", "who are you", "person"],
    target: "person",
  },
  {
    phrases: ["take me to my experience", "experience", "craft", "work"],
    target: "craft",
  },
  {
    phrases: [
      "show my technical writing",
      "writing",
      "journal",
      "articles",
      "blog",
    ],
    target: "journal",
  },
  {
    phrases: ["go to contact", "contact", "email", "courtyard", "epilogue"],
    target: "epilogue",
  },
];
