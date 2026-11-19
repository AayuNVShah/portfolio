import Link from "next/link";
import { projects } from "@/data/projects";
import { ChapterHeading } from "@/components/shared/ChapterHeading";
import { Panel, PanelColumn } from "@/components/shared/Panel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JaaliPattern } from "@/components/architecture/JaaliPattern";
import { TempleFrame } from "@/components/architecture/TempleFrame";

export function Workshop() {
  return (
    <Panel
      id="workshop"
      className="bg-charcoal text-ivory"
      decor={
        <>
          <JaaliPattern className="text-gold" opacity={0.08} variant="star" patternId="jaali-workshop" />
          <TempleFrame tone="dark" />
        </>
      }
    >
      <PanelColumn className="w-[min(24rem,80vw)]">
        <ChapterHeading
          roman="III"
          kicker="The builder's workshop"
          title="Case studies drawn like blueprints."
          light
        />
        <Link
          href="/projects"
          className="mt-8 inline-flex font-sans text-[0.68rem] tracking-[0.28em] text-gold-bright uppercase hover:text-gold"
        >
          All case studies →
        </Link>
      </PanelColumn>

      {/* Two rows that grow sideways as projects are added */}
      <PanelColumn className="grid auto-cols-[min(21rem,80vw)] grid-flow-col grid-rows-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </PanelColumn>
    </Panel>
  );
}
