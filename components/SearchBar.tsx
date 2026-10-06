'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function SearchBar() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [kategori, setKategori] = useState('semua');
  const [destinasi, setDestinasi] = useState('semua');
  const [durasi, setDurasi] = useState('semua');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (kategori && kategori !== 'semua') params.set('kategori', kategori);
    if (destinasi && destinasi !== 'semua') params.set('destinasi', destinasi);
    if (durasi && durasi !== 'semua') params.set('durasi', durasi);

    const queryString = params.toString();
    router.push(`/paket${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div id="srchome">
      <div className="box1140">
        <form onSubmit={handleSearch} className="srchome-form">
          {/* Col 1: Pilih Kategori */}
          <div className="srchome-col">
            <label htmlFor="kategori">{t.search.catLabel}</label>
            <select
              name="kat"
              id="kategori"
              aria-label={t.search.catLabel}
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="semua">{t.search.allCat}</option>
              <option value="Tour Packages">Tour Packages</option>
              <option value="Private Trip">Private Trip</option>
              <option value="Family & Group">Family & Group</option>
              <option value="Adventure">Adventure & Nature</option>
              <option value="Culture">Culture & Heritage</option>
            </select>
          </div>

          {/* Col 2: Pilih Destinasi */}
          <div className="srchome-col">
            <label htmlFor="destinasi">{t.search.destLabel}</label>
            <select
              name="des"
              id="destinasi"
              aria-label={t.search.destLabel}
              value={destinasi}
              onChange={(e) => setDestinasi(e.target.value)}
            >
              <option value="semua">{t.search.allDest}</option>
              <option value="Bromo">Bromo & Tengger</option>
              <option value="Bali">Bali (Ubud, Kintamani & Pantai)</option>
              <option value="Malang">Malang & Kota Wisata Batu</option>
              <option value="Ijen">Kawah Ijen & Blue Fire</option>
              <option value="Yogyakarta">Yogyakarta & Candi Borobudur</option>
              <option value="Jember">Jember (Papuma & Teluk Love)</option>
              <option value="East Java">East Java Overland</option>
            </select>
          </div>

          {/* Col 3: Pilih Durasi */}
          <div className="srchome-col">
            <label htmlFor="durasi">{t.search.durLabel}</label>
            <select
              name="dur"
              id="durasi"
              aria-label={t.search.durLabel}
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
            >
              <option value="semua">{t.search.allDur}</option>
              <option value="1 Hari">{t.search.dur1Day}</option>
              <option value="2 Hari 1 Malam">{t.search.dur2D1N}</option>
              <option value="3 Hari 2 Malam">{t.search.dur3D2N}</option>
              <option value="4 Hari 3 Malam">{t.search.dur4D3N}</option>
            </select>
          </div>

          {/* Col 4: Submit Search Button */}
          <div className="srchome-btn-col">
            <button type="submit" className="smt" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
              <i className="fa fa-search" aria-hidden="true"></i> {t.search.btnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
