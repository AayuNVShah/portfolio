export type ExperienceItem = {
  id: string;
  organisation: string;
  role: string;
  period: string;
  kind: "current" | "previous";
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "toddle",
    organisation: "Toddle",
    role: "Software Engineer, Integrations",
    period: "Nov 2025 — Present",
    kind: "current",
    summary:
      "Owning the connective tissue between Toddle and the systems schools already live in — SIS platforms, attendance, and timetable data that must stay consistent at enterprise scale.",
    highlights: [
      "Owned end-to-end delivery across 10+ enterprise integration projects.",
      "Built external SIS integrations.",
      "Designed timetable and attendance migration pipelines.",
      "Worked with millions of layered attendance records.",
      "Built scalable bulk ingestion workflows.",
      "Optimised database queries and data processing.",
      "Implemented asynchronous and Temporal-based workflows.",
    ],
  },
  {
    id: "playpower",
    organisation: "Playpower Labs",
    role: "Software Development Engineer / Software Intern",
    period: "Mar 2025 — Oct 2025",
    kind: "previous",
    summary:
      "AI/ML engineering on learning products — moving from intern to engineer while shipping applied machine learning in production-shaped environments.",
    highlights: ["AI/ML engineering on next-generation learning products."],
  },
  {
    id: "einfochips",
    organisation: "eInfochips (An Arrow Company)",
    role: "Project Intern",
    period: "May 2024 — Jun 2024",
    kind: "previous",
    summary:
      "Explored generative AI and retrieval-augmented generation as a way to make documents and domain knowledge queryable.",
    highlights: ["Generative AI and RAG-based applications."],
  },
  {
    id: "tritiy",
    organisation: "IIT Madras / TritiyAEye",
    role: "Intern",
    period: "Jun 2024 — Nov 2024",
    kind: "previous",
    summary:
      "Computer vision in the wild: detection, counting, and the distance between a clean demo and a camera on a road.",
    highlights: ["Computer vision internships spanning detection and counting."],
  },
];
