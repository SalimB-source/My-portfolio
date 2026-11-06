import type { Metadata } from 'next';
import CvView from './cv-view';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'One-page curriculum vitae for Salim Benmokhtar: ten years of graphic design and art direction, brand identity, campaign systems, web design and front-end.',
  alternates: { canonical: '/cv' },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CvView />;
}
