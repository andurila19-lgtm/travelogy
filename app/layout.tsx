import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://travelogy.co.id'),
  title: 'Travelogy Tour Organizer | Tour & Travel Jember',
  description:
    'Travelogy Tour Organizer menyediakan layanan tour, travel, transport, hotel, dan event planning dari Jember untuk perjalanan yang lebih mudah dan berkesan.',
  keywords: [
    'travelogy tour organizer',
    'tour and travel jember',
    'travel jember',
    'sewa mobil jember',
    'paket wisata bromo',
    'paket tour bromo dari jember',
    'paket liburan bali',
    'event organizer jember',
    'pt travelogy tour organizer'
  ],
  authors: [{ name: 'PT. Travelogy Tour Organizer' }],
  creator: 'PT. Travelogy Tour Organizer',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://travelogy.co.id',
    siteName: 'Travelogy Tour Organizer',
    title: 'Travelogy Tour Organizer | Tour & Travel Jember',
    description:
      'Travelogy Tour Organizer menyediakan layanan tour, travel, transport, hotel, dan event planning dari Jember untuk perjalanan yang lebih mudah dan berkesan.',
    images: [
      {
        url: '/images/travelogy_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Travelogy Tour Organizer - Bringing Happiness in Every Journey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travelogy Tour Organizer | Tour & Travel Jember',
    description: 'Bringing Happiness in Every Journey. Layanan Tour, Transport, Hotel & Event Planning dari Jember.',
    images: ['/images/travelogy_hero.jpg']
  }
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'PT. Travelogy Tour Organizer',
    alternateName: 'Travelogy Tour Organizer',
    slogan: 'Bringing Happiness in Every Journey',
    image: 'https://travelogy.co.id/images/travelogy_logo.png',
    '@id': 'https://travelogy.co.id/#agency',
    url: 'https://travelogy.co.id',
    telephone: '+6281333992989',
    email: 'travelogycorp@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Mastrip No.71, Lingkungan Panji, Sumbersari',
      addressLocality: 'Jember',
      addressRegion: 'Jawa Timur',
      postalCode: '68124',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.1637,
      longitude: 113.7171
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '13:00'
    },
    priceRange: 'Rp 350.000 - Rp 5.000.000',
    currenciesAccepted: 'IDR',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Jember' },
      { '@type': 'AdministrativeArea', name: 'Bromo' },
      { '@type': 'AdministrativeArea', name: 'Malang' },
      { '@type': 'AdministrativeArea', name: 'Bali' },
      { '@type': 'AdministrativeArea', name: 'Yogyakarta' },
      { '@type': 'AdministrativeArea', name: 'Jawa Timur' }
    ],
    sameAs: [
      'https://wa.me/6281333992989'
    ]
  };

  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="shortcut icon" href="/images/travelogy_logo.png" type="image/png" />
        <link
          rel="preload"
          as="image"
          href="/images/travelogy_hero.jpg"
          // @ts-expect-error fetchpriority is standard in modern HTML
          fetchpriority="high"
        />
        {/* Preconnect & Asynchronous Non-blocking FontAwesome */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          media="print"
          // @ts-expect-error onLoad attribute to make font stylesheet non-blocking
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('gesturestart', function(e) {
                e.preventDefault();
              });
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
