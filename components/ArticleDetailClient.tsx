'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

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

interface ArticleDetailClientProps {
  article: ArticleItem;
  relatedArticles: ArticleItem[];
}

export default function ArticleDetailClient({
  article,
  relatedArticles,
}: ArticleDetailClientProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const waText = isEn
    ? `Halo Travelogy, I read your article "${article.title}" and would like to consult about this trip.`
    : `Halo Travelogy, saya membaca artikel "${article.title}" dan ingin konsultasi rute perjalanan ini.`;
  const waUrl = `https://wa.me/6281333992989?text=${encodeURIComponent(waText)}`;

  return (
    <>
      {/* HEADER BANNER & BREADCRUMBS */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5ede7', padding: '32px 15px 36px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px dashed #e8efe9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => router.back()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--primary-soft)',
                  color: 'var(--primary)',
                  border: '1px solid #cfe0d5',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <i className="fa fa-arrow-left" style={{ fontSize: '11px' }}></i>
                <span>{isEn ? 'Previous Page' : 'Halaman Sebelumnya'}</span>
              </button>

              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  color: 'var(--dark-soft)',
                  border: '1px solid #d5e0d7',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <i className="fa fa-home" style={{ fontSize: '12px' }}></i>
                <span>{isEn ? 'Home' : 'Beranda'}</span>
              </Link>

              <Link
                href="/artikel"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  color: 'var(--primary)',
                  border: '1px solid #cfe0d5',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-newspaper-o" style={{ fontSize: '12px' }}></i>
                <span>{isEn ? 'All Articles' : 'Semua Artikel'}</span>
              </Link>
            </div>

            <nav style={{ fontSize: '12.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                {isEn ? 'Home' : 'Beranda'}
              </Link>
              <span>›</span>
              <Link href="/artikel" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                {isEn ? 'Articles' : 'Artikel'}
              </Link>
              <span>›</span>
              <strong style={{ color: 'var(--primary)' }}>{article.category}</strong>
            </nav>
          </div>

          <span
            style={{
              backgroundColor: '#e8f5e9',
              color: 'var(--primary)',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 700,
              display: 'inline-block',
              marginBottom: '10px',
            }}
          >
            {article.category}
          </span>

          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.25, margin: '0 0 14px 0' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: '#64748b', flexWrap: 'wrap' }}>
            <span><i className="fa fa-clock-o" style={{ color: 'var(--primary)', marginRight: '5px' }}></i> {article.readTime}</span>
            <span>•</span>
            <span><i className="fa fa-calendar-o" style={{ color: 'var(--primary)', marginRight: '5px' }}></i> {article.date}</span>
            <span>•</span>
            <span><i className="fa fa-user-circle-o" style={{ color: 'var(--primary)', marginRight: '5px' }}></i> {isEn ? 'Travelogy Tour Organizer Editorial Team' : 'Tim Editorial Travelogy Tour Organizer'}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '36px 15px 80px 15px' }}>
        {/* Featured Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            decoding="async"
            width={800}
            height={450}
            style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Lead Excerpt */}
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-main)',
            fontWeight: 500,
            borderLeft: '4px solid var(--primary)',
            paddingLeft: '18px',
            marginBottom: '28px',
            fontStyle: 'italic',
          }}
        >
          {article.excerpt}
        </p>

        {/* Content Paragraphs */}
        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
          {article.content.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* AUTHOR & WHATSAPP CTA BOX */}
        <div
          style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #0f291e 0%, #1b4332 100%)',
            borderRadius: '16px',
            padding: '30px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 10px 25px -5px rgba(27, 67, 50, 0.3)',
          }}
        >
          <div style={{ maxWidth: '500px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a7d7b5', fontWeight: 800 }}>
              {isEn ? 'Consultation & Custom Itinerary' : 'Konsultasi Perjalanan Bersama Travelogy'}
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '6px 0 8px 0', color: '#ffffff' }}>
              {isEn ? 'Interested in Visiting This Destination?' : 'Tertarik Mengunjungi Destinasi Ini?'}
            </h3>
            <p style={{ fontSize: '13.5px', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
              {isEn
                ? 'Plan your travel schedule, transport service, or personalized tour package with the dedicated team at PT. Travelogy Tour Organizer, Jember.'
                : 'Konsultasikan jadwal keberangkatan, sewa transportasi, atau paket perjalanan custom bersama tim konsultan PT. Travelogy Tour Organizer, Jember.'}
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25d366',
              color: '#ffffff',
              padding: '12px 22px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
            }}
          >
            <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i> {isEn ? 'Ask Travelogy via WA' : 'Tanya Travelogy via WA'}
          </a>
        </div>

        {/* RELATED ARTICLES */}
        <div style={{ marginTop: '56px', borderTop: '1px solid #e2e8f0', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>
            {isEn ? 'More Articles & Travel Guides' : 'Artikel & Panduan Wisata Lainnya'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/artikel/${rel.slug}`}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '150px', overflow: 'hidden' }}>
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    decoding="async"
                    width={300}
                    height={150}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {rel.category}
                  </span>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--text-main)', lineHeight: 1.4, flex: 1 }}>
                    {rel.title}
                  </h4>
                  <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>
                    {isEn ? 'Read Guide ›' : 'Baca Selengkapnya ›'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
