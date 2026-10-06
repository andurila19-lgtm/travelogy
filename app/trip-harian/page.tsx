'use client';

import { useState } from 'react';
import Link from 'next/link';
import dailyTripsData from '@/data/dailyTrips.json';
import { DailyTrip } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedTrip } from '@/lib/localization';
import BookingModal from '@/components/BookingModal';
import PageHeaderNav from '@/components/PageHeaderNav';

export default function TripHarianPage() {
  const { language, t, convertPriceString } = useLanguage();
  const rawTrips: DailyTrip[] = dailyTripsData as DailyTrip[];
  const trips = rawTrips.map((tr) => getLocalizedTrip(tr, language));

  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTripForBooking, setSelectedTripForBooking] = useState<{ title: string; slug: string }>({
    title: '',
    slug: '',
  });

  const handleOpenBooking = (trip: DailyTrip) => {
    setSelectedTripForBooking({
      title: trip.title,
      slug: String(trip.id),
    });
    setIsBookingOpen(true);
  };

  const filteredTrips = trips.filter((tItem) => {
    if (selectedRegion === 'all') return true;
    const lower = (tItem.title + ' ' + tItem.desc).toLowerCase();
    if (selectedRegion === 'bromo') return lower.includes('bromo');
    if (selectedRegion === 'ijen') return lower.includes('ijen');
    if (selectedRegion === 'jember') return lower.includes('jember') || lower.includes('papuma') || lower.includes('love');
    if (selectedRegion === 'malang') return lower.includes('malang') || lower.includes('batu');
    return true;
  });

  return (
    <div className="multipage-wrapper">
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: language === 'en' ? 'Daily Trips' : 'Trip Harian' }]}
        badge={language === 'en' ? '1-Day Excursions' : 'Trip Harian 1 Hari'}
        title={language === 'en' ? 'East Java One-Day Excursions' : 'Pilihan Ekskursi & Trip Harian Travelogy (1 Hari)'}
        description={
          language === 'en'
            ? 'Private full-day excursions with hotel/station pickup, flexible itinerary, and experienced Travelogy coordinators.'
            : 'Eksplorasi destinasi favorit Jawa Timur dalam 1 hari private tour. Transportasi nyaman, driver berpengalaman, jadwal fleksibel, dan pendampingan profesional dari Travelogy Tour Organizer.'
        }
      />

      <div className="box1140" style={{ padding: '40px 15px 80px 15px' }}>
        {/* REGION FILTER TABS */}
        <div className="package-tabs" style={{ marginBottom: '32px' }}>
          <button
            className={`tab-btn ${selectedRegion === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('all')}
          >
            {language === 'en' ? 'All Daily Trips' : 'Semua Trip Harian'}
          </button>
          <button
            className={`tab-btn ${selectedRegion === 'bromo' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('bromo')}
          >
            Mount Bromo
          </button>
          <button
            className={`tab-btn ${selectedRegion === 'ijen' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('ijen')}
          >
            Kawah Ijen
          </button>
          <button
            className={`tab-btn ${selectedRegion === 'jember' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('jember')}
          >
            Jember & Coast
          </button>
          <button
            className={`tab-btn ${selectedRegion === 'malang' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('malang')}
          >
            Malang & Batu
          </button>
        </div>

        {/* TRIPS GRID */}
        <div className="harian-grid">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="harian-card">
              <div className="harian-img-box">
                <img src={trip.image} alt={trip.title} />
                <span className="harian-duration-tag">
                  {language === 'en' ? 'Duration' : 'Durasi'}: {trip.duration}
                </span>
              </div>
              <div className="harian-body">
                <h3 className="harian-title">{trip.title}</h3>
                <p className="harian-desc">{trip.desc}</p>

                <div className="harian-footer" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="harian-price-text">
                      {t.packages.perPerson}
                    </span>
                    <span className="harian-price-val">{convertPriceString(trip.price)}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(trip)}
                      className="btn-card-primary"
                    >
                      <i className="fa fa-calendar-check-o"></i> {t.buttons.book}
                    </button>

                    <a
                      href={`https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(trip.title)}.%20Mohon%20informasi%20lebih%20lanjut.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-secondary"
                    >
                      <i className="fa fa-whatsapp"></i> {t.buttons.chatWa}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUSIONS SUMMARY BOX */}
        <div className="daily-inclusions-box" style={{ marginTop: '48px' }}>
          <h3>
            <i className="fa fa-shield" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
            {language === 'en' ? 'All Daily Trips Include:' : 'Setiap Trip Harian Sudah Termasuk:'}
          </h3>
          <div className="daily-inc-grid">
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'Hotel / Station roundtrip pickup & drop-off' : 'Antar-jemput hotel / stasiun PP'}
            </div>
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'Private AC fleet + fuel (BBM)' : 'Armada private AC + BBM'}
            </div>
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'Experienced local driver & trip coordinator' : 'Driver & pendamping trip berpengalaman'}
            </div>
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'All destination entrance tickets & parking' : 'Tiket masuk destinasi & retribusi parkir'}
            </div>
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'Mineral water during tour' : 'Air mineral selama perjalanan'}
            </div>
            <div className="inc-pill-item">
              <i className="fa fa-check-circle"></i>{' '}
              {language === 'en' ? 'Photo assistance & full support' : 'Bantuan dokumentasi & asistensi tim'}
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Customer Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageTitle={selectedTripForBooking.title}
        packageSlug={selectedTripForBooking.slug}
      />
    </div>
  );
}
