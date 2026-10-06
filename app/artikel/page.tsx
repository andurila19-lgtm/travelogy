'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import articlesData from '@/data/articles.json';
import PageHeaderNav from '@/components/PageHeaderNav';

interface Article {
  id: string;
  slug?: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export default function ArtikelPage() {
  const { language } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = articlesData as Article[];

  const filteredArticles = articles.filter((a) => {
    if (selectedCat === 'all') return true;
    return a.category.toLowerCase().includes(selectedCat.toLowerCase());
  });

  return (
    <div className="multipage-wrapper">
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: language === 'en' ? 'Articles & Guides' : 'Artikel & Panduan' }]}
        badge={language === 'en' ? 'Travel Inspiration' : 'Inspirasi Perjalanan'}
        title={language === 'en' ? 'Travelogy Travel Guides & Inspiration' : 'Artikel & Panduan Perjalanan Travelogy'}
        description={
          language === 'en'
            ? 'Curated destination highlights, planning tips, and regional guides crafted by PT. Travelogy Tour Organizer.'
            : 'Informasi destinasi unggulan, tips perencanaan liburan, rute perjalanan, dan inspirasi liburan keluarga dari PT. Travelogy Tour Organizer, Jember.'
        }
      />

      <div className="box1140" style={{ padding: '40px 15px 80px 15px' }}>
        {/* CATEGORY TABS */}
        <div className="package-tabs" style={{ marginBottom: '32px' }}>
          <button
            className={`tab-btn ${selectedCat === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCat('all')}
          >
            {language === 'en' ? 'All Articles' : 'Semua Artikel'}
          </button>
          <button
            className={`tab-btn ${selectedCat === 'tips' ? 'active' : ''}`}
            onClick={() => setSelectedCat('tips')}
          >
            {language === 'en' ? 'Travel Tips' : 'Tips Traveling'}
          </button>
          <button
            className={`tab-btn ${selectedCat === 'destinasi' ? 'active' : ''}`}
            onClick={() => setSelectedCat('destinasi')}
          >
            {language === 'en' ? 'Destinations' : 'Destinasi'}
          </button>
          <button
            className={`tab-btn ${selectedCat === 'petualangan' ? 'active' : ''}`}
            onClick={() => setSelectedCat('petualangan')}
          >
            {language === 'en' ? 'Adventures' : 'Petualangan'}
          </button>
        </div>

        {/* ARTICLES GRID */}
        <div className="articles-grid">
          {filteredArticles.map((art) => (
            <article key={art.id} className="article-card">
              <div className="article-img-box">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={220}
                />
                <span className="article-cat-badge">{art.category}</span>
              </div>
              <div className="article-card-body">
                <div className="article-meta">
                  <span><i className="fa fa-clock-o"></i> {art.readTime}</span>
                  <span>•</span>
                  <span><i className="fa fa-calendar-o"></i> {art.date}</span>
                </div>
                <h2 className="article-title">{art.title}</h2>
                <p className="article-excerpt">{art.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
                  <Link
                    href={`/artikel/${art.slug || art.id}`}
                    className="btn-read-more"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {language === 'en' ? 'Read Full Guide' : 'Baca Selengkapnya'}{' '}
                    <i className="fa fa-angle-right"></i>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(art)}
                    style={{
                      background: 'none',
                      border: '1px solid #cbd5e1',
                      color: '#475569',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                    title="Preview Cepat"
                  >
                    <i className="fa fa-eye"></i> Quick View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ARTICLE MODAL POPUP */}
        {activeArticle && (
          <div
            className="article-modal-backdrop"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="article-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setActiveArticle(null)}
                aria-label="Tutup"
              >
                <i className="fa fa-times"></i>
              </button>

              <div className="article-modal-header">
                <span className="article-cat-badge" style={{ position: 'static' }}>
                  {activeArticle.category}
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, marginTop: '10px', color: 'var(--primary)' }}>
                  {activeArticle.title}
                </h2>
                <div className="article-meta" style={{ marginTop: '8px' }}>
                  <span><i className="fa fa-clock-o"></i> {activeArticle.readTime}</span>
                  <span>•</span>
                  <span><i className="fa fa-calendar-o"></i> {activeArticle.date}</span>
                </div>
              </div>

              <div className="article-modal-img">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="article-modal-body">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx} style={{ marginBottom: '16px', lineHeight: 1.7, color: '#334155' }}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="article-modal-footer">
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                  {language === 'en'
                    ? 'Have questions about this destination or need a custom travel itinerary?'
                    : 'Ingin mengunjungi destinasi ini bersama PT. Travelogy Tour Organizer?'}
                </p>
                <a
                  href={`https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20tertarik%20dengan%20artikel%20${encodeURIComponent(activeArticle.title)}.%20Mohon%20info%20rekomendasi%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom-wa"
                  style={{ display: 'inline-flex' }}
                >
                  <i className="fa fa-whatsapp"></i>{' '}
                  {language === 'en' ? 'Inquire on WhatsApp' : 'Tanya Jadwal via WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
