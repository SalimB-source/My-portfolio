'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/app/providers';
import { asset } from '@/lib/asset';
import type { Project } from '@/content/site';
import { ArrowUpRight } from './icons';
import { useReveal } from './use-reveal';

export function ProjectCard({
  project,
  priority = false,
  delay = 0,
}: {
  project: Project;
  priority?: boolean;
  delay?: number;
}) {
  const { lang } = useLang();
  const ref = useReveal<HTMLAnchorElement>(delay);
  const sizeClass =
    project.cardSize === 'wide' ? 'card--wide' : project.cardSize === 'half' ? 'card--half' : '';

  return (
    <Link
      ref={ref}
      href={`/portfolio/${project.slug}`}
      className={`card reveal ${sizeClass}`.trim()}
      aria-label={`${project.title} — ${project.role[lang]}`}
    >
      <div className="card__media">
        <Image
          src={asset(project.cover)}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 45vw"
          style={{ objectFit: 'cover' }}
          priority={priority}
        />
        <span className="card__badge">{project.year}</span>
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span>{project.client}</span>
          <span>{project.stack}</span>
        </div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.summary[lang]}</p>
        <div className="card__foot">
          <span className="mono">{project.role[lang]}</span>
          <span className="card__go" aria-hidden>
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
