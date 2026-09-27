import Image from "next/image";
import { BookOpen, Wind, Wifi, BatteryCharging, Leaf, ArrowRight } from "lucide-react";

export default function StoryBento() {
  return (
    <section id="the-story" className="w-full py-20 lg:py-24 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 border-b border-[#E3DCD2]/40">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8e4925]">
              Architectural Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-normal leading-tight">
              Spaces steeped in memory, restored for unhurried moments.
            </h2>
          </div>
          <p className="text-[15px] text-[#54433c] max-w-sm leading-relaxed">
            We peel back 150 years of layered coastal colonial history to offer unvarnished teak, natural terracotta airflows, and deep reflective courtyards.
          </p>
        </div>

        {/* Bento Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Central Atrium (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E3DCD2] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm group">
            <div className="space-y-4 z-10 max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EDE8DE] text-[11px] font-semibold text-[#2C4C3B] uppercase tracking-wider">
                Lime-Wash & Antique Teak
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191c1a] font-normal">
                The Central Atrium: Where Time Stills
              </h3>
              <p className="text-[15px] text-[#54433c] leading-relaxed">
                Built by spice merchants in 1874, the quadrangle courtyard acts as a natural cooling chimney. Rainwater collects in the central granite urli, while overhead shade leaves a gentle golden hue throughout the day.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#191c1a]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#8e4925]" />
                  <span>Documented Heritage Structure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-[#2C4C3B]" />
                  <span>Passive Bioclimatic Airflow</span>
                </div>
              </div>
            </div>

            <div className="mt-6 relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#E3DCD2]/60">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX2o0f9b4xGy1rt9R8Pr7JytvHPQEYkTEXeqM6j9qF8tRmcj9GxEG2udvateVJ4Mfg9ETBI6nKml0ZhMkZtloQPb1vMrr2GutXx5WLNFg_COqlFAoZ95bOMOZfa6nnUsoskD5EaRc_NH6SCEcmB6wZtSb8Ln4tkayfU3VctOBP0nCIGGEXEycfjgQQ5Nv46BGwKjRBtboGqV2Uy-Xozw0tzswNAo4LdHPYVt2KSnpF2uzIbzkoOUUH"
                alt="Corridor overlooking open-air brick courtyard"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bento Card 2: Digital Nomad & Creative Retreat (5 Cols) */}
          <div
            id="nomad-hub"
            className="lg:col-span-5 bg-[#2C4C3B] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#c4e8d1] text-[#2C4C3B] text-[11px] font-semibold uppercase tracking-wider">
                  Work From Sanctuary
                </span>
                <span className="text-[11px] font-semibold bg-[#2d4d3c] px-3 py-1 rounded-full text-[#c7ebd4]">
                  Verified 250 Mbps
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                The Writer’s & Maker’s Atelier
              </h3>
              <p className="text-[14px] text-[#abcfb8] leading-relaxed">
                Quiet garden desks, uninterrupted dual-line fiber connections, ergonomic solid rosewood seats, and unlimited specialty pour-over brew bar.
              </p>
            </div>

            {/* Mesh Wi-Fi Progress Gauge */}
            <div className="my-5 bg-[#2d4d3c]/70 rounded-xl p-4 backdrop-blur-sm space-y-2 border border-[#496a57]/40">
              <div className="flex justify-between items-center text-xs">
                <span className="flex items-center gap-1.5 text-[#abcfb8]">
                  <Wifi className="w-3.5 h-3.5" /> Mesh Wi-Fi Reliability
                </span>
                <span className="font-bold text-[#c7ebd4]">99.9% Uptime</span>
              </div>
              <div className="w-full bg-[#191c1a]/40 h-2 rounded-full overflow-hidden">
                <div className="bg-[#c7ebd4] h-full w-[99.9%]" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#abcfb8] pt-1">
                <BatteryCharging className="w-3 h-3 text-[#c7ebd4]" />
                <span>Full battery inverter back-up for sustained work days</span>
              </div>
            </div>

            <div className="relative h-44 rounded-xl overflow-hidden border border-[#496a57]/40">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAah4Uikw2oHKDJDYGZ7FiNCVwkMjWQr9LJh11d1NZCJwfm6wjBEV9YApK6B-norJ3j2rO7U8MMEsZWe12DEbaOSckdAtN8eWYUPjC8xiwhP97SnhdjS7Zr7O77L8GTVjzWsjNRyO7RTxbJrYhCU7J5-_aAfqE0gck2owhI6vGZ8I4MvA0jQLzHqj_uwTYdQk2N34FET7TJCEQ7stkaGphMmpAvmYgOTYu6dSnOcGLsvV9W2R3npZuE"
                alt="Cozy sunlit work desk made of aged dark teak wood overlooking tranquil foliage"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Bento Card 3: Farm-to-Table Gastronomy (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E3DCD2] rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center shadow-sm">
            <div className="w-full sm:w-1/2 h-52 rounded-xl overflow-hidden shrink-0 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXNhpl6_NXh3EEeoqEt4enxFPJzs0cbykRky4W37ytGIlSVpGj9arBT23GkhVJCxzwSLuCxysLSkWY8heLZp5Z4xBSxHkthAOdxWuRjXqzUSpZK9W1dOQqAtrNxe56iXLvraGGtG_KZlRoI0SlbyxwfmXH7-50iQfOdzU7CFoXTjWsuSdGdAEjDL0-wbVp3g7lJphdlXe8bbDp2xqbHjOyYjaAQiyTIRLS_6pYs0Ff_3iRgdK_TeI9"
                alt="Artisanal farm-to-table breakfast served on banana leaf and brass plates"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider">
                Heirloom Flavors
              </span>
              <h4 className="font-serif text-xl text-[#191c1a] font-semibold">
                Courtyard Morning Feasts
              </h4>
              <p className="text-[13px] text-[#54433c] leading-relaxed">
                Slow-cooked recipes passed through three generations. Fresh mangoes from our orchard, hand-pressed coconut milk, and ground spices.
              </p>
              <a
                href="#suites"
                className="inline-flex items-center gap-1 pt-1 text-[13px] font-semibold text-[#8e4925] hover:underline"
              >
                <span>Included complimentary with all direct stays</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: Heritage & Sustainability Numbers (6 Cols) */}
          <div className="lg:col-span-6 bg-[#EDE8DE] border border-[#E3DCD2] rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center py-2">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#8e4925] block font-bold">
                  1874
                </span>
                <span className="text-[11px] font-semibold text-[#54433c] uppercase tracking-wider">
                  Foundation Year
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#2C4C3B] block font-bold">
                  12
                </span>
                <span className="text-[11px] font-semibold text-[#54433c] uppercase tracking-wider">
                  Restored Suites
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#755635] block font-bold">
                  100%
                </span>
                <span className="text-[11px] font-semibold text-[#54433c] uppercase tracking-wider">
                  Solar Water
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E3DCD2] bg-[#FAF8F5] rounded-xl p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#2C4C3B] shrink-0" />
                <p className="text-xs text-[#191c1a]">
                  Zero single-use plastics • Heritage rainwater harvesting in active service.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#2C4C3B] px-2.5 py-1 bg-[#c4e8d1] rounded-full shrink-0">
                Eco-Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
