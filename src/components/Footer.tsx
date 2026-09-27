"use client";

import { useState } from "react";
import { Star, Award, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F5] text-[#191c1a] pt-20 pb-16 border-t border-[#E3DCD2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Heritage Description (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8e4925] flex items-center justify-center text-[#FAF8F5]">
                <span className="font-serif text-sm font-bold">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-[#8e4925]">
                The Banyan Courtyard
              </span>
            </div>

            <p className="text-[14px] text-[#54433c] max-w-sm leading-relaxed">
              A 150-year-old preserved lime-wash courtyard sanctuary designed for intentional travelers, slow-wanderers, and restorative residencies.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EDE8DE] border border-[#E3DCD2]">
                <Star className="w-3.5 h-3.5 text-[#8e4925] fill-[#8e4925]" />
                <span className="text-[11px] font-semibold text-[#191c1a]">
                  4.97 • Google Verified
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EDE8DE] border border-[#E3DCD2]">
                <Award className="w-3.5 h-3.5 text-[#2C4C3B]" />
                <span className="text-[11px] font-semibold text-[#191c1a]">
                  Superhost • 6 Consecutive Yrs
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider">
              Sanctuary
            </span>
            <ul className="space-y-2 text-[13px] text-[#54433c]">
              <li>
                <a href="#the-story" className="hover:text-[#8e4925] transition-colors">
                  The Story & Atrium
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-[#8e4925] transition-colors">
                  Suites & Courtyard Rooms
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#8e4925] transition-colors">
                  Cultural Experiences
                </a>
              </li>
              <li>
                <a href="#nomad-hub" className="hover:text-[#8e4925] transition-colors">
                  Digital Nomad Atelier
                </a>
              </li>
              <li>
                <a href="#guestbook" className="hover:text-[#8e4925] transition-colors">
                  Guestbook Archives
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#8e4925] transition-colors">
                  Concierge FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Heritage NAP & Arrival (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider">
              Heritage NAP & Arrival
            </span>
            <div className="space-y-1.5 text-[13px] text-[#54433c]">
              <p className="text-[#191c1a] font-semibold">
                The Banyan Courtyard Residence
              </p>
              <p>14 Old Fort Road, Heritage Quarter, Fort Kochi, Kerala 682001</p>
              <p className="pt-1">
                <span className="text-[#191c1a] font-medium">Concierge Desk:</span>{" "}
                <a href="tel:+914842217890" className="hover:underline">
                  +91 (484) 221-7890
                </a>
              </p>
              <p>
                <span className="text-[#191c1a] font-medium">WhatsApp Direct:</span>{" "}
                <a
                  href="https://wa.me/919400012890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#2C4C3B] font-semibold"
                >
                  +91 94000 12890
                </a>
              </p>

              <div className="mt-3 p-3 rounded-xl bg-[#EDE8DE] border border-[#E3DCD2]">
                <span className="text-[10px] font-bold text-[#2C4C3B] uppercase tracking-wider block mb-1">
                  Local Access Note
                </span>
                <p className="text-xs text-[#54433c]">
                  Private cobblestone lane entrance. Complimentary vintage luggage cart transfer provided from South Parade Gate.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Courtyard Gazette (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold text-[#755635] uppercase tracking-wider">
              Courtyard Gazette
            </span>
            <p className="text-[13px] text-[#54433c] leading-relaxed">
              Receive curated seasonal retreat schedules, writer residency invitations, and courtyard notes.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#c4e8d1] border border-[#2C4C3B]/20 rounded-xl text-xs text-[#2C4C3B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! We honor your quietude. Zero spam.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your quiet email address"
                  required
                  className="w-full px-4 py-2.5 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] text-xs text-[#191c1a] placeholder:text-[#87736b] focus:outline-none focus:border-[#8e4925]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#2C4C3B] text-[#FAF8F5] text-xs font-semibold hover:bg-[#1f372a] transition-colors"
                >
                  Subscribe to Dispatches
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#87736b]">
              We honor your silence. Zero promotional noise.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Rights Bar */}
        <div className="pt-8 border-t border-[#E3DCD2] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#87736b]">
          <p>© 2025 The Banyan Courtyard. All architectural and heritage rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#location" className="hover:text-[#8e4925] transition-colors">
              Directions & Map
            </a>
            <a href="#suites" className="hover:text-[#8e4925] transition-colors">
              Direct Booking Guarantee
            </a>
            <a href="#" className="hover:text-[#8e4925] transition-colors">
              Quiet Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
