# 🌿 The Banyan Courtyard • Heritage Homestay Landing Page

> An artisanal digital storefront and high-conversion direct booking engine for a 150-year-old preserved courtyard sanctuary in historic Fort Heritage. Designed to drive direct guest bookings, reduce OTA commissions, and showcase authentic slow-living hospitality.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🏛️ Project Overview

**The Banyan Courtyard** is a boutique heritage residence originally founded in 1874 by spice merchants. This web application serves as the property's primary direct booking storefront, eliminating heavy third-party commissions (Airbnb/Booking.com) by offering transparent pricing advantages, direct booking perks, and instant WhatsApp concierge support.

### Target Personas
1. **The Cultural Slow-Traveler:** Seeking authenticity, architecture, tranquil courtyards, and local heritage walks.
2. **The Digital Nomad & Writer:** Requiring guaranteed 250 Mbps fiber internet, ergonomic atelier desks, and silent courtyard spaces.
3. **The Romantic Escapist:** Couples seeking private candle-lit dining, copper soaking tubs, and intimate verandas.

---

## ✨ Key Features & Conversion Architecture

- **Floating Architectural Booking Engine:**
  - Sticky hero date picker with check-in, check-out, suite selector, and guest counter.
  - Live availability and stay-duration calculations that pass parameters into reservation flows.
  - Micro trust indicators (4.97 Google Review score, 250 Mbps fiber proof, 48-hr free cancellation).

- **12-Column Architectural Bento Grid:**
  - **The Central Atrium:** 1874 history, passive bioclimatic cooling, and open-air lime-wash masonry.
  - **The Nomad Atelier:** Verified 250 Mbps mesh Wi-Fi with an interactive 99.9% uptime meter and battery inverter backup guarantee.
  - **Heirloom Flavors:** Farm-to-table breakfast included complimentary with all direct stays.
  - **Sustainability By Numbers:** Foundation year, 12 restored suites, 100% solar water heating, and zero single-use plastics.

- **Suites & Sanctuaries Showcase:**
  - *The Banyan Master Suite*, *Courtyard Verandah Room*, and *The Writer's Attic Loft*.
  - Real-time **OTA Rate vs. Direct Rate price strike-through** with clear savings badges (Save $25–$32/night).
  - Amenity badges (King Teak Bed, Copper Tub, Rainshower, Fiber Wi-Fi).
  - Instant WhatsApp inquiry button for each specific suite.

- **Interactive Modal Windows:**
  - **Room Detail Modal:** High-resolution architectural photography, complete room dimensions, and amenity checklist.
  - **Direct Reservation Modal:** Calculates stay nights, direct savings, courtesy hold, and generates a pre-filled WhatsApp confirmation message.

- **Curated Cultural Experiences:**
  - Ayurvedic dawn yoga & pranayama on open-air teak decks.
  - Guided twilight heritage walks through cobblestone alleyways with resident historians.
  - Artisanal pour-over coffee bar with single-origin shade-grown beans.

- **Social Proof & Verified Guestbook:**
  - Real-world traveler reflections with 5-star ratings and guest avatars.
  - **98.4% Net Promoter Score** badge from 600+ verified residencies.

- **Location Enclave & Concierge FAQs:**
  - Interactive stylized map preview with direct "Open in Google Maps" link.
  - Arrival practicalities: Airport transfers (45 mins AC electric car) & 22kW EV charging parking.
  - Smooth expandable concierge FAQ accordion answering Wi-Fi reliability, late check-in, and dining.

- **Seasonal Privilege Lead Magnet:**
  - High-converting capture form for the **2025 Seasonal Guide & 20% Extended-Stay Voucher** (`COURTYARD20`).
  - Real-time submission state with instant concierge WhatsApp connect.

- **Mobile-First Sticky Conversion Bar & Floating WhatsApp:**
  - Sticky bottom mobile bar with "Book Direct (Save 15%)" and click-to-call concierge.
  - Floating WhatsApp badge with live response indicator (`< 5 min reply`).

- **Technical Local SEO & Structured Data:**
  - Injected **JSON-LD Schema (`BedAndBreakfast` / `LocalBusiness`)** with geographic coordinates, aggregate star rating, phone numbers, and amenity specifications.

---

## 🎨 Design System: "Earthy Elegance"

Inspired by luxury architectural editorial print publications and natural sun-warmed materials:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Terracotta** (`primary`) | `#8e4925` | Courtyard brick, primary CTAs, pricing badges, and focused accents |
| **Deep Forest Moss** (`secondary`) | `#2C4C3B` | Foliage, brand signifiers, contextual badge fills, and structural frames |
| **Sunbaked Earth** (`tertiary`) | `#755635` | Warm metadata labels, icons, and heritage dividers |
| **Surface Sand** (`background`) | `#F4F1EA` | Natural linen canvas body background, avoiding harsh clinical whites |
| **Surface Card** (`surface-card`) | `#FAF8F5` | Elevated card containers with soft hairline borders (`#E3DCD2`) |
| **WhatsApp Green** | `#25D366` | Direct messaging CTA badges and live indicators |

### Typography
- **Headings & Editorial Titles:** `Playfair Display` (Classic serif conveying 150-year heritage and timeless tranquility).
- **Body & Controls:** `Plus Jakarta Sans` (Humanist geometric sans-serif for crystal-clear readability across all mobile and desktop screens).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server-side rendering & static generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** `next/font/google` (zero layout-shift self-hosted Google Fonts)
- **Image Optimization:** `next/image` (WebP/AVIF responsive image pipeline)

---

## 📂 Project Structure

```
the-banyan-courtyard/
├── public/
│   └── images/
│       └── hero-courtyard.jpg   # Ultra high-resolution local hero photography
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 theme tokens & warm shadows
│   │   ├── layout.tsx           # SEO metadata, fonts & LocalBusiness JSON-LD schema
│   │   └── page.tsx             # Master page assembler & modal state management
│   ├── components/
│   │   ├── Header.tsx           # Frosted navigation & mobile drawer
│   │   ├── Hero.tsx             # Editorial hero with heritage badge
│   │   ├── BookingBar.tsx       # Floating availability search engine
│   │   ├── StoryBento.tsx       # 12-col architectural bento grid
│   │   ├── RoomGrid.tsx         # Suites showcase with OTA vs Direct price comparison
│   │   ├── RoomDetailModal.tsx  # Architectural specs & amenity lightbox
│   │   ├── BookingModal.tsx     # Direct reservation calculator & courtesy hold
│   │   ├── Experiences.tsx      # Yoga, twilight walking tours & coffee atelier
│   │   ├── Guestbook.tsx        # Verified reviews & 98.4% NPS badge
│   │   ├── LocationAndFaq.tsx   # Location map, EV info & FAQ accordion
│   │   ├── LeadMagnet.tsx       # 20% seasonal voucher capture form
│   │   ├── WhatsAppFloatingCTA.tsx # Floating quick concierge badge
│   │   ├── MobileStickyBookingBar.tsx # Mobile sticky CTA bar
│   │   └── Footer.tsx           # Full NAP details, local directions & newsletter
│   └── data/
│       └── homestay.ts          # Central data source for suites, reviews, and FAQs
├── next.config.ts               # Remote image hosts & Next.js config
├── package.json
├── tsconfig.json
└── README.md
```
