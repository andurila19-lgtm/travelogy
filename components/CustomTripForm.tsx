'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CustomTripForm() {
  const { language } = useLanguage();
  const [nama, setNama] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [peserta, setPeserta] = useState('2');
  const [destinasi, setDestinasi] = useState('Bromo');
  const [jenisTrip, setJenisTrip] = useState('Family Vacation');
  const [transport, setTransport] = useState('Mobil Keluarga (Avanza / Innova)');
  const [hotel, setHotel] = useState('Hotel Bintang 3/4');
  const [catatan, setCatatan] = useState('');
  const [formError, setFormError] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!nama.trim() || nama.trim().length < 2) {
      setFormError(language === 'en' ? 'Please enter your full name.' : 'Mohon masukkan nama lengkap Anda (minimal 2 karakter).');
      return;
    }

    const cleanPhone = whatsapp.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      setFormError(language === 'en' ? 'Please enter a valid WhatsApp number.' : 'Nomor WhatsApp tidak valid (minimal 8 digit).');
      return;
    }

    const paxNum = parseInt(peserta) || 2;
    if (paxNum < 1 || paxNum > 200) {
      setFormError(language === 'en' ? 'Participants must be between 1 and 200.' : 'Jumlah peserta harus antara 1 sampai 200 orang.');
      return;
    }

    const isEn = language === 'en';
    const message = isEn
      ? `Hello Travelogy Tour Organizer,\n\nI would like to consult about a Custom Trip:\n\n*Name:* ${nama.trim()}\n*WhatsApp:* ${whatsapp.trim()}\n*Destination:* ${destinasi}\n*Travel Date:* ${tanggal || 'Flexible / To be discussed'}\n*Participants:* ${paxNum} Person\n*Trip Style:* ${jenisTrip}\n*Transportation:* ${transport}\n*Accommodation:* ${hotel}\n${catatan ? `*Notes:* ${catatan.trim()}\n` : ''}\nPlease let me know the details and itinerary recommendation. Thank you!`
      : `Halo Travelogy, saya ingin konsultasi mengenai custom trip.\n\n*Nama:* ${nama.trim()}\n*WhatsApp:* ${whatsapp.trim()}\n*Destinasi:* ${destinasi}\n*Tanggal Perjalanan:* ${tanggal || 'Fleksibel / Sesuai Diskusi'}\n*Jumlah Peserta:* ${paxNum} Orang\n*Jenis Perjalanan:* ${jenisTrip}\n*Kebutuhan Transportasi:* ${transport}\n*Kebutuhan Hotel:* ${hotel}\n${catatan ? `*Catatan:* ${catatan.trim()}\n` : ''}\nMohon informasi rekomendasi jadwal dan estimasi biayanya. Terima kasih!`;

    const waUrl = `https://wa.me/6281333992989?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div
      className="custom-form-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '36px 32px',
        boxShadow: '0 16px 40px rgba(27, 67, 50, 0.08)',
        border: '1px solid var(--border)'
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary-soft)',
            color: 'var(--primary)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: '8px'
          }}
        >
          {language === 'en' ? 'Direct Consultation' : 'Konsultasi Langsung'}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--dark)',
            lineHeight: 1.2
          }}
        >
          {language === 'en' ? 'Plan Your Custom Journey' : 'Rancang Perjalanan Khusus Anda'}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '6px' }}>
          {language === 'en'
            ? 'Fill out your trip details below. Our team will tailor the optimal itinerary directly via WhatsApp.'
            : 'Isi kebutuhan perjalanan Anda di bawah ini. Tim Travelogy akan menyiapkan rancangan terbaik langsung ke WhatsApp Anda.'}
        </p>
      </div>

      <form className="custom-trip-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Row 1: Nama & WhatsApp */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label
              htmlFor="custom-nama"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
            </label>
            <input
              id="custom-nama"
              name="nama"
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder={language === 'en' ? 'e.g. Amanda Putri' : 'Contoh: Bapak / Ibu Hendra'}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            />
          </div>

          <div>
            <label
              htmlFor="custom-whatsapp"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'WhatsApp Number *' : 'Nomor WhatsApp *'}
            </label>
            <input
              id="custom-whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="081333992989"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            />
          </div>
        </div>

        {/* Row 2: Tanggal & Jumlah Peserta */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label
              htmlFor="custom-tanggal"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Travel Date' : 'Tanggal Perjalanan'}
            </label>
            <input
              id="custom-tanggal"
              name="tanggal"
              type="date"
              min={todayStr}
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            />
          </div>

          <div>
            <label
              htmlFor="custom-peserta"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Participants (Guests)' : 'Jumlah Peserta'}
            </label>
            <input
              id="custom-peserta"
              name="peserta"
              type="number"
              min="1"
              max="200"
              value={peserta}
              onChange={(e) => setPeserta(e.target.value)}
              placeholder="2"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#fafcfb'
              }}
            />
          </div>
        </div>

        {/* Row 3: Destinasi & Jenis Perjalanan */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label
              htmlFor="custom-destinasi"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Destination' : 'Destinasi'}
            </label>
            <select
              id="custom-destinasi"
              name="destinasi"
              value={destinasi}
              onChange={(e) => setDestinasi(e.target.value)}
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
              <option value="Bromo">Bromo & Tengger</option>
              <option value="Bali">Bali (Ubud, Bedugul & Pantai)</option>
              <option value="Malang & Batu">Malang & Kota Wisata Batu</option>
              <option value="Kawah Ijen">Kawah Ijen & Banyuwangi</option>
              <option value="Yogyakarta">Yogyakarta & Candi Borobudur</option>
              <option value="Jember">Jember (Papuma, Teluk Love & Kopi)</option>
              <option value="East Java Overland">East Java Overland Adventure</option>
              <option value="Custom Destination">Destinasi Lainnya (Sesuai Permintaan)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="custom-jenis-trip"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Trip Type' : 'Jenis Perjalanan'}
            </label>
            <select
              id="custom-jenis-trip"
              name="jenisTrip"
              value={jenisTrip}
              onChange={(e) => setJenisTrip(e.target.value)}
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
              <option value="Family Vacation">Family Vacation (Liburan Keluarga)</option>
              <option value="Couple / Honeymoon">Couple / Honeymoon Romantis</option>
              <option value="Corporate / Company Gathering">Corporate / Company Gathering</option>
              <option value="Outbound / Team Building">Outbound / Team Building</option>
              <option value="Study Tour / Community">Study Tour / Rombongan Komunitas</option>
              <option value="Private Adventure">Private Adventure / Solo Explorer</option>
            </select>
          </div>
        </div>

        {/* Row 4: Kebutuhan Transportasi & Kebutuhan Hotel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label
              htmlFor="custom-transport"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Transportation Need' : 'Kebutuhan Transportasi'}
            </label>
            <select
              id="custom-transport"
              name="transport"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
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
              <option value="Mobil Keluarga (Avanza / Innova)">Mobil Keluarga (Avanza / Innova Reborn)</option>
              <option value="Minibus Wisata (Toyota HiAce 14 Seat)">Minibus Wisata (Toyota HiAce Commuter / Premio)</option>
              <option value="Bus Pariwisata Medium / Big Bus">Bus Pariwisata (Medium / Big Bus)</option>
              <option value="Airport / Station Transfer Saja">Antar-Jemput Bandara / Stasiun Saja</option>
              <option value="Tanpa Transportasi (Hanya Tour Guide / Hotel)">Tanpa Transportasi (Bawa Kendaraan Sendiri)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="custom-hotel"
              style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
            >
              {language === 'en' ? 'Accommodation Need' : 'Kebutuhan Hotel'}
            </label>
            <select
              id="custom-hotel"
              name="hotel"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
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
              <option value="Hotel Bintang 3">Hotel Bintang 3 (Nyaman & Ekonomis)</option>
              <option value="Hotel Bintang 4 / Resort">Hotel Bintang 4 / Resort Nyaman</option>
              <option value="Villa Privat / Family Suite">Villa Privat / Family Suite</option>
              <option value="Homestay Bersih">Homestay Asri Bersih</option>
              <option value="Tanpa Hotel (Sudah Ada Akomodasi)">Tanpa Hotel (Sudah Booking Sendiri)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Catatan */}
        <div>
          <label
            htmlFor="custom-catatan"
            style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '6px' }}
          >
            {language === 'en' ? 'Notes / Special Requests' : 'Catatan Khusus / Permintaan Rute'}
          </label>
          <textarea
            id="custom-catatan"
            name="catatan"
            rows={3}
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder={
              language === 'en'
                ? 'e.g., Interested in photography spots, children under 5 years, dietary preferences...'
                : 'Contoh: Ingin mampir ke spot foto tertentu, ada lansia/balita, request menu makanan khusus...'
            }
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#fafcfb',
              resize: 'vertical'
            }}
          />
        </div>

        {formError && (
          <div
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              backgroundColor: '#fef2f2',
              color: '#b91c1c',
              fontSize: '13px',
              border: '1px solid #fecaca'
            }}
          >
            {formError}
          </div>
        )}

        {/* Submit CTA Button */}
        <button
          type="submit"
          style={{
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            padding: '16px 28px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '15.5px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.28)',
            transition: 'all 0.25s ease',
            marginTop: '6px'
          }}
        >
          <i className="fa fa-whatsapp" style={{ fontSize: '20px' }}></i>
          <span>Request Custom Trip</span>
        </button>

        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
          {language === 'en'
            ? '✓ Connects directly to PT. Travelogy Tour Organizer WhatsApp (+62 813-3399-2989)'
            : '✓ Terhubung langsung ke WhatsApp PT. Travelogy Tour Organizer (+62 813-3399-2989)'}
        </p>
      </form>
    </div>
  );
}
