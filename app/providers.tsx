'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, toggle: () => {} });

const STORAGE_KEY = 'sb-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Read the stored/negotiated language once, after hydration, then keep
  // <html lang> in sync so screen readers and spell-checkers follow.
  useEffect(() => {
    let next: Lang = 'en';
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fr') {
        next = stored;
      } else if (navigator.language?.toLowerCase().startsWith('fr')) {
        next = 'fr';
      }
    } catch {
      /* storage can be blocked — English is a safe default */
    }
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const toggle = () => setLang(lang === 'en' ? 'fr' : 'en');

  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
