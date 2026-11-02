/**
 * The effect icons of Le Sablier's duel, taken from the game's own sprite
 * (`src/games/effetIcons.js`, `EFFETS_SPRITE`), monochrome 24×24 stroked paths.
 *
 * Kept as path data rather than inline SVG so the icons can inherit
 * `currentColor` and be reused at any size.
 */

export type EffectIcon = { id: string; paths: string };

export const EFFECT_ICONS: Record<string, string> = {
  'embuscade': '<path d="M3 20h18M5 20V9l7-5 7 5v11"/><path d="M9 20v-5a3 3 0 0 1 6 0v5"/><path d="M2 5l2 2M22 5l-2 2M12 1v2"/>',
  'butin': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/>',
  'furie': '<path d="M7.1 11.3C5.3 10.3 3.8 8.2 3.1 5.4c1.6 1.9 3.1 3.2 4.8 4"/><path d="M16.9 11.3c1.8-1 3.3-3.1 4-5.9C19.3 7.3 17.8 8.6 16.1 9.4"/><path d="M6.7 15.2v-2.7c0-3 2.4-5.4 5.3-5.4s5.3 2.4 5.3 5.4v2.7"/><path d="M5.4 15.2h13.2"/><path d="M12 7.1v8.1"/><path d="M10.9 15.2h2.2l-.4 4.2h-1.4z"/><path d="M7 15.2v3M17 15.2v3"/>',
  'esquive': '<path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/>',
  'contre-attaque': '<path d="M3 3 L21 21"/><path d="M21 3 L3 21"/><path d="M7 7 L5 5 M17 17 L19 19"/><path d="M17 7 L19 5 M7 17 L5 19"/><circle cx="12" cy="12" r="1.5"/>',
  'envol': '<path d="M2 10.5c3.2.4 5.8 2.2 7.2 5.2h5.6c1.4-3 4-4.8 7.2-5.2"/><path d="M12 15.7c-.6 2-.6 3.6 0 5.3"/>',
  'rapidite': '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  'coup-rapide': '<circle cx="12" cy="12" r="6"/><path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22"/>',
  'traque': '<path d="M2 12C4.5 7.2 8.2 4.6 12 4.5c3.8.1 7.5 2.7 10 7.5-2.5 4.8-6.2 7.4-10 7.5-3.8-.1-7.5-2.7-10-7.5Z"/><circle cx="12" cy="12" r="3.4"/><path d="M12 8.6v1.8M12 13.6v1.8M8.6 12h1.8M13.6 12h1.8"/>',
  'coup-critique': '<circle cx="12" cy="12" r="6"/><path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22"/><path d="M8 8l8 8M16 8l-8 8"/>',
  'provocation': '<path d="M3 10v4l3 .4V9.6z"/><path d="M6 9.6 18 4v16L6 14.4"/><path d="M8.2 14.7v4.3h3v-5"/><path d="M20 9a4.2 4.2 0 0 1 0 6"/>',
  'tenacite': '<circle cx="12" cy="5" r="2.5"/><path d="M12 22V7.5"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
  'vol-de-vie': '<path d="M12 21s-8-4.8-8-10a4.6 4.6 0 0 1 8-3.1A4.6 4.6 0 0 1 20 11c0 5.2-8 10-8 10z"/><path d="M12 9s-2.2 2.5-2.2 4a2.2 2.2 0 0 0 4.4 0c0-1.5-2.2-4-2.2-4z"/>',
  'infiltration': '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><path d="M1 1l22 22"/>',
  'protection': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  'bouclier': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8.5v5M9.5 11h5"/>',
  'aura': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>',
  'resonance': '<path d="M8 3v9a4 4 0 0 0 8 0V3"/><path d="M12 16v5"/><path d="M5 7a6 6 0 0 0 0 8"/><path d="M19 7a6 6 0 0 1 0 8"/>',
  'honneur': '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 23l5-3 5 3-1.2-9.12"/>',
  'pioche': '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1"/>',
  'soin': '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  'degats': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  'contresort': '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  'rebond': '<path d="M9 14 4 9l5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  'recyclage': '<path d="M21 4v6h-6"/><path d="M3 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L21 8"/><path d="M21 15a9 9 0 0 1-14.9 3.4L3 16"/>',
  'reanimation': '<path d="M12 20V4"/><path d="M6 10l6-6 6 6"/><path d="M4 22h16"/>',
  'heures': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  'tribut': '<path d="M4 8h16M12 8v11M8 21h8"/><path d="M4 8 1.5 13.5h5L4 8zm16 0-2.5 5.5h5L20 8z"/><path d="M12 5.4c0 0-2-1.4-2-2.7A1.1 1.1 0 0 1 12 2a1.1 1.1 0 0 1 2 .7c0 1.3-2 2.7-2 2.7z"/>',
  'transfert': '<path d="M3.5 8.5h13.5"/><path d="M13.5 5.5 17 8.5l-3.5 3"/><path d="M20.5 15.5H7"/><path d="M10.5 12.5 7 15.5l3.5 3"/>',
  'overkill': '<path d="M2.5 12h12"/><path d="M10.5 7.5 15 12l-4.5 4.5"/><path d="M18.5 3.5V9"/><path d="M18.5 15v5.5"/><path d="M15 12h6.5"/>',
  'defausse': '<rect x="4" y="3" width="10" height="14" rx="1.5"/><path d="M17 8v8m0 0-3-3m3 3 3-3"/><path d="M7 19h10"/>',
  'paquet': '<rect x="5" y="3" width="12" height="9" rx="1.5"/><path d="M8 6.5h6M8 9h4"/><path d="M19 13v6m0 0-2.5-2.5M19 19l2.5-2.5"/>',
  'malediction': '<path d="M5 10a7 7 0 0 1 14 0v4l-2 1.5V19H7v-3.5L5 14z"/><circle cx="9.5" cy="10" r="1.4"/><circle cx="14.5" cy="10" r="1.4"/><path d="M9 19v-2M12 19v-2M15 19v-2"/>',
  'abordage': '<circle cx="12" cy="9.6" r="6.5"/><path d="M9.4 15.9v2.4c0 .9.7 1.6 1.6 1.6h2c.9 0 1.6-.7 1.6-1.6v-2.4"/><circle cx="9.5" cy="9.4" r="1.5"/><circle cx="14.5" cy="9.4" r="1.5"/><path d="M3.1 20.9 8.6 15.4"/><path d="M2.29 20.09 3.91 21.71"/><path d="M7.79 14.59 9.41 16.21"/><path d="M15.4 15.4 20.9 20.9"/><path d="M16.21 14.59 14.59 16.21"/><path d="M21.71 20.09 20.09 21.71"/><path d="M3.1 3.1 8.6 8.6"/><path d="M3.91 2.29 2.29 3.91"/><path d="M9.41 7.79 7.79 9.41"/><path d="M15.4 8.6 20.9 3.1"/><path d="M14.59 7.79 16.21 9.41"/><path d="M20.09 2.29 21.71 3.91"/>',
  'cargaison': '<path d="M6.5 9V7.5a5.5 5.5 0 0 1 11 0V9"/><rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M9 9v11M15 9v11"/><path d="M12 13v3"/>',
  'furtif': '<path d="M12 3a7 7 0 0 0-7 7v10l2.3-2 2.4 2 2.3-2 2.3 2 2.4-2 2.3 2V10a7 7 0 0 0-7-7z"/><circle cx="9.5" cy="10" r="1.2"/><circle cx="14.5" cy="10" r="1.2"/>',
  'mana': '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  'recherche': '<rect x="4" y="4" width="13" height="16" rx="1.5"/><path d="M8 8h5M8 11.5h5"/><circle cx="17.5" cy="17" r="3.5"/><path d="m20 19.5 1.8 1.8"/>',
  'lien': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
};

