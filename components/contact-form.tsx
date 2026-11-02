'use client';

import { useState } from 'react';
import { useLang } from '@/app/providers';
import { SITE } from '@/content/site';
import { T } from '@/lib/i18n';
import { ArrowUpRight } from './icons';

/**
 * No backend: the form composes a mailto: link with the message pre-filled.
 * That keeps the portfolio deployable as a static export and avoids storing
 * anything about visitors.
 */
export function ContactForm() {
  const { lang } = useLang();
  const t = T.contact;
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const subject = String(data.get('subject') || t.subjects.role[lang]);
    const message = String(data.get('message') || '');

    const body = [
      `${lang === 'fr' ? 'Nom' : 'Name'}: ${name}`,
      `Email: ${email}`,
      company ? `${lang === 'fr' ? 'Entreprise' : 'Company'}: ${company}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-labelledby="contact-form-title">
      <div className="stack-xs">
        <h2 className="h3" id="contact-form-title">
          {t.formTitle[lang]}
        </h2>
        <p className="small">{t.note[lang]}</p>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">{t.name[lang]}</label>
          <input id="name" name="name" type="text" required placeholder={t.namePlaceholder[lang]} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">{t.email[lang]}</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.emailPlaceholder[lang]}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="company">{t.company[lang]}</label>
          <input id="company" name="company" type="text" placeholder={t.companyPlaceholder[lang]} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="subject">{t.subject[lang]}</label>
          <select id="subject" name="subject" defaultValue="role">
            <option value={t.subjects.role.en}>{t.subjects.role[lang]}</option>
            <option value={t.subjects.freelance.en}>{t.subjects.freelance[lang]}</option>
            <option value={t.subjects.other.en}>{t.subjects.other[lang]}</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">{t.message[lang]}</label>
        <textarea id="message" name="message" required placeholder={t.messagePlaceholder[lang]} />
      </div>

      <button type="submit" className="btn btn--brand" style={{ justifySelf: 'start' }}>
        {t.send[lang]}
        <ArrowUpRight />
      </button>

      <p className="form__note" role="status" aria-live="polite">
        {sent
          ? lang === 'fr'
            ? 'Votre application mail devrait s’ouvrir. Si rien ne se passe, écrivez directement à l’adresse ci-contre.'
            : 'Your email app should open. If nothing happens, write directly to the address beside this form.'
          : t.note[lang]}
      </p>
    </form>
  );
}
