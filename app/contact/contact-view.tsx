'use client';

import Link from 'next/link';
import { useLang } from '../providers';
import { SITE } from '@/content/site';
import { T } from '@/lib/i18n';
import { Reveal } from '@/components/reveal';
import { ContactForm } from '@/components/contact-form';
import { ArrowUpRight, GitHub, LinkedIn, Mail, MapPin, Phone } from '@/components/icons';

export default function ContactView() {
  const { lang } = useLang();
  const c = T.contact;

  const items = [
    { icon: <Mail />, label: c.email[lang], value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: <Phone />, label: c.phone[lang], value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { icon: <LinkedIn />, label: c.linkedin[lang], value: 'salim-benmokhtar', href: SITE.socials.linkedin },
    { icon: <GitHub />, label: c.github[lang], value: 'SalimB-source', href: SITE.socials.github },
    { icon: <MapPin />, label: c.location[lang], value: `${SITE.location[lang]} · GMT+1`, href: undefined },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>{c.eyebrow[lang]}</span>
          </nav>
          <Reveal>
            <span className="eyebrow">{c.eyebrow[lang]}</span>
            <h1 className="page-hero__title" style={{ marginTop: '1rem' }}>
              {c.title[lang]} <em className="accent">{c.titleAccent[lang]}</em>
            </h1>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {c.lead[lang]}
            </p>
            <div className="availability" style={{ marginTop: '1.5rem' }}>
              <span className="dot-live" aria-hidden />
              {c.availability[lang]}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <div className="contact-grid">
            <Reveal className="stack">
              <div className="contact-list">
                {items.map((it) =>
                  it.href ? (
                    <a
                      key={it.label}
                      className="contact-item"
                      href={it.href}
                      target={it.href.startsWith('http') ? '_blank' : undefined}
                      rel={it.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                      <span className="contact-item__icon">{it.icon}</span>
                      <span>
                        <span className="contact-item__label">{it.label}</span>
                        <span className="contact-item__value">{it.value}</span>
                      </span>
                      <ArrowUpRight style={{ marginLeft: 'auto', width: 16, height: 16, opacity: 0.5 }} />
                    </a>
                  ) : (
                    <div key={it.label} className="contact-item">
                      <span className="contact-item__icon">{it.icon}</span>
                      <span>
                        <span className="contact-item__label">{it.label}</span>
                        <span className="contact-item__value">{it.value}</span>
                      </span>
                    </div>
                  ),
                )}
              </div>

              <div className="note">
                <span>
                  <strong>{lang === 'fr' ? 'Recruteurs :' : 'Recruiters:'}</strong>{' '}
                  {lang === 'fr'
                    ? 'le CV imprimable est ici, et les projets sont documentés un par un — aucun mot de passe.'
                    : 'the printable CV is here, and every project is documented one by one — nothing behind a password.'}
                </span>
              </div>
              <div className="hero__actions">
                <Link href="/cv" className="btn btn--ghost">
                  {T.nav.cv[lang]}
                  <ArrowUpRight />
                </Link>
                <Link href="/portfolio" className="btn btn--ghost">
                  {T.nav.portfolio[lang]}
                  <ArrowUpRight />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
