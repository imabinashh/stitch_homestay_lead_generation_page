"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQS } from "@/data/homestay";
import { Car, Zap, ChevronDown, ArrowUpRight } from "lucide-react";

export default function LocationAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="location" className="w-full py-20 lg:py-24 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 border-b border-[#E3DCD2]/40">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location Details & Map Card */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#8e4925] uppercase tracking-[0.15em]">
                Heritage Enclave
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191c1a] font-normal leading-tight">
                Quiet sanctuary within steps of the old port.
              </h2>
              <p className="text-[15px] text-[#54433c] leading-relaxed">
                Tucked inside quiet residential cobblestone lanes, completely sheltered from road commotion yet minutes from art cafes, spice markets, and the waterfront.
              </p>
            </div>

            {/* Stylized Map Card with Floating Location Pill */}
            <div className="w-full h-80 rounded-2xl border border-[#E3DCD2] relative overflow-hidden flex flex-col justify-end p-4 sm:p-6 shadow-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf5Z6MWNjwxrKjRAI6S257z0HupdkWtV-WWfYE4L1aS6fU9yW3bv2zEOwa4OEEswN8OJkrjUYjvXXlHCVZChh8dh4I3mw-GroSay7Unf4n9442cIMBk4MPXanOkC6Cb7t3DHIPgf3nYKWWEDQ6VDOlPQXl1KS9E8oiwWHwbak0of72zRFo8vSzJ5XBI3zgQ0AptIHBGomV98Aw6AdFCAXuimZ7-hHN3ryEOcUXcKgzxiTvE0VTW4kB"
                alt="Map overview of Fort Kochi heritage area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Address Pill */}
              <div className="relative bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-xl border border-[#E3DCD2] max-w-sm shadow-md">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8e4925] animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e4925]">
                    The Banyan Courtyard
                  </span>
                </div>
                <p className="text-xs text-[#191c1a] font-medium">
                  14 Old Fort Road, Heritage Quarter, Kerala 682001
                </p>
                <div className="mt-2.5">
                  <a
                    href="https://maps.google.com/?q=Fort+Kochi+Heritage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#2C4C3B] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Arrival Practicalities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] shadow-sm space-y-1">
                <span className="text-[11px] font-semibold text-[#2C4C3B] uppercase flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#8e4925]" /> Airport Transfer
                </span>
                <p className="text-xs text-[#54433c] leading-relaxed">
                  45 mins private AC electric car pickup arranged with your personal luggage tags.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] shadow-sm space-y-1">
                <span className="text-[11px] font-semibold text-[#2C4C3B] uppercase flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#8e4925]" /> Private Parking & EV
                </span>
                <p className="text-xs text-[#54433c] leading-relaxed">
                  Dedicated covered parking with 22kW EV charger 80 meters from our quiet lane.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Concierge FAQ Accordion */}
          <div id="faqs" className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#755635] uppercase tracking-[0.15em]">
                Common Inquiries
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191c1a] font-normal">
                Everything you need to plan your stay.
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-[#FAF8F5] border border-[#E3DCD2] rounded-xl overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 flex justify-between items-center text-left text-[15px] font-medium text-[#191c1a] hover:text-[#8e4925] focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8e4925] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-[13px] text-[#54433c] leading-relaxed border-t border-[#E3DCD2]/40 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
