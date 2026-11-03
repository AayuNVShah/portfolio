import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWriting, writings } from "@/data/writings";
import { Container } from "@/components/shared/Container";
import type { Metadata } from "next";

export function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = getWriting(slug);
  if (!writing) return {};
  return { title: writing.title, description: writing.summary };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWriting(slug);
  if (!writing) notFound();

  let source = "";
  try {
    source = await readFile(
      path.join(process.cwd(), "src/content/writings", `${slug}.mdx`),
      "utf8",
    );
  } catch {
    source = writing.summary;
  }

  return (
    <article className="min-h-svh bg-[#f7f1e6] pt-28 pb-24 text-ink">
      <Container className="max-w-3xl">
        <Link
          href="/writings"
          className="font-sans text-[0.65rem] tracking-[0.28em] text-terracotta uppercase"
        >
          ← Journal
        </Link>
        <p className="mt-8 font-sans text-[0.65rem] tracking-[0.3em] text-terracotta uppercase">
          {writing.category} · {writing.date}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{writing.title}</h1>
        <div className="prose-odyssey mt-10 space-y-5 text-lg leading-relaxed text-forest">
          <MDXRemote source={source} />
        </div>
        {writing.href ? (
          <p className="mt-12 font-sans text-sm">
            <a href={writing.href} className="text-maroon underline" target="_blank" rel="noreferrer">
              Original LinkedIn note
            </a>
          </p>
        ) : null}
      </Container>
    </article>
  );
}
