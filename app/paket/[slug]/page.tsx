import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import packagesData from '@/data/packages.json';
import { TourPackage } from '@/types';
import PackageDetailClient from '@/components/PackageDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const packages: TourPackage[] = packagesData as TourPackage[];
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const packages: TourPackage[] = packagesData as TourPackage[];
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: 'Paket Perjalanan Tidak Ditemukan — Travelogy Tour Organizer',
    };
  }

  return {
    title: `${pkg.title} — Travelogy Tour Organizer`,
    description: pkg.shortDesc,
    openGraph: {
      title: `${pkg.title} — Travelogy Tour Organizer`,
      description: pkg.shortDesc,
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const packages: TourPackage[] = packagesData as TourPackage[];
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const relatedPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.title,
    description: pkg.description,
    touristType: 'Leisure',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: '0',
      availability: 'https://schema.org/InStock',
      url: `https://travelogy.co.id/paket/${pkg.slug}`,
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'PT. Travelogy Tour Organizer',
      url: 'https://travelogy.co.id',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackageDetailClient
        initialPackage={pkg}
        initialRelatedPackages={relatedPackages}
      />
    </>
  );
}
