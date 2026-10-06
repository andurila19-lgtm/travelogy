import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panduan Wisata & Tips Perjalanan — PT. Travelogy Tour Organizer',
  description:
    'Kumpulan artikel perjalanan, tips sunrise Gunung Bromo, pesona Pantai Papuma Jember, panduan Kawah Ijen Blue Fire, dan solusi custom trip bersama Travelogy Tour Organizer.',
  alternates: {
    canonical: 'https://travelogy.co.id/artikel',
  },
  openGraph: {
    title: 'Panduan Wisata & Tips Perjalanan — PT. Travelogy Tour Organizer',
    description:
      'Inspirasi perjalanan, rute wisata favorit Jawa Timur, dan rekomendasi custom trip dari PT. Travelogy Tour Organizer Jember.',
    url: 'https://travelogy.co.id/artikel',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Artikel & Panduan Wisata Travelogy',
      },
    ],
  },
};

export default function ArtikelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
