'use client';

import Link from 'next/link';
import { useLang } from '../providers';
import { EDUCATION, EXPERIENCE, PROJECTS, SITE, SKILLS } from '@/content/site';
import { T } from '@/lib/i18n';
import { ArrowRight, Download } from '@/components/icons';

export default function CvPage() {
  const { lang } = useLang();
  const c = T.cv;
  const skills = SKILLS[lang];
  const selected = PROJECTS.filter((p) => p.featured).slice(0, 5);

  return (
    <div className="container cv">
      <div className="cv__toolbar no-print">
        <button type="button" className="btn btn--brand btn--sm" onClick={() => window.print()}>
          <Download />
          {c.print[lang]}
        </button>
        <Link href="/" className="btn btn--ghost btn--sm">
          {c.back[lang]}
        </Link>
      </div>

      <header className="cv__head">
        <div>
          <h1 className="cv__name">{SITE.name}</h1>
          <p className="cv__role">
            {lang === 'fr'
              ? 'Graphic designer · Direction artistique · Web design & front-end assistés par IA'
              : 'Graphic designer · Art direction · AI-assisted web design & front-end'}
          </p>
        </div>
        <div className="cv__contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
          <span>{SITE.location[lang]}</span>
          <a href={SITE.socials.linkedin}>linkedin.com/in/salim-benmokhtar</a>
          <a href={SITE.socials.github}>github.com/SalimB-source</a>
        </div>
      </header>

      <section>
        <h2>{c.profile[lang]}</h2>
        <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--muted)', maxWidth: '70ch' }}>
          {c.profileText[lang]}
        </p>
      </section>

      <section>
        <h2>{T.about.expTitle[lang]}</h2>
        {EXPERIENCE.map((job) => (
          <div className="cv__job" key={job.when}>
            <div className="cv__job-head">
              <span className="cv__job-title">{job.title[lang]}</span>
              <span className="cv__job-when">{job.when}</span>
            </div>
            <div className="cv__job-company">{job.where}</div>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '0.3rem', lineHeight: 1.55 }}>
              {job.text[lang]}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2>{c.selected[lang]}</h2>
        <div className="cv__two">
          {selected.map((p) => (
            <div key={p.slug}>
              <div className="cv__job-head">
                <span className="cv__job-title">{p.title}</span>
                <span className="cv__job-when">{p.year}</span>
              </div>
              <div className="cv__job-company">{p.role[lang]}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
                {p.summary[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {EDUCATION.length > 0 && (
        <section>
          <h2>{lang === 'fr' ? 'Formation' : 'Education'}</h2>
          {EDUCATION.map((ed) => (
            <div className="cv__job" key={ed.when}>
              <div className="cv__job-head">
                <span className="cv__job-title">{ed.title[lang]}</span>
                <span className="cv__job-when">{ed.when}</span>
              </div>
              <div className="cv__job-company">{ed.where}</div>
            </div>
          ))}
        </section>
      )}

      <section>
        <h2>{T.about.skillsTitle[lang]}</h2>
        <div className="cv__skills">
          {Object.values(skills).map((group) => (
            <div key={group.title} className="cv__skill-row">
              <strong>{group.title}</strong>
              <span>{group.items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{lang === 'fr' ? 'Réalisations marquantes' : 'Selected achievements'}</h2>
        <ul className="bullets">
          {(lang === 'fr'
            ? [
                'Design system et 18 feuilles de style en deux thèmes pour Let’s Play ; 9 articles par jour, 4 desks éditoriaux, 1 059 images produites.',
                'Le Sablier de Bab El : 18 plateaux peints et 422 illustrations de cartes réunies sous une seule grille de cadres.',
                'Vice City Rush : documentation du Nürburgring Nordschleife (20,8 km, 73 virages) transposée en boucle jouable de 1 200 m.',
                'Progression par joueur dans Supabase (RLS + fusion hors ligne) partagée entre web, app PC et Android.',
                'Campagnes nationales pour Algérie Télécom (Let’s Play) et Djezzy (7ouma Arena) chez Iris Studio.',
              ]
            : [
                'Design system and 18 style sheets in two themes for Let’s Play; 9 articles a day, 4 editorial desks, 1,059 images produced.',
                'Le Sablier de Bab El: 18 painted boards and 422 card artworks held together by a single frame grid.',
                'Vice City Rush: the Nürburgring Nordschleife (20.8 km, 73 corners) documented and translated into a 1,200 m playable loop.',
                'Per-player progression in Supabase (RLS + offline merge) shared across web, desktop and Android builds.',
                'National campaigns for Algérie Télécom (Let’s Play) and Djezzy (7ouma Arena) at Iris Studio.',
              ]
          ).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <div className="cv__two">
        <section>
          <h2>{c.languages[lang]}</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{c.languagesText[lang]}</p>
        </section>
        <section>
          <h2>{c.eligibility[lang]}</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{c.eligibilityText[lang]}</p>
        </section>
      </div>

      <section className="no-print">
        <h2>{T.contact.eyebrow[lang]}</h2>
        <div className="cv__toolbar" style={{ marginBottom: 0 }}>
          <a className="btn btn--brand btn--sm" href={`mailto:${SITE.email}`}>
            {T.contact.email[lang]}
            <ArrowRight />
          </a>
          <Link className="btn btn--ghost btn--sm" href="/contact">
            {T.header.cta[lang]}
          </Link>
        </div>
      </section>
    </div>
  );
}
