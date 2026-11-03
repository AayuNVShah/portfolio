export type ProjectAccent = "terracotta" | "gold" | "forest" | "maroon" | "charcoal";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  accent: ProjectAccent;
  overview: string;
  problem: string;
  stack: string[];
  decisions: string[];
  challenges: string[];
  results: string[];
  forthcoming: string[];
  github?: string;
  demo?: string;
  sources?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "shaktis-shield",
    title: "Shakti's Shield",
    subtitle: "Real-time AI-powered scam call detection",
    accent: "terracotta",
    overview:
      "A safety-first guardrail that listens while a call is still happening — not after money or an OTP has already left the room. Built at GDG Ahmedabad's Garbathon for threats that show up as Digital Arrest scripts, fake KYC, and pressure for cash.",
    problem:
      "Scam detection that waits for a transcript after the call is too late. People need an interrupt in the moment: a beep, a full-screen warning, and guidance in Hindi or Gujarati that names the red flag.",
    stack: [
      "React",
      "Web Audio API",
      "Node.js",
      "Express",
      "Gemini (@google/genai)",
    ],
    decisions: [
      "Capture 4–5 second WAV chunks on the client instead of waiting for a full recording.",
      "Keep a pipeline scheduler for deduplication, queuing, and session state.",
      "Ask the model for structured JSON (red flags, evidence, severity, advice) and back it with deterministic policy — not a free-form verdict.",
      "Localise explanations and recommended actions in Hindi or Gujarati.",
    ],
    challenges: [
      "Streaming audio in short windows without drowning the model in overlapping chunks.",
      "False confidence: generative output had to be constrained so a hallucinated all-clear could not override a policy hit.",
    ],
    results: [
      "Working prototype with client capture, chunk analysis, and a UI shield for full-screen alerts.",
      "Architecture documented publicly after the Garbathon build.",
    ],
    forthcoming: ["Public repository URL (placeholder until supplied)."],
    sources: [
      {
        label: "LinkedIn build note",
        href: "https://www.linkedin.com/posts/aayushi-shah-310706270_devfestahm-genai-gemini-activity-7519756254789922816-2qmn",
      },
    ],
  },
  {
    slug: "sis-attendance-architecture",
    title: "Attendance migration & SIS architecture",
    subtitle: "Enterprise integrations for roster, timetable, and attendance",
    accent: "gold",
    overview:
      "End-to-end delivery of school-system integrations: external SIS connections, timetable and attendance migration, and bulk ingestion that has to remain correct when records arrive in layers.",
    problem:
      "Schools already keep truth in Student Information Systems. Moving attendance and timetables into another platform without double entry — and without losing history — is an engineering problem of contracts, volume, and time.",
    stack: ["Backend services", "Database query optimisation", "Temporal workflows", "Asynchronous pipelines"],
    decisions: [
      "Treat attendance as layered history, not a single current row.",
      "Use asynchronous and Temporal-based workflows for long-running migrations.",
      "Optimise queries and processing for bulk ingestion rather than chatty per-student writes.",
    ],
    challenges: [
      "Millions of layered attendance records with enterprise-specific quirks.",
      "Keeping 10+ integration projects coherent without one-off snowflakes everywhere.",
    ],
    results: [
      "Owned end-to-end delivery across 10+ enterprise integration projects.",
      "External SIS integrations, timetable and attendance migration pipelines, and scalable bulk ingestion in production work.",
    ],
    forthcoming: [
      "Internal diagrams and vendor names that cannot be published without clearance.",
    ],
  },
  {
    slug: "readability-rag",
    title: "AI-powered readability analysis",
    subtitle: "RAG and machine learning over language",
    accent: "forest",
    overview:
      "Readability and document understanding using retrieval-augmented generation and machine learning — making language measurable, and domain text queryable, instead of leaving quality as a gut feel.",
    problem:
      "Long-form and educational text is hard to judge consistently. Generative models help only when they are grounded in retrieved context rather than improvising a score.",
    stack: ["RAG", "LLMs", "NLP pipelines", "Machine learning"],
    decisions: [
      "Ground generative answers in retrieved passages rather than unconstrained completion.",
      "Keep an NLP pipeline around the model so scoring and retrieval stay inspectable.",
    ],
    challenges: [
      "Retrieval quality dominates perceived intelligence.",
      "Readability is cultural and contextual; a single metric is never the whole story.",
    ],
    results: [
      "Applied RAG and ML to readability analysis as part of the broader AI/ML practice.",
    ],
    forthcoming: [
      "Detailed architecture, datasets, and quantitative results — to be published when they can be shared.",
    ],
  },
  {
    slug: "cv2x-hazard-alerts",
    title: "C-V2X road hazard alerts",
    subtitle: "Real-time intelligent transportation for on-road safety",
    accent: "maroon",
    overview:
      "An intelligent transportation thread: detect hazard events on a pathway in real time and alert before a driver meets the danger. Related work includes a filed patent on real-time event detection for on-road safety infrastructure.",
    problem:
      "Hazards on a road are perishable. A system that notices a blocked path or an incident after the vehicle has passed is a log, not a warning.",
    stack: ["C-V2X concepts", "Real-time event detection", "Intelligent transportation"],
    decisions: [
      "Frame the problem as on-road safety infrastructure, not a dashboard after the fact.",
      "Pursue real-time detection of events on a pathway.",
    ],
    challenges: [
      "Latency budgets that compete with wireless and perception noise.",
      "The gap between a research prototype and a road that does not pause for your model.",
    ],
    results: [
      "Work on a C-V2X intelligent transportation system for road safety.",
      "Patent filed: “A System And A Method For Detecting An Event In Real Time” (no. 2025211055696) — status: filed. No additional claims are made here.",
    ],
    forthcoming: ["Public architecture diagram beyond the problem framing, pending shareable artefacts."],
  },
  {
    slug: "vehicle-counting",
    title: "Computer vision vehicle counting",
    subtitle: "Detection and counting from camera streams",
    accent: "charcoal",
    overview:
      "Vision work on vehicles in frame: counting, detection, and related number-plate recognition using YOLO-family object detection — intern work spanning TritiyAEye and the broader CV practice.",
    problem:
      "A camera sees a stream. Engineering has to turn that stream into counts you can trust, in lighting and occlusion that never match the training stills.",
    stack: ["YOLO", "Computer vision", "Object detection"],
    decisions: [
      "Use YOLO-style detectors for real-time vehicle localisation.",
      "Treat counting as a systems problem (identity over frames), not a single bounding box.",
    ],
    challenges: [
      "Occlusion, night lighting, and identity switches across frames.",
      "Number-plate recognition as a second, stricter vision task on top of detection.",
    ],
    results: [
      "Real-time vehicle detection and number-plate recognition using YOLO.",
      "Computer vision internship experience including vehicle counting.",
    ],
    forthcoming: ["Dataset details, mAP, and a public demo — forthcoming."],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
