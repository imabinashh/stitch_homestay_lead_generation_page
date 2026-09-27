"use client";

import { useState } from "react";
import { Gift, CheckCircle2, Clock, Send, MessageSquare } from "lucide-react";

export default function LeadMagnet() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelWindow, setTravelWindow] = useState("Spring 2025 (March - May)");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate concierge lead dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="lead-magnet" className="w-full py-20 lg:py-24 bg-[#F4F1EA] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto bg-[#FAF8F5] border border-[#E3DCD2] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c4e8d1] text-[#2C4C3B] text-[11px] font-semibold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-[#2C4C3B]" />
              <span>2025 Seasonal Privilege</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#191c1a] font-normal leading-tight">
              Planning a retreat, sabbatical, or private gathering?
            </h2>

            <p className="text-[15px] text-[#54433c] leading-relaxed">
              Receive our curated <strong>2025 Heritage Seasonal Guide & a 20% Extended-Stay Voucher</strong> directly to your WhatsApp or inbox. No automated spam—just bespoke concierge assistance.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#54433c] pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2C4C3B]" />
                <span className="font-medium text-[#191c1a]">Direct Host Confirmation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2C4C3B]" />
                <span>Replies in under 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-5 bg-[#F4F1EA] border border-[#E3DCD2] p-6 sm:p-8 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#c4e8d1] text-[#2C4C3B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#191c1a]">
                  Voucher & Guide Reserved!
                </h3>
                <p className="text-xs text-[#54433c] leading-relaxed">
                  Thank you, <strong className="text-[#191c1a]">{fullName}</strong>. Your 20% extended-stay code is:
                </p>
                <div className="p-3 bg-[#FAF8F5] border border-dashed border-[#8e4925] rounded-xl text-center">
                  <span className="font-mono text-sm font-bold text-[#8e4925] tracking-widest">
                    COURTYARD20
                  </span>
                </div>
                <a
                  href={`https://wa.me/919400012890?text=${encodeURIComponent(
                    `Hello! I just requested the 2025 Heritage Guide & Voucher (Name: ${fullName}, Travel: ${travelWindow}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Concierge on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Sterling"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925] shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                    WhatsApp or Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834 or +91..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925] shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#755635] uppercase block mb-1">
                    Estimated Travel Window
                  </label>
                  <select
                    value={travelWindow}
                    onChange={(e) => setTravelWindow(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] focus:outline-none focus:border-[#8e4925] shadow-inner"
                  >
                    <option>Within the next 30 days</option>
                    <option>Spring 2025 (March - May)</option>
                    <option>Monsoon Sabbatical (June - August)</option>
                    <option>Winter 2025/2026</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-full bg-[#8e4925] text-[#FAF8F5] text-xs font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Dispatching..." : "Send Me The Guide & 20% Voucher"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
