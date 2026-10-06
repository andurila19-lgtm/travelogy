'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-nav-lock-scroll');
      document.documentElement.classList.add('mobile-nav-lock-scroll');
    } else {
      document.body.classList.remove('mobile-nav-lock-scroll');
      document.documentElement.classList.remove('mobile-nav-lock-scroll');
    }
    return () => {
      document.body.classList.remove('mobile-nav-lock-scroll');
      document.documentElement.classList.remove('mobile-nav-lock-scroll');
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';

  return (
    <header
      id="header"
      className={`travelogy-header ${isScrolled ? 'is-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(226, 235, 228, 0.8)',
        boxShadow: isScrolled ? '0 4px 20px rgba(27, 67, 50, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="navbar-container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        {/* Brand Logo Left */}
        <Link
          href="/"
          className="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <img
            src="/images/travelogy_logo.png"
            alt="Travelogy Tour Organizer Logo"
            className="brand-logo-img"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 3px 10px rgba(28, 96, 97, 0.22)'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="brand-name font-editorial"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.8px',
                color: 'var(--primary)',
                lineHeight: 1.1
              }}
            >
              TRAVELOGY
            </span>
            <span
              className="brand-tagline"
              style={{
                fontSize: '10px',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                fontWeight: 600,
                marginTop: '2px'
              }}
            >
              Tour Organizer • Jember
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="nav-menu desktop-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }}
        >
          <Link
            href="/"
            className={`nav-link ${isHome ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: isHome ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              position: 'relative'
            }}
          >
            Home
          </Link>

          <Link
            href="/destinasi"
            className={`nav-link ${pathname.startsWith('/destinasi') ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: pathname.startsWith('/destinasi') ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            Destinations
          </Link>

          <Link
            href="/paket"
            className={`nav-link ${pathname.startsWith('/paket') ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: pathname.startsWith('/paket') ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            Tour Packages
          </Link>

          <Link
            href="/transport"
            className={`nav-link ${pathname.startsWith('/transport') ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: pathname.startsWith('/transport') ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            Transport
          </Link>

          <Link
            href="/tentang-kami"
            className={`nav-link ${pathname.startsWith('/tentang-kami') ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: pathname.startsWith('/tentang-kami') ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            About
          </Link>

          <Link
            href="/custom-trip"
            className={`nav-link ${pathname.startsWith('/custom-trip') ? 'active' : ''}`}
            style={{
              fontWeight: 600,
              fontSize: '14.5px',
              color: pathname.startsWith('/custom-trip') ? 'var(--primary)' : 'var(--dark)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            Custom Trip
          </Link>
        </nav>

        {/* Right CTA & Controls */}
        <div
          className="header-right-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          {/* Language Switcher Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#f1f5f2',
              borderRadius: '20px',
              padding: '2px',
              border: '1px solid #dbe6dd'
            }}
          >
            <button
              type="button"
              onClick={() => setLanguage('id')}
              style={{
                background: language === 'id' ? 'var(--primary)' : 'transparent',
                color: language === 'id' ? '#ffffff' : 'var(--muted)',
                border: 'none',
                borderRadius: '16px',
                padding: '4px 10px',
                fontWeight: 700,
                fontSize: '11px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              style={{
                background: language === 'en' ? 'var(--primary)' : 'transparent',
                color: language === 'en' ? '#ffffff' : 'var(--muted)',
                border: 'none',
                borderRadius: '16px',
                padding: '4px 10px',
                fontWeight: 700,
                fontSize: '11px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Primary CTA: "Plan Your Trip" (Desktop only) */}
          <Link
            href="/custom-trip"
            className="header-plan-cta"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              padding: '10px 22px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(27, 67, 50, 0.25)',
              transition: 'all 0.25s ease',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Plan Your Trip</span>
            <i className="fa fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`hamburger-btn ${mobileOpen ? 'is-active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
            aria-expanded={mobileOpen}
          >
            <i className={`fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer & Backdrop */}
      {mobileOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          <div
            className="mobile-nav-floating-island"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
          >
            {/* Floating Island Header */}
            <div className="mobile-island-header">
              <Link
                href="/"
                className="mobile-island-brand"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/images/travelogy_logo.png"
                  alt="Travelogy Logo"
                  className="mobile-island-brand-img"
                />
                <div>
                  <div className="mobile-island-brand-title">TRAVELOGY</div>
                  <div className="mobile-island-brand-sub">Tour Organizer • Jember</div>
                </div>
              </Link>
              <button
                type="button"
                className="mobile-island-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Tutup Menu"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mobile-island-nav">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname === '/' ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-home"></i>
                  </span>
                  <span>{language === 'id' ? 'Beranda' : 'Home'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/destinasi"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/destinasi') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span>{language === 'id' ? 'Destinasi Wisata' : 'Destinations'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/paket"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/paket') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-compass"></i>
                  </span>
                  <span>{language === 'id' ? 'Paket Tour & Liburan' : 'Tour Packages'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/transport"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/transport') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-car"></i>
                  </span>
                  <span>{language === 'id' ? 'Rental Mobil & Transport' : 'Transport & Rental'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/trip-harian"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/trip-harian') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-sun-o"></i>
                  </span>
                  <span>{language === 'id' ? 'Trip Harian / 1 Day' : 'Daily Trips'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/custom-trip"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/custom-trip') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-calendar-check-o"></i>
                  </span>
                  <span>{language === 'id' ? 'Custom Trip Planner' : 'Custom Trip'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/artikel"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/artikel') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-newspaper-o"></i>
                  </span>
                  <span>{language === 'id' ? 'Artikel & Panduan Wisata' : 'Articles & Guides'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/tentang-kami"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/tentang-kami') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-info-circle"></i>
                  </span>
                  <span>{language === 'id' ? 'Tentang Travelogy' : 'About Us'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>

              <Link
                href="/kontak"
                onClick={() => setMobileOpen(false)}
                className={`mobile-island-link ${pathname.startsWith('/kontak') ? 'active' : ''}`}
              >
                <div className="mobile-island-link-left">
                  <span className="mobile-island-icon-box">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span>{language === 'id' ? 'Kontak & Reservasi' : 'Contact Us'}</span>
                </div>
                <i className="fa fa-angle-right mobile-island-link-arrow"></i>
              </Link>
            </nav>

            {/* Quick Actions */}
            <div className="mobile-island-actions">
              <Link
                href="/custom-trip"
                onClick={() => setMobileOpen(false)}
                className="mobile-island-btn-plan"
              >
                <span>{language === 'id' ? 'Rencanakan Liburan Sekarang' : 'Plan Your Trip'}</span>
                <i className="fa fa-arrow-right" style={{ fontSize: '12px' }}></i>
              </Link>

              <a
                href="https://wa.me/6281333992989?text=Halo%20Travelogy%20Tour%20Organizer%2C%20saya%20ingin%20konsultasi%20trip"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-island-btn-wa"
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Chat WhatsApp (+62 813-3399-2989)</span>
              </a>
            </div>

            {/* Footer Meta / Lang Switch */}
            <div className="mobile-island-footer-meta">
              <div className="mobile-island-lang-switch">
                <button
                  type="button"
                  className={language === 'id' ? 'active' : ''}
                  onClick={() => setLanguage('id')}
                >
                  🇮🇩 ID
                </button>
                <button
                  type="button"
                  className={language === 'en' ? 'active' : ''}
                  onClick={() => setLanguage('en')}
                >
                  🇬🇧 EN
                </button>
              </div>
              <span>Jl. Mastrip No.71, Jember</span>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
