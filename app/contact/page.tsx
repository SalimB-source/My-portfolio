import type { Metadata } from 'next';
import ContactView from './contact-view';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Salim Benmokhtar — graphic designer and art director in Algiers. Email, phone, LinkedIn and a message form that opens your mail app.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactView />;
}
