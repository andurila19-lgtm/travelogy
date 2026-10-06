'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import BookingModal from '@/components/BookingModal';
import PageHeaderNav from '@/components/PageHeaderNav';

interface VehicleRaw {
  id: string;
  name: string;
  category: { id: string; en: string };
  capacity: { id: string; en: string };
  transmission: { id: string; en: string };
  pricePerDay: string;
  image: string;
  features: { id: string[]; en: string[] };
}

const rawVehicles: VehicleRaw[] = [
  {
    id: 'avanza',
    name: 'All New Avanza / Xenia',
    category: { id: 'Mobil Keluarga', en: 'Family Car' },
    capacity: { id: '5 - 6 Penumpang', en: '5 - 6 Passengers' },
    transmission: { id: 'Manual / Matic', en: 'Manual / Automatic' },
    pricePerDay: 'Konsultasikan via WhatsApp',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    features: {
      id: ['Include Supir Ramah & Paham Rute', 'BBM Sudah Termasuk (Sesuai Paket)', 'Full AC Dingin & Bersih', 'Air Mineral Botol'],
      en: ['Friendly Driver Included', 'Fuel (BBM) Included per Package', 'Clean & Cold AC', 'Complimentary Bottled Water']
    }
  },
  {
    id: 'innova',
    name: 'Toyota Innova Reborn',
    category: { id: 'Medium MPV Premium', en: 'Premium Medium MPV' },
    capacity: { id: '6 - 7 Penumpang', en: '6 - 7 Passengers' },
    transmission: { id: 'Automatic / Manual', en: 'Automatic / Manual' },
    pricePerDay: 'Konsultasikan via WhatsApp',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    features: {
      id: ['Suspensi Nyaman & Kabin Luas', 'Include Supir Profesional', 'Port USB Charger Handphone', 'Pilihan Terfavorit Keluarga'],
      en: ['Smooth Comfortable Suspension', 'Professional Courteous Driver', 'USB Charging Ports', 'Top Family Choice']
    }
  },
  {
    id: 'hiace-commuter',
    name: 'Toyota HiAce Commuter / Premio',
    category: { id: 'Minibus Rombongan', en: 'Group Minibus' },
    capacity: { id: '12 - 14 Penumpang', en: '12 - 14 Passengers' },
    transmission: { id: 'Manual', en: 'Manual' },
    pricePerDay: 'Konsultasikan via WhatsApp',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    features: {
      id: ['Kabin Tinggi Nyaman Berdiri', 'Ruang Bagasi Koper Ekstra Luas', 'Supir Berpengalaman Khusus Tour', 'Triple Blower AC Merata'],
      en: ['High-Roof Spacious Cabin', 'Generous Luggage Trunk Room', 'Experienced Tour Chauffeur', 'Even Multi-Blower AC']
    }
  },
  {
    id: 'bus-medium',
    name: 'Bus Pariwisata Medium / Big Bus',
    category: { id: 'Bus Rombongan Wisata', en: 'Tourism Bus' },
    capacity: { id: '30 - 50 Penumpang', en: '30 - 50 Passengers' },
    transmission: { id: 'Manual', en: 'Manual' },
    pricePerDay: 'Konsultasikan via WhatsApp',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: {
      id: ['Audio Karaoke & LCD TV', 'Kru Supir & Co-Driver Bersertifikat', 'Reclining Seat Nyaman', 'Cocok untuk Instansi & Study Tour'],
      en: ['Audio Entertainment & TV', 'Certified Crew & Co-Driver', 'Reclining Comfort Seats', 'Ideal for Corporate Outings']
    }
  }
];

