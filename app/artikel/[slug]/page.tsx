import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import articlesData from '@/data/articles.json';
import ArticleDetailClient from '@/components/ArticleDetailClient';

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

const articles: ArticleItem[] = articlesData as ArticleItem[];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan — Travelogy Tour Organizer',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://travelogy.co.id';
  const canonicalUrl = `${siteUrl}/artikel/${article.slug}`;

  return {
    title: `${article.title} — Travelogy Tour Organizer`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: 'Travelogy Tour Organizer',
      images: [
        {
          url: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://travelogy.co.id';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
    datePublished: '2026-08-01T08:00:00+07:00',
    dateModified: '2026-09-24T12:00:00+07:00',
    author: {
      '@type': 'Organization',
      name: 'PT. Travelogy Tour Organizer',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PT. Travelogy Tour Organizer',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/travelogy_logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/artikel/${article.slug}`,
    },
  };

  return (
    <article className="multipage-wrapper" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Schema Markup Article JSON-LD for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleDetailClient article={article} relatedArticles={relatedArticles} />
    </article>
  );
}
