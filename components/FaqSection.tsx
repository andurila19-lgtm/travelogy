'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const faqsData: FaqItem[] = [
  {
    q: 'Apa saja layanan utama yang disediakan PT. Travelogy Tour Organizer?',
    qEn: 'What are the main services provided by PT. Travelogy Tour Organizer?',
    a: 'Travelogy Tour Organizer menyediakan 4 pilar layanan utama: (1) Tour & Travel (paket wisata privat dan rombongan), (2) Layanan Transportasi (sewa mobil, minibus, bus wisata, dan transfer bandara/stasiun), (3) Reservasi Hotel & Villa, serta (4) Event Planning (corporate gathering, outing kantor, dan outbound).',
    aEn: 'Travelogy Tour Organizer offers 4 core pillars of services: (1) Tours & Travel (private and group travel packages), (2) Transportation services (car rental, minibuses, tourism buses, and station/airport transfers), (3) Hotel & Villa reservations, and (4) Event Planning (corporate gatherings, company outings, and outbound activities).'
  },
  {
    q: 'Bagaimana cara berkonsultasi atau memesan perjalanan di Travelogy?',
    qEn: 'How can I consult or book a trip with Travelogy?',
    a: 'Sangat mudah! Anda dapat mengklik tombol "Chat With Travelogy" atau menghubungi WhatsApp resmi kami di +62 813-3399-2989. Anda juga dapat mengisi formulir Custom Trip di website ini untuk menerima rekomendasi jadwal dan estimasi biaya terperinci.',
    aEn: 'Very simple! You can click the "Chat With Travelogy" button or contact our official WhatsApp at +62 813-3399-2989. You can also fill out the Custom Trip form on this website to receive a tailored schedule and quotation.'
  },
  {
    q: 'Apakah jadwal perjalanan (itinerary) bisa disesuaikan dengan kebutuhan pribadi atau kantor?',
    qEn: 'Can the itinerary be tailored to personal or corporate needs?',
    a: 'Tentu saja. Konsep layanan Travelogy adalah Personalized Journey & End-to-End Planning. Anda bebas menentukan destinasi, titik penjemputan (Jember, Surabaya, Malang, atau kota lain), jenis armada, dan kelas hotel sesuai preferensi Anda.',
    aEn: 'Absolutely. Travelogy focuses on Personalized Journeys and End-to-End Planning. You have total freedom to specify destinations, pickup points (Jember, Surabaya, Malang, etc.), vehicle types, and hotel categories.'
  },
  {
    q: 'Di mana kantor operasional Travelogy dan bagaimana jam operasionalnya?',
    qEn: 'Where is Travelogy head office located and what are the operating hours?',
    a: 'Kantor resmi PT. Travelogy Tour Organizer berlokasi di Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124. Jam operasional kantor kami adalah pukul 09:00 - 13:00 WIB, dan layanan chat konsultasi WhatsApp tetap aktif merespons kebutuhan Anda.',
    aEn: 'The official office of PT. Travelogy Tour Organizer is located at Jl. Mastrip No.71, Sumbersari, Jember, East Java 68124. Office operational hours are 09:00 - 13:00 WIB, with our WhatsApp consultation remaining readily responsive.'
  },
  {
    q: 'Apakah Travelogy melayani sewa armada transportasi saja tanpa paket tour?',
    qEn: 'Does Travelogy provide vehicle rental services without tour packages?',
    a: 'Ya, kami melayani sewa transportasi murni (Travel & Transport) untuk keperluan perjalanan dinas, drop-off bandara/stasiun, sewa harian supir + BBM, hingga kebutuhan carter rombongan keluarga atau perusahaan.',
    aEn: 'Yes, we provide pure transport rental services for business trips, airport/station drop-offs, daily car rental with driver + fuel, as well as group charters for families and corporate clients.'
  }
];

export default function FaqSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" style={{ padding: '72px 0', background: 'var(--bg-surface)' }}>
      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span
            style={{
              background: 'var(--primary-soft)',
              color: 'var(--primary)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            {language === 'en' ? 'Help & Consultation' : 'Tanya Jawab'}
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--dark)',
              marginTop: '12px',
              marginBottom: '10px'
            }}
          >
            {language === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan Seputar Layanan Travelogy'}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
            {language === 'en'
              ? 'Find answers to common questions about trips, transport, and planning with PT. Travelogy Tour Organizer.'
              : 'Informasi lengkap seputar pemesanan perjalanan, transportasi, dan layanan PT. Travelogy Tour Organizer.'}
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqsData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const question = language === 'en' ? item.qEn : item.q;
            const answer = language === 'en' ? item.aEn : item.a;

            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: '12px',
                  boxShadow: isOpen ? '0 6px 20px rgba(27, 67, 50, 0.07)' : '0 1px 3px rgba(0,0,0,0.03)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--primary)' : 'var(--dark)',
                    fontWeight: 700,
                    fontSize: '15.5px'
                  }}
                >
                  <span>{question}</span>
                  <i
                    className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}
                    style={{ fontSize: '18px', color: 'var(--primary)' }}
                  ></i>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      color: 'var(--dark-soft)',
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-light)'
                    }}
                  >
                    <p style={{ marginTop: '12px' }}>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
