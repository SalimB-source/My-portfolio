import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Salim Benmokhtar — Graphic designer & web designer',
    short_name: 'Salim B.',
    description:
      'Graphic design, art direction and AI-powered web design & front-end. Portfolio of Salim Benmokhtar, Algiers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0a09',
    theme_color: '#0b0a09',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
