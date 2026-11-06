'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './providers';
import { FACTS, SITE } from '@/content/site';
import { T } from '@/lib/i18n';
import { asset } from '@/lib/asset';
import { HeroShowcase } from '@/components/hero-showcase';
import { Clients, DisciplineMarquee, FeaturedWork } from '@/components/sections';
import { GetInTouch, SkillLevels, WhatIDo, WhoAmI } from '@/components/services';
import { ArrowDown, ArrowUpRight } from '@/components/icons';
import { Reveal } from '@/components/reveal';

export default function HomeView() {
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
                <div className="hero__id">
                  <Image
                    src={asset('/images/profile/portrait.jpg')}
                    alt={`Portrait of ${SITE.name}`}
                    width={64}
                    height={64}
                    className="hero__avatar"
                    priority
                  />
                  <span className="chip chip--live">
                    <span className="dot-live" aria-hidden />
                    {h.eyebrow[lang]}
                  </span>
                </div>
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
                <Link href="/portfolio" className="btn btn--brand">
                  {h.primary[lang]}
                  <ArrowUpRight />
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  {lang === 'fr' ? 'Les services' : 'What I do'}
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
      <WhoAmI />
      <WhatIDo />
      <FeaturedWork />
      <SkillLevels />
      <Clients />
      <GetInTouch />
    </>
  );
}
