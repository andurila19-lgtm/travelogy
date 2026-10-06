'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHeaderNav from '@/components/PageHeaderNav';

export default function DestinasiPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const destinations = [
    {
      id: 'bromo',
      name: 'Bromo Tengger Semeru',
      tagline: isEn ? 'Caldera Sunrise & Sea of Sand' : 'Golden Sunrise & Lautan Pasir Berbisik',
      desc: isEn
        ? 'Witness the mystical golden sunrise over the active caldera of Mount Bromo and Semeru, whispering sea of sand, and lush green teletubbies savanna.'
        : 'Saksikan magisnya matahari terbit berlatar kaldera megah Gunung Bromo dan Semeru, lautan pasir berbisik yang luas, serta padang savana hijau teletubbies.',
      image: '/images/dest_bromo.jpg',
      badge: 'Iconic Wonder',
      bestTime: 'Mei - Oktober',
      highlight: 'Sunrise Penanjakan, Kawah Aktif, Pasir Berbisik'
    },
    {
      id: 'bali',
      name: 'Bali (Pulau Dewata)',
      tagline: isEn ? 'Island of Gods & Rich Heritage' : 'Pesona Pulau Dewata & Kebudayaan Luhur',
      desc: isEn
        ? 'Experience scenic lakeside temples, lush Ubud rice terraces, majestic Kintamani caldera views, cultural dance, and unforgettable coastal sunsets.'
        : 'Keagungan Pura Ulun Danu Beratan di Danau Bedugul, sawah terasering Ubud yang asri, panorama kaldera Kintamani, dan senja pantai eksotis.',
      image: '/images/dest_bali.jpg',
      badge: 'Holiday Escape',
      bestTime: 'Sepanjang Tahun',
      highlight: 'Bedugul, Tanah Lot, Ubud, Pantai Pandawa'
    },
    {
      id: 'malang',
      name: 'Malang & Kota Batu',
      tagline: isEn ? 'Cool Highland & Family Fun' : 'Kesejukan Dataran Tinggi & Wisata Edukasi',
      desc: isEn
        ? 'Crisp mountain air, fresh apple orchard picking, natural waterfalls, and world-class thematic amusement parks perfect for family bonding.'
        : 'Hawa sejuk pegunungan Kota Batu, keseruan petik apel langsung di kebun petani lokal, air terjun Coban Rondo, Museum Angkut, dan kuliner khas apel.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: 'Family Favorite',
      bestTime: 'Sepanjang Tahun',
      highlight: 'Petik Apel, Museum Angkut, Coban Rondo'
    },
    {
      id: 'yogyakarta',
      name: 'Yogyakarta Istimewa',
      tagline: isEn ? 'Royal Culture & Ancient Temples' : 'Keagungan Warisan Budaya & Sejarah Mataram',
      desc: isEn
        ? 'Monumental UNESCO world heritage Borobudur & Prambanan temples, historic royal palaces, thrilling Merapi lava jeep tours, and bustling Malioboro.'
        : 'Kemegahan mahakarya Candi Borobudur & Prambanan, kearifan Keraton Ngayogyakarta, petualangan off-road Jeep Lava Tour Merapi, dan syahdunya Malioboro.',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
      badge: 'Cultural Heritage',
      bestTime: 'April - November',
      highlight: 'Borobudur, Prambanan, Lava Tour, Malioboro'
    },
    {
      id: 'jember',
      name: 'Jember & Pesisir Selatan',
      tagline: isEn ? 'Exotic Coastlines & Coffee Estates' : 'Eksotisme Karang Pantai & Perkebunan Kopi',
      desc: isEn
        ? 'Explore majestic coastal sea stacks at Tanjung Papuma, romantic heart-shaped Love Bay, and heritage mountain robusta coffee estates on Mount Argopuro slopes.'
        : 'Pesona batu karang raksasa Pantai Tanjung Papuma, panorama Teluk Love dari bukit Payangan, serta aroma khas perkebunan kopi robusta lereng Pegunungan Argopuro.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: 'Home Base',
      bestTime: 'Sepanjang Tahun',
      highlight: 'Pantai Papuma, Teluk Love, Siti Hinggil, Kopi Jember'
    },
    {
      id: 'east-java',
      name: 'Kawah Ijen & Jawa Timur',
      tagline: isEn ? 'Electric Blue Fire & Wild Savannas' : 'Fenomena Api Biru Langka & Savana Liar',
      desc: isEn
        ? 'Rare midnight trekking to witness electric blue flames, turquoise acidic crater lakes, Tumpak Sewu waterfall amphitheater, and African-like Baluran savanna.'
        : 'Pendakian malam menyaksikan fenomena langka Blue Fire Kawah Ijen, danau asam toska terbesar di dunia, kemegahan Air Terjun Tumpak Sewu, dan Savana Bekol Baluran.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
      badge: 'Expedition',
      bestTime: 'Juli - Oktober',
      highlight: 'Blue Fire Ijen, Kawah Toska, Tumpak Sewu, Baluran'
    }
  ];

  return (
    <div className="multipage-wrapper" style={{ backgroundColor: '#fafcfb', minHeight: '100vh', paddingTop: '20px' }}>
      {/* PAGE HEADER WITH BACK BUTTONS & BREADCRUMBS */}
      <PageHeaderNav
        breadcrumbs={[{ label: isEn ? 'Destinations' : 'Destinasi Wisata' }]}
        badge={isEn ? 'Experience The Wonders' : 'Eksplorasi Destinasi'}
        title="Where Will Your Journey Take You?"
        description={
          isEn
            ? 'Discover captivating destinations curated for your perfect getaway. From dramatic volcanoes to tranquil tropical waters, Travelogy provides seamless travel solutions.'
            : 'Pilihan destinasi favorit yang siap dieksplorasi bersama PT. Travelogy Tour Organizer. Setiap rute perjalanan dirancang fleksibel dengan kenyamanan armada dan pendampingan terpercaya.'
        }
      />

      <div className="box1140" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Destination Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
            marginBottom: '56px'
          }}
        >
          {destinations.map((dest) => (
            <div
              key={dest.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5ede7',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              {/* Image Frame */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(28, 96, 97, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase'
                  }}
                >
                  {dest.badge}
                </span>

                <span
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    color: '#ffffff',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}
                >
                  <i className="fa fa-calendar-check-o" style={{ marginRight: '4px', color: 'var(--secondary)' }}></i>
                  {dest.bestTime}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    marginBottom: '4px'
                  }}
                >
                  {dest.tagline}
                </span>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    margin: '0 0 10px 0',
                    lineHeight: 1.3
                  }}
                >
                  {dest.name}
                </h2>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 18px 0', flex: 1 }}>
                  {dest.desc}
                </p>

                {/* Highlights pill */}
                <div style={{ backgroundColor: '#f5faf7', padding: '10px 14px', borderRadius: '10px', marginBottom: '20px', fontSize: '12px', color: 'var(--dark-soft)' }}>
                  <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '2px' }}>
                    <i className="fa fa-map-marker" style={{ marginRight: '5px' }}></i> Highlight Destinasi:
                  </strong>
                  <span>{dest.highlight}</span>
                </div>

                {/* Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <Link
                    href={`/paket?destinasi=${dest.id}`}
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      textAlign: 'center',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'background 0.2s'
                    }}
                  >
                    {isEn ? 'View Packages' : 'Lihat Paket'}
                  </Link>

                  <a
                    href={`https://wa.me/6281333992989?text=Halo%20Travelogy,%20saya%20tertarik%20dengan%20destinasi%20${encodeURIComponent(dest.name)}.%20Bisa%20konsultasi%20paket%20atau%20custom%20trip?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      border: '1px solid #cfe0d5',
                      textAlign: 'center',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <i className="fa fa-whatsapp"></i> {isEn ? 'Chat WA' : 'Tanya WA'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Journey Callout Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '36px 32px',
            border: '1px solid #e5ede7',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Destinasi Impian Lainnya
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--dark)',
                margin: '6px 0 8px 0'
              }}
            >
              Punya Tujuan Destinasi Khusus di Luar Daftar?
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
              Kemanapun rencana perjalanan Anda — luar kota, studi tour, gathering kantor, atau liburan keluarga — tim Travelogy siap merancang rute perjalanan khusus sesuai preferensi Anda.
            </p>
          </div>

          <Link
            href="/custom-trip"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(28, 96, 97, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>Rancang Custom Trip</span>
            <i className="fa fa-arrow-right" style={{ fontSize: '12px' }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
