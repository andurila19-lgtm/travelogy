import { TourPackage, DailyTrip } from '@/types';
import { Language } from '@/context/LanguageContext';

export interface LocalizedPackageContent {
  title: string;
  subtitle: string;
  duration: string;
  type: string;
  badge?: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  pricePlaceholder?: string;
  itinerary?: Array<{
    day: string;
    title: string;
    schedule: Array<{
      time: string;
      activity: string;
    }>;
  }>;
}

export const packagesLocalizedMap: Record<string, Record<Language, LocalizedPackageContent>> = {
  '3d2n-bromo-escape': {
    id: {
      title: '3D2N Bromo Escape',
      subtitle: 'Golden Sunrise Penanjakan, Lautan Pasir & Kawah Aktif Bromo',
      duration: '3 Hari 2 Malam',
      type: 'Private / Group Trip',
      badge: 'Preview Data • Favorit',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Saksikan magisnya sunrise di atas kaldera Tengger dengan pemandangan Gunung Bromo & Semeru yang megah, safari Jeep 4x4, lautan pasir berbisik, dan kawah aktif.',
      description: 'Paket 3D2N Bromo Escape dirancang untuk memberikan pengalaman liburan petualangan terbaik tanpa rasa lelah berlebih. Bersama Travelogy Tour Organizer, perjalanan Anda dimulai dengan penjemputan nyaman dari titik kumpul (Jember, Surabaya, atau Malang), dilanjutkan dengan safari Jeep 4x4 melintasi padang pasir berbisik, kawah aktif Bromo, pura luhur Poten, hingga padang savana Bukit Teletubbies.',
      highlights: [
        'Safari Jeep 4x4 Private',
        'Golden Sunrise Titik Penanjakan',
        'Eksplorasi Lautan Pasir Berbisik',
        'Savana Hijau Bukit Teletubbies',
        'Akomodasi Penginapan Nyaman'
      ],
      inclusions: [
        'Transportasi armada Travelogy AC privat + BBM + Driver ramah profesional',
        'Jeep 4x4 tertutup khusus kawasan Bromo (Sunrise & Lautan Pasir)',
        'Penginapan / Hotel 2 malam sesuai paket pilihan',
        'Tiket masuk Taman Nasional Bromo Tengger Semeru',
        'Makan & air mineral selama rangkaian tour',
        'Pendampingan tour leader / local guide bersertifikat'
      ],
      exclusions: [
        'Tiket pesawat / kereta api menuju titik kumpul awal',
        'Sewa kuda di kawah Bromo (opsional pribadi)',
        'Pengeluaran belanja pribadi & laundry',
        'Tipping sukarela untuk driver / crew'
      ]
    },
    en: {
      title: '3D2N Bromo Escape',
      subtitle: 'Golden Sunrise Penanjakan, Sea of Sand & Active Bromo Crater',
      duration: '3 Days 2 Nights',
      type: 'Private / Group Trip',
      badge: 'Preview Data • Favorite',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'Witness the magical sunrise over Tengger caldera with majestic views of Mount Bromo & Semeru, 4x4 Jeep safari, whispering sand sea, and active crater.',
      description: 'The 3D2N Bromo Escape is designed to offer an unforgettable volcano adventure with maximum comfort. Together with Travelogy Tour Organizer, your journey starts with a convenient pickup from Jember, Surabaya, or Malang, followed by a private 4x4 Jeep expedition across whispering sands, the active crater, and lush green Teletubbies savanna.',
      highlights: [
        'Private 4x4 Jeep Safari',
        'Golden Sunrise at Penanjakan Viewpoint',
        'Whispering Sands & Poten Temple Exploration',
        'Teletubbies Savanna Hills',
        'Comfortable Hotel Accommodation'
      ],
      inclusions: [
        'Private AC fleet with fuel and professional courteous driver',
        '4x4 Jeep Bromo caldera exploration',
        '2 nights hotel accommodation',
        'Bromo Tengger Semeru National Park entrance tickets',
        'Meals and daily bottled mineral water',
        'Certified local guide / tour leader'
      ],
      exclusions: [
        'Flight or train tickets to meeting point',
        'Horse ride at Bromo crater (optional)',
        'Personal souvenirs & laundry expenses',
        'Voluntary crew tipping'
      ]
    }
  },
  '4d3n-bali-experience': {
    id: {
      title: '4D3N Bali Experience',
      subtitle: 'Eksplorasi Budaya Ubud, Pura Ikonik & Sunset Eksotis Bali',
      duration: '4 Hari 3 Malam',
      type: 'Private Tour',
      badge: 'Preview Data • Populer',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Rangkaian perjalanan lengkap ke Pulau Dewata: Danau Beratan Bedugul, seni & sawah terasering Ubud, keindahan Kintamani, dan panorama sunset pantai selatan.',
      description: 'Bali Experience dari Travelogy dirancang untuk keluarga, pasangan, maupun grup kantor yang menginginkan kenyamanan prima tanpa jadwal yang terburu-buru.',
      highlights: [
        'Pura Ulun Danu Beratan Bedugul',
        'Pemandangan Gunung & Danau Batur Kintamani',
        'Pusat Seni & Terasering Hijau Ubud',
        'Sunset Golden Hour Pantai Melasti / Jimbaran',
        'Transportasi Private & Supir Paham Wisata'
      ],
      inclusions: [
        'Hotel 3 malam di lokasi strategis termasuk sarapan',
        'Armada privat AC berstandar pariwisata + BBM + Driver ramah',
        'Seluruh tiket masuk obyek wisata sesuai program',
        'Makan sesuai itinerary & air mineral botol setiap hari',
        'Parkir & retribusi kawasan wisata'
      ],
      exclusions: [
        'Tiket pesawat / kapal penyeberangan',
        'Keperluan belanja pribadi',
        'Tipping driver sukarela'
      ]
    },
    en: {
      title: '4D3N Bali Experience',
      subtitle: 'Ubud Cultural Heritage, Iconic Temples & Exotic Bali Sunsets',
      duration: '4 Days 3 Nights',
      type: 'Private Tour',
      badge: 'Preview Data • Popular',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'A complete Island of Gods holiday: Ulun Danu Beratan lake temple, Ubud arts & rice terraces, scenic Kintamani volcano caldera, and stunning coastal sunsets.',
      description: 'Travelogy Bali Experience is crafted for families, couples, and corporate groups seeking an unhurried, luxurious island holiday.',
      highlights: [
        'Pura Ulun Danu Beratan Lake Temple',
        'Kintamani Volcano & Lake Batur Vistas',
        'Ubud Art Villages & Tegalalang Rice Terraces',
        'Golden Hour Sunset at Jimbaran / Melasti',
        'Private Fleet with Knowledgeable Driver'
      ],
      inclusions: [
        '3 nights accommodation with daily breakfast',
        'Private comfortable AC transport + fuel + courteous driver',
        'All destination entrance tickets',
        'Meals as outlined in itinerary & mineral water',
        'Parking and toll fees'
      ],
      exclusions: [
        'Flights / ferry tickets',
        'Personal shopping expenses',
        'Gratuities / driver tips'
      ]
    }
  },
  'malang-adventure': {
    id: {
      title: 'Malang Adventure & Highland Escape',
      subtitle: 'Kesejukan Kota Wisata Batu, Petik Apel & Destinasi Favorit Keluarga',
      duration: '3 Hari 2 Malam',
      type: 'Family & Group',
      badge: 'Preview Data • Rekomendasi',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Jelajahi segarnya hawa pegunungan Kota Batu Malang, pengalaman petik apel langsung di kebun petani, theme park modern kelas dunia, dan kuliner legendaris.',
      description: 'Kota Malang dan Batu merupakan pilihan berlibur keluarga paling komplit di Jawa Timur bersama Travelogy Tour Organizer.',
      highlights: [
        'Wisata Petik Apel Segar di Kebun Petani',
        'Museum Angkut & Jatim Park Series',
        'Air Terjun Coban Rondo & Taman Labirin',
        'Wisata Malam Batu Night Spectacular (BNS)',
        'Kuliner Khas Bakso Malang & Oleh-Oleh Keripik Buah'
      ],
      inclusions: [
        'Armada mobil privat full AC + Supir ramah + BBM selama 3 hari',
        'Akomodasi Hotel 2 malam di Kota Batu pilihan berbintang',
        'Tiket masuk seluruh destinasi wisata sesuai program',
        'Tiket perkebunan petik apel makan sepuasnya di kebun',
        'Makan sesuai itinerary & air mineral botol'
      ],
      exclusions: [
        'Pengeluaran belanja pribadi di luar program',
        'Tiket wahana opsional di dalam area taman rekreasi',
        'Tipping sukarela'
      ]
    },
    en: {
      title: 'Malang Adventure & Highland Escape',
      subtitle: 'Crisp Highland Air in Batu, Fresh Apple Picking & Family Fun',
      duration: '3 Days 2 Nights',
      type: 'Family & Group',
      badge: 'Preview Data • Recommended',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'Experience the refreshing mountain highlands of Batu Malang, fresh apple picking from local orchards, world-class theme parks, and authentic culinary delights.',
      description: 'Malang and Batu highlands provide the premier family getaway in East Java with Travelogy Tour Organizer.',
      highlights: [
        'Fresh Apple Picking at Local Orchards',
        'Museum Angkut & Jatim Park Attractions',
        'Coban Rondo Waterfall & Lush Labyrinth Garden',
        'Nighttime Entertainment at BNS',
        'Famous Malang Meatballs & Fruit Chips'
      ],
      inclusions: [
        'Private clean AC car + driver + fuel for 3 days',
        '2 nights hotel in Batu with daily breakfast',
        'All attraction admission tickets',
        'Apple orchard entrance and all-you-can-eat tasting',
        'Meals and daily bottled water'
      ],
      exclusions: [
        'Personal shopping expenses',
        'Optional theme park ride fees',
        'Voluntary gratuities'
      ]
    }
  },
  'ijen-crater-expedition': {
    id: {
      title: 'Ijen Midnight Crater Expedition',
      subtitle: 'Fenomena Langka Api Biru (Blue Fire) & Danau Kawah Asam Terbesar',
      duration: '2 Hari 1 Malam',
      type: 'Adventure Trip',
      badge: 'Preview Data • Eksklusif',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Mendaki salah satu kawah paling spektakuler di bumi. Saksikan fenomena api biru alami langka dan danau asam berwarna toska saat fajar menyingsing di Gunung Ijen.',
      description: 'Kawah Ijen merupakan keajaiban geologis dunia yang terletak di perbatasan Banyuwangi dan Bondowoso, hanya berjarak beberapa jam perjalanan nyaman dari Jember.',
      highlights: [
        'Fenomena Blue Fire Langka (Hanya 2 di Dunia)',
        'Pemandangan Danau Kawah Asam Hijau Toska',
        'Sunrise Mengagumkan dari Puncak Rim Kawah',
        'Masker Gas Standar & Guide Trekking Lokal',
        'Jarak Dekat & Akses Nyaman dari Jember'
      ],
      inclusions: [
        'Transportasi armada Travelogy PP dari Jember / Banyuwangi + BBM + Supir',
        'Akomodasi penginapan 1 malam di lereng Ijen',
        'Tiket resmi Taman Wisata Alam Kawah Ijen',
        'Guide lokal profesional pendakian kawah',
        'Sewa Masker Gas respirator standar & senter kepala',
        'Air mineral & sarapan pagi'
      ],
      exclusions: [
        'Sewa troli gerobak dorong jika dibutuhkan (opsional di lokasi)',
        'Pengeluaran pribadi',
        'Tipping sukarela'
      ]
    },
    en: {
      title: 'Ijen Midnight Crater Expedition',
      subtitle: 'Rare Natural Blue Fire Phenomenon & World Largest Acidic Lake',
      duration: '2 Days 1 Night',
      type: 'Adventure Trip',
      badge: 'Preview Data • Exclusive',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'Hike one of the most astonishing volcano craters on Earth. Witness rare natural blue flames and the turquoise acidic lake at sunrise.',
      description: 'Mount Ijen is a global geological wonder located right next to Jember, easily reachable with Travelogy comfortable transfers.',
      highlights: [
        'Rare Electric Blue Fire Phenomenon',
        'Vivid Turquoise Acidic Crater Lake',
        'Breathtaking Sunrise at Crater Rim',
        'Respirator Gas Mask & Local Trekking Guide Included',
        'Seamless Pickup & Return from Jember'
      ],
      inclusions: [
        'Travelogy round-trip AC transport from Jember + driver + fuel',
        '1 night lodging near Ijen basecamp',
        'Official Mount Ijen Nature Reserve permits',
        'Professional licensed crater trekking guide',
        'Standard respirator gas mask & headlamp',
        'Mineral water & breakfast'
      ],
      exclusions: [
        'Local wheeled push-cart rental if needed',
        'Personal expenses',
        'Voluntary guide tips'
      ]
    }
  },
  '3d2n-yogyakarta-heritage': {
    id: {
      title: 'Yogyakarta Heritage & Nature',
      subtitle: 'Keagungan Borobudur, Jejak Budaya Keraton & Petualangan Merapi',
      duration: '3 Hari 2 Malam',
      type: 'Cultural Tour',
      badge: 'Preview Data',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Jelajahi jantung kebudayaan Jawa: kemegahan Candi Borobudur & Prambanan, serunya Lava Tour Jeep lereng Merapi, Keraton Jogja, dan gemerlap malam Malioboro.',
      description: 'Yogyakarta selalu menghadirkan kenangan rindu yang hangat dipadukan dengan keagungan candi dan petualangan lereng Merapi.',
      highlights: [
        'Kemegahan Candi Borobudur & Prambanan',
        'Jeep Lava Tour Lereng Gunung Merapi',
        'Keraton Ngayogyakarta Hadiningrat',
        'Suasana Romantis Malam Malioboro & Titik Nol',
        'Wisata Kuliner Khas & Sentra Bakpia Pathok'
      ],
      inclusions: [
        'Hotel 2 malam bintang 3/4 di pusat kota Yogyakarta termasuk sarapan',
        'Armada mobil privat full AC + Supir berpengalaman + BBM',
        'Sewa Jeep 4x4 untuk rute Lava Tour Merapi',
        'Tiket masuk seluruh obyek wisata sesuai paket',
        'Air mineral dan rekomendasi kuliner terbaik'
      ],
      exclusions: [
        'Tiket kereta / pesawat ke dan dari Yogyakarta',
        'Pengeluaran pribadi & wahana di luar itinerary',
        'Tipping sukarela'
      ]
    },
    en: {
      title: 'Yogyakarta Heritage & Nature',
      subtitle: 'Majestic Borobudur, Royal Palace & Mount Merapi Jeep Safari',
      duration: '3 Days 2 Nights',
      type: 'Cultural Tour',
      badge: 'Preview Data',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'Explore the cultural soul of Java: monumental Borobudur & Prambanan temples, thrilling Merapi lava jeep safari, and vibrant Malioboro evenings.',
      description: 'Experience warm Javanese hospitality, world-heritage temples, and volcanic adventures with Travelogy.',
      highlights: [
        'UNESCO World Heritage Borobudur & Prambanan',
        '4x4 Jeep Merapi Lava Adventure',
        'Sultan Palace (Keraton) & Water Castle',
        'Atmospheric Malioboro Stroll',
        'Traditional Gudeg & Bakpia Tastings'
      ],
      inclusions: [
        '2 nights accommodation in central Yogyakarta with breakfast',
        'Private AC transport with knowledgeable driver + fuel',
        '4x4 Jeep rental for Mount Merapi Lava Tour',
        'All temple and heritage entry tickets',
        'Daily mineral water'
      ],
      exclusions: [
        'Train or flight tickets to Yogyakarta',
        'Personal spending & extra rides',
        'Gratuities'
      ]
    }
  },
  '2d1n-jember-exotic-discovery': {
    id: {
      title: 'Jember Exotic Discovery',
      subtitle: 'Pesona Pantai Tanjung Papuma, Teluk Love & Agrowisata Kopi',
      duration: '2 Hari 1 Malam',
      type: 'Local Tour',
      badge: 'Preview Data • Local Gem',
      pricePlaceholder: 'Konsultasikan via WhatsApp',
      shortDesc: 'Jelajahi surga tersembunyi tanah Jember: pantai karang eksotis Tanjung Papuma, panorama Teluk Love dari atas bukit, dan kesejukan perkebunan kopi pegunungan.',
      description: 'Sebagai biro perjalanan yang berakar di Jember, Travelogy Tour Organizer mempersembahkan keindahan kampung halaman yang otentik dan penuh pesona.',
      highlights: [
        'Batu Karang & Pasir Putih Tanjung Papuma',
        'Panorama Teluk Love dari Bukit Payangan',
        'Agrowisata Perkebunan Kopi & Kakao Jember',
        'Wisata Kuliner Suwar-Suwir & Tape Khas Jember',
        'Dipandu Tim Asli Jember yang Ramah & Mengetahui Sudut Terbaik'
      ],
      inclusions: [
        'Armada mobil ber-AC prima + BBM + Supir lokal asli Jember',
        'Hotel 1 malam di pusat kota Jember pilihan',
        'Tiket masuk Tanjung Papuma & Bukit Payangan',
        'Makan hidangan laut nelayan & kuliner khas',
        'Air mineral dingin & pendampingan tour'
      ],
      exclusions: [
        'Tiket kereta api kedatangan ke Jember',
        'Pengeluaran belanja pribadi',
        'Tipping sukarela'
      ]
    },
    en: {
      title: 'Jember Exotic Discovery',
      subtitle: 'Exotic Tanjung Papuma Beach, Love Bay & Mountain Coffee Estates',
      duration: '2 Days 1 Night',
      type: 'Local Tour',
      badge: 'Preview Data • Local Gem',
      pricePlaceholder: 'Inquire via WhatsApp',
      shortDesc: 'Uncover the hidden coastal and highland treasures of Jember: dramatic sea rocks of Tanjung Papuma, panoramic Love Bay, and heritage coffee plantations.',
      description: 'As a proud Jember-based tour organizer, Travelogy showcases the finest local landscapes, warm coastal hospitality, and mountain serenity.',
      highlights: [
        'Tanjung Papuma White Sand Beach & Sea Stacks',
        'Heart-Shaped Love Bay Overlook from Payangan Hill',
        'Mountain Coffee & Cocoa Estate Tasting',
        'Traditional Jember Delicacies (Prol Tape & Edamame)',
        'Guided by Friendly Native Jember Hosts'
      ],
      inclusions: [
        'Comfortable AC vehicle + driver + fuel in Jember',
        '1 night central Jember hotel accommodation',
        'Tanjung Papuma & Payangan Hill entrance tickets',
        'Fresh coastal seafood dining experience',
        'Bottled mineral water and tour assistance'
      ],
      exclusions: [
        'Train tickets to Jember',
        'Personal shopping expenses',
        'Optional tips'
      ]
    }
  }
};

