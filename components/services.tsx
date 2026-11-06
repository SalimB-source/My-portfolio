'use client';

import Link from 'next/link';
import type { SVGProps } from 'react';
import { useLang } from '@/app/providers';
import {
  INFO_CARDS,
  SERVICES,
  SERVICE_PROCESS,
  SITE,
  SKILL_LEVELS,
  SKILLS,
  WHO_AM_I,
  type Service,
} from '@/content/site';
import { T } from '@/lib/i18n';
import { ArrowUpRight, Globe, Layers, Mail, Sparkle } from './icons';
import { Reveal } from './reveal';
import { useReveal } from './use-reveal';
import { SectionHead } from './sections';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

function GraphicIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...p}>
      <path d="M12 3c4.5 0 8 2.8 8 6.4 0 2.4-1.7 3.8-3.6 3.8h-1.9c-1 0-1.8.8-1.8 1.8 0 .5.2.9.5 1.3.4.5.6 1 .6 1.6 0 1.7-1.5 3.1-3.6 3.1C6.5 21 3 17.3 3 12.4 3 6.9 7 3 12 3Z" />
      <circle cx="8.4" cy="9.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="7.2" cy="14.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UxIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...p}>
      <rect x="2.8" y="4" width="18.4" height="13.6" rx="2.2" />
      <path d="M2.8 8.2h18.4M8 21h8" />
      <path d="m10.6 11 4.4 1.9-1.9.7-.7 1.9-1.8-4.5Z" />
    </svg>
  );
}

function VideoIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...p}>
      <rect x="2.6" y="5.6" width="13.4" height="12.8" rx="2.4" />
      <path d="m16 10.6 4.2-2.3c.5-.3 1.2 0 1.2.7v6c0 .7-.7 1-1.2.7L16 13.4" />
      <path d="M6.4 9.6h4.4M6.4 13.6h3" />
    </svg>
  );
}

function MotionIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...p}>
      <path d="M3 15.5c3.2 0 3.2-7 6.4-7s3.2 7 6.4 7 3.2-7 5.2-7" />
      <circle cx="3.2" cy="8.6" r="1.4" />
      <path d="M6.6 19.4h10.8" opacity=".55" />
    </svg>
  );
}

const ICONS = {
  graphic: GraphicIcon,
  ux: UxIcon,
  video: VideoIcon,
  motion: MotionIcon,
} as const;

export function ServiceIcon({ id, ...rest }: { id: Service['icon'] } & SVGProps<SVGSVGElement>) {
  const Icon = ICONS[id];
  return <Icon {...rest} />;
}

/* ------------------------------------------------------------------ */
/* Who am I — three statements + three info cards                      */
/* ------------------------------------------------------------------ */

/** Renders `**strong**` inside the short statements, nothing else. */
function withMarks(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>,
  );
}

const BLOCK_ICONS = { spark: Sparkle, layers: Layers, globe: Globe } as const;

