"use client";

import { useState } from "react";
import { Room, ROOMS } from "@/data/homestay";
import { X, CheckCircle, Calendar, Bed, Users, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: Room | null;
  searchData?: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: string;
  } | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom,
  searchData,
}: BookingModalProps) {
  const [selectedSuite, setSelectedSuite] = useState(
    initialRoom?.name || searchData?.suiteType || ROOMS[0].name
  );
  const [checkIn, setCheckIn] = useState(
    searchData?.checkIn || new Date().toISOString().split("T")[0]
  );
  const [checkOut, setCheckOut] = useState(
    searchData?.checkOut ||
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );
  const [guests, setGuests] = useState(searchData?.guests || "2 Guests");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.name === selectedSuite) || ROOMS[0];

  // Calculate estimated nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = Math.max(
    1,
    Math.round(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    ) || 1
  );

  const directTotal = currentRoom.directPrice * nights;
  const otaTotal = currentRoom.otaPrice * nights;
  const totalSavings = currentRoom.savings * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#E3DCD2] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E3DCD2] flex items-center justify-between bg-[#F4F1EA]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8e4925]" />
            <h3 className="font-serif text-xl font-bold text-[#191c1a]">
              Direct Booking Privilege
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#54433c] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#c4e8d1] text-[#2C4C3B] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#191c1a]">
                Reservation Request Dispatched!
              </h4>
              <p className="text-xs text-[#54433c] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#191c1a]">{name}</strong>. We have placed a complimentary 24-hour courtesy hold on <strong>{selectedSuite}</strong> for your stay from <strong>{checkIn}</strong> to <strong>{checkOut}</strong>.
              </p>

              <div className="p-4 bg-[#F4F1EA] border border-[#E3DCD2] rounded-2xl text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-xs">
                  <span className="text-[#54433c]">Reservation Total ({nights} nights):</span>
                  <span className="font-bold text-[#191c1a]">${directTotal}</span>
                </div>
                <div className="flex justify-between text-xs text-[#8e4925] font-semibold">
                  <span>Direct Booking Savings:</span>
                  <span>-${totalSavings}</span>
                </div>
                <div className="text-[11px] text-[#2C4C3B] pt-1 border-t border-[#E3DCD2]">
                  ✓ Courtyard breakfast, late checkout (2 PM) & luggage assistance included.
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919400012890?text=${encodeURIComponent(
                    `Hello! I just submitted a direct booking request for ${selectedSuite} (${checkIn} to ${checkOut}, ${guests}, Guest: ${name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm Instantly via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] text-xs font-medium text-[#191c1a] hover:bg-[#EDE8DE]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Savings Highlight Banner */}
              <div className="p-3.5 rounded-2xl bg-[#EDE8DE] border border-[#E3DCD2] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#2C4C3B] font-semibold">
                  <Sparkles className="w-4 h-4 text-[#8e4925]" />
                  <span>Direct Guest Savings: ${totalSavings} off portal rates</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#87736b] line-through block text-[11px]">
                    OTA: ${otaTotal}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#191c1a]">
                    ${directTotal}
                  </span>
                </div>
              </div>

              {/* Reservation Dates & Suite Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#755635] uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8e4925]" /> Check-In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] focus:outline-none focus:border-[#8e4925]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#755635] uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8e4925]" /> Check-Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] focus:outline-none focus:border-[#8e4925]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-semibold text-[#755635] uppercase flex items-center gap-1">
                    <Bed className="w-3 h-3 text-[#8e4925]" /> Suite Choice
                  </label>
                  <select
                    value={selectedSuite}
                    onChange={(e) => setSelectedSuite(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] focus:outline-none focus:border-[#8e4925]"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} — ${r.directPrice}/night (Save ${r.savings})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-[#E3DCD2]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Sterling"
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@example.com"
                    required
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                    Special Inquiries (Optional)
                  </label>
                  <input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Late night flight arrival, anniversary setup, quiet desk..."
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925]"
                  />
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 text-[11px] text-[#54433c]">
                <ShieldCheck className="w-4 h-4 text-[#2C4C3B] shrink-0" />
                <span>Zero deposit required today • Free cancellation up to 48 hours before check-in</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-full bg-[#8e4925] text-[#FAF8F5] text-xs font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? "Holding Suite..." : `Lock In ${selectedSuite} ($${directTotal})`}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
