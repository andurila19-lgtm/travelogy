import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Transportasi & Sewa Mobil Jember — Travelogy Tour Organizer',
  description:
    'Layanan sewa mobil & transportasi Travelogy dari Jember: Avanza, Innova Reborn, HiAce Commuter & Premio, Bus Pariwisata, serta antar-jemput stasiun/bandara dengan supir berpengalaman.',
  alternates: {
    canonical: 'https://travelogy.co.id/transport',
  },
  openGraph: {
    title: 'Layanan Transportasi & Sewa Mobil Jember — PT. Travelogy Tour Organizer',
    description:
      'Armada bersih, ber-AC dingin, supir ramah dan tepat waktu. Solusi transportasi personal, keluarga, hingga rombongan instansi.',
    url: 'https://travelogy.co.id/transport',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Layanan Transportasi Travelogy Tour Organizer',
      },
    ],
  },
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
