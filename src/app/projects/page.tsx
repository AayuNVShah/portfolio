import { projects } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Cinematic case studies from the builder's workshop.",
};

export default function ProjectsIndex() {
  return (
    <main className="min-h-svh bg-charcoal pt-28 pb-24">
      <Container>
        <p className="font-sans text-[0.68rem] tracking-[0.42em] text-gold uppercase">
          Chapter III
        </p>
        <h1 className="mt-3 font-display text-5xl text-ivory sm:text-7xl">The Builder&apos;s Workshop</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
