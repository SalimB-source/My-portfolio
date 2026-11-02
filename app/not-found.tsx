'use client';

import Link from 'next/link';
import { useLang } from './providers';
import { T } from '@/lib/i18n';
import { ArrowUpRight } from '@/components/icons';

export default function NotFound() {
  const { lang } = useLang();
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '46rem' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          404
        </span>
        <h1 className="h2" style={{ marginBlock: '1rem' }}>
          {T.notFound.title[lang]}
        </h1>
        <p className="lead" style={{ margin: '0 auto 2rem' }}>
          {T.notFound.lead[lang]}
        </p>
        <Link href="/work" className="btn btn--brand">
          {T.notFound.cta[lang]}
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
