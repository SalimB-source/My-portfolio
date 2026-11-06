import type { Metadata } from 'next';
import AboutView from './about-view';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ten years of graphic design in Algiers: brand identity, campaign art direction and print, now extended into web design, front-end and AI-assisted production.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutView />;
}
