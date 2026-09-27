"use client";

import Image from "next/image";
import { Room } from "@/data/homestay";
import { X, Check, MessageSquare, ArrowRight } from "lucide-react";

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export default function RoomDetailModal({
  room,
  onClose,
  onBook,
}: RoomDetailModalProps) {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E3DCD2] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAF8F5]/80 backdrop-blur-md text-[#191c1a] hover:bg-[#FAF8F5] border border-[#E3DCD2] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full">
            <Image
              src={room.image}
              alt={room.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#8e4925] px-3 py-1 rounded-full">
                  {room.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                  {room.name}
                </h3>
              </div>
              <span className="text-xs text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                {room.size}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-[#8e4925] uppercase tracking-wider mb-1">
                Architectural Character
              </h4>
              <p className="text-[14px] text-[#54433c] leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div>
              <h4 className="text-xs font-semibold text-[#755635] uppercase tracking-wider mb-2.5">
                Included Room Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F4F1EA] border border-[#E3DCD2]/60 text-xs text-[#191c1a]"
                  >
                    <Check className="w-4 h-4 text-[#8e4925] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Advantage */}
            <div className="p-4 rounded-2xl bg-[#EDE8DE] border border-[#E3DCD2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#87736b] line-through block">
                  OTA Portal Rate: ${room.otaPrice}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-bold text-[#191c1a]">
                    ${room.directPrice}
                  </span>
                  <span className="text-xs text-[#54433c]">/ night (Save ${room.savings})</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onBook(room);
                  }}
                  className="flex-1 sm:flex-none py-3 px-6 rounded-full bg-[#8e4925] text-[#FAF8F5] text-xs font-semibold hover:bg-[#ac613b] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Reserve Direct</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/919400012890?text=${encodeURIComponent(
                    `Hello! I would like to inquire about reserving ${room.name} ($${room.directPrice}/night).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
