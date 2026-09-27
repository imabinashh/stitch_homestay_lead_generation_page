"use client";

import { Phone, ArrowUpRight } from "lucide-react";

interface MobileStickyBookingBarProps {
  onOpenBooking: () => void;
}

export default function MobileStickyBookingBar({
  onOpenBooking,
}: MobileStickyBookingBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-[#E3DCD2] p-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex items-center gap-3">
      <a
        href="tel:+914842217890"
        className="p-3 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] text-[#2C4C3B] hover:bg-[#2C4C3B] hover:text-[#FAF8F5] transition-colors flex items-center justify-center shrink-0 shadow-sm"
        aria-label="Call Concierge"
      >
        <Phone className="w-5 h-5" />
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 px-4 rounded-full bg-[#8e4925] text-[#FAF8F5] text-xs font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-1.5"
      >
        <span>Book Direct (Save 15%)</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
}
