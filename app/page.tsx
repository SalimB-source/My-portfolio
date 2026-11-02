'use client';

import Link from 'next/link';
import { useLang } from './providers';
import { FACTS, SITE } from '@/content/site';
import { T } from '@/lib/i18n';
import { HeroShowcase } from '@/components/hero-showcase';
import {
  Capabilities,
  Clients,
  CtaBand,
  DisciplineMarquee,
  FeaturedWork,
  Principles,
  Process,
} from '@/components/sections';
import { ArrowDown, ArrowUpRight } from '@/components/icons';
import { Reveal } from '@/components/reveal';

export default function HomePage() {
  const { lang } = useLang();
  const h = T.hero;

  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden />
        <div className="container">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal>
                <span className="chip chip--live">
                  <span className="dot-live" aria-hidden />
                  {h.eyebrow[lang]}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="display hero__title">
                  {h.titleA[lang]} <br />
                  {h.titleB[lang]} <em className="accent">{h.titleC[lang]}</em>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="lead">{h.lead[lang]}</p>
              </Reveal>

              <Reveal delay={220} className="hero__roles">
                <span className="chip">{h.roles.a[lang]}</span>
                <span className="chip">{h.roles.b[lang]}</span>
                <span className="chip">{h.roles.c[lang]}</span>
                <span className="chip">{h.roles.d[lang]}</span>
              </Reveal>

              <Reveal delay={280} className="hero__actions">
                <Link href="/work" className="btn btn--brand">
                  {h.primary[lang]}
                  <ArrowUpRight />
                </Link>
                <Link href="/cv" className="btn btn--ghost">
                  {h.secondary[lang]}
                  <ArrowDown />
                </Link>
              </Reveal>

              <Reveal delay={340} className="hero__stats">
                <div>
                  <span className="stat__value">
                    {FACTS.yearsDesign}
                    <em>+</em>
                  </span>
                  <span className="stat__label">{T.stats.years[lang]}</span>
                </div>
                <div>
                  <span className="stat__value">{FACTS.gamesBuilt}</span>
                  <span className="stat__label">{T.stats.games[lang]}</span>
                </div>
                <div>
                  <span className="stat__value">{FACTS.cards}</span>
                  <span className="stat__label">{T.stats.cards[lang]}</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroShowcase />
            </Reveal>
          </div>
        </div>
      </section>

      <DisciplineMarquee />
      <FeaturedWork />
      <Capabilities />
      <Process />
      <Clients />
      <Principles />
      <CtaBand />
    </>
  );
}
