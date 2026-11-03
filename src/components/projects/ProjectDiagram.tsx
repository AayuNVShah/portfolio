import type { Project } from "@/data/projects";

export function ProjectDiagram({ project }: { project: Project }) {
  const nodes =
    project.slug === "shaktis-shield"
      ? ["Mic / WAV chunks", "Pipeline scheduler", "Express /analyze-chunk", "Gemini JSON", "UI Shield"]
      : project.slug === "sis-attendance-architecture"
        ? ["External SIS", "Contract layer", "Temporal workflows", "Bulk ingest", "Attendance store"]
        : project.slug === "readability-rag"
          ? ["Corpus", "Retriever", "LLM", "Readability score", "Reviewer"]
          : project.slug === "cv2x-hazard-alerts"
            ? ["Road sensors", "Event detect", "C-V2X broadcast", "Vehicle alert"]
            : ["Camera", "YOLO detect", "Track / count", "Plate OCR"];

  return (
    <svg viewBox="0 0 640 220" className="h-auto w-full text-gold" aria-label="Architecture diagram">
      {nodes.map((node, i) => {
        const x = 24 + i * (600 / Math.max(nodes.length - 1, 1));
        return (
          <g key={node}>
            {i < nodes.length - 1 ? (
              <line
                x1={x + 70}
                y1="90"
                x2={24 + (i + 1) * (600 / Math.max(nodes.length - 1, 1)) - 8}
                y2="90"
                stroke="currentColor"
                strokeWidth="1"
              />
            ) : null}
            <rect
              x={x}
              y="58"
              width="120"
              height="64"
              fill="#171715"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x={x + 60}
              y="96"
              textAnchor="middle"
              fill="#f4efe5"
              fontSize="11"
              fontFamily="Manrope, sans-serif"
            >
              {node}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
