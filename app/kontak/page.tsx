'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHeaderNav from '@/components/PageHeaderNav';

export default function KontakPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [layanan, setLayanan] = useState('Tour & Travel');
  const [tanggal, setTanggal] = useState('');
  const [pesan, setPesan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Travelogy, saya ingin konsultasi:\n- Nama: ${nama}\n- WhatsApp: ${wa}\n- Layanan: ${layanan}\n- Rencana Tanggal: ${tanggal || 'Sesuai Diskusi'}\n- Pesan: ${pesan || '-'}`;
    const url = `https://wa.me/6281333992989?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'Contact & Office' : 'Kontak & Kantor' }]}
        badge={isEn ? 'Reach Travelogy' : 'Hubungi Travelogy'}
        title={isEn ? 'Contact & Operational Headquarters' : 'Kontak & Kantor Operasional'}
        description="PT. Travelogy Tour Organizer • Jl. Mastrip No.71, Sumbersari, Jember, Jawa Timur 68124."
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}
        >
          {/* LEFT: INFO CARD */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Kantor Resmi
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: 'var(--dark)', marginTop: '4px', marginBottom: '8px' }}>
                Travelogy Tour Organizer
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                PT. Travelogy Tour Organizer hadir di Jember melayani kebutuhan Tour & Travel, Sewa Transportasi, Reservasi Hotel, serta Event Planning.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  <i className="fa fa-map-marker"></i>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Alamat Kantor:</strong>
                  <p style={{ margin: '4px 0 0', color: 'var(--dark-soft)', fontSize: '13.5px', lineHeight: 1.5 }}>
                    Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  <i className="fa fa-whatsapp"></i>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>WhatsApp Customer Care:</strong>
                  <a
                    href="https://wa.me/6281333992989"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none' }}
                  >
                    +62 813-3399-2989
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Email Resmi:</strong>
                  <a href="mailto:travelogycorp@gmail.com" style={{ color: 'var(--dark-soft)', fontSize: '14px', textDecoration: 'none' }}>
                    travelogycorp@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  <i className="fa fa-clock-o"></i>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Jam Operasional:</strong>
                  <p style={{ margin: '4px 0 0', color: 'var(--dark-soft)', fontSize: '13.5px' }}>
                    09:00 - 13:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)'
            }}
          >
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: 'var(--dark)', marginBottom: '8px' }}>
              Kirim Pesan / Konsultasi
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginBottom: '24px' }}>
              Isi data di bawah ini untuk terhubung langsung ke WhatsApp Travelogy.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama Anda"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none', backgroundColor: '#fafcfb' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  placeholder="081333992989"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none', backgroundColor: '#fafcfb' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                  Layanan yang Diminati
                </label>
                <select
                  value={layanan}
                  onChange={(e) => setLayanan(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none', backgroundColor: '#fafcfb' }}
                >
                  <option value="Tour & Travel (Paket Wisata)">Tour & Travel (Paket Wisata)</option>
                  <option value="Sewa Mobil & Transportasi">Sewa Mobil & Transportasi</option>
                  <option value="Reservasi Hotel & Villa">Reservasi Hotel & Villa</option>
                  <option value="Event Organizer / Gathering">Event Organizer / Gathering</option>
                  <option value="Custom Trip">Custom Trip Khusus</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                  Rencana Tanggal Perjalanan
                </label>
                <input
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none', backgroundColor: '#fafcfb' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}>
                  Pesan / Pertanyaan
                </label>
                <textarea
                  rows={3}
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder="Tuliskan pertanyaan atau kebutuhan perjalanan Anda..."
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none', backgroundColor: '#fafcfb', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '8px'
                }}
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAPS EMBED SECTION */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)'
          }}
        >
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: 'var(--dark)', marginBottom: '4px' }}>
              Lokasi Kantor PT. Travelogy Tour Organizer di Jember
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
              Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124
            </p>
          </div>

          <div style={{ height: '420px', width: '100%', backgroundColor: '#f1f5f2' }}>
            <iframe
              title="Peta Kantor PT Travelogy Tour Organizer Jember"
              src="https://maps.google.com/maps?q=Jl.+Mastrip+No.71,+Sumbersari,+Jember,+Jawa+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
