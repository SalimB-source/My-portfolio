import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PROJECTS } from '@/content/site';
import { ProjectView } from '@/components/project-view';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.summary.en,
    openGraph: {
      title: `${project.title} — Salim Benmokhtar`,
      description: project.summary.en,
      images: [{ url: project.cover, alt: project.coverAlt }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return <ProjectView project={project} next={next} />;
}
