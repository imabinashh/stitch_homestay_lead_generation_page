import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Banyan Courtyard | 150-Year Heritage Homestay in Fort Heritage",
  description:
    "An artisanal sanctuary in historic Fort Heritage. Slow living, bioclimatic courtyards, 250 Mbps fiber nomad ateliers, and farm-to-table culinary mornings. Book direct for 15% off and complimentary courtyard breakfast.",
  keywords: [
    "Heritage Homestay",
    "Boutique Hotel",
    "Fort Heritage Accommodation",
    "Digital Nomad Homestay",
    "Kerala Heritage Stay",
    "Banyan Courtyard",
    "Romantic Getaway",
    "Slow Travel",
  ],
  openGraph: {
    title: "The Banyan Courtyard | Heritage Sanctuary Est. 1874",
    description:
      "Slow living in a 150-year-old courtyard. Book direct for exclusive rates, complimentary organic breakfast, and private heritage tours.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkPL3jxV_manSIJjbDsNTQElO7nobV99ZnDmx4SXjZgUTClLw4uTc4--e919MEGjxP2-w50ZahNrawRz-aETKHnKYezKYZCIdyAySM7dXcdWsCtEmcuUwLGcKQAwWyPbIYXkZJQLom0i0L4HNl6_7l1672sq4-M75pxQ42frcXzWTge4MwVZPiu2Iq0roc6l3hujQRnNWD5cEdNgKkP7wae-dfjn0AMr6PXDRBAa1KqhddO70AHLeh",
        width: 1200,
        height: 630,
        alt: "The Banyan Courtyard Heritage Homestay",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BedAndBreakfast",
  "name": "The Banyan Courtyard Heritage Homestay",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBkPL3jxV_manSIJjbDsNTQElO7nobV99ZnDmx4SXjZgUTClLw4uTc4--e919MEGjxP2-w50ZahNrawRz-aETKHnKYezKYZCIdyAySM7dXcdWsCtEmcuUwLGcKQAwWyPbIYXkZJQLom0i0L4HNl6_7l1672sq4-M75pxQ42frcXzWTge4MwVZPiu2Iq0roc6l3hujQRnNWD5cEdNgKkP7wae-dfjn0AMr6PXDRBAa1KqhddO70AHLeh",
  "@id": "https://thebanyancourtyard.com",
  "url": "https://thebanyancourtyard.com",
  "telephone": "+914842217890",
  "priceRange": "$140 - $210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 Old Fort Road, Heritage Quarter",
    "addressLocality": "Fort Kochi",
    "addressRegion": "Kerala",
    "postalCode": "682001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9658,
    "longitude": 76.2421
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.97",
    "reviewCount": "240"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "High-Speed Fiber Wi-Fi 250 Mbps",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Courtyard Breakfast Included",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Yoga Pavilion",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#191c1a]">
        {children}
      </body>
    </html>
  );
}
