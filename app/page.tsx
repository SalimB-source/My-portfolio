import type { Metadata } from 'next';
import HomeView from './home-view';

export const metadata: Metadata = {
  title: {
    absolute: 'Salim Benmokhtar — Graphic designer, art director & web designer',
  },
  description:
    'Portfolio of Salim Benmokhtar, graphic designer and art director in Algiers: brand identity, campaign art direction, UX/UI, video and motion — designed and built end to end.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomeView />;
}
