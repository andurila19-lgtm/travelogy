'use client';

import { useState } from 'react';
import Link from 'next/link';
import packagesData from '@/data/packages.json';
import { TourPackage } from '@/types';
import PackageList from '@/components/PackageList';
import CustomTripForm from '@/components/CustomTripForm';
import FaqSection from '@/components/FaqSection';
import ConciergeTrigger from '@/components/ConciergeTrigger';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { language } = useLanguage();
  const packages: TourPackage[] = packagesData as TourPackage[];
  const isEn = language === 'en';



  // Preview destination list
  const destinations = [
    {
      id: 'bromo',
      name: 'Bromo',
      tagline: isEn ? 'Caldera Sunrise & Sea of Sand' : 'Golden Sunrise & Lautan Pasir',
      desc: isEn
        ? 'Witness the mystical golden sunrise over the active caldera of Mount Bromo and Semeru, whispering sand, and lush green savannas.'
        : 'Saksikan magisnya matahari terbit berlatar kaldera megah Gunung Bromo dan Semeru, lautan pasir berbisik, dan bukit savana hijau.',
      image: '/images/dest_bromo.jpg',
      badge: 'Popular Icon'
    },
    {
      id: 'bali',
      name: 'Bali',
      tagline: isEn ? 'Island of Gods & Rich Heritage' : 'Pesona Pulau Dewata & Budaya',
      desc: isEn
        ? 'Experience scenic lakeside temples, lush Ubud rice terraces, majestic Kintamani caldera views, and unforgettable coastal sunsets.'
        : 'Keagungan Pura Ulun Danu Beratan, sawah terasering Ubud yang menenangkan, panorama Kintamani, dan senja pantai eksotis.',
      image: '/images/dest_bali.jpg',
      badge: 'Holiday Escape'
    },
    {
      id: 'malang',
      name: 'Malang & Batu',
      tagline: isEn ? 'Cool Highland & Family Fun' : 'Kesejukan Dataran Tinggi & Wisata',
      desc: isEn
        ? 'Crisp mountain air, fresh apple orchard picking, natural waterfalls, and world-class thematic amusement parks for the whole family.'
        : 'Hawa sejuk pegunungan Kota Batu, keseruan petik apel langsung di kebun petani, Coban Rondo, dan destinasi rekreasi keluarga.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: 'Family Favorite'
    },
    {
      id: 'yogyakarta',
      name: 'Yogyakarta',
      tagline: isEn ? 'Royal Culture & Ancient Temples' : 'Keagungan Warisan Budaya & Sejarah',
      desc: isEn
        ? 'Monumental UNESCO world heritage Borobudur & Prambanan temples, historic royal palaces, thrilling Merapi lava jeep, and Malioboro.'
        : 'Kemegahan mahakarya Candi Borobudur & Prambanan, kearifan Keraton Ngayogyakarta, Jeep Lava Tour Merapi, dan suasana Malioboro.',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
      badge: 'Cultural Heritage'
    },
    {
      id: 'jember',
      name: 'Jember',
      tagline: isEn ? 'Exotic Coastlines & Coffee Estates' : 'Eksotisme Pantai Selatan & Agrowisata',
      desc: isEn
        ? 'Explore majestic coastal sea stacks at Tanjung Papuma, romantic heart-shaped Love Bay, and heritage mountain robusta coffee estates.'
        : 'Pesona batu karang raksasa Pantai Tanjung Papuma, panorama Teluk Love dari bukit Payangan, dan aroma khas kopi lereng Argopuro.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: 'Home Base'
    },
    {
      id: 'east-java',
      name: 'East Java & Ijen',
      tagline: isEn ? 'Electric Blue Fire & Wild Savannas' : 'Fenomena Kawah Ijen & Savana',
      desc: isEn
        ? 'Rare midnight trekking to witness electric blue flames, turquoise acidic crater lakes, Tumpak Sewu waterfall, and African-like Baluran.'
        : 'Pendakian malam menyaksikan fenomena langka Blue Fire Kawah Ijen, danau belerang toska, air terjun Tumpak Sewu, dan savana Baluran.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
      badge: 'Expedition'
    }
  ];

  // Transport Fleet Services
  const transportServices = [
    {
      id: 'private-transport',
      title: isEn ? 'Private Transport' : 'Private Transport',
      tag: isEn ? 'Family & Personal' : 'Keluarga & Personal',
      desc: isEn
        ? 'Comfortable, pristine AC vehicles (Toyota Avanza, Innova Reborn, Fortuner) with courteous, experienced local drivers.'
        : 'Armada privat ber-AC bersih & wangi (Toyota Avanza, Innova Reborn, Fortuner) didampingi supir ramah dan profesional.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      features: [
        isEn ? 'Dedicated driver & fuel included' : 'Sudah termasuk supir & BBM',
        isEn ? 'Clean, sanitized & cold air conditioning' : 'Unit bersih, higienis, AC dingin',
        isEn ? 'Flexible pick-up time & stops' : 'Waktu penjemputan fleksibel'
      ]
    },
    {
      id: 'group-transport',
      title: isEn ? 'Group Transport' : 'Group Transport',
      tag: isEn ? 'Minibus & Group' : 'Rombongan Wisata',
      desc: isEn
        ? 'Spacious high-roof minibuses (Toyota HiAce Commuter / Premio, Isuzu Elf) designed for group tours and company gatherings.'
        : 'Kabin lega beratap tinggi (Toyota HiAce Commuter / Premio, Isuzu Elf) untuk perjalanan rombongan keluarga besar atau kantor.',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
      features: [
        isEn ? '10 to 15 comfortable passenger seats' : 'Kapasitas 10 - 15 penumpang nyaman',
        isEn ? 'Ample luggage space for bags' : 'Ruang bagasi koper luas',
        isEn ? 'Experienced long-distance driver' : 'Supir rute wisata luar kota berpengalaman'
      ]
    },
    {
      id: 'transfer-service',
      title: isEn ? 'Airport & Station Transfer' : 'Airport & Station Transfer',
      tag: isEn ? 'Punctual & Direct' : 'Tepat Waktu & Praktis',
      desc: isEn
        ? 'Prompt, reliable drop-off and pickup services connecting Jember Station, Banyuwangi Airport (BWX), and Surabaya Juanda (SUB).'
        : 'Layanan antar-jemput tepat waktu menghubungkan Stasiun Jember, Bandara Banyuwangi (BWX), hingga Bandara Juanda Surabaya (SUB).',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80',
      features: [
        isEn ? 'Flight & train arrival schedule tracking' : 'Monitoring jadwal kedatangan kereta & pesawat',
        isEn ? 'Direct drop-off to hotel or meeting location' : 'Pengantaran langsung ke hotel / kantor',
        isEn ? 'Luggage assistance by driver' : 'Bantuan bagasi oleh tim driver'
      ]
    },
    {
      id: 'tour-transport',
      title: isEn ? 'Tour Transportation' : 'Tour Transportation',
      tag: isEn ? 'Daily All-In Tour' : 'Sewa Keliling Wisata',
      desc: isEn
        ? 'Full-day vehicle charter with driver and fuel, ready to accompany your itinerary to any destination with ease.'
        : 'Sewa armada harian paket lengkap (Mobil + Supir + BBM) siap mengantar rute liburan Anda ke berbagai obyek wisata tanpa repot.',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
      features: [
        isEn ? 'Flexible stops along the scenic route' : 'Bebas mampir di spot foto & resto favorit',
        isEn ? 'Driver acts as knowledgeable local guide' : 'Supir paham rute jalan & rekomendasi lokal',
        isEn ? 'No hidden surprise costs' : 'Tanpa biaya tersembunyi di lapangan'
      ]
    }
  ];

  // Additional 3 Services: Travel & Tour, Hotel, Event Planning
  const additionalServices = [
    {
      title: isEn ? 'Travel & Tour' : 'Travel & Tour',
      tagline: isEn ? 'Curated Trips & Seamless Planning' : 'Paket Wisata Terencana & Nyaman',
      desc: isEn
        ? 'Carefully planned tour itineraries, attraction admissions, friendly guides, and memorable experiences tailored to your travel style.'
        : 'Perencanaan paket wisata lengkap, itinerary fleksibel, koordinasi tiket destinasi, dan pemandu ramah yang membuat perjalanan Anda berkesan.',
      icon: 'fa-globe'
    },
    {
      title: isEn ? 'Hotel & Lodging' : 'Hotel & Akomodasi',
      tagline: isEn ? 'Handpicked Hotels, Resorts & Villas' : 'Reservasi Hotel, Resort & Villa Rekanan',
      desc: isEn
        ? 'Official partnerships with vetted 3-star, 4-star hotels, luxury resorts, and private villas to ensure top resting comfort at favorable rates.'
        : 'Kerja sama resmi dengan hotel bintang 3, 4, resort, dan villa privat rekanan dengan jaminan harga transparan dan kenyamanan istirahat maksimal.',
      icon: 'fa-building-o'
    },
    {
      title: isEn ? 'Event Planning' : 'Event Organizer (EO)',
      tagline: isEn ? 'Corporate Gatherings, Outings & Meetings' : 'Corporate Gathering, Outing & Outbound',
      desc: isEn
        ? 'Professional event organizer services for corporate gatherings, team building outbounds, company meetings, and celebratory milestones.'
        : 'Penyelenggaraan acara profesional untuk company gathering, family outing, outbound team building, meeting perusahaan, dan perayaan spesial.',
      icon: 'fa-users'
    }
  ];

  // Why Travelogy Value Propositions
  const whyPoints = [
    {
      icon: 'fa-compass',
      title: isEn ? 'Personalized Journey' : 'Personalized Journey',
      desc: isEn
        ? 'Every trip is customized around your unique desires, schedule pace, and holiday preferences.'
        : 'Setiap perjalanan dapat disesuaikan dengan kebutuhan, preferensi waktu, dan gaya liburan customer.'
    },
    {
      icon: 'fa-check-circle-o',
      title: isEn ? 'End-to-End Planning' : 'End-to-End Planning',
      desc: isEn
        ? 'Comprehensive assistance from initial itinerary conceptualization, reservations, through trip completion.'
        : 'Bantuan menyeluruh mulai dari konsultasi awal, rancangan rute, reservasi, hingga pendampingan perjalanan.'
    },
    {
      icon: 'fa-sliders',
      title: isEn ? 'Flexible Travel Solutions' : 'Flexible Travel Solutions',
      desc: isEn
        ? 'One-stop integrated solutions for leisure tours, vehicle rentals, hotel bookings, and event planning.'
        : 'Solusi terpadu untuk pilihan tour, armada transportasi, akomodasi rekanan, dan event dalam satu pintu.'
    },
    {
      icon: 'fa-comments-o',
      title: isEn ? 'Dedicated Support' : 'Dedicated Support',
      desc: isEn
        ? 'Direct, prompt, and friendly consultation with the Travelogy professional team at all times.'
        : 'Customer dapat berkonsultasi langsung dengan tim profesional Travelogy yang ramah, solutif, dan responsif.'
    }
  ];

  return (
    <>
      {/* =================================================================
          1. HERO SECTION (Very visual, cinematic background, clear CTAs)
          ================================================================= */}
      {/* =================================================================
          1. HERO SECTION (High-Conversion, Professional Customer-Centric Hero)
          ================================================================= */}
      <section
        id="home"
        className="hero-travelogy"
        style={{ backgroundImage: "url('/images/travelogy_hero.jpg')" }}
      >
        <div className="hero-travelogy-overlay"></div>

        <div className="hero-inner-container">
          {/* Official Trust & Rating Pill */}
          <div className="hero-eyebrow-pill">
            <span style={{ color: '#fbbf24', letterSpacing: '1px' }}>★★★★★</span>
            <span>PT. TRAVELOGY TOUR ORGANIZER &bull; JEMBER</span>
          </div>

          {/* Inspirational Customer-Focused Headline */}
          <h1 className="hero-headline-title">
            {isEn ? 'Experience Extraordinary' : 'Wujudkan Liburan Impian'}
            <span>&ldquo;Bringing Happiness in Every Journey&rdquo;</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="hero-description-text">
            {isEn
              ? 'Curated private tour packages to Bromo, Kawah Ijen, Malang, Bali & comfortable vehicle rentals with expert drivers from Jember.'
              : 'Spesialis paket wisata privat Bromo, Kawah Ijen, Malang, Bali & sewa armada nyaman dengan supir berpengalaman dari Jember.'}
          </p>

          {/* Balanced Action CTAs: 2 Luxury Hero Buttons */}
          <div className="hero-actions-row">
            <Link href="/paket" className="hero-btn-primary">
              <span>{isEn ? 'Explore Tour Packages' : 'Lihat Semua Paket Wisata'}</span>
              <i className="fa fa-arrow-right hero-btn-arrow"></i>
            </Link>

            <a
              href={`https://wa.me/6281333992989?text=${encodeURIComponent(
                isEn
                  ? 'Hello PT. Travelogy Tour Organizer, I would like to consult a tour or transport package from Jember.'
                  : 'Halo PT. Travelogy Tour Organizer, saya ingin konsultasi paket wisata / sewa armada dari Jember.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-wa"
            >
              <i className="fa fa-whatsapp hero-btn-wa-icon"></i>
              <span>{isEn ? 'WhatsApp Consult' : 'Konsultasi WhatsApp'}</span>
            </a>
          </div>

          {/* Elegant Inline Destination Text Links (No Clunky Pills) */}
          <div className="hero-dest-subtext">
            <span className="dest-subtext-label">
              <i className="fa fa-compass" style={{ marginRight: '4px' }}></i>
              {isEn ? 'Popular:' : 'Destinasi Favorit:'}
            </span>
            <Link href="/paket?dest=bromo">Bromo Sunrise</Link>
            <span className="dot">•</span>
            <Link href="/paket?dest=ijen">Kawah Ijen</Link>
            <span className="dot">•</span>
            <Link href="/paket?dest=malang">Malang Batu</Link>
            <span className="dot">•</span>
            <Link href="/paket?dest=bali">Pulau Bali</Link>
            <span className="dot">•</span>
            <Link href="/transport">Sewa HiAce</Link>
          </div>

          {/* Minimalist Trust & Social Proof Strip */}
          <div className="hero-trust-minimal">
            <span><i className="fa fa-shield" style={{ color: '#34d399', marginRight: '4px' }}></i> {isEn ? 'Licensed Agency' : 'PT Resmi Berizin'}</span>
            <span className="dot">•</span>
            <span><i className="fa fa-star" style={{ color: '#fbbf24', marginRight: '4px' }}></i> {isEn ? '4.9/5 Rating (500+ Guests)' : 'Rating 4.9/5.0 (500+ Wisatawan)'}</span>
            <span className="dot">•</span>
            <span><i className="fa fa-car" style={{ color: '#60a5fa', marginRight: '4px' }}></i> {isEn ? 'Prime Fleet & Drivers' : 'Armada Prima & Supir Ramah'}</span>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. DESTINATIONS SECTION ("Where Will Your Journey Take You?")
          ================================================================= */}
      <section id="destinations" style={{ padding: '88px 0 72px', backgroundColor: '#ffffff' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
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
                marginBottom: '12px'
              }}
            >
              Experience The Wonders
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Where Will Your Journey Take You?
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {isEn
                ? 'Discover captivating destinations curated for your perfect getaway. From dramatic volcanoes to tranquil tropical waters.'
                : 'Temukan pilihan destinasi favorit bersama Travelogy. Dari panorama alam magis gunung berapi, kesejukan dataran tinggi, hingga eksotisme pesisir pantai.'}
            </p>
            <div
              style={{
                marginTop: '12px',
                fontSize: '12px',
                color: 'var(--secondary)',
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              * Data destinasi di bawah ini merupakan preview data kurasi Travelogy Tour Organizer.
            </div>
          </div>

          {/* Destinations Grid (6 Cards) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {destinations.map((dest) => {
              const waDestMsg = encodeURIComponent(
                `Halo Travelogy, saya ingin menanyakan informasi perjalanan untuk destinasi ${dest.name}.`
              );

              return (
                <div
                  key={dest.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* Destination Photo */}
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={dest.image}
                      alt={dest.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(15, 40, 30, 0.85)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 700,
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {dest.badge}
                    </span>
                  </div>

                  {/* Destination Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--dark)',
                        marginBottom: '4px'
                      }}
                    >
                      {dest.name}
                    </h3>

                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', marginBottom: '12px' }}>
                      {dest.tagline}
                    </div>

                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.55, marginBottom: '20px', flex: 1 }}>
                      {dest.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Link
                        href="/destinasi"
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          backgroundColor: 'var(--primary)',
                          color: '#ffffff',
                          padding: '11px 16px',
                          borderRadius: '24px',
                          fontSize: '13px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Lihat Destinasi</span>
                        <i className="fa fa-arrow-right" style={{ fontSize: '11px' }}></i>
                      </Link>
                      <a
                        href={`https://wa.me/6281333992989?text=${waDestMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '42px',
                          height: '42px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#25d366',
                          color: '#ffffff',
                          borderRadius: '50%',
                          fontSize: '16px',
                          textDecoration: 'none',
                          flexShrink: 0
                        }}
                        title="Tanya via WhatsApp"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Destinations Multi-Page CTA */}
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link
              href="/destinasi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(28, 96, 97, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Jelajahi Semua Destinasi & Panduan Lengkap</span>
              <i className="fa fa-arrow-right" style={{ fontSize: '13px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. TOUR PACKAGES ("Explore Our Journeys")
          ================================================================= */}
      <section id="packages" style={{ padding: '88px 0', backgroundColor: '#f3f7f4' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 44px' }}>
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
                marginBottom: '12px'
              }}
            >
              Curated Itineraries
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Explore Our Journeys
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {isEn
                ? 'Carefully crafted travel packages designed for comfort, authentic culture, and breathtaking natural wonders.'
                : 'Pilihan paket perjalanan kurasi terbaik Travelogy untuk liburan santai, petualangan alam, hingga momen berharga bersama orang tercinta.'}
            </p>
            <div
              style={{
                marginTop: '10px',
                fontSize: '12px',
                color: 'var(--primary-dark)',
                fontWeight: 600
              }}
            >
              &bull; Format Proposal / Preview Data Paket Wisata PT. Travelogy Tour Organizer &bull;
            </div>
          </div>

          {/* Interactive Package Cards with Category Filter */}
          <PackageList packages={packages} />

          {/* Multi-Page Full Catalog Link */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/paket"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(28, 96, 97, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Buka Halaman Katalog Paket Wisata Lengkap</span>
              <i className="fa fa-arrow-right" style={{ fontSize: '13px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================================
          4. CUSTOM TRIP SECTION ("Your Trip, Your Way")
          ================================================================= */}
      <section id="custom-trip" style={{ padding: '96px 0', backgroundColor: '#ffffff' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Narrative Column */}
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
                Tailor-Made Journey
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(30px, 4.2vw, 46px)',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  lineHeight: 1.2,
                  marginBottom: '20px'
                }}
              >
                Your Trip, Your Way
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--dark-soft)', marginBottom: '24px' }}>
                {isEn
                  ? 'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.'
                  : 'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    1
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--dark)' }}>
                      Tentukan Preferensi Anda
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
                      Pilih destinasi, tanggal, jumlah peserta, serta kebutuhan armada dan hotel yang diinginkan.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    2
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--dark)' }}>
                      Konsultasi Bersama Tim Travelogy
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
                      Formulir langsung terhubung ke WhatsApp resmi untuk menyusun rute terbaik tanpa buang waktu.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    3
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--dark)' }}>
                      Nikmati Liburan Nyaman & Berkesan
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
                      Tim Travelogy siap mendampingi dari penjemputan hingga kepulangan Anda dengan penuh senyum.
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Consultation CTA */}
              <div style={{ padding: '16px 20px', backgroundColor: '#f3f7f4', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                  Ingin bertanya langsung tanpa mengisi form?
                </span>
                <a
                  href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20konsultasi%20mengenai%20custom%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--primary)',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <i className="fa fa-whatsapp" style={{ fontSize: '16px' }}></i>
                  <span>Chat Langsung: +62 813-3399-2989 &rsaquo;</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div>
              <CustomTripForm />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          5. TRANSPORT SECTION ("Travel With Comfort")
          ================================================================= */}
      <section id="transport" style={{ padding: '88px 0', backgroundColor: '#f3f7f4' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
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
                marginBottom: '12px'
              }}
            >
              Reliable Fleets & Drivers
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Travel With Comfort
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {isEn
                ? 'Travelogy provides seamless private, group, and transfer transport services with well-maintained vehicles and courteous drivers.'
                : 'Layanan transportasi perjalanan terpercaya dari Jember dengan armada prima, supir profesional, dan kenyamanan maksimal untuk setiap kebutuhan.'}
            </p>
          </div>

          {/* 4 Transport Services Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {transportServices.map((srv) => (
              <div
                key={srv.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 6px 20px rgba(27, 67, 50, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 40, 30, 0.85)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {srv.tag}
                  </span>
                </div>

                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '19px',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      marginBottom: '8px'
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, marginBottom: '16px', flex: 1 }}>
                    {srv.desc}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', color: 'var(--dark-soft)', marginBottom: '18px' }}>
                    {srv.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <i className="fa fa-check" style={{ color: 'var(--primary)', fontSize: '12px' }}></i>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20menanyakan%20layanan%20transportasi."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      padding: '10px 16px',
                      borderRadius: '24px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <i className="fa fa-whatsapp" style={{ marginRight: '6px' }}></i>
                    Ask About Transport
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Transport CTA Banner */}
          <div
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: '20px',
              padding: '32px 36px',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 12px 30px rgba(27, 67, 50, 0.2)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Butuh Sewa Mobil atau Antar-Jemput di Jember & Sekitarnya?
              </h3>
              <p style={{ fontSize: '14px', color: '#d3e4d9', lineHeight: 1.5 }}>
                Konsultasikan armada yang tepat sesuai jumlah peserta dan kebutuhan rute Anda langsung bersama tim Travelogy.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <Link
                href="/transport"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '14px 26px',
                  borderRadius: '30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <span>Lihat Info Transport Lengkap</span>
                <i className="fa fa-arrow-right" style={{ fontSize: '13px' }}></i>
              </Link>
              <a
                href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20menanyakan%20layanan%20transportasi."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--primary-dark)',
                  padding: '14px 28px',
                  borderRadius: '30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px', color: '#25d366' }}></i>
                <span>Hubungi Admin</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          6. HOTEL & EVENT SECTION ("More Than Just A Trip")
          ================================================================= */}
      <section style={{ padding: '88px 0', backgroundColor: '#ffffff' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
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
                marginBottom: '12px'
              }}
            >
              Integrated Services
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              More Than Just A Trip
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {isEn
                ? 'PT. Travelogy Tour Organizer provides end-to-end travel, accommodation, and event planning solutions in one seamless gateway.'
                : 'PT. Travelogy Tour Organizer menghadirkan solusi terpadu untuk perjalanan, akomodasi penginapan rekanan, hingga manajemen event profesional.'}
            </p>
          </div>

          {/* 3 Service Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}
          >
            {additionalServices.map((srv, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '36px 30px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--primary-soft)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px'
                  }}
                >
                  <i className={`fa ${srv.icon}`}></i>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    marginBottom: '6px'
                  }}
                >
                  {srv.title}
                </h3>

                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--secondary)', marginBottom: '14px' }}>
                  {srv.tagline}
                </div>

                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                  {srv.desc}
                </p>

                <a
                  href={`https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(srv.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#f3f7f4',
                    color: 'var(--primary)',
                    padding: '12px 20px',
                    borderRadius: '24px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '1px solid var(--border)'
                  }}
                >
                  <i className="fa fa-whatsapp" style={{ marginRight: '6px' }}></i>
                  Konsultasi Layanan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          7. WHY TRAVELOGY ("Why Travel With Travelogy?")
          ================================================================= */}
      <section style={{ padding: '88px 0', backgroundColor: '#f3f7f4' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
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
                marginBottom: '12px'
              }}
            >
              Our Core Principles
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Why Travel With Travelogy?
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {isEn
                ? 'We believe every travel experience should be enjoyable, transparent, and tailored around what matters to you.'
                : 'Komitmen kami menghadirkan standar layanan perjalanan yang ramah, profesional, transparan, dan berkesan.'}
            </p>
          </div>

          {/* 4 Value Proposition Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {whyPoints.map((pt, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 6px 18px rgba(27, 67, 50, 0.04)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-soft)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    marginBottom: '16px'
                  }}
                >
                  <i className={`fa ${pt.icon}`}></i>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    marginBottom: '10px'
                  }}
                >
                  {pt.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          8. ABOUT TRAVELOGY SECTION
          ================================================================= */}
      <section id="about" style={{ padding: '96px 0', backgroundColor: '#ffffff' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Visual Column */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 48px rgba(27, 67, 50, 0.15)',
                  border: '1px solid var(--border)'
                }}
              >
                <img
                  src="/images/dest_bali.jpg"
                  alt="Travelogy Tour Organizer Experience"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Float Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '24px',
                  backgroundColor: '#ffffff',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <img
                  src="/images/travelogy_logo.png"
                  alt="Travelogy Tour Organizer"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                />
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>
                    Jember, Jawa Timur
                  </strong>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    Kantor Pusat Travelogy
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
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
                About Travelogy
              </span>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  lineHeight: 1.25,
                  marginBottom: '20px'
                }}
              >
                &ldquo;Bringing Happiness in Every Journey&rdquo;
              </h2>

              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--dark-soft)', marginBottom: '16px' }}>
                Travelogy Tour Organizer hadir untuk membantu customer menikmati perjalanan dengan lebih mudah, nyaman, dan terencana. Berbasis di Jember, Jawa Timur, kami mengerti bahwa liburan adalah momen berharga yang tak tergantikan.
              </p>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '28px' }}>
                Melalui integrasi layanan Tour & Travel, armada Transportasi berstandar prima, reservasi Hotel rekanan, dan Event Planning, tim PT. Travelogy Tour Organizer berkomitmen menjadi mitra perjalanan terpercaya bagi wisatawan perseorangan, rombongan keluarga, komunitas, maupun institusi korporasi.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20berkenalan%20dan%20tanya%20layanan%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <i className="fa fa-whatsapp" style={{ fontSize: '17px' }}></i>
                  <span>Hubungi Travelogy</span>
                </a>

                <a
                  href="#contact"
                  style={{
                    backgroundColor: '#f3f7f4',
                    color: 'var(--primary)',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '1px solid var(--border)'
                  }}
                >
                  Lokasi Kantor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          9. TRIP ASSISTANT / CONCIERGE BANNER
          ================================================================= */}
      <ConciergeTrigger />

      {/* =================================================================
          10. FAQ SECTION
          ================================================================= */}
      <FaqSection />

      {/* =================================================================
          11. CONTACT & GOOGLE MAPS SECTION
          ================================================================= */}
      <section id="contact" style={{ padding: '88px 0', backgroundColor: '#ffffff' }}>
        <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
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
                marginBottom: '12px'
              }}
            >
              Get In Touch
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Hubungi & Temui Travelogy
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Kunjungi kantor operasional kami di Jember atau hubungi layanan WhatsApp untuk konsultasi perjalanan Anda kapan saja.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'stretch'
            }}
          >
            {/* Contact Details Card */}
            <div
              style={{
                backgroundColor: '#f8faf8',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px'
              }}
            >
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Legal Company Info
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    marginTop: '4px',
                    marginBottom: '16px'
                  }}
                >
                  PT. Travelogy Tour Organizer
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Biro perjalanan wisata resmi yang melayani Tour & Travel, Sewa Transportasi, Reservasi Hotel, serta Event Planning berbasis di Jember, Jawa Timur.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px' }}>
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Alamat Kantor:</strong>
                      <span style={{ fontSize: '13.5px', color: 'var(--dark-soft)', lineHeight: 1.5 }}>
                        Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>
                      <i className="fa fa-whatsapp"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>WhatsApp Resmi:</strong>
                      <a href="https://wa.me/6281333992989" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                        +62 813-3399-2989
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px' }}>
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Email:</strong>
                      <a href="mailto:travelogycorp@gmail.com" style={{ fontSize: '14px', color: 'var(--dark-soft)', textDecoration: 'none' }}>
                        travelogycorp@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px' }}>
                      <i className="fa fa-clock-o"></i>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px', color: 'var(--dark)' }}>Jam Operasional Kantor:</strong>
                      <span style={{ fontSize: '13.5px', color: 'var(--dark-soft)' }}>
                        09:00 - 13:00 WIB (Setiap Hari Kerja)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20ingin%20berkonsultasi%20mengenai%20perjalanan."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textAlign: 'center',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <i className="fa fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Chat Konsultasi Sekarang</span>
              </a>
            </div>

            {/* Google Maps Embed Card */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 24px rgba(27, 67, 50, 0.05)',
                minHeight: '380px',
                backgroundColor: '#f1f5f2'
              }}
            >
              <iframe
                title="Kantor PT. Travelogy Tour Organizer Jember"
                src="https://maps.google.com/maps?q=Jl.+Mastrip+No.71,+Sumbersari,+Jember,+Jawa+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', display: 'block' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
