import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trip Harian (1-Day Tour) — Travelogy Tour Organizer Jember',
  description:
    'Pilihan one-day trip favorit bersama Travelogy: 1-Day Bromo Sunrise Safari, 1-Day Kawah Ijen Blue Fire, Tanjung Papuma & Teluk Love Jember, serta Malang Batu Tour.',
  alternates: {
    canonical: 'https://travelogy.co.id/trip-harian',
  },
  openGraph: {
    title: 'Trip Harian Terbaik — PT. Travelogy Tour Organizer',
    description:
      'Eksplorasi destinasi memukau dalam 1 hari bersama armada dan supir terpercaya dari Jember.',
    url: 'https://travelogy.co.id/trip-harian',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Trip Harian Travelogy Tour Organizer',
      },
    ],
  },
};

export default function TripHarianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
