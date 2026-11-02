import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE } from '@/content/site';
import { asset } from '@/lib/asset';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: 'Salim Benmokhtar — Graphic designer & AI-powered web designer',
    template: '%s — Salim Benmokhtar',
  },
  description:
    'Portfolio of Salim Benmokhtar: 10 years of graphic design, art direction and AI-assisted web design & front-end development. Selected work: Let’s Play, Le Sablier de Bab El, Mirage Rush, Vice City Rush, Iris Studio.',
  keywords: [
    'Salim Benmokhtar',
    'graphic designer',
    'art director',
    'web designer',
    'front-end developer',
    'AI design',
    'portfolio',
    'Algiers',
    'Canada',
  ],
  authors: [{ name: SITE.name, url: SITE.siteUrl }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: ['fr_CA'],
    url: SITE.siteUrl,
    siteName: SITE.name,
    title: 'Salim Benmokhtar — Graphic designer & AI-powered web designer',
    description:
      'Ten years of graphic design, now pointed at the screen. Platforms, games and campaigns — designed and built end to end.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Salim Benmokhtar — portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salim Benmokhtar — Graphic designer & AI-powered web designer',
    description: 'Platforms, games and campaigns — designed and built end to end.',
    images: ['/images/og-default.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#0b0a09',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Graphic Designer & Web Designer',
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  url: SITE.siteUrl,
  image: `${SITE.siteUrl}${asset('/images/profile/portrait.jpg')}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Algiers', addressCountry: 'DZ' },
  sameAs: [SITE.socials.linkedin, SITE.socials.github],
  knowsAbout: [
    'Graphic design',
    'Art direction',
    'Brand identity',
    'Web design',
    'Front-end development',
    'Generative AI workflows',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <Header />
          <main id="main" className="page">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
