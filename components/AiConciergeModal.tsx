'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Recommendation {
  title: string;
  desc: string;
  link: string;
  waText: string;
}

export default function AiConciergeModal({ isOpen, onClose }: AiConciergeModalProps) {
  const [durasi, setDurasi] = useState('3h2m');
  const [tema, setTema] = useState('bromo');
  const [pax, setPax] = useState('2');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let rec: Recommendation = {
      title: '3D2N Bromo Escape',
      desc: isEn
        ? 'Majestic golden sunrise over Tengger caldera, 4x4 Jeep adventure across whispering sands, and active crater rim exploration.'
        : 'Saksikan magisnya golden sunrise di atas kaldera Tengger, petualangan Jeep 4x4 melintasi pasir berbisik, dan kawah aktif Bromo.',
      link: '/paket/3d2n-bromo-escape',
      waText: isEn
        ? 'Hello Travelogy, I would like to consult about the 3D2N Bromo Escape package.'
        : 'Halo Travelogy, saya tertarik dengan paket 3D2N Bromo Escape. Mohon informasi lebih lanjut.'
    };

    if (tema === 'bali') {
      rec = {
        title: '4D3N Bali Experience',
        desc: isEn
          ? 'Comprehensive Island of Gods journey: Ulun Danu Beratan water temple, Ubud art villages, Kintamani vistas, and coastal sunsets.'
          : 'Eksplorasi lengkap Pulau Dewata: Danau Beratan Bedugul, seni budaya Ubud, pemandangan Kintamani, dan sunset pantai.',
        link: '/paket/4d3n-bali-experience',
        waText: isEn
          ? 'Hello Travelogy, I would like to consult about the 4D3N Bali Experience package.'
          : 'Halo Travelogy, saya tertarik dengan paket 4D3N Bali Experience. Mohon informasi lebih lanjut.'
      };
    } else if (tema === 'malang') {
      rec = {
        title: 'Malang Adventure & Highland Escape',
        desc: isEn
          ? 'Fresh highland air in Batu, fresh apple picking at local orchards, Coban Rondo waterfall, and theme park excitement.'
          : 'Kesejukan hawa pegunungan Kota Wisata Batu, petik apel segar langsung dari pohon, Coban Rondo, dan wisata keluarga.',
        link: '/paket/malang-adventure',
        waText: isEn
          ? 'Hello Travelogy, I would like to consult about the Malang Adventure package.'
          : 'Halo Travelogy, saya tertarik dengan paket Malang Adventure. Mohon informasi lebih lanjut.'
      };
    } else if (tema === 'ijen') {
      rec = {
        title: 'Ijen Midnight Crater Expedition',
        desc: isEn
          ? 'Rare natural electric blue flames, vibrant turquoise acidic lake, and breathtaking morning sunrise at the crater rim.'
          : 'Fenomena langka Api Biru (Blue Fire) Kawah Ijen, danau belerang toska, dan sunrise fajar spektakuler dari bibir kawah.',
        link: '/paket/ijen-crater-expedition',
        waText: isEn
          ? 'Hello Travelogy, I would like to consult about the Ijen Crater Expedition package.'
          : 'Halo Travelogy, saya tertarik dengan paket Ijen Midnight Crater Expedition. Mohon informasi lebih lanjut.'
      };
    } else if (tema === 'jember') {
      rec = {
        title: 'Jember Exotic Discovery',
        desc: isEn
          ? 'Authentic local exploration of Tanjung Papuma sea rocks, heart-shaped Love Bay, and heritage mountain coffee plantations.'
          : 'Eksotisme pantai selatan Tanjung Papuma, panorama Teluk Love dari bukit, dan agrowisata kopi khas lereng pegunungan Jember.',
        link: '/paket/2d1n-jember-exotic-discovery',
        waText: isEn
          ? 'Hello Travelogy, I would like to consult about the Jember Exotic Discovery package.'
          : 'Halo Travelogy, saya tertarik dengan paket Jember Exotic Discovery. Mohon informasi lebih lanjut.'
      };
    }

    setRecommendation(rec);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 40, 30, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '560px',
          width: '100%',
          padding: '32px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          border: '1px solid var(--border)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                backgroundColor: 'var(--primary-soft)',
                padding: '4px 10px',
                borderRadius: '14px'
              }}
            >
              Travelogy Trip Assistant
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginTop: '6px' }}>
              {isEn ? 'Find Your Best Match' : 'Cari Rekomendasi Paket Perjalanan'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: '#f3f7f4',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              color: 'var(--dark)',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {!recommendation ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                1. {isEn ? 'Preferred Trip Duration?' : 'Rencana Durasi Perjalanan?'}
              </label>
              <select
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px', backgroundColor: '#fafcfb' }}
              >
                <option value="1h">1 Hari (Trip Singkat)</option>
                <option value="2h1m">2 Hari 1 Malam</option>
                <option value="3h2m">3 Hari 2 Malam</option>
                <option value="4h3m">4 Hari 3 Malam</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                2. {isEn ? 'Which Destination Interests You Most?' : 'Destinasi yang Paling Menarik Minat Anda?'}
              </label>
              <select
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px', backgroundColor: '#fafcfb' }}
              >
                <option value="bromo">Bromo & Sunrise Penanjakan</option>
                <option value="bali">Bali (Ubud, Kintamani & Pantai)</option>
                <option value="malang">Malang & Kota Wisata Batu</option>
                <option value="ijen">Kawah Ijen & Fenomena Blue Fire</option>
                <option value="jember">Jember (Papuma, Teluk Love & Kopi)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                3. {isEn ? 'Estimated Number of Guests?' : 'Perkiraan Jumlah Peserta?'}
              </label>
              <select
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '14px', backgroundColor: '#fafcfb' }}
              >
                <option value="2">2 Orang (Pasangan / Duet)</option>
                <option value="4">3 - 6 Orang (Keluarga)</option>
                <option value="10">7 - 14+ Orang (Rombongan)</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '30px',
                border: 'none',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              {isEn ? 'Show Recommendation' : 'Lihat Rekomendasi Paket'}
            </button>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: 'var(--primary-soft)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(27, 67, 50, 0.15)' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                Rekomendasi Terbaik
              </span>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: 'var(--primary-dark)', marginTop: '4px', marginBottom: '8px' }}>
                {recommendation.title}
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--dark-soft)', lineHeight: 1.55 }}>
                {recommendation.desc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link
                href={recommendation.link}
                onClick={onClose}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  backgroundColor: '#f3f7f4',
                  color: 'var(--primary)',
                  padding: '12px 16px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1px solid var(--border)'
                }}
              >
                {isEn ? 'View Package' : 'Lihat Detail Paket'}
              </Link>
              <a
                href={`https://wa.me/6281333992989?text=${encodeURIComponent(recommendation.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  padding: '12px 16px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-whatsapp"></i> Chat WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setRecommendation(null)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'underline'
              }}
            >
              {isEn ? 'Reset choices' : 'Pilih preferensi lain'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
