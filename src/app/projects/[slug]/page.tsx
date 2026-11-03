import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { BlueprintFrame } from "@/components/architecture/BlueprintFrame";
import { ProjectDiagram } from "@/components/projects/ProjectDiagram";
import { GoldRule } from "@/components/architecture/GoldRule";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.subtitle };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { title: "Overview", body: project.overview },
    { title: "Problem", body: project.problem },
  ];

  return (
    <article className="bg-ivory pt-28 pb-24 text-ink">
      <Container>
        <Link
          href="/#workshop"
          className="font-sans text-[0.65rem] tracking-[0.28em] text-terracotta uppercase"
        >
          ← Workshop
        </Link>
        <p className="mt-8 font-sans text-[0.68rem] tracking-[0.32em] text-gold uppercase">
          Blueprint · {project.accent}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-forest/80">{project.subtitle}</p>
        <GoldRule className="my-10 max-w-sm" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-3xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-forest">{s.body}</p>
              </section>
            ))}
            <section>
              <h2 className="font-display text-3xl">Engineering decisions</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-forest">
                {project.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-3xl">Challenges</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-forest">
                {project.challenges.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-3xl">Results</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-forest">
                {project.results.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
            {project.forthcoming.length > 0 ? (
              <section>
                <h2 className="font-display text-3xl">Forthcoming</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-terracotta">
                  {project.forthcoming.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
          <aside className="space-y-6">
            <BlueprintFrame caption="Architectural schematic — original drawing from known facts">
              <ProjectDiagram project={project} />
            </BlueprintFrame>
            <div className="border border-gold/30 p-5">
              <p className="font-sans text-[0.65rem] tracking-[0.28em] text-terracotta uppercase">
                Stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="border border-charcoal/10 px-3 py-1 font-sans text-xs tracking-wide"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 font-sans text-sm">
              {project.github ? (
                <a href={project.github} className="text-maroon underline">
                  GitHub
                </a>
              ) : (
                <p className="text-forest/50">GitHub — forthcoming</p>
              )}
              {project.demo ? (
                <a href={project.demo} className="text-maroon underline">
                  Live demo
                </a>
              ) : (
                <p className="text-forest/50">Live demo — forthcoming</p>
              )}
              {project.sources?.map((s) => (
                <a key={s.href} href={s.href} className="text-maroon underline" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
