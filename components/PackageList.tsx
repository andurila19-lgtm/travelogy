'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TourPackage } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPackage } from '@/lib/localization';

interface PackageListProps {
  packages: TourPackage[];
}

export default function PackageList({ packages }: PackageListProps) {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const localizedPackages = packages.map((p) => getLocalizedPackage(p, language));

  const filteredPackages = localizedPackages.filter((pkg) => {
    if (filter === 'all') return true;
    return pkg.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      {/* Category Filter Tabs */}
      <div
        className="package-tabs filter-tabs-bar"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '36px'
        }}
      >
        <button
          type="button"
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          style={{
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--border)',
            backgroundColor: filter === 'all' ? 'var(--primary)' : '#ffffff',
            color: filter === 'all' ? '#ffffff' : 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
        >
          {t.packages.tabAll}
        </button>

        <button
          type="button"
          className={`tab-btn ${filter === 'adventure' ? 'active' : ''}`}
          onClick={() => setFilter('adventure')}
          style={{
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--border)',
            backgroundColor: filter === 'adventure' ? 'var(--primary)' : '#ffffff',
            color: filter === 'adventure' ? '#ffffff' : 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
        >
          Adventure & Nature
        </button>

        <button
          type="button"
          className={`tab-btn ${filter === 'culture' ? 'active' : ''}`}
          onClick={() => setFilter('culture')}
          style={{
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--border)',
            backgroundColor: filter === 'culture' ? 'var(--primary)' : '#ffffff',
            color: filter === 'culture' ? '#ffffff' : 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
        >
          Culture & Heritage
        </button>

        <button
          type="button"
          className={`tab-btn ${filter === 'family' ? 'active' : ''}`}
          onClick={() => setFilter('family')}
          style={{
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--border)',
            backgroundColor: filter === 'family' ? 'var(--primary)' : '#ffffff',
            color: filter === 'family' ? '#ffffff' : 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
        >
          Family & Leisure
        </button>

        <button
          type="button"
          className={`tab-btn ${filter === 'local' ? 'active' : ''}`}
          onClick={() => setFilter('local')}
          style={{
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid var(--border)',
            backgroundColor: filter === 'local' ? 'var(--primary)' : '#ffffff',
            color: filter === 'local' ? '#ffffff' : 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
        >
          Local Exploration (Jember)
        </button>
      </div>

      {/* Packages Grid */}
      <div
        className="packages-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
          gap: '30px'
        }}
      >
        {filteredPackages.map((pkg) => {
          const waMessage = encodeURIComponent(
            `Halo Travelogy, saya tertarik dengan paket ${pkg.title}. Mohon informasi lebih lanjut.`
          );

          return (
            <div
              key={pkg.slug}
              className="package-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Card Image Wrapper */}
              <div
                style={{
                  position: 'relative',
                  height: '220px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#e6ede8'
                }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                {/* Duration Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(15, 40, 30, 0.85)',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <i className="fa fa-clock-o" style={{ marginRight: '5px' }}></i>
                  {pkg.duration}
                </span>

                {/* Preview / Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    backgroundColor: 'var(--secondary)',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  {pkg.badge || 'Preview Data'}
                </span>

                {/* Destination Location Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--dark)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                  }}
                >
                  <i className="fa fa-map-marker" style={{ color: 'var(--primary)', marginRight: '5px' }}></i>
                  {pkg.location}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}
                >
                  {pkg.title}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--muted)',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                    flex: 1
                  }}
                >
                  {pkg.shortDesc}
                </p>

                {/* Highlights Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px'
                  }}
                >
                  {pkg.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'var(--primary-soft)',
                        color: 'var(--primary)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 600
                      }}
                    >
                      &bull; {h}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)'
                  }}
                >
                  <Link
                    href={`/paket/${pkg.slug}`}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      backgroundColor: '#f3f7f4',
                      color: 'var(--primary)',
                      padding: '11px 16px',
                      borderRadius: '24px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      border: '1px solid var(--border)',
                      transition: 'all 0.2s'
                    }}
                  >
                    View Details
                  </Link>

                  <a
                    href={`https://wa.me/6281333992989?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      padding: '11px 18px',
                      borderRadius: '24px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 12px rgba(27, 67, 50, 0.2)'
                    }}
                    title="Konsultasi via WhatsApp"
                  >
                    <i className="fa fa-whatsapp" style={{ fontSize: '15px' }}></i>
                    <span>Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
