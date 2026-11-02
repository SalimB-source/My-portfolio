'use client';

import Link from 'next/link';
import { useLang } from './../providers';
import { T } from '@/lib/i18n';
import { WorkIndex } from '@/components/work-index';
import { CtaBand, DisciplineMarquee } from '@/components/sections';
import { Reveal } from '@/components/reveal';

export default function WorkPage() {
  const { lang } = useLang();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>{T.work.eyebrow[lang]}</span>
          </nav>
          <Reveal>
            <span className="eyebrow">{T.work.eyebrow[lang]}</span>
            <h1 className="page-hero__title" style={{ marginTop: '1rem' }}>
              {T.work.title[lang]} <em className="accent">{T.work.titleAccent[lang]}</em>
            </h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {T.work.lead[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <WorkIndex />
        </div>
      </section>

      <DisciplineMarquee />
      <CtaBand />
    </>
  );
}
