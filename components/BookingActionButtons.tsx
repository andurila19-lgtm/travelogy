'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import { useLanguage } from '@/context/LanguageContext';

interface BookingActionButtonsProps {
  packageSlug: string;
  packageTitle: string;
  variant?: 'sidebar' | 'inline' | 'card';
}

export default function BookingActionButtons({
  packageSlug,
  packageTitle,
  variant = 'sidebar',
}: BookingActionButtonsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage();

  const isEn = language === 'en';
  const waText = isEn
    ? `Hello Travelogy, I am interested in the ${packageTitle} package. Please share further details and quotation.`
    : `Halo Travelogy, saya tertarik dengan paket ${packageTitle}. Mohon informasi lebih lanjut.`;
  const waUrl = `https://wa.me/6281333992989?text=${encodeURIComponent(waText)}`;

  if (variant === 'card') {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'var(--primary)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '8px 16px',
          fontSize: '13px',
          fontWeight: 700,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'background 0.2s ease',
        }}
      >
        <i className="fa fa-whatsapp"></i> {isEn ? 'Ask Trip' : 'Tanya WA'}
      </a>
    );
  }

  if (variant === 'inline') {
    return (
      <>
        <div className="booking-cta-buttons-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '1 1 200px',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              borderRadius: '30px',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 6px 20px rgba(27, 67, 50, 0.25)',
              transition: 'all 0.2s ease',
            }}
          >
            <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
            <span>{isEn ? 'Ask About This Trip' : 'Ask About This Trip'}</span>
          </a>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            style={{
              flex: '1 1 180px',
              backgroundColor: '#f3f7f4',
              color: 'var(--primary)',
              border: '1px solid var(--border)',
              borderRadius: '30px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <i className="fa fa-edit"></i>
            <span>{isEn ? 'Send Trip Inquiry' : 'Isi Form Inquiry'}</span>
          </button>
        </div>

        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultPackageSlug={packageSlug}
        />
      </>
    );
  }

  // Default: variant === 'sidebar'
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            borderRadius: '30px',
            padding: '14px 20px',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 6px 20px rgba(27, 67, 50, 0.25)',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box'
          }}
        >
          <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
          <span>Ask About This Trip</span>
        </a>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          style={{
            width: '100%',
            background: '#ffffff',
            color: 'var(--primary)',
            border: '1px solid var(--border)',
            borderRadius: '30px',
            padding: '11px 16px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background 0.2s ease',
          }}
        >
          <i className="fa fa-calendar-check-o"></i> {isEn ? 'Customize / Book Form' : 'Request Penawaran'}
        </button>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPackageSlug={packageSlug}
      />
    </>
  );
}
