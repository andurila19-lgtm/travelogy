'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    destinations: string;
    tourPackages: string;
    dailyTrips: string;
    transport: string;
    aboutUs: string;
    customTrip: string;
    planYourTrip: string;
    allPackages: string;
    chatWa: string;
  };
  hero: {
    badge: string;
    headline: string;
    subline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  search: {
    catLabel: string;
    allCat: string;
    destLabel: string;
    allDest: string;
    durLabel: string;
    allDur: string;
    btnText: string;
    catHoliday: string;
    catPrivate: string;
    catHoneymoon: string;
    catDaily: string;
    dur1Day: string;
    dur2D1N: string;
    dur3D2N: string;
    dur4D3N: string;
    dur5D4N: string;
  };
  why: {
    title1: string;
    title2: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  destinations: {
    tag: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    previewNotice: string;
  };
  packages: {
    tag: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabMulti: string;
    tabDaily: string;
    tabAdventure: string;
    tabCulture: string;
    perPerson: string;
    viewDetail: string;
    consultWa: string;
    bestSellerBadge: string;
  };
  daily: {
    tag: string;
    title: string;
    subtitle: string;
    bookNow: string;
    durationPrefix: string;
  };
  customTrip: {
    tag: string;
    title: string;
    subtitle: string;
    desc: string;
    nameLabel: string;
    waLabel: string;
    dateLabel: string;
    participantsLabel: string;
    destLabel: string;
    tripTypeLabel: string;
    transportLabel: string;
    hotelLabel: string;
    notesLabel: string;
    btnSubmit: string;
  };
  transport: {
    tag: string;
    title: string;
    subtitle: string;
    askTransport: string;
  };
  moreServices: {
    tag: string;
    title: string;
    subtitle: string;
    services: Array<{
      title: string;
      desc: string;
      features: string[];
    }>;
  };
  about: {
    tag: string;
    title: string;
    heading: string;
    description1: string;
    description2: string;
    hqTitle: string;
    hqAddress: string;
    hoursTitle: string;
    hoursValue: string;
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    tag: string;
    title: string;
    subtitle: string;
  };
  whatsapp: {
    bubble: string;
    defaultMsg: string;
  };
  footer: {
    tagline: string;
    desc: string;
    linksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    copyright: string;
  };
  buttons: {
    book: string;
    bookNow: string;
    detail: string;
    viewDetail: string;
    chatWa: string;
    chatWaLong: string;
    submit: string;
    resetFilter: string;
  };
  packageDetail: {
    breadcrumbHome: string;
    breadcrumbTour: string;
    startingFrom: string;
    perPerson: string;
    packageDescTitle: string;
    itineraryTitle: string;
    facilitiesTitle: string;
    inclusionsTitle: string;
    exclusionsTitle: string;
    extraAddonsTitle: string;
    priceTitle: string;
    priceSubtitle: string;
    colPax: string;
    colNoHotel: string;
    colHotel3: string;
    colHotel4: string;
    row2pax: string;
    row3pax: string;
    row5pax: string;
    row7pax: string;
    valConsult: string;
    valRequest: string;
    valSpecialGroup: string;
    priceNote: string;
    ctaQuestion: string;
    sidebarFrom: string;
    sidebarPerPax: string;
    sidebarCar: string;
    sidebarDriver: string;
    sidebarTickets: string;
    sidebarFastResp: string;
    relatedTag: string;
    relatedTitle: string;
    viewAllPkgs: string;
    btnAskTrip: string;
  };
  bookingModal: {
    systemBadge: string;
    titleNew: string;
    titleSuccess: string;
    nameLabel: string;
    namePlaceholder: string;
    waLabel: string;
    waPlaceholder: string;
    waHint: string;
    emailLabel: string;
    emailPlaceholder: string;
    pkgLabel: string;
    dateLabel: string;
    paxLabel: string;
    pickupLabel: string;
    pickupPlaceholder: string;
    transportLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    termsText: string;
    btnSubmitting: string;
    btnSubmit: string;
    successTitle: string;
    successSubtitle: string;
    refLabel: string;
    summaryPkg: string;
    summaryDate: string;
    summaryPax: string;
    summaryStatus: string;
    followUpPrompt: string;
    btnWaConfirm: string;
    btnClose: string;
    errorName: string;
    errorWa: string;
    errorDate: string;
    errorDatePast: string;
    errorPax: string;
    errorGeneral: string;
  };
  concierge: {
    tag: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerBtn: string;
    modalTag: string;
    modalTitle: string;
    modalSubtitle: string;
    q1: string;
    q1Opt1: string;
    q1Opt2: string;
    q1Opt3: string;
    q2: string;
    q2Opt1: string;
    q2Opt2: string;
    q2Opt3: string;
    q3: string;
    q3Opt1: string;
    q3Opt2: string;
    q3Opt3: string;
    btnCalculate: string;
    recTag: string;
    btnViewPkg: string;
    btnConsultWa: string;
  };
}

const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      tourPackages: 'Tour Packages',
      dailyTrips: 'Trip Harian',
      transport: 'Transport',
      aboutUs: 'About',
      customTrip: 'Custom Trip',
      planYourTrip: 'Plan Your Trip',
      allPackages: 'Lihat Semua Paket',
      chatWa: 'Chat WhatsApp'
    },
    hero: {
      badge: 'PT. Travelogy Tour Organizer • Jember',
      headline: 'Bringing Happiness in Every Journey',
      subline: 'Travel • Transport • Hotel • Event',
      description: 'Explore new destinations, create unforgettable moments, and let Travelogy take care of the journey.',
      ctaPrimary: 'Explore Our Trips',
      ctaSecondary: 'Plan Your Trip'
    },
    search: {
      catLabel: 'Pilih Kategori:',
      allCat: 'Semua Kategori',
      destLabel: 'Pilih Destinasi:',
      allDest: 'Semua Destinasi',
      durLabel: 'Pilih Durasi:',
      allDur: 'Semua Durasi',
      btnText: 'CARI PERJALANAN',
      catHoliday: 'Tour Packages',
      catPrivate: 'Private Trip',
      catHoneymoon: 'Honeymoon Trip',
      catDaily: 'Trip Harian',
      dur1Day: '1 Hari (Trip Harian)',
      dur2D1N: '2 Hari 1 Malam',
      dur3D2N: '3 Hari 2 Malam',
      dur4D3N: '4 Hari 3 Malam',
      dur5D4N: '5 Hari 4 Malam'
    },
    why: {
      title1: 'Why Travel With Travelogy?',
      title2: 'Komitmen Layanan Terbaik untuk Setiap Perjalanan',
      features: [
        {
          title: 'Personalized Journey',
          desc: 'Setiap perjalanan dapat disesuaikan dengan kebutuhan, preferensi, dan gaya liburan Anda.'
        },
        {
          title: 'End-to-End Planning',
          desc: 'Bantuan komprehensif dari perencanaan rute, reservasi hotel, hingga pendampingan selama perjalanan.'
        },
        {
          title: 'Flexible Travel Solutions',
          desc: 'Pilihan perjalanan, armada transportasi, penginapan rekanan, dan event dalam satu layanan terpadu.'
        },
        {
          title: 'Dedicated Support',
          desc: 'Customer dapat berkonsultasi langsung dengan tim profesional Travelogy yang ramah dan responsif.'
        }
      ]
    },
    destinations: {
      tag: 'Destinasi Populer',
      title: 'Where Will Your Journey Take You?',
      subtitle: 'Inspirasi destinasi perjalanan favorit bersama Travelogy. Dari panorama megah gunung berapi hingga eksotisme pesisir.',
      exploreBtn: 'Explore',
      previewNotice: '* Seluruh destinasi di bawah merupakan data preview kurasi Travelogy yang dapat disesuaikan dengan kebutuhan trip Anda.'
    },
    packages: {
      tag: 'Katalog Perjalanan',
      title: 'Explore Our Journeys',
      subtitle: 'Rangkaian paket perjalanan terencana untuk liburan personal, keluarga, hingga group gathering.',
      tabAll: 'Semua Paket',
      tabMulti: 'Multi-Day Trip',
      tabDaily: 'Trip Harian (1 Hari)',
      tabAdventure: 'Adventure & Nature',
      tabCulture: 'Culture & Leisure',
      perPerson: 'Harga estimasi / konsultasi',
      viewDetail: 'View Details',
      consultWa: 'Tanya WhatsApp',
      bestSellerBadge: 'FAVORIT'
    },
    daily: {
      tag: 'Eksplorasi 1 Hari',
      title: 'Pilihan Trip Harian',
      subtitle: 'Paket perjalanan satu hari berkesan dengan armada prima dan supir berpengalaman.',
      bookNow: 'Tanya Trip Ini',
      durationPrefix: 'Durasi'
    },
    customTrip: {
      tag: 'Rancang Trip Impian',
      title: 'Your Trip, Your Way',
      subtitle: 'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.',
      desc: 'Sampaikan detail rencana perjalanan Anda di bawah ini, tim Travelogy akan menyusun program terbaik khusus untuk Anda.',
      nameLabel: 'Nama Lengkap',
      waLabel: 'Nomor WhatsApp',
      dateLabel: 'Tanggal Perjalanan',
      participantsLabel: 'Jumlah Peserta',
      destLabel: 'Destinasi yang Dituju',
      tripTypeLabel: 'Jenis Perjalanan',
      transportLabel: 'Kebutuhan Transportasi',
      hotelLabel: 'Kebutuhan Hotel / Akomodasi',
      notesLabel: 'Catatan Khusus / Permintaan Rute',
      btnSubmit: 'Request Custom Trip'
    },
    transport: {
      tag: 'Armada & Kenyamanan',
      title: 'Travel With Comfort',
      subtitle: 'Layanan transportasi profesional dari Jember dengan pilihan armada prima, supir berpengalaman, dan tarif transparan.',
      askTransport: 'Ask About Transport'
    },
    moreServices: {
      tag: 'Layanan Tambahan',
      title: 'More Than Just A Trip',
      subtitle: 'Solusi lengkap perjalanan, akomodasi, dan penyelenggaraan acara dari PT. Travelogy Tour Organizer.',
      services: [
        {
          title: 'Travel & Tour',
          desc: 'Perencanaan paket wisata lengkap, itinerary fleksibel, tiket obyek wisata, dan pendampingan tour yang menyenangkan.',
          features: ['Paket Wisata Personal & Group', 'Itinerary Fleksibel & Terjadwal', 'Pendampingan Guide Ramah']
        },
        {
          title: 'Hotel',
          desc: 'Reservasi hotel berbintang, resort, dan villa rekanan dengan penawaran terbaik dan jaminan kenyamanan istirahat.',
          features: ['Rekomendasi Penginapan Strategis', 'Negosiasi Rate Group / Corporate', 'Pilihan Bintang 3, 4 & Resort']
        },
        {
          title: 'Event Planning',
          desc: 'Layanan event organizer profesional untuk corporate gathering, outing kantor, outbound, meeting, dan perayaan khusus.',
          features: ['Corporate Gathering & Family Outing', 'Outbound & Team Building', 'Perlengkapan Acara & Dokumentasi']
        }
      ]
    },
    about: {
      tag: 'Tentang Travelogy',
      title: 'About Travelogy',
      heading: 'Bringing Happiness in Every Journey',
      description1: 'Travelogy Tour Organizer hadir untuk membantu customer menikmati perjalanan dengan lebih mudah, nyaman, dan terencana. Berbasis di Jember, Jawa Timur, kami berkomitmen memberikan pengalaman perjalanan yang berkesan bagi setiap pelanggan.',
      description2: 'Melalui integrasi layanan Tour & Travel, Transportasi prima, reservasi Hotel, dan Event Planning, tim kami siap mendampingi kebutuhan perjalanan personal, keluarga, hingga rombongan instansi dan korporasi.',
      hqTitle: 'Kantor Operasional',
      hqAddress: 'Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124',
      hoursTitle: 'Jam Operasional',
      hoursValue: '09:00 - 13:00 WIB'
    },
    gallery: {
      tag: 'Momen Perjalanan',
      title: 'Kebahagiaan di Setiap Langkah',
      subtitle: 'Dokumentasi perjalanan mengesankan bersama para pelanggan setia Travelogy.'
    },
    testimonials: {
      tag: 'Kepercayaan Pelanggan',
      title: 'Cerita Bahagia Bersama Travelogy',
      subtitle: 'Pengalaman nyata pelanggan yang mempercayakan perjalanannya kepada tim Travelogy.'
    },
    whatsapp: {
      bubble: 'Chat With Travelogy',
      defaultMsg: 'Halo Travelogy, saya ingin bertanya tentang layanan tour dan perjalanan.'
    },
    footer: {
      tagline: 'Bringing Happiness in Every Journey',
      desc: 'PT. Travelogy Tour Organizer adalah biro perjalanan wisata resmi berbasis di Jember, Jawa Timur. Menyediakan layanan Tour & Travel, Sewa Transportasi, Hotel, dan Event Planning.',
      linksTitle: 'Navigasi',
      servicesTitle: 'Layanan',
      contactTitle: 'Kontak Kami',
      copyright: 'PT. Travelogy Tour Organizer. All rights reserved.'
    },
    buttons: {
      book: 'Plan Trip',
      bookNow: 'Pesan Sekarang',
      detail: 'Detail',
      viewDetail: 'View Details',
      chatWa: 'Chat WhatsApp',
      chatWaLong: 'Chat via WhatsApp',
      submit: 'Kirim Permintaan',
      resetFilter: 'Reset Filter'
    },
    packageDetail: {
      breadcrumbHome: 'Home',
      breadcrumbTour: 'Tour Packages',
      startingFrom: 'Estimasi Biaya:',
      perPerson: 'Konsultasi via WhatsApp',
      packageDescTitle: 'Ringkasan Paket (Overview)',
      itineraryTitle: 'Rencana Perjalanan (Itinerary)',
      facilitiesTitle: 'Fasilitas & Layanan',
      inclusionsTitle: 'Sudah Termasuk (Included):',
      exclusionsTitle: 'Belum Termasuk (Not Included):',
      extraAddonsTitle: 'Dokumentasi & Layanan Tambahan',
      priceTitle: 'Konsultasi Biaya & Peserta',
      priceSubtitle: 'Biaya disesuaikan dengan jumlah rombongan, pilihan hotel, dan titik penjemputan:',
      colPax: 'Jumlah Peserta',
      colNoHotel: 'Paket Tanpa Hotel',
      colHotel3: 'Paket Hotel Bintang 3',
      colHotel4: 'Paket Hotel Bintang 4',
      row2pax: '2 Orang (Pasangan)',
      row3pax: '3 – 4 Orang (Keluarga Kecil)',
      row5pax: '5 – 6 Orang (Grup Sedang)',
      row7pax: '7 – 14+ Orang (Rombongan HiAce)',
      valConsult: 'Konsultasikan via WhatsApp',
      valRequest: 'Request Penawaran',
      valSpecialGroup: 'Tarif Spesial Rombongan',
      priceNote: '* Catatan: Data itinerary dan paket merupakan format preview/proposal resmi Travelogy. Silakan hubungi kami untuk mendapatkan penawaran resmi terperinci.',
      ctaQuestion: 'Ingin menyesuaikan tanggal atau rute paket ini? Diskusikan langsung dengan konsultan kami:',
      sidebarFrom: 'Konsultasi Paket',
      sidebarPerPax: 'Layanan Terencana & Nyaman',
      sidebarCar: 'Armada Privat Ber-AC',
      sidebarDriver: 'Supir Ramah Berpengalaman',
      sidebarTickets: 'Tiket Wisata & Koordinasi Rute',
      sidebarFastResp: 'Respon cepat via WhatsApp',
      relatedTag: 'Pilihan Lainnya',
      relatedTitle: 'Paket Rekomendasi Lainnya',
      viewAllPkgs: 'Lihat Semua Paket',
      btnAskTrip: 'Ask About This Trip'
    },
    bookingModal: {
      systemBadge: 'Travelogy Tour Organizer',
      titleNew: 'Inquiry Perjalanan',
      titleSuccess: 'Permintaan Diterima',
      nameLabel: 'Nama Lengkap *',
      namePlaceholder: 'Contoh: Bapak / Ibu Pratama',
      waLabel: 'Nomor WhatsApp Aktif *',
      waPlaceholder: 'Contoh: 081333992989',
      waHint: 'Untuk pengiriman detail itinerary dan konsultasi',
      emailLabel: 'Alamat Email (Opsional)',
      emailPlaceholder: 'nama@email.com',
      pkgLabel: 'Paket yang Diminati *',
      dateLabel: 'Rencana Tanggal Perjalanan *',
      paxLabel: 'Perkiraan Jumlah Peserta *',
      pickupLabel: 'Lokasi Penjemputan *',
      pickupPlaceholder: 'Contoh: Jember / Surabaya / Malang / Bandara',
      transportLabel: 'Pilihan Armada Transportasi',
      notesLabel: 'Catatan / Preferensi Khusus (Opsional)',
      notesPlaceholder: 'Contoh: Preferensi hotel bintang 3/4, rombongan keluarga, membawa anak kecil...',
      termsText: 'Dengan mengajukan inquiry, tim Travelogy akan menyiapkan rancangan perjalanan dan segera menghubungi Anda via WhatsApp.',
      btnSubmitting: 'Memproses...',
      btnSubmit: 'Kirim Permintaan ke WhatsApp Travelogy',
      successTitle: 'Inquiry Berhasil Disiapkan!',
      successSubtitle: 'Terima kasih telah menghubungi PT. Travelogy Tour Organizer.',
      refLabel: 'Kode Inquiry',
      summaryPkg: 'Paket:',
      summaryDate: 'Tanggal:',
      summaryPax: 'Peserta:',
      summaryStatus: 'Status: Menghubungkan ke WhatsApp',
      followUpPrompt: 'Klik tombol di bawah untuk langsung terhubung dengan tim customer service Travelogy:',
      btnWaConfirm: 'Buka WhatsApp Travelogy Sekarang',
      btnClose: 'Kembali ke Website',
      errorName: 'Nama pemesan wajib diisi (minimal 2 karakter).',
      errorWa: 'Nomor WhatsApp tidak valid (format minimal 8 digit).',
      errorDate: 'Silakan pilih rencana tanggal perjalanan.',
      errorDatePast: 'Tanggal perjalanan tidak boleh di masa lampau.',
      errorPax: 'Jumlah peserta harus antara 1 sampai 100 orang.',
      errorGeneral: 'Terjadi kendala sistem. Silakan hubungi kami langsung via WhatsApp.'
    },
    concierge: {
      tag: 'Bantuan Perjalanan',
      bannerTitle: 'Butuh Bantuan Memilih Destinasi?',
      bannerDesc: 'Ceritakan rencana liburan Anda, tim Travelogy akan membantu merekomendasikan pilihan paket terbaik sesuai waktu dan preferensi Anda.',
      bannerBtn: 'Konsultasi Perjalanan',
      modalTag: 'Trip Assistant',
      modalTitle: 'Rekomendasi Perjalanan Travelogy',
      modalSubtitle: 'Pilih preferensi liburan Anda untuk melihat opsi yang tepat:',
      q1: '1. Berapa lama rencana durasi perjalanan Anda?',
      q1Opt1: '1 Hari (Trip Singkat)',
      q1Opt2: '2 - 3 Hari',
      q1Opt3: '4 Hari atau lebih',
      q2: '2. Apa tema perjalanan yang diinginkan?',
      q2Opt1: 'Petualangan Alam & Gunung (Bromo / Ijen)',
      q2Opt2: 'Pesona Budaya & Pantai (Bali / Jogja)',
      q2Opt3: 'Liburan Santai & Eksplorasi Lokal (Jember / Malang)',
      q3: '3. Berapa jumlah rombongan Anda?',
      q3Opt1: 'Solo / Berdua (1-2 Orang)',
      q3Opt2: 'Keluarga (3-6 Orang)',
      q3Opt3: 'Rombongan Kantor / Grup Besar (7+ Orang)',
      btnCalculate: 'Lihat Rekomendasi',
      recTag: 'Paket Rekomendasi Travelogy',
      btnViewPkg: 'Lihat Detail Paket',
      btnConsultWa: 'Konsultasi via WhatsApp'
    }
  },
  en: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      tourPackages: 'Tour Packages',
      dailyTrips: 'Daily Trips',
      transport: 'Transport',
      aboutUs: 'About',
      customTrip: 'Custom Trip',
      planYourTrip: 'Plan Your Trip',
      allPackages: 'View All Packages',
      chatWa: 'WhatsApp Chat'
    },
    hero: {
      badge: 'PT. Travelogy Tour Organizer • Jember',
      headline: 'Bringing Happiness in Every Journey',
      subline: 'Travel • Transport • Hotel • Event',
      description: 'Explore new destinations, create unforgettable moments, and let Travelogy take care of the journey.',
      ctaPrimary: 'Explore Our Trips',
      ctaSecondary: 'Plan Your Trip'
    },
    search: {
      catLabel: 'Select Category:',
      allCat: 'All Categories',
      destLabel: 'Select Destination:',
      allDest: 'All Destinations',
      durLabel: 'Select Duration:',
      allDur: 'All Durations',
      btnText: 'SEARCH TRIPS',
      catHoliday: 'Tour Packages',
      catPrivate: 'Private Trips',
      catHoneymoon: 'Honeymoon Trips',
      catDaily: 'Daily Trips',
      dur1Day: '1 Day (Daily Trip)',
      dur2D1N: '2 Days 1 Night',
      dur3D2N: '3 Days 2 Nights',
      dur4D3N: '4 Days 3 Nights',
      dur5D4N: '5 Days 4 Nights'
    },
    why: {
      title1: 'Why Travel With Travelogy?',
      title2: 'Our Commitment to Quality & Memorable Experiences',
      features: [
        {
          title: 'Personalized Journey',
          desc: 'Every trip can be customized to suit your unique needs, preferences, and holiday pace.'
        },
        {
          title: 'End-to-End Planning',
          desc: 'Comprehensive support from initial itinerary design, hotel booking, to full trip assistance.'
        },
        {
          title: 'Flexible Travel Solutions',
          desc: 'Integrated travel choices, quality vehicle fleets, partner accommodations, and event management.'
        },
        {
          title: 'Dedicated Support',
          desc: 'Direct, responsive, and friendly consultation with our experienced Travelogy team.'
        }
      ]
    },
    destinations: {
      tag: 'Popular Destinations',
      title: 'Where Will Your Journey Take You?',
      subtitle: 'Inspiration for your next adventure with Travelogy. From iconic volcanic peaks to serene coastal shores.',
      exploreBtn: 'Explore',
      previewNotice: '* All destinations below represent curated Travelogy preview data that can be tailored to your trip schedule.'
    },
    packages: {
      tag: 'Curated Catalog',
      title: 'Explore Our Journeys',
      subtitle: 'Thoughtfully planned travel packages for personal escapes, family holidays, and group retreats.',
      tabAll: 'All Packages',
      tabMulti: 'Multi-Day Trips',
      tabDaily: 'Daily Trips (1 Day)',
      tabAdventure: 'Adventure & Nature',
      tabCulture: 'Culture & Leisure',
      perPerson: 'Inquire via WhatsApp',
      viewDetail: 'View Details',
      consultWa: 'Chat WhatsApp',
      bestSellerBadge: 'FEATURED'
    },
    daily: {
      tag: 'One-Day Adventure',
      title: 'Daily Excursions',
      subtitle: 'Memorable full-day trips with clean vehicles and knowledgeable drivers.',
      bookNow: 'Inquire Trip',
      durationPrefix: 'Duration'
    },
    customTrip: {
      tag: 'Tailor-Made Journey',
      title: 'Your Trip, Your Way',
      subtitle: 'Have a destination in mind but need a trip designed around you? Tell us what you need and let our team build the journey.',
      desc: 'Share your travel ideas below, and our Travelogy team will design a custom itinerary crafted just for you.',
      nameLabel: 'Full Name',
      waLabel: 'Active WhatsApp Number',
      dateLabel: 'Estimated Travel Date',
      participantsLabel: 'Number of Guests',
      destLabel: 'Target Destination',
      tripTypeLabel: 'Trip Style',
      transportLabel: 'Transportation Need',
      hotelLabel: 'Accommodation Need',
      notesLabel: 'Special Requests or Notes',
      btnSubmit: 'Request Custom Trip'
    },
    transport: {
      tag: 'Fleet & Comfort',
      title: 'Travel With Comfort',
      subtitle: 'Professional transport services from Jember with well-maintained fleets, experienced drivers, and fair pricing.',
      askTransport: 'Ask About Transport'
    },
    moreServices: {
      tag: 'Additional Services',
      title: 'More Than Just A Trip',
      subtitle: 'Comprehensive travel, accommodation, and event planning solutions from PT. Travelogy Tour Organizer.',
      services: [
        {
          title: 'Travel & Tour',
          desc: 'End-to-end holiday packages, flexible schedules, attraction admissions, and friendly local guidance.',
          features: ['Personal & Group Tour Packages', 'Flexible & Well-Paced Itineraries', 'Friendly Local Guidance']
        },
        {
          title: 'Hotel',
          desc: 'Partner hotel, resort, and private villa bookings with transparent rates and guaranteed resting comfort.',
          features: ['Strategic Accommodation Options', 'Corporate & Group Rate Negotiation', '3-Star, 4-Star & Villa Resorts']
        },
        {
          title: 'Event Planning',
          desc: 'Professional event organizing for corporate gatherings, team outings, outbound training, and celebrations.',
          features: ['Corporate Gatherings & Outings', 'Outbound & Team Building Activities', 'Equipment Setup & Event Media']
        }
      ]
    },
    about: {
      tag: 'About Travelogy',
      title: 'About Travelogy',
      heading: 'Bringing Happiness in Every Journey',
      description1: 'Travelogy Tour Organizer is dedicated to helping customers enjoy travel with greater ease, comfort, and peace of mind. Headquartered in Jember, East Java, we strive to deliver memorable travel moments on every journey.',
      description2: 'By integrating Tours & Travel, premium Transportation, Hotel arrangements, and Event Planning, our team caters to personal escapes, family holidays, as well as institutional and corporate groups.',
      hqTitle: 'Headquarters',
      hqAddress: 'Jl. Mastrip No.71, Lingkungan Panji, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124',
      hoursTitle: 'Operating Hours',
      hoursValue: '09:00 - 13:00 WIB'
    },
    gallery: {
      tag: 'Captured Moments',
      title: 'Happiness in Every Step',
      subtitle: 'Inspiring snapshots from memorable journeys shared with Travelogy guests.'
    },
    testimonials: {
      tag: 'Trusted Service',
      title: 'Happy Stories with Travelogy',
      subtitle: 'Authentic feedback from guests who explored magnificent destinations with Travelogy.'
    },
    whatsapp: {
      bubble: 'Chat With Travelogy',
      defaultMsg: 'Hello Travelogy, I would like to inquire about your tour and travel services.'
    },
    footer: {
      tagline: 'Bringing Happiness in Every Journey',
      desc: 'PT. Travelogy Tour Organizer is an authorized tour & travel company based in Jember, East Java. Offering Tour Packages, Transport Rental, Hotel bookings, and Event Planning.',
      linksTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact Us',
      copyright: 'PT. Travelogy Tour Organizer. All rights reserved.'
    },
    buttons: {
      book: 'Plan Trip',
      bookNow: 'Book Now',
      detail: 'Detail',
      viewDetail: 'View Details',
      chatWa: 'Chat WhatsApp',
      chatWaLong: 'Chat via WhatsApp',
      submit: 'Send Request',
      resetFilter: 'Reset Filters'
    },
    packageDetail: {
      breadcrumbHome: 'Home',
      breadcrumbTour: 'Tour Packages',
      startingFrom: 'Estimated Price:',
      perPerson: 'Consult via WhatsApp',
      packageDescTitle: 'Package Overview',
      itineraryTitle: 'Travel Itinerary',
      facilitiesTitle: 'Facilities & Inclusions',
      inclusionsTitle: 'Included in Package:',
      exclusionsTitle: 'Not Included:',
      extraAddonsTitle: 'Optional Media & Documentation',
      priceTitle: 'Custom Quote & Group Size',
      priceSubtitle: 'Pricing tailored to participant count, hotel tier, and pickup location:',
      colPax: 'Participants',
      colNoHotel: 'Without Hotel',
      colHotel3: '3-Star Hotel',
      colHotel4: '4-Star Hotel',
      row2pax: '2 Guests (Couple)',
      row3pax: '3 – 4 Guests (Small Family)',
      row5pax: '5 – 6 Guests (Medium Group)',
      row7pax: '7 – 14+ Guests (Minibus / Group)',
      valConsult: 'Inquire via WhatsApp',
      valRequest: 'Request Quote',
      valSpecialGroup: 'Special Group Rate',
      priceNote: '* Note: Package and itinerary details represent official Travelogy preview/proposal formats. Contact our team for an exact, tailored quotation.',
      ctaQuestion: 'Want to customize travel dates or the itinerary route? Connect with our travel designers directly:',
      sidebarFrom: 'Package Inquiry',
      sidebarPerPax: 'Well-Paced & Comfortable Travel',
      sidebarCar: 'Air-Conditioned Private Transport',
      sidebarDriver: 'Knowledgeable Courteous Driver',
      sidebarTickets: 'Admission Tickets & Route Planning',
      sidebarFastResp: 'Prompt response via WhatsApp',
      relatedTag: 'Explore More',
      relatedTitle: 'Recommended Packages',
      viewAllPkgs: 'View All Packages',
      btnAskTrip: 'Ask About This Trip'
    },
    bookingModal: {
      systemBadge: 'Travelogy Tour Organizer',
      titleNew: 'Trip Inquiry',
      titleSuccess: 'Inquiry Received',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Amanda Putri',
      waLabel: 'Active WhatsApp Number *',
      waPlaceholder: 'e.g. +62 813-3399-2989',
      waHint: 'For itinerary consultation & confirmation',
      emailLabel: 'Email Address (Optional)',
      emailPlaceholder: 'name@example.com',
      pkgLabel: 'Selected Package *',
      dateLabel: 'Estimated Travel Date *',
      paxLabel: 'Estimated Participants *',
      pickupLabel: 'Pickup Location *',
      pickupPlaceholder: 'e.g. Jember / Surabaya / Malang / Airport',
      transportLabel: 'Preferred Vehicle Class',
      notesLabel: 'Special Requests / Notes (Optional)',
      notesPlaceholder: 'e.g. 3-star hotel preference, family trip with children...',
      termsText: 'By submitting this inquiry, the Travelogy team will prepare your personalized route proposal and contact you via WhatsApp.',
      btnSubmitting: 'Processing...',
      btnSubmit: 'Send Inquiry to Travelogy WhatsApp',
      successTitle: 'Inquiry Ready to Connect!',
      successSubtitle: 'Thank you for contacting PT. Travelogy Tour Organizer.',
      refLabel: 'Inquiry Reference',
      summaryPkg: 'Package:',
      summaryDate: 'Date:',
      summaryPax: 'Guests:',
      summaryStatus: 'Status: Connecting to WhatsApp',
      followUpPrompt: 'Click below to chat immediately with the Travelogy travel consultant:',
      btnWaConfirm: 'Open WhatsApp Chat Now',
      btnClose: 'Back to Website',
      errorName: 'Name is required (at least 2 characters).',
      errorWa: 'Invalid WhatsApp number (at least 8 digits).',
      errorDate: 'Please select a departure travel date.',
      errorDatePast: 'Travel date cannot be in the past.',
      errorPax: 'Number of participants must be between 1 and 100.',
      errorGeneral: 'A system issue occurred. Please contact us directly via WhatsApp.'
    },
    concierge: {
      tag: 'Trip Planning',
      bannerTitle: 'Need Guidance Choosing a Destination?',
      bannerDesc: 'Share your holiday expectations and our Travelogy team will recommend the optimal package for your schedule and budget.',
      bannerBtn: 'Consult Trip',
      modalTag: 'Trip Assistant',
      modalTitle: 'Travelogy Trip Recommendation',
      modalSubtitle: 'Select your preferences to find the best match:',
      q1: '1. What is your planned trip duration?',
      q1Opt1: '1 Day (Quick Escape)',
      q1Opt2: '2 - 3 Days',
      q1Opt3: '4 Days or more',
      q2: '2. What is your desired trip theme?',
      q2Opt1: 'Volcano & Nature Adventure (Bromo / Ijen)',
      q2Opt2: 'Culture & Scenic Coastlines (Bali / Jogja)',
      q2Opt3: 'Relaxed Highlands & Local Exploration (Jember / Malang)',
      q3: '3. How many people are traveling?',
      q3Opt1: 'Solo / Couple (1-2 People)',
      q3Opt2: 'Family (3-6 People)',
      q3Opt3: 'Corporate / Large Group (7+ People)',
      btnCalculate: 'Show Recommendation',
      recTag: 'Recommended Package',
      btnViewPkg: 'View Package Details',
      btnConsultWa: 'Inquire via WhatsApp'
    }
  }
};

