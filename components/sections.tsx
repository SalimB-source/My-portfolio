'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/app/providers';
import {
  CAPABILITIES,
  FACTS,
  LOGOS,
  PRINCIPLES,
  PROCESS,
  SITE,
  featuredProjects,
} from '@/content/site';
import { T } from '@/lib/i18n';
import { asset } from '@/lib/asset';
import { ProjectCard } from './project-card';
import { Reveal } from './reveal';
import { ArrowUpRight, Check } from './icons';

/** Thin marquee of disciplines, repeated twice for a seamless loop. */
export function DisciplineMarquee() {
  const { lang } = useLang();
  const items = T.marquee.map((m) => m[lang]);
  const run = [...items, ...items];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {run.map((label, i) => (
          <span className="marquee__item" key={`${label}-${i}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  accent,
  lead,
  side,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  side?: React.ReactNode;
}) {
  return (
    <Reveal className="head">
      <div className="head__copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">
          {title} {accent && <em className="accent">{accent}</em>}
        </h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {side && <div className="head__side">{side}</div>}
    </Reveal>
  );
}

export function FeaturedWork() {
  const { lang } = useLang();
  const projects = featuredProjects();

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHead
          eyebrow={T.featured.eyebrow[lang]}
          title={T.featured.title[lang]}
          accent={T.featured.titleAccent[lang]}
          lead={T.featured.lead[lang]}
          side={
            <Link href="/portfolio" className="link-arrow">
              {T.featured.all[lang]}
              <ArrowUpRight />
            </Link>
          }
        />

        <div className="work-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const { lang } = useLang();
  const items = CAPABILITIES[lang];

  return (
    <section className="section" id="capabilities">
      <div className="container">
        <SectionHead
          eyebrow={T.capabilities.eyebrow[lang]}
          title={T.capabilities.title[lang]}
          accent={T.capabilities.titleAccent[lang]}
          lead={T.capabilities.lead[lang]}
        />

        <div className="bento">
          {items.map((c, i) => (
            <Reveal as="article" key={c.num} delay={i * 60} className="tile">
              <span className="tile__num">{c.num}</span>
              <h3 className="tile__title">{c.title}</h3>
              <p className="tile__text">{c.text}</p>
              <ul className="tile__list">
                {c.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { lang } = useLang();
  const steps = PROCESS[lang];

  return (
    <section className="section on-paper" id="process">
      <div className="container">
        <div className="split">
          <div className="aside-sticky">
            <span className="eyebrow">{T.process.eyebrow[lang]}</span>
            <h2 className="h2" style={{ marginTop: '1rem' }}>
              {T.process.title[lang]} <em className="accent">{T.process.titleAccent[lang]}</em>
            </h2>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {T.process.lead[lang]}
            </p>
            <div className="facts" style={{ marginTop: '2rem' }}>
              <div className="fact">
                <div className="fact__value">{FACTS.yearsDesign}+</div>
                <div className="fact__label">{T.stats.years[lang]}</div>
              </div>
              <div className="fact">
                <div className="fact__value">3</div>
                <div className="fact__label">{T.stats.games[lang]}</div>
              </div>
            </div>
          </div>

          <div className="steps">
            {steps.map((s, i) => (
              <Reveal as="div" className="step" key={s.title} delay={i * 70}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  const { lang } = useLang();
  return (
    <section className="section section--tight" id="clients">
      <div className="container">
        <SectionHead
          eyebrow={T.clients.eyebrow[lang]}
          title={T.clients.title[lang]}
          lead={T.clients.lead[lang]}
          side={
            <a
              href={SITE.socials.iris}
              target="_blank"
              rel="noreferrer noopener"
              className="link-arrow"
            >
              Iris Studio
              <ArrowUpRight />
            </a>
          }
        />
        <div className="client-wall">
          {LOGOS.map((logo, i) => (
            <Reveal key={logo.name} delay={i * 45} className={`logo-plate logo-plate--${logo.plate}`}>
              <Image
                src={asset(logo.src)}
                alt={logo.name}
                width={180}
                height={70}
                style={{ height: logo.h ? `${logo.h + 22}px` : undefined }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  const { lang } = useLang();
  return (
    <section className="section" id="principles">
      <div className="container">
        <SectionHead
          eyebrow={T.principles.eyebrow[lang]}
          title={T.principles.title[lang]}
          accent={T.principles.titleAccent[lang]}
        />
        <div className="principles principles--grid">
          {PRINCIPLES[lang].map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 70} className="tile">
              <span className="tile__num">
                <Check style={{ width: 16, height: 16 }} />
              </span>
              <h3 className="tile__title">{p.title}</h3>
              <p className="tile__text">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { lang } = useLang();
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-band__row">
            <div className="stack">
              <span className="eyebrow">{T.cta.eyebrow[lang]}</span>
              <h2 className="cta-band__title">{T.cta.title[lang]}</h2>
              <p className="lead" style={{ maxWidth: '46ch' }}>
                {T.cta.lead[lang]}
              </p>
            </div>
            <div className="cta-band__actions">
              <Link href="/contact" className="btn btn--brand">
                {T.cta.primary[lang]}
                <ArrowUpRight />
              </Link>
              <Link href="/cv" className="btn btn--ghost">
                {T.cta.secondary[lang]}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
