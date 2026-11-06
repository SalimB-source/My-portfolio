'use client';

import Link from 'next/link';
import { useLang } from '@/app/providers';
import { SITE } from '@/content/site';
import { T } from '@/lib/i18n';
import { ArrowUpRight, GitHub, Instagram, LinkedIn, Mail } from './icons';

export function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { href: '/', label: T.nav.home[lang] },
    { href: '/about', label: T.nav.about[lang] },
    { href: '/services', label: T.nav.services[lang] },
    { href: '/portfolio', label: T.nav.portfolio[lang] },
    { href: '/contact', label: T.nav.contact[lang] },
    { href: '/cv', label: T.nav.cv[lang] },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col" style={{ maxWidth: '28rem' }}>
            <Link href="/" className="brand" style={{ marginBottom: '0.5rem' }}>
              <span className="brand__mark" aria-hidden>
                {SITE.initials}
              </span>
              <span className="brand__name">
                <strong>{SITE.name}</strong>
                <span>{SITE.roleShort[lang]}</span>
              </span>
            </Link>
            <p className="small" style={{ lineHeight: 1.6 }}>
              {T.footer.tagline[lang]}
            </p>
            <div className="socials" style={{ marginTop: '0.5rem' }}>
              <a
                className="social"
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
              <a
                className="social"
                href={SITE.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <GitHub />
              </a>
              <a
                className="social"
                href={SITE.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a className="social" href={`mailto:${SITE.email}`} aria-label={T.contact.email[lang]}>
                <Mail />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <span className="mono">{T.footer.nav[lang]}</span>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="footer__link">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <span className="mono">{T.footer.contact[lang]}</span>
            <a href={`mailto:${SITE.email}`} className="footer__link">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="footer__link">
              {SITE.phone}
            </a>
            <span className="footer__link" style={{ color: 'var(--muted-2)' }}>
              {SITE.location[lang]}
            </span>
            <Link href="/contact" className="link-arrow" style={{ marginTop: '0.4rem' }}>
              {T.header.cta[lang]}
              <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {SITE.name}. {T.footer.rights[lang]}
          </span>
          <span>{T.footer.built[lang]}</span>
          <a href="#top" className="footer__link">
            {T.footer.back[lang]} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
