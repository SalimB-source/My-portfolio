import type { Metadata } from 'next';
import PortfolioView from './portfolio-view';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected work: Let’s Play, Le Sablier de Bab El, Mirage Rush, Vice City Rush, Iris Studio campaigns, EGOR — nine documented projects across platforms, games and brands.',
  alternates: { canonical: '/portfolio' },
};

export default function Page() {
  return <PortfolioView />;
}
