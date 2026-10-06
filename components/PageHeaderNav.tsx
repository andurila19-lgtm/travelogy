'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderNavProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  title: string;
  description?: string;
}

export default function PageHeaderNav({
  breadcrumbs,
  badge,
  title,
  description
}: PageHeaderNavProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div
      className="page-clean-header"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5ede7',
        padding: '32px 0 36px 0',
        marginBottom: '32px'
      }}
    >
      <div
        className="box1140"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {/* Navigation Action Buttons & Breadcrumbs Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px dashed #e8efe9'
          }}
        >
          {/* Back & Home Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap'
            }}
          >
            <button
              type="button"
              onClick={handleBack}
              aria-label={isEn ? 'Back to previous page' : 'Kembali ke halaman sebelumnya'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'var(--primary-soft)',
                color: 'var(--primary)',
                border: '1px solid #cfe0d5',
                padding: '7px 14px',
                borderRadius: '24px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-soft)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <i className="fa fa-arrow-left" style={{ fontSize: '11px' }}></i>
              <span className="hide-on-mobile">{isEn ? 'Previous Page' : 'Halaman Sebelumnya'}</span>
              <span className="show-on-mobile">{isEn ? 'Back' : 'Kembali'}</span>
            </button>

            <Link
              href="/"
              aria-label={isEn ? 'Return to homepage' : 'Kembali ke beranda'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#ffffff',
                color: 'var(--dark-soft)',
                border: '1px solid #d5e0d7',
                padding: '7px 14px',
                borderRadius: '24px',
                fontSize: '12.5px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d5e0d7';
                e.currentTarget.style.color = 'var(--dark-soft)';
              }}
            >
              <i className="fa fa-home" style={{ fontSize: '12px' }}></i>
              <span className="hide-on-mobile">{isEn ? 'Back to Home' : 'Kembali ke Beranda'}</span>
              <span className="show-on-mobile">{isEn ? 'Home' : 'Beranda'}</span>
            </Link>
          </div>

          {/* Clean Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12.5px',
              color: 'var(--muted)',
              flexWrap: 'wrap'
            }}
          >
            <Link
              href="/"
              style={{
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {isEn ? 'Home' : 'Beranda'}
            </Link>

            {breadcrumbs.map((crumb, idx) => (
              <span
                key={idx}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span style={{ color: '#b5c4b8' }}>›</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <strong style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    {crumb.label}
                  </strong>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* Header Content Area */}
        <div>
          {badge && (
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--primary-soft)',
                color: 'var(--primary)',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              {badge}
            </span>
          )}

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: 'var(--dark)',
              lineHeight: 1.25,
              margin: '0 0 10px 0'
            }}
          >
            {title}
          </h1>

          {description && (
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.6,
                color: 'var(--muted)',
                maxWidth: '780px',
                margin: 0
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
