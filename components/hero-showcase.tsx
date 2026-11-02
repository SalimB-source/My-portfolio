'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLang } from '@/app/providers';
import { asset } from '@/lib/asset';
import { ArrowUpRight } from './icons';
import Link from 'next/link';

type Slide = {
  src: string;
  alt: string;
  title: { en: string; fr: string };
  meta: { en: string; fr: string };
  href: string;
};

const SLIDES: Slide[] = [
  {
    src: '/images/sablier/keyart.jpg',
    alt: 'Le Sablier de Bab El — desert citadel key art',
    title: { en: 'Le Sablier de Bab El', fr: 'Le Sablier de Bab El' },
    meta: { en: 'Game art · 422 cards', fr: 'Game art · 422 cartes' },
    href: '/work/sablier-de-bab-el',
  },
  {
    src: '/images/work/letsplay-by-algerie-telecom.jpg',
    alt: "Let's Play by Algérie Télécom campaign visual",
    title: { en: "Let's Play × Algérie Télécom", fr: "Let's Play × Algérie Télécom" },
    meta: { en: 'Campaign identity', fr: 'Identité de campagne' },
    href: '/work/lets-play-telecom',
  },
  {
    src: '/images/vice-city/keyart.jpg',
    alt: 'Vice City Rush key art',
    title: { en: 'Vice City Rush', fr: 'Vice City Rush' },
    meta: { en: 'Racing game · 8 routes', fr: 'Jeu de course · 8 tracés' },
    href: '/work/vice-city-rush',
  },
];

export function HeroShowcase() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);

  // Slow auto-rotation; stops permanently once the visitor takes over.
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 5200);
    return () => window.clearInterval(id);
  }, [auto]);

  const pick = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  return (
    <div className="showcase" aria-roledescription="carousel" aria-label={lang === 'fr' ? 'Projets sélectionnés' : 'Selected work'}>
      <div className="showcase__stage">
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={asset(s.src)}
            alt={s.alt}
            fill
            sizes="(max-width: 960px) 100vw, 44vw"
            className={`showcase__img ${i === active ? 'is-active' : ''}`}
            priority={i === 0}
            aria-hidden={i !== active}
          />
        ))}

        <div className="showcase__caption">
          <div>
            <strong>{SLIDES[active].title[lang]}</strong>
            <span>{SLIDES[active].meta[lang]}</span>
          </div>
          <Link
            href={SLIDES[active].href}
            className="social"
            style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff', flex: 'none' }}
            aria-label={lang === 'fr' ? 'Voir le projet' : 'View project'}
          >
            <ArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="showcase__thumbs">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className="showcase__thumb"
            aria-pressed={i === active}
            aria-label={`${s.title[lang]} — ${s.meta[lang]}`}
            onClick={() => pick(i)}
          >
            <Image src={asset(s.src)} alt="" fill sizes="15vw" style={{ objectFit: 'cover' }} />
          </button>
        ))}
      </div>
    </div>
  );
}
