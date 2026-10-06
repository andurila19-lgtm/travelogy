import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak & Lokasi Kantor — PT. Travelogy Tour Organizer Jember',
  description:
    'Hubungi PT. Travelogy Tour Organizer via WhatsApp +62 813-3399-2989, email travelogycorp@gmail.com, atau kunjungi kantor kami di Jl. Mastrip No.71, Sumbersari, Jember.',
  alternates: {
    canonical: 'https://travelogy.co.id/kontak',
  },
  openGraph: {
    title: 'Kontak & Lokasi Kantor — PT. Travelogy Tour Organizer',
    description:
      'Hubungi tim Travelogy Tour Organizer untuk konsultasi paket wisata, transportasi, hotel, dan event dari Jember.',
    url: 'https://travelogy.co.id/kontak',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Kontak Travelogy Tour Organizer Jember',
      },
    ],
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
