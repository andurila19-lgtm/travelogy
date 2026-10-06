'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHeaderNav from '@/components/PageHeaderNav';

export default function TentangKamiPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'About Us' : 'Tentang Kami' }]}
        badge="Company Profile"
        title={isEn ? 'About Travelogy Tour Organizer' : 'Tentang Travelogy Tour Organizer'}
        description={
          isEn
            ? '“Bringing Happiness in Every Journey” • Your trusted travel partner based in Jember, East Java.'
            : '“Bringing Happiness in Every Journey” • Partner perjalanan terpercaya berbasis di Jember, Jawa Timur.'
        }
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* STORY & POSITIONING SECTION */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '36px',
            alignItems: 'center',
            marginBottom: '64px'
          }}
        >
          {/* Narrative Column */}
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--primary-soft)',
                color: 'var(--primary)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '14px'
              }}
            >
              Positioning & Komitmen
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3.8vw, 38px)',
                fontWeight: 700,
                color: 'var(--dark)',
                lineHeight: 1.25,
                marginBottom: '20px'
              }}
            >
              Hadir Menemani Setiap Langkah Perjalanan Anda
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--dark-soft)', marginBottom: '16px' }}>
              Travelogy Tour Organizer hadir untuk membantu customer menikmati perjalanan dengan lebih mudah, nyaman, dan terencana. Berbasis di Jember, Jawa Timur, kami mengerti bahwa setiap perjalanan adalah kesempatan berharga untuk berkumpul, melepas penat, dan menciptakan kenangan abadi bersama orang-orang tercinta.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '24px' }}>
              Kami memadukan 4 layanan inti dalam satu pintu yang terintegrasi: Tour & Travel, Transportasi armada berstandar prima, Reservasi Hotel & Penginapan rekanan, serta Event Planning profesional. Dari perjalanan personal, liburan keluarga, outing komunitas, hingga corporate gathering perusahaan, tim Travelogy siap merancang dan mendampingi agenda Anda dari titik temu hingga kepulangan.
            </p>

            <div
              style={{
                backgroundColor: 'var(--primary-soft)',
                borderLeft: '4px solid var(--primary)',
                padding: '16px 20px',
                borderRadius: '8px',
                marginBottom: '28px'
              }}
            >
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '4px' }}>
                Tagline Utama Kami:
              </strong>
              <span style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--primary)' }}>
                &ldquo;Bringing Happiness in Every Journey&rdquo;
              </span>
            </div>
          </div>

          {/* Visual Column */}
          <div>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(27, 67, 50, 0.12)',
                border: '1px solid var(--border)'
              }}
            >
              <img
                src="/images/travelogy_hero.jpg"
                alt="Travelogy Tour Organizer Jember"
                loading="lazy"
                decoding="async"
                width={600}
                height={350}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* 4 CORE PILLARS OF SERVICE */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span
            style={{
              backgroundColor: 'var(--primary-soft)',
              color: 'var(--primary)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Layanan Terpadu
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '30px',
              fontWeight: 700,
              color: 'var(--dark)',
              marginTop: '12px'
            }}
          >
            4 Layanan Utama Travelogy
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '14px' }}>
              <i className="fa fa-globe"></i>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>Tour & Travel</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Paket perjalanan wisata tematik ke destinasi unggulan Jawa Timur, Bali, Yogyakarta, dan sekitarnya dengan itinerary teratur dan fleksibel.
            </p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '14px' }}>
              <i className="fa fa-car"></i>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>Travel & Transport</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Sewa mobil harian, minibus rombongan, dan antar-jemput stasiun/bandara dengan armada prima dan supir berpengalaman.
            </p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '14px' }}>
              <i className="fa fa-building-o"></i>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>Hotel & Lodging</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Pemesanan kamar hotel rekanan terpercaya, resort santai, dan villa privat dengan jaminan kenyamanan istirahat maksimal.
            </p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '14px' }}>
              <i className="fa fa-users"></i>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>Event Planner</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Jasa Event Organizer profesional untuk corporate gathering, company outing, outbound team building, dan acara spesial.
            </p>
          </div>
        </div>

        {/* HEADQUARTERS & CONTACT INFO */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '36px',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Legal & Basecamp
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginTop: '4px', marginBottom: '12px' }}>
                PT. Travelogy Tour Organizer
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--dark-soft)', lineHeight: 1.6, marginBottom: '16px' }}>
                Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                <div><strong style={{ color: 'var(--dark)' }}>Jam Operasional:</strong> 09:00 - 13:00 WIB</div>
                <div><strong style={{ color: 'var(--dark)' }}>Email:</strong> travelogycorp@gmail.com</div>
                <div><strong style={{ color: 'var(--dark)' }}>WhatsApp:</strong> +62 813-3399-2989</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Ingin berdiskusi mengenai proposal perjalanan, kerja sama tour instansi, atau penyewaan armada transportasi? Tim kami siap melayani Anda.
              </p>
              <a
                href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20tour%20dan%20perjalanan."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
