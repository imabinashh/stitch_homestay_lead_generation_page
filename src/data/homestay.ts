export interface Room {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  size: string;
  otaPrice: number;
  directPrice: number;
  savings: number;
  image: string;
  alt: string;
  amenities: string[];
  description: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  stay: string;
  initials: string;
  color: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const ROOMS: Room[] = [
  {
    id: "banyan-master-suite",
    name: "The Banyan Master Suite",
    badge: "Most Requested",
    tagline: "Overlooking the ancient banyan tree courtyard canopy.",
    size: "52 sqm / 560 sqft",
    otaPrice: 210,
    directPrice: 178,
    savings: 32,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv5in4vhj7-RmQ5pOoJ1P1dYJ3q-rR20ucu_g3EjIiCh7MT6uqGlAYKt4MMuLKK8u5R9qh8-IAew4SCRsmhddaMslgO8NMdM5gH2JCOlpMav6b6bBFXo06r1tjhh6fIeKavt9WYp8jMevgLPOSvu5cew-UdZAtRNwJina6xYjkl5cE6AhGiijzoKWaiOaxYpvpwHps_q-folC3tss90-e9Bd-3f2uB0lyFBcbQZ8ZmR61HF0rz-EGY",
    alt: "Luxurious heritage bedroom suite featuring a four-poster king teakwood bed draped with sheer ivory linen",
    amenities: [
      "King Teak Bed",
      "Copper Soaking Tub",
      "Private Verandah",
      "250 Mbps Wi-Fi",
      "Courtyard Canopy View",
      "Organic Linen Sheets",
    ],
    description:
      "Our premier suite honors century-old timber craftsmanship with expansive verandah seating under the banyan canopy, a hand-cast copper tub, and deep acoustic tranquility.",
  },
  {
    id: "courtyard-verandah-room",
    name: "Courtyard Verandah Room",
    badge: "Courtyard Level",
    tagline: "Step directly from your private daybed into the herb garden.",
    size: "38 sqm / 410 sqft",
    otaPrice: 165,
    directPrice: 140,
    savings: 25,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8d5hxBamtVfBAofh_6Nrf6rhzl_Gz8mvBWYYEYTXU17bJJe7l87GIs31F6-rk_R6pXe_rNU-ddj6Zx4H1l-GDRGnQcwiuEtzdZNHhSvhXl-lV-j3OuKoQcsHmsS3KDPxLn_A5S7s8H1k9dFW5Of4VeTWpYIdEsLd1GCvFQ6fQoz6jf-Ys_eREp1QRfclMzUBvaYzLHiKAsP7fKo3fmzqyrFOpDXSWSVTbFTKPaCuiB_XYrmfZucY-",
    alt: "Serene bedroom opening onto a terracotta tiled verandah with rattan lounge chairs",
    amenities: [
      "Queen Four-Poster",
      "Outdoor Rainshower",
      "Direct Garden Access",
      "Writing Desk",
      "Passive Lime-Wash Cooling",
    ],
    description:
      "Positioned on the ground tier with direct access to the jasmine and medicinal herb courtyard. Features a secluded garden rain shower open to the coastal sky.",
  },
  {
    id: "writers-attic-loft",
    name: "The Writer’s Attic Loft",
    badge: "Nomad Favorite",
    tagline: "Top-floor quietude with pitched wooden beam ceilings & library.",
    size: "44 sqm / 475 sqft",
    otaPrice: 185,
    directPrice: 155,
    savings: 30,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOqFH5o1d2X5acJg21Bac_TVQYmp8Fybc4s2bQOo85QNLR3oFldTA5e44HHRNrQLGJoUyI-4dt-pOgV6lzbuSgcZaA5tBQUv9oa26kcJSiqK2VrYzAZ5PFZk20cc4ZVq0jeZbi8mpQV1baxWcI9dA-wpvk91k_Xj3ybmRQw8w8c2OB34r0KiDeBejk06mDGBRZity3FpRJaAg9ABL-tLH_37W2SINrwRuIek4k_Us_ctAJRhapfvVB",
    alt: "Intimate top-floor heritage attic bedroom with exposed sloped teak roof trusses and library corner",
    amenities: [
      "Solid Wood Atelier Desk",
      "Ethernet Port & Mesh Wi-Fi",
      "Skylight Reading Bed",
      "French Press Bar",
      "Curated Art Library",
    ],
    description:
      "Designed specifically for deep work, authorship, and sabbatical stays. High-angle pitched wooden ceiling rafters with sound-insulated privacy and dedicated fiber connectivity.",
  },
];

export const EXPERIENCES = [
  {
    title: "Ayurvedic Dawn Yoga & Pranayama",
    description:
      "Daily dawn sessions on our open-air wooden deck led by senior teachers. Breathwork followed by herbal decoctions made from courtyard garden basil and fresh ginger.",
    icon: "Sparkles",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIgxVArC2O9KjKZLPTN2Zo7lAXbxvTIhI8GNUIV_8YV-FYRorlyOonAxwfg585_M8IGKWim7sGqecmMU4-mCBLz3fZFZAAXuQkIK_1v6wN4I_ZeV7qfNPr8o4o5Oj3MIsEJ3afPuq9JDk4WVhbzZLxKtDfuV7JzmOqwQLX8Kc-KK_bihq5V3s2V5IiEzZXksUCLfWdUx_BiEmsAp7tz8jDhM5Q8oztOFJ7EqFaY8zSldexVsYxOzE7",
    alt: "Gentle morning yoga session on an outdoor wooden pavilion surrounded by tropical foliage",
  },
  {
    title: "Guided Twilight Heritage Walk",
    description:
      "Explore 500 years of Portuguese, Dutch, and British merchant architecture through secret alleyways with our resident historian, ending with sunset tea by the water.",
    icon: "Compass",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApYY5F2qQDfIkQlQQPe2Milk0puHDaeM_rD5_8-kPJnebGnFWCcX5EJFncam6hzj8K7MCZm6VFCV0NojcbWbv97CapnBPoMiBkdT_pE17obeE7FKImtT0ioNROKyJnOE9P9w5b23koLSqG_IpyqS7DkpbUpjIXjQZyl0N9NQJ5DmQptZ8JzaIQyoNRLtS8rYawYpf38SI4XydU8LH-tbPKC9fFuRwr7MK3lxKVT7Rg-YTMOAQNcphd",
    alt: "Dusk falling over historic colonial cobblestone alleyways with warm wrought iron streetlamps",
  },
  {
    title: "Artisanal Pour-Over & Remote Work Hub",
    description:
      "Single-origin shade-grown Arabica from the Western Ghats brewed to order. Access sound-insulated calling pods and silent garden seating anytime.",
    icon: "Coffee",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXuYieptXuHrV-r2qVRZ5nWWOmvB2Y5gXUdSmMMRU3SzsxKmX1Eu8UZUU4KPd_ObUJk_C-7WIySX203JWHSlRtNPQVSjDSex5zUjnsNlkds6obV4zYwdcWetLHJuU_hIIh-OBJyMdxazuFlL9Na1PN_H-UIBK5ncLZ5d5WoCQ72qVquSSJSnzcZrnr1Qvcp_YiBqAYnCWfrlTyVD95H22fMFBfwZLKfubEBbyCF58iDR2e03NnNS1f",
    alt: "A barista preparing an artisanal pour-over coffee with a goose-neck kettle over a ceramic dripper",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "anya-k",
    name: "Anya K.",
    role: "Tech Founder & Writer",
    stay: "Stayed 21 nights",
    initials: "AK",
    color: "#2C4C3B",
    rating: 5,
    content:
      "“I spent three weeks in the Writer’s Attic working on my product launch. The Wi-Fi never blinked once during London video calls, and taking my afternoon coffee under the banyan tree became my favorite ritual. Deeply restful.”",
  },
  {
    id: "david-sarah-m",
    name: "David & Sarah M.",
    role: "Couples Sabbatical, Melbourne",
    stay: "Stayed 6 nights",
    initials: "DS",
    color: "#8e4925",
    rating: 5,
    content:
      "“We celebrated our 10th anniversary in the Banyan Master Suite. The courtyard candle-lit dinner they arranged was straight out of an editorial dream. We canceled our hotel bookings in the city just to stay another two days.”",
  },
  {
    id: "marc-l",
    name: "Marc L.",
    role: "Architect, Paris",
    stay: "Stayed 9 nights",
    initials: "ML",
    color: "#755635",
    rating: 5,
    content:
      "“The preservation quality of this 1874 masonry is extraordinary. The lime plaster keeps the rooms astonishingly cool without noisy air compressors. The host arranged bicycle paths through historic alleys.”",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How reliable is the fiber internet for video calls and remote work?",
    answer:
      "We operate an enterprise 250 Mbps dedicated fiber line with a redundant cellular fallback and 100% battery backup. Wi-Fi 6 coverage extends seamlessly across every guest room, verandah, and central courtyard seating zone.",
  },
  {
    question: "Can we arrange romantic private courtyard dinners or special celebrations?",
    answer:
      "Yes, our kitchen accommodates intimate candle-lit 4-course heirloom dinners in the courtyard alcove with live classical instrumental music upon request. Please notify our concierge at least 48 hours ahead.",
  },
  {
    question: "What is your check-in policy for late-night flights?",
    answer:
      "We have a resident concierge team 24/7. Regardless of your arrival hour, warm herbal tea and quiet check-in escort to your air-conditioned suite is guaranteed.",
  },
  {
    question: "Why is booking direct 15% better than booking on major portals?",
    answer:
      "Because we do not pay third-party commission fees, we pass that saving directly to you, plus include complimentary daily courtyard breakfasts, late check-out privileges (2 PM), and private heritage walks.",
  },
  {
    question: "How safe is the area for walking at night?",
    answer:
      "The Fort Heritage enclave is one of the safest pedestrian-friendly heritage zones in the region, with ambient lantern-lit streets, regular security patrols, and welcoming neighborhood cafes within 2 minutes' stroll.",
  },
];
