'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#0d2d2e',
        color: '#d1ded6',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '32px'
      }}
    >
      <div
        className="box1140"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Col 1: Brand & Identity */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src="/images/travelogy_logo.png"
                alt="PT. Travelogy Tour Organizer"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  border: '1px solid rgba(232, 202, 164, 0.3)',
                  objectFit: 'cover',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                }}
              />
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.8px'
                  }}
                >
                  TRAVELOGY
                </span>
                <span style={{ fontSize: '11px', color: '#a2baa8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Tour Organizer
                </span>
              </div>
            </div>

            <p
              style={{
                fontStyle: 'italic',
                color: 'var(--secondary)',
                fontWeight: 600,
                fontSize: '15px',
                marginBottom: '14px'
              }}
            >
              &ldquo;Bringing Happiness in Every Journey&rdquo;
            </p>

            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#b9ccbf', marginBottom: '20px' }}>
              PT. Travelogy Tour Organizer hadir membantu Anda merencanakan dan menikmati setiap perjalanan dengan nyaman, terencana, dan berkesan. Solusi lengkap tour, transportasi, hotel, dan event dari Jember.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://wa.me/6281333992989"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  fontSize: '18px',
                  transition: 'background 0.2s'
                }}
                aria-label="WhatsApp Travelogy"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
              <a
                href="mailto:travelogycorp@gmail.com"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '16px',
                  transition: 'background 0.2s'
                }}
                aria-label="Email Travelogy"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}
            >
              Navigation
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '30px',
                  height: '2px',
                  backgroundColor: 'var(--secondary)'
                }}
              ></span>
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li>
                <Link href="/" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinasi" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/paket" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/transport" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  Transport
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/custom-trip" style={{ color: '#b9ccbf', transition: 'color 0.2s' }}>
                  Custom Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Services */}
          <div>
            <h3
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}
            >
              Our Services
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '30px',
                  height: '2px',
                  backgroundColor: 'var(--secondary)'
                }}
              ></span>
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#b9ccbf' }}>
              <li>Tour & Travel Organizer</li>
              <li>Private & Group Transport</li>
              <li>Airport & Station Transfer</li>
              <li>Hotel & Resort Booking</li>
              <li>Corporate Event Planning</li>
              <li>Custom Tailored Journeys</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h3
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px'
              }}
            >
              Contact Travelogy
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '30px',
                  height: '2px',
                  backgroundColor: 'var(--secondary)'
                }}
              ></span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#b9ccbf' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <i className="fa fa-map-marker" style={{ color: 'var(--secondary)', fontSize: '16px', marginTop: '3px' }}></i>
                <span>
                  Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <i className="fa fa-whatsapp" style={{ color: '#25d366', fontSize: '16px' }}></i>
                <a
                  href="https://wa.me/6281333992989"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', fontWeight: 600 }}
                >
                  +62 813-3399-2989
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <i className="fa fa-envelope-o" style={{ color: 'var(--secondary)', fontSize: '14px' }}></i>
                <a href="mailto:travelogycorp@gmail.com" style={{ color: '#b9ccbf' }}>
                  travelogycorp@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <i className="fa fa-clock-o" style={{ color: 'var(--secondary)', fontSize: '14px' }}></i>
                <span>Jam Operasional: 09:00 - 13:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '12.5px',
            color: '#88a391'
          }}
        >
          <div>
            &copy; {currentYear} PT. Travelogy Tour Organizer. All rights reserved. Jember, Jawa Timur.
          </div>
          <div>
            Digital Travel Platform Proposal &bull; Bringing Happiness in Every Journey
          </div>
        </div>
      </div>
    </footer>
  );
}
