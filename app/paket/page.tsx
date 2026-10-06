'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import packagesData from '@/data/packages.json';
import { TourPackage } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPackage } from '@/lib/localization';
import PageHeaderNav from '@/components/PageHeaderNav';
import BookingModal from '@/components/BookingModal';

function SearchParamSync({
  setFilterCategory,
  setSearchQuery,
  setDurationFilter,
}: {
  setFilterCategory: (val: string) => void;
  setSearchQuery: (val: string) => void;
  setDurationFilter: (val: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const kat = searchParams.get('kategori');
    const des = searchParams.get('destinasi');
    const dur = searchParams.get('durasi');

    if (des && des !== 'semua') {
      setSearchQuery(des);
    }
    if (dur && dur !== 'semua') {
      setDurationFilter(dur);
    }
    if (kat && kat !== 'semua') {
      const lower = kat.toLowerCase();
      if (lower.includes('adventure')) setFilterCategory('adventure');
      else if (lower.includes('culture')) setFilterCategory('culture');
      else if (lower.includes('family')) setFilterCategory('family');
      else if (lower.includes('local')) setFilterCategory('local');
    }
  }, [searchParams, setFilterCategory, setSearchQuery, setDurationFilter]);

  return null;
}

export default function PaketPage() {
  const { language, t } = useLanguage();
  const rawPackages: TourPackage[] = packagesData as TourPackage[];

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPkgSlug, setSelectedPkgSlug] = useState<string>('');

  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [durationFilter, setDurationFilter] = useState<string>('all');

  const packages = rawPackages.map((p) => getLocalizedPackage(p, language));

  const filteredPackages = packages.filter((pkg) => {
    const matchesCat =
      filterCategory === 'all' ||
      pkg.category.toLowerCase().includes(filterCategory.toLowerCase());
    const matchesQuery =
      searchQuery === '' ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDur =
      durationFilter === 'all' ||
      pkg.duration.includes(durationFilter) ||
      (durationFilter.includes('2') && pkg.duration.includes('2')) ||
      (durationFilter.includes('3') && pkg.duration.includes('3')) ||
      (durationFilter.includes('4') && pkg.duration.includes('4'));

    return matchesCat && matchesQuery && matchesDur;
  });

  const isEn = language === 'en';

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      <Suspense fallback={null}>
        <SearchParamSync
          setFilterCategory={setFilterCategory}
          setSearchQuery={setSearchQuery}
          setDurationFilter={setDurationFilter}
        />
      </Suspense>

      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'Tour Packages' : 'Paket Wisata' }]}
        badge={isEn ? 'Curated Journeys' : 'Pilihan Paket Perjalanan'}
        title={isEn ? 'Explore Tour Packages & Journeys' : 'Katalog Paket Wisata & Perjalanan Travelogy'}
        description={
          isEn
            ? 'Preview and choose from our curated multi-day tour packages. Custom itineraries can be crafted specifically around your schedule and travel style.'
            : 'Pilihan paket perjalanan kurasi terbaik Travelogy. Setiap rute dan tanggal dapat disesuaikan dengan kebutuhan liburan keluarga maupun rombongan kantor.'
        }
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* FILTER & SEARCH CONTROLS */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '32px'
          }}
        >
          {/* Search Box */}
          <div style={{ flex: '1 1 280px', position: 'relative' }}>
            <input
              type="text"
              placeholder={isEn ? 'Search package by title or destination...' : 'Cari paket atau destinasi (Bromo, Bali, Malang...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            />
          </div>

          {/* Duration Filter */}
          <div style={{ minWidth: '200px' }}>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            >
              <option value="all">{isEn ? 'All Durations' : 'Semua Durasi'}</option>
              <option value="2">{isEn ? '2 Days 1 Night' : '2 Hari 1 Malam'}</option>
              <option value="3">{isEn ? '3 Days 2 Nights' : '3 Hari 2 Malam'}</option>
              <option value="4">{isEn ? '4 Days 3 Nights' : '4 Hari 3 Malam'}</option>
            </select>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="filter-tabs-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
          <button
            type="button"
            className={`tab-btn ${filterCategory === 'all' ? 'active' : ''}`}
            onClick={() => setFilterCategory('all')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: filterCategory === 'all' ? 'var(--primary)' : '#ffffff',
              color: filterCategory === 'all' ? '#ffffff' : 'var(--dark)'
            }}
          >
            {isEn ? 'All Packages' : 'Semua Paket'}
          </button>
          <button
            type="button"
            className={`tab-btn ${filterCategory === 'adventure' ? 'active' : ''}`}
            onClick={() => setFilterCategory('adventure')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: filterCategory === 'adventure' ? 'var(--primary)' : '#ffffff',
              color: filterCategory === 'adventure' ? '#ffffff' : 'var(--dark)'
            }}
          >
            Adventure & Nature
          </button>
          <button
            type="button"
            className={`tab-btn ${filterCategory === 'culture' ? 'active' : ''}`}
            onClick={() => setFilterCategory('culture')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: filterCategory === 'culture' ? 'var(--primary)' : '#ffffff',
              color: filterCategory === 'culture' ? '#ffffff' : 'var(--dark)'
            }}
          >
            Culture & Heritage
          </button>
          <button
            type="button"
            className={`tab-btn ${filterCategory === 'family' ? 'active' : ''}`}
            onClick={() => setFilterCategory('family')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: filterCategory === 'family' ? 'var(--primary)' : '#ffffff',
              color: filterCategory === 'family' ? '#ffffff' : 'var(--dark)'
            }}
          >
            Family & Leisure
          </button>
          <button
            type="button"
            className={`tab-btn ${filterCategory === 'local' ? 'active' : ''}`}
            onClick={() => setFilterCategory('local')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: filterCategory === 'local' ? 'var(--primary)' : '#ffffff',
              color: filterCategory === 'local' ? '#ffffff' : 'var(--dark)'
            }}
          >
            Local Gem (Jember)
          </button>
        </div>

        {/* RESULTS COUNT & FILTER RESET */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ color: 'var(--muted)', fontSize: '13.5px' }}>
            {isEn
              ? `Showing ${filteredPackages.length} tour package${filteredPackages.length > 1 ? 's' : ''}`
              : `Menampilkan ${filteredPackages.length} paket perjalanan`}
          </div>

          {(filterCategory !== 'all' || searchQuery || durationFilter !== 'all') && (
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
                setDurationFilter('all');
              }}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                color: 'var(--primary)',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '16px',
                backgroundColor: 'var(--primary-soft)',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="fa fa-times" style={{ fontSize: '11px' }}></i>
              <span>{isEn ? 'Clear filters (show all)' : 'Hapus filter (tampilkan semua)'}</span>
            </button>
          )}
        </div>

        {/* PACKAGES GRID */}
        {filteredPackages.length === 0 ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '60px 24px',
              textAlign: 'center',
              border: '1px solid var(--border)'
            }}
          >
            <i className="fa fa-map-o" style={{ fontSize: '42px', color: '#ccc', marginBottom: '16px' }}></i>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>
              {isEn ? 'No packages matched' : 'Tidak ada paket yang sesuai'}
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '20px' }}>
              {isEn
                ? 'Try adjusting your search query or reset the filters.'
                : 'Coba ubah kata kunci pencarian atau reset filter di atas.'}
            </p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
                setDurationFilter('all');
              }}
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer'
              }}
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div
            className="packages-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
              gap: '28px'
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
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(15, 40, 30, 0.85)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11.5px',
                        fontWeight: 700
                      }}
                    >
                      {pkg.duration}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'var(--secondary)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 700
                      }}
                    >
                      {pkg.badge || 'Preview Data'}
                    </span>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        color: 'var(--dark)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11.5px',
                        fontWeight: 600
                      }}
                    >
                      <i className="fa fa-map-marker" style={{ color: 'var(--primary)', marginRight: '5px' }}></i>
                      {pkg.location}
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--dark)',
                        marginBottom: '8px'
                      }}
                    >
                      {pkg.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.55, marginBottom: '16px', flex: 1 }}>
                      {pkg.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
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
                          border: '1px solid var(--border)'
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
                          textDecoration: 'none'
                        }}
                      >
                        <i className="fa fa-whatsapp"></i>
                        <span>Inquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CUSTOM TRIP BANNER */}
        <div
          style={{
            marginTop: '56px',
            backgroundColor: 'var(--primary)',
            borderRadius: '20px',
            padding: '36px 40px',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
              {isEn ? 'Need a Custom Itinerary Designed Around You?' : 'Ingin Jadwal & Destinasi Khusus Sesuai Rencana Anda?'}
            </h3>
            <p style={{ fontSize: '14.5px', color: '#d5e6dc', lineHeight: 1.6 }}>
              {isEn
                ? 'Tell us your preferred dates, group size, and must-see places. Our Travelogy team will design a custom itinerary with transparent pricing.'
                : 'Sampaikan tanggal perjalanan, jumlah rombongan, dan destinasi impian Anda. Tim Travelogy siap menyusun program terbaik.'}
            </p>
          </div>
          <Link
            href="/#custom-trip"
            style={{
              backgroundColor: '#ffffff',
              color: 'var(--primary-dark)',
              padding: '14px 28px',
              borderRadius: '30px',
              fontSize: '14.5px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Request Custom Trip</span>
            <i className="fa fa-arrow-right" style={{ fontSize: '13px' }}></i>
          </Link>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultPackageSlug={selectedPkgSlug}
      />
    </div>
  );
}
