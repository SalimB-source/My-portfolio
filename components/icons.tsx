import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const ArrowUpRight = (p: Props) => (
  <svg {...base} className="arrow" {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const ArrowRight = (p: Props) => (
  <svg {...base} className="arrow" {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = (p: Props) => (
  <svg {...base} className="arrow" {...p}>
    <path d="M12 4v16M6 14l6 6 6-6" />
  </svg>
);

export const Mail = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Phone = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5L15.5 12l4 1.5v3a2.5 2.5 0 0 1-2.8 2.5A16.5 16.5 0 0 1 4 6.3 2.5 2.5 0 0 1 6.5 3.5Z" />
  </svg>
);

export const MapPin = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const LinkedIn = (p: Props) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.95-3.1-1.95 0-2.25 1.46-2.25 2.99V21h-4V9Z" />
  </svg>
);

export const GitHub = (p: Props) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const Instagram = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Download = (p: Props) => (
  <svg {...base} className="arrow" {...p}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

export const Sparkle = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.6 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
    <path d="M18.5 16.5 19.2 19l2.3.7-2.3.8-.7 2.4-.7-2.4-2.3-.8 2.3-.7.7-2.5Z" opacity=".7" />
  </svg>
);

export const Layers = (p: Props) => (
  <svg {...base} {...p}>
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5L20 12M4 16.5 12 21l8-4.5" />
  </svg>
);

export const Globe = (p: Props) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.3 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.3-3.3-8.5S9.8 5.8 12 3.5Z" />
  </svg>
);

export const Check = (p: Props) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const Menu = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