export function getLocalizedPackage(pkg: TourPackage, lang: Language): TourPackage {
  const loc = packagesLocalizedMap[pkg.slug]?.[lang];
  if (!loc) return pkg;

  return {
    ...pkg,
    title: loc.title || pkg.title,
    subtitle: loc.subtitle || pkg.subtitle,
    duration: loc.duration || pkg.duration,
    type: loc.type || pkg.type,
    badge: loc.badge || pkg.badge,
    shortDesc: loc.shortDesc || pkg.shortDesc,
    description: loc.description || pkg.description,
    highlights: loc.highlights || pkg.highlights,
    inclusions: loc.inclusions || pkg.inclusions,
    exclusions: loc.exclusions || pkg.exclusions,
    pricePlaceholder: (lang === 'en' && pkg.pricePlaceholder.toLowerCase().includes('konsultasi')) ? 'Inquire' : pkg.pricePlaceholder,
    itinerary: (loc.itinerary && loc.itinerary.length > 0) ? loc.itinerary : pkg.itinerary
  };
}

export const dailyTripsLocalizedMap: Record<number, Record<Language, { title: string; duration: string; desc: string }>> = {
  1: {
    id: {
      title: '1-Day Bromo Sunrise Safari',
      duration: '1 Hari',
      desc: 'Sunrise spektakuler Penanjakan, kawah aktif Bromo, lautan pasir berbisik, dan bukit teletubbies.'
    },
    en: {
      title: '1-Day Bromo Sunrise Safari',
      duration: '1 Day',
      desc: 'Spectacular Penanjakan sunrise, active Bromo crater, whispering sand sea, and teletubbies hill.'
    }
  },
  2: {
    id: {
      title: '1-Day Kawah Ijen Blue Fire',
      duration: '1 Hari',
      desc: 'Midnight trekking menyaksikan api biru langka, danau kawah toska, dan panorama fajar rim kawah.'
    },
    en: {
      title: '1-Day Kawah Ijen Blue Fire',
      duration: '1 Day',
      desc: 'Midnight trekking for rare electric blue flames, turquoise crater lake, and sunrise vistas.'
    }
  },
  3: {
    id: {
      title: '1-Day Tanjung Papuma & Teluk Love Jember',
      duration: '1 Hari',
      desc: 'Eksplorasi pantai selatan Jember, batu karang Siti Hinggil, Teluk Love, dan kuliner ikan bakar nelayan.'
    },
    en: {
      title: '1-Day Tanjung Papuma & Love Bay Jember',
      duration: '1 Day',
      desc: 'Southern Jember coastal journey, iconic Papuma sea rocks, Love Bay viewpoint, and fresh grilled seafood.'
    }
  },
  4: {
    id: {
      title: '1-Day Malang Batu Highland Tour',
      duration: '1 Hari',
      desc: 'Petik apel segar langsung dari pohon, Museum Angkut, Coban Rondo, dan pusat oleh-oleh khas Batu.'
    },
    en: {
      title: '1-Day Malang Batu Highland Tour',
      duration: '1 Day',
      desc: 'Fresh orchard apple picking, world-class Museum Angkut, Coban Rondo waterfall, and local delights.'
    }
  }
};

export function getLocalizedTrip(trip: DailyTrip, lang: Language): DailyTrip {
  const loc = dailyTripsLocalizedMap[trip.id]?.[lang];
  if (!loc) return trip;

  return {
    ...trip,
    title: loc.title || trip.title,
    duration: loc.duration || trip.duration,
    desc: loc.desc || trip.desc,
    price: (lang === 'en' && trip.price.toLowerCase().includes('konsultasi')) ? 'Inquire' : trip.price
  };
}
