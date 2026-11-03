import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const accents: Record<Project["accent"], string> = {
  terracotta: "from-terracotta/30",
  gold: "from-gold/35",
  forest: "from-forest/25",
  maroon: "from-maroon/30",
  charcoal: "from-charcoal/40",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden border border-gold/25 bg-charcoal-soft p-6 transition-colors hover:border-gold"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${accents[project.accent]} to-transparent opacity-80`}
      />
      <div className="relative">
        <p className="font-sans text-[0.62rem] tracking-[0.28em] text-gold uppercase">
          Case study
        </p>
        <h3 className="mt-4 font-display text-3xl text-ivory">{project.title}</h3>
        <p className="mt-2 max-w-md text-sm text-ivory/70">{project.subtitle}</p>
        <span className="mt-8 inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.24em] text-gold-bright uppercase">
          Open blueprint <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