export default function TransportPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState({ title: '', slug: '' });

  const isEn = language === 'en';

  const handleOpenBooking = (name: string, id: string) => {
    setSelectedVehicle({ title: name, slug: id });
    setBookingModalOpen(true);
  };

  const filteredVehicles = rawVehicles.filter((v) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'family') return v.id === 'avanza' || v.id === 'innova';
    if (selectedCategory === 'group') return v.id.includes('hiace') || v.id.includes('bus');
    return true;
  });

  const routes = [
    {
      routeId: 'Stasiun Jember ↔ Pusat Kota / Kampus Jember',
      routeEn: 'Jember Station ↔ City Center / Campus Area',
      car: 'Avanza / Innova',
      est: 'Konsultasikan'
    },
    {
      routeId: 'Jember ↔ Pantai Tanjung Papuma / Wuluhan',
      routeEn: 'Jember ↔ Tanjung Papuma Beach / Wuluhan',
      car: 'Avanza / Innova / HiAce',
      est: 'Konsultasikan'
    },
    {
      routeId: 'Jember ↔ Bandara Juanda Surabaya (SUB)',
      routeEn: 'Jember ↔ Juanda Airport Surabaya (SUB)',
      car: 'Innova / HiAce Private',
      est: 'Konsultasikan'
    },
    {
      routeId: 'Jember ↔ Bandara Banyuwangi (BWX)',
      routeEn: 'Jember ↔ Banyuwangi Airport (BWX)',
      car: 'Avanza / Innova',
      est: 'Konsultasikan'
    },
    {
      routeId: 'Jember ↔ Kawasan Gunung Bromo / Probolinggo',
      routeEn: 'Jember ↔ Mount Bromo / Probolinggo',
      car: 'Innova Reborn / HiAce',
      est: 'Konsultasikan'
    },
    {
      routeId: 'Jember ↔ Malang & Kota Wisata Batu',
      routeEn: 'Jember ↔ Malang & Batu Highlands',
      car: 'Innova / HiAce',
      est: 'Konsultasikan'
    }
  ];

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'Transport Services' : 'Layanan Transportasi' }]}
        badge={isEn ? 'Travel & Transport' : 'Armada & Transportasi'}
        title="Travel With Comfort"
        description={
          isEn
            ? 'Reliable, sanitized vehicle rental services with professional drivers for personal travels, family holidays, airport transfers, and corporate outings based in Jember.'
            : 'Layanan sewa armada transportasi prima dari PT. Travelogy Tour Organizer di Jember. Didukung supir profesional, kabin bersih ber-AC dingin, dan fleksibilitas perjalanan terjamin.'
        }
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* FLEET TABS */}
        <div className="filter-tabs-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '36px' }}>
          <button
            type="button"
            className={`tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: selectedCategory === 'all' ? 'var(--primary)' : '#ffffff',
              color: selectedCategory === 'all' ? '#ffffff' : 'var(--dark)'
            }}
          >
            {isEn ? 'All Fleets' : 'Semua Armada'}
          </button>
          <button
            type="button"
            className={`tab-btn ${selectedCategory === 'family' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('family')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: selectedCategory === 'family' ? 'var(--primary)' : '#ffffff',
              color: selectedCategory === 'family' ? '#ffffff' : 'var(--dark)'
            }}
          >
            {isEn ? 'Personal & Family Cars' : 'Mobil Keluarga (Avanza / Innova)'}
          </button>
          <button
            type="button"
            className={`tab-btn ${selectedCategory === 'group' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('group')}
            style={{
              padding: '9px 18px',
              borderRadius: '20px',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border)',
              backgroundColor: selectedCategory === 'group' ? 'var(--primary)' : '#ffffff',
              color: selectedCategory === 'group' ? '#ffffff' : 'var(--dark)'
            }}
          >
            {isEn ? 'Minibuses & Tourism Bus' : 'Minibus & Bus Pariwisata'}
          </button>
        </div>

        {/* FLEET GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          {filteredVehicles.map((v) => {
            const waFleetMsg = encodeURIComponent(
              `Halo Travelogy, saya ingin menanyakan layanan transportasi untuk armada ${v.name}.`
            );

            return (
              <div
                key={v.id}
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
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={v.image} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 40, 30, 0.85)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {isEn ? v.category.en : v.category.id}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: 'var(--dark)', marginBottom: '6px' }}>
                    {v.name}
                  </h3>

                  <div style={{ display: 'flex', gap: '14px', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
                    <span><i className="fa fa-users" style={{ color: 'var(--primary)', marginRight: '4px' }}></i> {isEn ? v.capacity.en : v.capacity.id}</span>
                    <span><i className="fa fa-cog" style={{ color: 'var(--primary)', marginRight: '4px' }}></i> {isEn ? v.transmission.en : v.transmission.id}</span>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--dark-soft)', marginBottom: '20px', flex: 1 }}>
                    {(isEn ? v.features.en : v.features.id).map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <i className="fa fa-check" style={{ color: 'var(--primary)', fontSize: '12px' }}></i>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                    <a
                      href={`https://wa.me/6281333992989?text=${waFleetMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        backgroundColor: 'var(--primary)',
                        color: '#ffffff',
                        padding: '12px 18px',
                        borderRadius: '24px',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <i className="fa fa-whatsapp" style={{ fontSize: '16px' }}></i>
                      <span>Ask About Transport</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* POPULAR TRANSFER ROUTES TABLE */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '36px',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
            marginBottom: '48px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Antar-Jemput Stasiun & Bandara
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: 'var(--dark)', marginTop: '4px' }}>
              Rute Transfer Populer dari Jember
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
              Layanan transfer tepat waktu dengan armada privat all-inclusive (Mobil + Supir + BBM).
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-soft)', borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '14px 16px', color: 'var(--primary-dark)', fontWeight: 700 }}>Rute Perjalanan</th>
                  <th style={{ padding: '14px 16px', color: 'var(--primary-dark)', fontWeight: 700 }}>Rekomendasi Armada</th>
                  <th style={{ padding: '14px 16px', color: 'var(--primary-dark)', fontWeight: 700 }}>Tarif Sewa</th>
                  <th style={{ padding: '14px 16px', color: 'var(--primary-dark)', fontWeight: 700, textAlign: 'center' }}>Inquiry</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #edf2ee' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--dark)' }}>
                      {isEn ? r.routeEn : r.routeId}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>
                      {r.car}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--primary)', fontWeight: 700 }}>
                      {r.est}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      <a
                        href={`https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20tanya%20tarif%20transfer%20rute:%20${encodeURIComponent(r.routeId)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#f3f7f4',
                          color: 'var(--primary)',
                          padding: '6px 14px',
                          borderRadius: '16px',
                          fontSize: '12.5px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          border: '1px solid var(--border)'
                        }}
                      >
                        <i className="fa fa-whatsapp"></i> Tanya WA
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div
          style={{
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
              Konsultasikan Kebutuhan Transportasi Anda Sekarang
            </h3>
            <p style={{ fontSize: '14.5px', color: '#d5e6dc', lineHeight: 1.6 }}>
              Tim Travelogy siap merespons kebutuhan sewa harian, antar-jemput bandara, maupun carter rombongan dengan pelayanan prima.
            </p>
          </div>
          <a
            href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20menanyakan%20layanan%20transportasi."
            target="_blank"
            rel="noopener noreferrer"
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
            <i className="fa fa-whatsapp" style={{ fontSize: '18px', color: '#25d366' }}></i>
            <span>Ask About Transport</span>
          </a>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageSlug={selectedVehicle.slug}
        packageTitle={`Transport: ${selectedVehicle.title}`}
      />
    </div>
  );
}
