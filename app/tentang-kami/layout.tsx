import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami — PT. Travelogy Tour Organizer Jember',
  description:
    'Profil PT. Travelogy Tour Organizer, biro perjalanan terpercaya berbasis di Jember, Jawa Timur. Tagline: Bringing Happiness in Every Journey. Layanan Tour, Transport, Hotel & Event Planning.',
  alternates: {
    canonical: 'https://travelogy.co.id/tentang-kami',
  },
  openGraph: {
    title: 'Tentang Kami — PT. Travelogy Tour Organizer',
    description:
      'Bringing Happiness in Every Journey. Temukan dedikasi Travelogy mendampingi setiap perjalanan liburan dan event Anda dari Jember.',
    url: 'https://travelogy.co.id/tentang-kami',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Tentang Travelogy Tour Organizer Jember',
      },
    ],
  },
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