export type Currency = 'IDR' | 'USD';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (idrAmount: number) => string;
  convertPriceString: (priceStr: string) => string;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'id',
  setLanguage: () => {},
  currency: 'IDR',
  setCurrency: () => {},
  formatPrice: (amount) => `Rp ${amount.toLocaleString('id-ID')}`,
  convertPriceString: (str) => str,
  t: translations.id
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');
  const [currency, setCurrencyState] = useState<Currency>('IDR');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('travelogy_lang') as Language | null;
      if (savedLang === 'id' || savedLang === 'en') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
      const savedCurr = localStorage.getItem('travelogy_currency') as Currency | null;
      if (savedCurr === 'IDR' || savedCurr === 'USD') {
        setCurrencyState(savedCurr);
      }
    } catch {
      // ignore SSR or storage exceptions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('travelogy_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    try {
      localStorage.setItem('travelogy_currency', curr);
    } catch {
      // ignore
    }
  };

  // Kurs standar: $1 USD = ~Rp 15.800
  const formatPrice = (idrAmount: number) => {
    if (currency === 'USD') {
      const usd = Math.round(idrAmount / 15800);
      return `$${usd} USD`;
    }
    return `Rp ${idrAmount.toLocaleString('id-ID')}`;
  };

  const convertPriceString = (priceStr: string) => {
    if (currency !== 'USD' || !priceStr) return priceStr;

    if (/(?:Rp\.?|IDR)/i.test(priceStr)) {
      return priceStr.replace(/(?:Rp\.?|IDR)\s*([\d.,]+)/gi, (match, priceDigits) => {
        const cleanNum = priceDigits.replace(/[^\d]/g, '');
        const idr = parseInt(cleanNum, 10);
        if (!idr || isNaN(idr)) return match;
        const usd = Math.round(idr / 15800);
        return `$${usd} USD`;
      });
    }

    if (/^[\d.,\s]+$/.test(priceStr.trim())) {
      const cleaned = priceStr.trim().replace(/[^\d]/g, '');
      const idr = parseInt(cleaned, 10);
      if (idr && !isNaN(idr) && idr > 1000) {
        const usd = Math.round(idr / 15800);
        return `$${usd} USD`;
      }
    }

    return priceStr;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        formatPrice,
        convertPriceString,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