export function WhoAmI() {
  const { lang } = useLang();
  const h = T.home.who;

  return (
    <section className="section" id="who">
      <div className="container">
        <SectionHead
          eyebrow={h.eyebrow[lang]}
          title={h.title[lang]}
          accent={h.titleAccent[lang]}
          lead={h.lead[lang]}
          side={
            <Link href="/about" className="link-arrow">
              {h.more[lang]}
              <ArrowUpRight />
            </Link>
          }
        />

        <div className="who">
          <div className="who__blocks">
            {WHO_AM_I[lang].map((block, i) => {
              const Icon = BLOCK_ICONS[block.icon as keyof typeof BLOCK_ICONS];
              return (
                <Reveal as="article" key={block.icon} delay={i * 70} className="who__block">
                  <span className="who__icon" aria-hidden>
                    <Icon />
                  </span>
                  <p>{withMarks(block.text)}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="who__cards">
            <span className="mono who__cards-label">{h.infoLabel[lang]}</span>
            {INFO_CARDS.map((card) => (
              <div className="info-card" key={card.label.en}>
                <span className="info-card__label">{card.label[lang]}</span>
                <span className="info-card__value">{card.value[lang]}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* What I do — four service cards                                      */
/* ------------------------------------------------------------------ */

export function ServiceCard({
  service,
  num,
  delay = 0,
}: {
  service: Service;
  num: string;
  delay?: number;
}) {
  const { lang } = useLang();

  return (
    <Reveal as="article" delay={delay} className="svc">
      <span className="svc__icon" aria-hidden>
        <ServiceIcon id={service.icon} />
      </span>
      <h3 className="svc__title">{service.title[lang]}</h3>
      <p className="svc__text">{service.tagline[lang]}</p>
      <span className="svc__num">{num}</span>
    </Reveal>
  );
}

export function WhatIDo() {
  const { lang } = useLang();
  const h = T.home.what;

  return (
    <section className="section on-paper" id="services">
      <div className="container">
        <SectionHead
          eyebrow={h.eyebrow[lang]}
          title={h.title[lang]}
          accent={h.titleAccent[lang]}
          lead={h.lead[lang]}
          side={
            <Link href="/services" className="link-arrow">
              {h.all[lang]}
              <ArrowUpRight />
            </Link>
          }
        />

        <div className="svc-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} num={String(i + 1).padStart(2, '0')} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills — self-assessed levels                                       */
/* ------------------------------------------------------------------ */

export function SkillLevels({ showTools = true }: { showTools?: boolean }) {
  const { lang } = useLang();
  const h = T.home.skills;
  const groups = Object.values(SKILLS[lang]);

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow={h.eyebrow[lang]} title={h.title[lang]} accent={h.titleAccent[lang]} lead={h.lead[lang]} />

        <div className="levels">
          {SKILL_LEVELS.map((skill, i) => (
            <Reveal key={skill.label.en} delay={i * 55} className="level">
              <div className="level__head">
                <span className="level__label">{skill.label[lang]}</span>
                <span className="level__value mono">{skill.value}%</span>
              </div>
              <div
                className="level__track"
                role="meter"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.value}
                aria-label={skill.label[lang]}
              >
                <span className="level__fill" style={{ width: `${skill.value}%` }} />
              </div>
            </Reveal>
          ))}
        </div>

        {showTools && (
          <Reveal delay={120} className="skills" style={{ marginTop: '2rem' }}>
            {groups.map((group) => (
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
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services page — the four services, in depth + process                */
/* ------------------------------------------------------------------ */

export function ServiceList() {
  const { lang } = useLang();

  return (
    <div className="svc-list">
      {SERVICES.map((service, i) => (
        <section className="svc-row" id={service.id} key={service.id}>
          <Reveal className="svc-row__head">
            <span className="svc-row__num mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="svc__icon" aria-hidden>
              <ServiceIcon id={service.icon} />
            </span>
            <h2 className="svc-row__title">{service.title[lang]}</h2>
            <p className="lead svc-row__tagline">{service.tagline[lang]}</p>
          </Reveal>

          <Reveal delay={90} className="svc-row__body">
            <p className="body">{service.text[lang]}</p>
            <div className="svc-row__meta">
              <div>
                <span className="svc__label">{T.services.deliverables[lang]}</span>
                <ul className="svc__list">
                  {service.deliverables[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="svc__label">{T.services.proof[lang]}</span>
                <p className="svc__proof">{service.proof[lang]}</p>
              </div>
            </div>
          </Reveal>
        </section>
      ))}
    </div>
  );
}

export function ServiceProcess() {
  const { lang } = useLang();
  const steps = SERVICE_PROCESS[lang];

  return (
    <section className="section on-paper" id="process">
      <div className="container">
        <SectionHead
          eyebrow={T.services.process[lang]}
          title={T.services.processTitle[lang]}
          accent={T.services.processAccent[lang]}
          lead={T.services.processLead[lang]}
        />

        <div className="steps steps--four">
          {steps.map((step, i) => (
            <Reveal as="div" className="step" key={step.title} delay={i * 70}>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Get in touch — the contact cards, reusable on home and /contact      */
/* ------------------------------------------------------------------ */

export function GetInTouch({ withHead = true }: { withHead?: boolean }) {
  const { lang } = useLang();
  const t = T.home.touch;

  const items = [
    { label: T.contact.email[lang], value: SITE.email, href: `mailto:${SITE.email}` },
    { label: T.contact.phone[lang], value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { label: T.contact.linkedin[lang], value: 'salim-benmokhtar', href: SITE.socials.linkedin },
    { label: T.contact.location[lang], value: SITE.location[lang] },
  ];

  return (
    <section className="section" id="touch">
      <div className="container">
        {withHead && <SectionHead eyebrow={t.eyebrow[lang]} title={t.title[lang]} accent={t.titleAccent[lang]} lead={t.lead[lang]} />}

        <div className="touch">
          <div className="touch__cards">
            {items.map((item, i) =>
              item.href ? (
                <TouchLink key={item.label} href={item.href} label={item.label} value={item.value} delay={i * 60} />
              ) : (
                <Reveal as="div" key={item.label} delay={i * 60} className="touch-card">
                  <span className="touch-card__label">{item.label}</span>
                  <span className="touch-card__value">{item.value}</span>
                </Reveal>
              ),
            )}
          </div>

          <Reveal delay={120} className="touch__cta">
            <p className="lead">{T.contact.lead[lang]}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--brand">
                <Mail style={{ width: 16, height: 16 }} />
                {T.contact.formTitle[lang]}
              </Link>
              <a href={`mailto:${SITE.email}`} className="btn btn--ghost">
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** An anchor that carries the shared reveal, so the grid span is preserved. */
function TouchLink({
  href,
  label,
  value,
  delay,
}: {
  href: string;
  label: string;
  value: string;
  delay: number;
}) {
  const ref = useReveal<HTMLAnchorElement>(delay);

  return (
    <a
      ref={ref}
      href={href}
      className="touch-card reveal"
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      <span className="touch-card__label">{label}</span>
      <span className="touch-card__value">{value}</span>
      <ArrowUpRight />
    </a>
  );
}
