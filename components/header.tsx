'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/app/providers';
import { T } from '@/lib/i18n';
import { SITE } from '@/content/site';
import { ArrowUpRight } from './icons';

const NAV = [
  { href: '/', key: 'home' as const, meta: '01' },
  { href: '/about', key: 'about' as const, meta: '02' },
  { href: '/services', key: 'services' as const, meta: '03' },
  { href: '/portfolio', key: 'portfolio' as const, meta: '04' },
  { href: '/contact', key: 'contact' as const, meta: '05' },
];

export function Header() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock the page behind the sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
            <span className="brand__mark" aria-hidden>
              {SITE.initials}
            </span>
            <span className="brand__name">
              <strong>Salim Benmokhtar</strong>
              <span>{lang === 'fr' ? 'Design graphique & web' : 'Graphic design & web'}</span>
            </span>
          </Link>

          <nav className="nav" aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {T.nav[item.key][lang]}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <div className="lang" role="group" aria-label={T.header.langLabel[lang]}>
              {(['en', 'fr'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  className="lang__btn"
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link href="/contact" className="btn btn--brand btn--cta">
              {T.header.cta[lang]}
              <ArrowUpRight />
            </Link>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? T.header.close[lang] : T.header.menu[lang]}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="sheet" id="mobile-menu">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="sheet__link">
              {T.nav[item.key][lang]}
              <small>{item.meta}</small>
            </Link>
          ))}
          <Link href="/cv" className="sheet__link sheet__link--sub">
            {T.nav.cv[lang]}
            <small>CV</small>
          </Link>
          <div className="sheet__foot">
            <div className="sheet__lang">
              <span className="mono">{T.header.langLabel[lang]}</span>
              <div className="lang" role="group" aria-label={T.header.langLabel[lang]}>
                {(['en', 'fr'] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    className="lang__btn"
                    aria-pressed={lang === l}
                    onClick={() => setLang(l)}
                  >
                    {l === 'en' ? 'English' : 'Français'}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/contact" className="btn btn--brand">
              {T.header.cta[lang]}
              <ArrowUpRight />
            </Link>
            <a href={`mailto:${SITE.email}`} className="footer__link">
              {SITE.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
