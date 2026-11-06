'use client';

import Link from 'next/link';
import { useLang } from './../providers';
import { T } from '@/lib/i18n';
import { PortfolioIndex } from '@/components/portfolio-index';
import { CtaBand, DisciplineMarquee } from '@/components/sections';
import { Reveal } from '@/components/reveal';

export default function PortfolioView() {
  const { lang } = useLang();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{T.nav.home[lang]}</Link>
            <span aria-hidden>/</span>
            <span>{T.portfolio.eyebrow[lang]}</span>
          </nav>
          <Reveal>
            <span className="eyebrow">{T.portfolio.eyebrow[lang]}</span>
            <h1 className="page-hero__title" style={{ marginTop: '1rem' }}>
              {T.portfolio.title[lang]} <em className="accent">{T.portfolio.titleAccent[lang]}</em>
            </h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {T.portfolio.lead[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <PortfolioIndex />
        </div>
      </section>

      <DisciplineMarquee />
      <CtaBand />
    </>
  );
}
