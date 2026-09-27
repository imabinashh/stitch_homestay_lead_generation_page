"use client";

import { useState } from "react";
import { Calendar, Bed, Users, ArrowRight, Star, Wifi, ShieldCheck } from "lucide-react";

interface BookingBarProps {
  onSearch: (data: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: string;
  }) => void;
}

export default function BookingBar({ onSearch }: BookingBarProps) {
  // Set default dates
  const today = new Date().toISOString().split("T")[0];
  const nextWeek = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(nextWeek);
  const [suiteType, setSuiteType] = useState("The Banyan Master Suite");
  const [guests, setGuests] = useState("2 Guests");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, suiteType, guests });
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 relative z-20">
      <div className="bg-[#FAF8F5]/95 backdrop-blur-xl rounded-2xl border border-[#E3DCD2] shadow-[0_16px_40px_-8px_rgba(44,76,59,0.09)] p-4 lg:p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 items-center"
        >
          {/* Check-In */}
          <div className="lg:col-span-3 bg-[#F4F1EA]/80 hover:bg-[#F4F1EA] transition-colors rounded-xl p-3 flex flex-col border border-[#E3DCD2]/60 focus-within:border-[#8e4925]">
            <label className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#8e4925]" /> Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-[14px] font-medium text-[#191c1a] focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="lg:col-span-3 bg-[#F4F1EA]/80 hover:bg-[#F4F1EA] transition-colors rounded-xl p-3 flex flex-col border border-[#E3DCD2]/60 focus-within:border-[#8e4925]">
            <label className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#8e4925]" /> Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-[14px] font-medium text-[#191c1a] focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Suite Type */}
          <div className="lg:col-span-3 bg-[#F4F1EA]/80 hover:bg-[#F4F1EA] transition-colors rounded-xl p-3 flex flex-col border border-[#E3DCD2]/60 focus-within:border-[#8e4925]">
            <label className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Bed className="w-3.5 h-3.5 text-[#8e4925]" /> Suite Choice
            </label>
            <select
              value={suiteType}
              onChange={(e) => setSuiteType(e.target.value)}
              className="bg-transparent text-[14px] font-medium text-[#191c1a] focus:outline-none cursor-pointer"
            >
              <option value="The Banyan Master Suite">The Banyan Master Suite ($178)</option>
              <option value="Courtyard Verandah Room">Courtyard Verandah Room ($140)</option>
              <option value="The Writer’s Attic Loft">The Writer’s Attic Loft ($155)</option>
            </select>
          </div>

          {/* Guests */}
          <div className="lg:col-span-1 bg-[#F4F1EA]/80 hover:bg-[#F4F1EA] transition-colors rounded-xl p-3 flex flex-col border border-[#E3DCD2]/60 focus-within:border-[#8e4925]">
            <label className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5 text-[#8e4925]" /> Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent text-[14px] font-medium text-[#191c1a] focus:outline-none cursor-pointer"
            >
              <option value="1 Guest">1</option>
              <option value="2 Guests">2</option>
              <option value="3 Guests">3</option>
              <option value="4+ Group">4+</option>
            </select>
          </div>

          {/* Primary CTA */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <button
              type="submit"
              className="w-full py-4 px-4 rounded-xl bg-[#8e4925] text-[#FAF8F5] text-[13px] font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group text-center"
            >
              <span>Check Rates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Trust Indicators Micro-Bar */}
        <div className="mt-4 pt-3 border-t border-[#E3DCD2]/60 flex flex-wrap items-center justify-between gap-3 text-xs text-[#54433c]">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#8e4925] fill-[#8e4925]" />
            <span className="font-semibold text-[#191c1a]">4.97 / 5.0</span> on Google Reviews (240+ verified stays)
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-4 h-4 text-[#2C4C3B]" />
            <span>Dedicated 250 Mbps Fiber • Battery-backed nomad hub</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2C4C3B]" />
            <span>Flexible Peace of Mind: Free cancellation up to 48 hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
