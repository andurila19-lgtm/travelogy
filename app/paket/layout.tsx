import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Packages & Perjalanan Wisata — Travelogy Tour Organizer',
  description:
    'Katalog lengkap paket wisata Travelogy: 3D2N Bromo Escape, 4D3N Bali Experience, Malang Adventure, Kawah Ijen Blue Fire, Yogyakarta Heritage, dan Jember Discovery.',
  alternates: {
    canonical: 'https://travelogy.co.id/paket',
  },
  openGraph: {
    title: 'Tour Packages & Perjalanan Wisata — PT. Travelogy Tour Organizer',
    description:
      'Pilihan paket liburan terbaik bersama Travelogy. Perjalanan terencana, armada prima, dan pendampingan profesional dari Jember.',
    url: 'https://travelogy.co.id/paket',
    siteName: 'Travelogy Tour Organizer',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Paket Wisata Travelogy Tour Organizer',
      },
    ],
  },
};

export default function PaketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
