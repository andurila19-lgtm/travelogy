'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TourPackage } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPackage } from '@/lib/localization';
import GalleryThumbnails from '@/components/GalleryThumbnails';
import BookingActionButtons from '@/components/BookingActionButtons';

interface PackageDetailClientProps {
  initialPackage: TourPackage;
  initialRelatedPackages: TourPackage[];
}

export default function PackageDetailClient({
  initialPackage,
  initialRelatedPackages,
}: PackageDetailClientProps) {
  const { language, t } = useLanguage();

  const router = useRouter();
  const pkg = getLocalizedPackage(initialPackage, language);
  const relatedPackages = initialRelatedPackages.map((rel) =>
    getLocalizedPackage(rel, language)
  );

  const isEn = language === 'en';

  const faqs = [
    {
      q: isEn ? 'How do I inquire or book this trip package?' : 'Bagaimana cara menanyakan atau memesan paket perjalanan ini?',
      a: isEn
        ? 'Simply click "Ask About This Trip" to chat directly with our Travelogy consultant on WhatsApp (+62 813-3399-2989). We will assist you with dates, vehicle choices, and custom requests.'
        : 'Cukup klik tombol "Ask About This Trip" untuk terhubung langsung dengan konsultan Travelogy via WhatsApp (+62 813-3399-2989). Kami siap membantu konfirmasi tanggal, pilihan armada, dan penyesuaian khusus.'
    },
    {
      q: isEn ? 'Can the itinerary and pickup location be customized?' : 'Apakah jadwal itinerary dan lokasi penjemputan bisa disesuaikan?',
      a: isEn
        ? 'Yes! All Travelogy packages can be tailored to your schedule, whether you require pickup in Jember, Surabaya, Malang, Banyuwangi, or destination airports.'
        : 'Tentu saja! Paket perjalanan Travelogy bersifat fleksibel. Penjemputan dapat disesuaikan dari Jember, Stasiun, Bandara Surabaya, Malang, Banyuwangi, maupun titik temu lainnya.'
    },
    {
      q: isEn ? 'What are the payment and booking confirmation terms?' : 'Bagaimana sistem pembayaran dan konfirmasi pemesanan?',
      a: isEn
        ? 'After itinerary alignment via WhatsApp, an official booking confirmation proposal will be provided along with secure deposit instructions.'
        : 'Setelah rancangan itinerary dan tanggal disepakati bersama via WhatsApp, tim Travelogy akan menerbitkan invoice / konfirmasi resmi dengan tata cara pembayaran yang transparan dan aman.'
    }
  ];

  return (
    <>
      {/* DETAIL HERO & BREADCRUMB */}
      <div
        className="detail-hero"
        style={{
          position: 'relative',
          minHeight: '380px',
          backgroundImage: `url('${pkg.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '48px',
          paddingTop: '100px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 40, 30, 0.92) 0%, rgba(15, 40, 30, 0.4) 60%, rgba(0, 0, 0, 0.3) 100%)'
          }}
        ></div>

        <div className="box1140 detail-hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          {/* Navigation Action Buttons & Breadcrumbs Bar */}
          <div
            className="detail-nav-bar"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              marginBottom: '18px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => router.back()}
                aria-label={isEn ? 'Back to previous page' : 'Kembali ke halaman sebelumnya'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
              >
                <i className="fa fa-arrow-left" style={{ fontSize: '11px' }}></i>
                <span>{isEn ? 'Back' : 'Kembali'}</span>
              </button>

              <Link
                href="/"
                aria-label={isEn ? 'Back to home' : 'Kembali ke beranda'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
              >
                <i className="fa fa-home" style={{ fontSize: '12px' }}></i>
                <span>{isEn ? 'Home' : 'Beranda'}</span>
              </Link>

              <Link
                href="/paket"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-th-list" style={{ fontSize: '11px' }}></i>
                <span>{isEn ? 'Packages' : 'Katalog'}</span>
              </Link>
            </div>

            <nav
              className="breadcrumb-nav detail-breadcrumbs"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: '#d2dfd6',
                flexWrap: 'wrap'
              }}
            >
              <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
                {isEn ? 'Home' : 'Beranda'}
              </Link>
              <span>›</span>
              <Link href="/paket" style={{ color: '#ffffff', textDecoration: 'none' }}>
                {isEn ? 'Tour Packages' : 'Paket Wisata'}
              </Link>
              <span className="hide-on-mobile">›</span>
              <strong className="hide-on-mobile" style={{ color: 'var(--secondary)' }}>{pkg.title}</strong>
            </nav>
          </div>

          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--secondary)',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}
          >
            {pkg.badge || 'Preview Data • PT. Travelogy Tour Organizer'}
          </span>

          <h1
            className="detail-title font-editorial"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.2
            }}
          >
            {pkg.title}
          </h1>

          <div
            className="detail-meta-pills"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}
            >
              <i className="fa fa-clock-o" style={{ marginRight: '6px' }}></i> {pkg.duration}
            </span>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}
            >
              <i className="fa fa-users" style={{ marginRight: '6px' }}></i> {pkg.type}
            </span>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}
            >
              <i className="fa fa-map-marker" style={{ marginRight: '6px', color: 'var(--secondary)' }}></i> {pkg.location}
            </span>
            <span
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              <i className="fa fa-whatsapp" style={{ marginRight: '6px' }}></i> Konsultasi via WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* MAIN DETAIL CONTENT CONTAINER */}
      <div className="box1140 detail-container" style={{ maxWidth: '1240px', margin: '40px auto 60px' }}>
        <div className="detail-layout">
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="detail-main" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            {/* 1. Destination Gallery Showcase */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '16px' }}>
                <i className="fa fa-camera" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                {isEn ? 'Photo Gallery' : 'Galeri Destinasi'}
              </h3>
              <GalleryThumbnails images={pkg.gallery} title={pkg.title} />
            </div>

            {/* 2. Overview / Deskripsi Paket */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginBottom: '16px' }}>
                {t.packageDetail.packageDescTitle}
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--dark-soft)' }}>
                {pkg.description}
              </p>

              {/* Highlights */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginBottom: '12px' }}>
                  <i className="fa fa-star" style={{ color: 'var(--gold)', marginRight: '8px' }}></i>
                  {isEn ? 'Key Trip Highlights' : 'Sorotan Utama Perjalanan'}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {pkg.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'var(--primary-soft)',
                        color: 'var(--primary)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600
                      }}
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. ITINERARY TIMETABLE */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginBottom: '20px' }}>
                  {t.packageDetail.itineraryTitle}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {pkg.itinerary.map((dayPlan, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        borderRadius: '12px',
                        border: '1px solid var(--border)',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--primary-soft)',
                          padding: '12px 18px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          borderBottom: '1px solid var(--border)'
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: 'var(--primary)',
                            color: '#ffffff',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 700
                          }}
                        >
                          {dayPlan.day}
                        </span>
                        <strong style={{ color: 'var(--primary-dark)', fontSize: '14.5px' }}>
                          {dayPlan.title}
                        </strong>
                      </div>

                      <div style={{ padding: '16px 18px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
                          <tbody>
                            {dayPlan.schedule.map((item, sIdx) => (
                              <tr key={sIdx} style={{ borderBottom: '1px solid #f2f6f3' }}>
                                <td style={{ padding: '10px 0', width: '120px', color: 'var(--primary)', fontWeight: 700, verticalAlign: 'top' }}>
                                  {item.time}
                                </td>
                                <td style={{ padding: '10px 8px', width: '12px', color: 'var(--muted)', verticalAlign: 'top' }}>
                                  :
                                </td>
                                <td style={{ padding: '10px 0', color: 'var(--dark)', lineHeight: 1.5, verticalAlign: 'top' }}>
                                  {item.activity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. INCLUDED & NOT INCLUDED */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginBottom: '20px' }}>
                {t.packageDetail.facilitiesTitle}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                {/* Termasuk */}
                <div style={{ backgroundColor: '#f5faf6', padding: '20px', borderRadius: '12px', border: '1px solid #e0eee4' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa fa-check-circle" style={{ fontSize: '18px' }}></i>
                    {t.packageDetail.inclusionsTitle}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--dark)' }}>
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px' }}>
                        <i className="fa fa-check" style={{ color: 'var(--primary)', marginTop: '3px' }}></i>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tidak Termasuk */}
                <div style={{ backgroundColor: '#fcf8f8', padding: '20px', borderRadius: '12px', border: '1px solid #fae5e5' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#dc2626', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa fa-times-circle" style={{ fontSize: '18px' }}></i>
                    {t.packageDetail.exclusionsTitle}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--dark)' }}>
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px' }}>
                        <i className="fa fa-times" style={{ color: '#dc2626', marginTop: '3px' }}></i>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. PACKAGE FAQ */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginBottom: '16px' }}>
                <i className="fa fa-question-circle" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                {isEn ? 'Frequently Asked Questions' : 'Pertanyaan Umum Mengenai Paket Ini'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ padding: '16px 20px', backgroundColor: '#f9fbf9', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                    <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--dark)', marginBottom: '6px' }}>
                      {faq.q}
                    </strong>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.55 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Call to Action */}
              <div style={{ marginTop: '28px', padding: '24px', backgroundColor: 'var(--primary-soft)', borderRadius: '12px', border: '1px solid rgba(27, 67, 50, 0.15)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                  {isEn ? 'Ready to Experience This Journey?' : 'Tertarik Menikmati Paket Perjalanan Ini?'}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--dark-soft)', maxWidth: '520px', margin: '0 auto 18px' }}>
                  {isEn
                    ? 'Reach out directly to Travelogy Tour Organizer to check available dates, vehicle options, and custom pricing.'
                    : 'Hubungi langsung tim PT. Travelogy Tour Organizer untuk konsultasi tanggal, opsi armada, dan penawaran terbaik.'}
                </p>
                <BookingActionButtons packageSlug={pkg.slug} packageTitle={pkg.title} variant="inline" />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="detail-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Quick Action Card */}
            <div
              className="sidebar-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 24px rgba(27, 67, 50, 0.06)',
                position: 'sticky',
                top: '96px'
              }}
            >
              <div style={{ marginBottom: '18px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>
                  Konsultasi Paket
                </span>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>
                  {pkg.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--dark-soft)', marginTop: '2px' }}>
                  {pkg.duration} &bull; {pkg.type}
                </div>
              </div>

              <BookingActionButtons packageSlug={pkg.slug} packageTitle={pkg.title} variant="sidebar" />

              {/* Office & Trust Badges */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: 'var(--dark-soft)' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <i className="fa fa-shield" style={{ color: 'var(--primary)', fontSize: '14px' }}></i>
                  <span>PT. Travelogy Tour Organizer Resmi</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <i className="fa fa-clock-o" style={{ color: 'var(--primary)', fontSize: '14px' }}></i>
                  <span>Jam Kantor: 09:00 - 13:00 WIB</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <i className="fa fa-map-marker" style={{ color: 'var(--primary)', fontSize: '14px', marginTop: '2px' }}></i>
                  <span>Jl. Mastrip No.71, Sumbersari, Jember</span>
                </div>
              </div>
            </div>

            {/* Custom Trip Promo */}
            <div
              style={{
                backgroundColor: '#f3f7f4',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid var(--border)'
              }}
            >
              <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '6px' }}>
                Ingin Custom Rute Perjalanan?
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                Punya preferensi destinasi lain atau rombongan khusus? Tim Travelogy siap merancang perjalanan Anda.
              </p>
              <Link
                href="/#custom-trip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textDecoration: 'none'
                }}
              >
                <span>Request Custom Trip</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* RELATED PACKAGES */}
      <section className="related-packages-section" style={{ backgroundColor: '#f3f7f4', padding: '56px 0', borderTop: '1px solid var(--border)' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
            <div>
              <span className="section-tag" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Inspirasi Lainnya
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700, color: 'var(--dark)' }}>
                Paket Rekomendasi Travelogy
              </h2>
            </div>
            <Link href="/paket" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
              Lihat Semua Paket <i className="fa fa-arrow-right"></i>
            </Link>
          </div>

          <div
            className="packages-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {relatedPackages.slice(0, 3).map((rel) => (
              <div
                key={rel.slug}
                className="package-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ height: '170px', position: 'relative', overflow: 'hidden' }}>
                  <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(15, 40, 30, 0.85)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {rel.duration}
                  </span>
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                    {rel.shortDesc}
                  </p>
                  <Link
                    href={`/paket/${rel.slug}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      padding: '8px 12px',
                      borderRadius: '20px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
