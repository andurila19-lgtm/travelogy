import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Trip & Konsultasi Perjalanan — PT. Travelogy Tour Organizer',
  description:
    'Rancang perjalanan impian Anda bersama PT. Travelogy Tour Organizer. Bebas tentukan destinasi, tanggal keberangkatan, kelas hotel, dan pilihan armada transportasi.',
  alternates: {
    canonical: 'https://travelogy.co.id/custom-trip',
  },
  openGraph: {
    title: 'Custom Trip & Konsultasi Perjalanan — PT. Travelogy Tour Organizer',
    description:
      'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.',
    url: 'https://travelogy.co.id/custom-trip',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Trip Travelogy',
      },
    ],
  },
};

export default function CustomTripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
