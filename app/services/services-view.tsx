'use client';

import Link from 'next/link';
import { useLang } from '../providers';
import { T } from '@/lib/i18n';
import { Reveal } from '@/components/reveal';
import { Clients, CtaBand } from '@/components/sections';
import { ServiceList, ServiceProcess, SkillLevels } from '@/components/services';

export default function ServicesView() {
  const { lang } = useLang();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{T.nav.home[lang]}</Link>
            <span aria-hidden>/</span>
            <span>{T.services.eyebrow[lang]}</span>
          </nav>
          <Reveal>
            <span className="eyebrow">{T.services.eyebrow[lang]}</span>
            <h1 className="page-hero__title" style={{ marginTop: '1rem' }}>
              {T.services.title[lang]} <em className="accent">{T.services.titleAccent[lang]}</em>
            </h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {T.services.lead[lang]}
            </p>
            <div className="hero__actions" style={{ marginTop: '1.75rem' }}>
              <Link href="/contact" className="btn btn--brand">
                {T.services.cta[lang]}
              </Link>
              <Link href="/portfolio" className="btn btn--ghost">
                {T.services.back[lang]}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <ServiceList />
        </div>
      </section>

      <ServiceProcess />
      <SkillLevels showTools={false} />
      <Clients />
      <CtaBand />
    </>
  );
}
