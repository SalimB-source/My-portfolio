import type { Metadata } from 'next';
import ServicesView from './services-view';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four services: graphic design and brand identity, UX/UI design, video editing and motion design. Scope, deliverables, process and recent proof.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <ServicesView />;
}
