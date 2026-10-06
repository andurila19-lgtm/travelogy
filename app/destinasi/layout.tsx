import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinasi Wisata Unggulan — PT. Travelogy Tour Organizer',
  description:
    'Eksplorasi destinasi liburan impian bersama Travelogy Tour Organizer: Bali, Gunung Bromo, Malang & Batu, Kawah Ijen, Yogyakarta, dan pesona eksotis Jember Jawa Timur.',
  alternates: {
    canonical: 'https://travelogy.co.id/destinasi',
  },
  openGraph: {
    title: 'Destinasi Wisata Unggulan — PT. Travelogy Tour Organizer',
    description:
      'Pilihan destinasi terbaik dari Travelogy Jember. Rancang perjalanan personal dan rombongan Anda dengan fleksibel dan nyaman.',
    url: 'https://travelogy.co.id/destinasi',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Destinasi Wisata Travelogy',
      },
    ],
  },
};

export default function DestinasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
