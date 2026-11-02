'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/app/providers';
import type { Project } from '@/content/site';
import { T } from '@/lib/i18n';
import { ArrowUpRight, GitHub, Globe } from './icons';
import { Reveal } from './reveal';

export function ProjectView({ project, next }: { project: Project; next: Project }) {
  const { lang } = useLang();
  const d = project.detail;

  return (
    <article>
      <header className="project-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/work">{T.project.all[lang]}</Link>
            <span aria-hidden>/</span>
            <span>{project.title}</span>
          </nav>

          <Reveal className="stack">
            <span className="eyebrow">{project.client}</span>
            <h1 className="page-hero__title" style={{ maxWidth: '18ch' }}>
              {project.title}
            </h1>
            <p className="lead">{project.summary[lang]}</p>
          </Reveal>

          <div className="project-meta">
            <div>
              <div className="project-meta__label">{T.project.role[lang]}</div>
              <div className="project-meta__value">{project.role[lang]}</div>
            </div>
            <div>
              <div className="project-meta__label">{T.project.client[lang]}</div>
              <div className="project-meta__value">{project.client}</div>
            </div>
            <div>
              <div className="project-meta__label">{T.project.year[lang]}</div>
              <div className="project-meta__value">{project.year}</div>
            </div>
            <div>
              <div className="project-meta__label">{T.project.stack[lang]}</div>
              <div className="project-meta__value">{project.stack}</div>
            </div>
          </div>

          {(project.live || project.repo) && (
            <div className="hero__actions" style={{ marginTop: '1.5rem' }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer noopener" className="btn btn--brand btn--sm">
                  <Globe style={{ width: 15, height: 15 }} />
                  {T.project.live[lang]}
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer noopener" className="btn btn--ghost btn--sm">
                  <GitHub style={{ width: 15, height: 15 }} />
                  {T.project.repo[lang]}
                </a>
              )}
            </div>
          )}

          <div className="project-hero__media">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="aside-sticky">
              <span className="eyebrow">{T.project.context[lang]}</span>
              <h2 className="h2" style={{ marginTop: '1rem', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)' }}>
                {project.title}
              </h2>
            </div>
            <div className="prose">
              <p>{d.context[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="aside-sticky">
              <span className="eyebrow">{T.project.approach[lang]}</span>
            </div>
            <div className="steps">
              {d.approach[lang].map((item, i) => (
                <Reveal as="div" className="step" key={item.slice(0, 24)} delay={i * 50}>
                  <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                  <p className="step__text" style={{ fontSize: '1rem' }}>
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {d.quote && (
        <section className="section section--tight">
          <div className="container">
            <Reveal as="blockquote" className="pull">
              “{d.quote[lang]}”
            </Reveal>
          </div>
        </section>
      )}

      {d.gallery && d.gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="head">
              <div className="head__copy">
                <span className="eyebrow">{T.project.gallery[lang]}</span>
              </div>
            </div>
            <div className="gallery">
              {d.gallery.map((g, i) => (
                <Reveal as="figure" key={g.src} delay={i * 50}>
                  <div className={`gallery__media${g.fit === 'contain' ? ' gallery__media--contain' : ''}`}>
                    <Image
                      src={g.src}
                      alt={g.caption[lang]}
                      width={1200}
                      height={900}
                      sizes="(max-width: 700px) 100vw, 45vw"
                    />
                    <span className="gallery__caption">{g.caption[lang]}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section on-paper">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{T.project.craft[lang]}</span>
              <h2 className="h2" style={{ marginTop: '1rem' }}>
                {T.project.facts[lang]}
              </h2>
              <div className="facts" style={{ marginTop: '1.75rem' }}>
                {d.facts.map((f) => (
                  <div className="fact" key={f.label.en}>
                    <div className="fact__value">{f.value}</div>
                    <div className="fact__label">{f.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="prose">
              <p>{d.craft[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="next-project">
            <div>
              <span className="eyebrow">{T.project.next[lang]}</span>
              <h2 className="h2" style={{ marginTop: '0.75rem' }}>
                {next.title}
              </h2>
              <p className="small" style={{ marginTop: '0.5rem', maxWidth: '48ch' }}>
                {next.summary[lang]}
              </p>
            </div>
            <Link href={`/work/${next.slug}`} className="btn btn--brand">
              {T.project.next[lang]}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
