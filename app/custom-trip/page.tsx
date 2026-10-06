'use client';

import { useLanguage } from '@/context/LanguageContext';
import PageHeaderNav from '@/components/PageHeaderNav';
import CustomTripForm from '@/components/CustomTripForm';

export default function CustomTripPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'Custom Trip' : 'Custom Trip' }]}
        badge={isEn ? 'Tailored Itineraries' : 'Perjalanan Khusus Anda'}
        title="Your Trip, Your Way"
        description={
          isEn
            ? 'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.'
            : 'Punya destinasi impian tapi butuh jadwal perjalanan yang disesuaikan khusus untuk Anda dan rombongan? Sampaikan kebutuhan Anda dan biarkan tim Travelogy merancang perjalanannya.'
        }
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* LEFT: INTERACTIVE CUSTOM TRIP FORM */}
          <div>
            <CustomTripForm />
          </div>

          {/* RIGHT: BENEFITS & DIRECT ASSISTANCE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Why Custom Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e5ede7',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Keunggulan Layanan
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  margin: '8px 0 16px 0'
                }}
              >
                Mengapa Memilih Custom Trip Bersama Travelogy?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <i className="fa fa-sliders"></i>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--dark)', display: 'block', marginBottom: '2px' }}>
                      Jadwal 100% Fleksibel
                    </strong>
                    <span style={{ color: 'var(--muted)', lineHeight: 1.5 }}>
                      Bebas menentukan jam keberangkatan, titik penjemputan di stasiun/bandara, dan durasi kunjungan di setiap obyek wisata.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <i className="fa fa-car"></i>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--dark)', display: 'block', marginBottom: '2px' }}>
                      Pilihan Armada Nyaman
                    </strong>
                    <span style={{ color: 'var(--muted)', lineHeight: 1.5 }}>
                      Sesuaikan tipe kendaraan mulai dari Avanza, Innova Reborn, Toyota HiAce, hingga Medium Bus ber-AC bersih.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <i className="fa fa-money"></i>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--dark)', display: 'block', marginBottom: '2px' }}>
                      Transparan & Ramah Anggaran
                    </strong>
                    <span style={{ color: 'var(--muted)', lineHeight: 1.5 }}>
                      Rincian estimasi biaya terbuka tanpa biaya tersembunyi, dapat disesuaikan dengan alokasi budget rombongan Anda.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <i className="fa fa-headphones"></i>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--dark)', display: 'block', marginBottom: '2px' }}>
                      Konsultasi Langsung via WhatsApp
                    </strong>
                    <span style={{ color: 'var(--muted)', lineHeight: 1.5 }}>
                      Tim konsultan Travelogy siap mendiskusikan rute terbaik secara personal sampai jadwal liburan Anda matang.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick Contact Card */}
            <div
              style={{
                backgroundColor: 'var(--primary)',
                borderRadius: '20px',
                padding: '30px',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(28, 96, 97, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <img
                  src="/images/travelogy_logo.png"
                  alt="Travelogy"
                  loading="lazy"
                  decoding="async"
                  width={42}
                  height={42}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>
                    Butuh Diskusi Cepat?
                  </h4>
                  <span style={{ fontSize: '12px', color: '#e8caa4' }}>
                    Hotline Konsultan Travelogy
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: '#e0ece9', lineHeight: 1.6, marginBottom: '20px' }}>
                Anda juga bisa langsung chat kami via WhatsApp untuk konsultasi cepat tanpa mengisi formulir terlebih dahulu.
              </p>

              <a
                href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20konsultasi%20mengenai%20custom%20trip."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#25d366',
                  color: '#ffffff',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                }}
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Chat Konsultan Travelogy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
