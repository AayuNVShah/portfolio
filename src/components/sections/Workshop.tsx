import { projects } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";

export function Workshop() {
  return (
    <section id="workshop" className="relative overflow-hidden bg-charcoal py-28 text-ivory">
      <JaaliPattern className="text-gold" opacity={0.08} />
      <Container className="relative">
        <ChapterHeading
          roman="III"
          kicker="The builder's workshop"
          title="Case studies drawn like blueprints."
          light
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
