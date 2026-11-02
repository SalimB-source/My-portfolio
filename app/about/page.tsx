'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../providers';
import { EXPERIENCE, PRINCIPLES, SITE, SKILLS } from '@/content/site';
import { T } from '@/lib/i18n';
import { Reveal } from '@/components/reveal';
import { CtaBand } from '@/components/sections';
import { ArrowUpRight, GitHub, Instagram, LinkedIn, Mail } from '@/components/icons';

export default function AboutPage() {
  const { lang } = useLang();
  const a = T.about;
  const skills = SKILLS[lang];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>{a.eyebrow[lang]}</span>
          </nav>

          <div className="about-hero">
            <Reveal className="stack">
              <span className="eyebrow">{a.eyebrow[lang]}</span>
              <h1 className="page-hero__title">
                {a.title[lang]} <em className="accent">{a.titleAccent[lang]}</em>
              </h1>
              <p className="lead">{a.lead[lang]}</p>
            </Reveal>

            <Reveal delay={140} className="portrait">
              <Image
                src="/images/profile/portrait.jpg"
                alt="Portrait of Salim Benmokhtar"
                width={687}
                height={917}
                priority
              />
              <span className="portrait__tag">
                <strong>{a.portraitTag[lang]}</strong>
                <span>{a.portraitSub[lang]}</span>
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="aside-sticky">
              <span className="eyebrow">{a.storyTitle[lang]}</span>
              <div className="facts" style={{ marginTop: '1.5rem' }}>
                <div className="fact">
                  <div className="fact__value">10 yrs</div>
                  <div className="fact__label">{T.stats.years[lang]}</div>
                </div>
                <div className="fact">
                  <div className="fact__value">3</div>
                  <div className="fact__label">{T.stats.games[lang]}</div>
                </div>
                <div className="fact">
                  <div className="fact__value">422</div>
                  <div className="fact__label">{T.stats.cards[lang]}</div>
                </div>
                <div className="fact">
                  <div className="fact__value">FR · AR · EN</div>
                  <div className="fact__label">{lang === 'fr' ? 'Langues de travail' : 'Working languages'}</div>
                </div>
              </div>
            </div>

            <div className="prose">
              {a.story[lang].map((p, i) => (
                <Reveal as="p" key={i} delay={i * 60}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section on-paper">
        <div className="container">
          <Reveal className="head">
            <div className="head__copy">
              <span className="eyebrow">{a.expTitle[lang]}</span>
              <h2 className="h2">10+ {lang === 'fr' ? 'années, trois chapitres' : 'years, three chapters'}</h2>
            </div>
            <div className="head__side">
              <Link href="/cv" className="link-arrow">
                {T.cta.secondary[lang]}
                <ArrowUpRight />
              </Link>
            </div>
          </Reveal>

          <div className="timeline">
            {EXPERIENCE.map((job, i) => (
              <Reveal as="div" className="tl" key={job.when} delay={i * 60}>
                <span className="tl__when">{job.when}</span>
                <div>
                  <h3 className="tl__title">{job.title[lang]}</h3>
                  <div className="tl__where">{job.where}</div>
                  <p className="tl__text">{job.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <div className="head__copy">
              <span className="eyebrow">{a.skillsTitle[lang]}</span>
            </div>
          </Reveal>
          <Reveal className="skills">
            {Object.values(skills).map((group) => (
              <div className="skill" key={group.title}>
                <span className="skill__title">{group.title}</span>
                <div className="skill__items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <div className="head__copy">
              <span className="eyebrow">{a.principlesTitle[lang]}</span>
            </div>
          </Reveal>
          <div className="principles">
            {PRINCIPLES[lang].map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 60} className="tile">
                <h3 className="tile__title">{p.title}</h3>
                <p className="tile__text">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta-band">
            <div className="cta-band__row">
              <div className="stack">
                <span className="eyebrow">{a.elsewhere[lang]}</span>
                <h2 className="h2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  {SITE.email}
                </h2>
              </div>
              <div className="cta-band__actions">
                <a className="btn btn--brand" href={`mailto:${SITE.email}`}>
                  <Mail style={{ width: 16, height: 16 }} />
                  {T.contact.email[lang]}
                </a>
                <a
                  className="btn btn--ghost"
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedIn style={{ width: 16, height: 16 }} />
                  LinkedIn
                </a>
                <a
                  className="btn btn--ghost"
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHub style={{ width: 16, height: 16 }} />
                  GitHub
                </a>
                <a
                  className="btn btn--ghost"
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Instagram style={{ width: 16, height: 16 }} />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
