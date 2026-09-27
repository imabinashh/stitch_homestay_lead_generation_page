"use client";

import Image from "next/image";
import { Room } from "@/data/homestay";
import { MessageSquare, Check, Sparkles, Eye } from "lucide-react";

interface RoomGridProps {
  rooms: Room[];
  onSelectRoom: (room: Room) => void;
  onViewDetails: (room: Room) => void;
}

export default function RoomGrid({
  rooms,
  onSelectRoom,
  onViewDetails,
}: RoomGridProps) {
  return (
    <section id="suites" className="w-full py-20 lg:py-24 bg-[#F4F1EA] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1320px] mx-auto space-y-12">
        {/* Header with Direct Booking Value Proposition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-semibold text-[#8e4925] uppercase tracking-[0.15em]">
              Sanctuary Chambers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-normal">
              Distinctive rooms, personal sanctuaries.
            </h2>
            <p className="text-[15px] text-[#54433c]">
              Each suite features custom-milled reclaimed teak fixtures, hand-cast copper soaking tubs, and private verandah reading nooks.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C4C3B] bg-[#FAF8F5] px-4 py-2 rounded-full border border-[#E3DCD2] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#8e4925]" />
              <span>Direct Perk: Complimentary Breakfast, Laundry & Late Check-Out (2 PM)</span>
            </div>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#FAF8F5] border border-[#E3DCD2] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#8e4925] text-[#FAF8F5] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {room.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-0.5 rounded-full text-xs font-medium text-[#191c1a] border border-[#E3DCD2]">
                    {room.size}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#191c1a]">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#54433c] mt-1">
                      {room.tagline}
                    </p>
                  </div>

                  {/* Amenity Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-1 rounded-full bg-[#EDE8DE] text-[11px] font-medium text-[#2C4C3B] flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-[#8e4925]" />
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onViewDetails(room)}
                    className="text-xs font-semibold text-[#8e4925] hover:text-[#ac613b] flex items-center gap-1 pt-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architectural Details & Photos</span>
                  </button>
                </div>
              </div>

              {/* Pricing & Reservation Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 bg-[#F4F1EA]/70 rounded-xl p-3 flex items-center justify-between mb-4 border border-[#E3DCD2]/60">
                  <div>
                    <span className="text-xs text-[#87736b] line-through block">
                      OTA Rate: ${room.otaPrice}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-2xl font-bold text-[#191c1a]">
                        ${room.directPrice}
                      </span>
                      <span className="text-xs text-[#54433c]">/ night</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#8e4925] bg-[#ffdbcc] px-2.5 py-1 rounded-md">
                    Save ${room.savings} Direct
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="flex-1 py-3 px-4 text-center rounded-full bg-[#8e4925] text-[#FAF8F5] text-xs font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-sm"
                  >
                    Reserve Suite
                  </button>
                  <a
                    href={`https://wa.me/919400012890?text=${encodeURIComponent(
                      `Hello, I would like to inquire about reserving ${room.name} ($${room.directPrice}/night) at The Banyan Courtyard.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${room.name} via WhatsApp`}
                    className="p-3 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-sm"
                    title="Inquire via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
