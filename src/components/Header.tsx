"use client";

import { useState } from "react";
import { MessageSquare, Phone, ArrowUpRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "The Story", href: "#the-story" },
    { name: "Suites & Villas", href: "#suites" },
    { name: "Experiences", href: "#experiences" },
    { name: "Nomad Hub", href: "#nomad-hub" },
    { name: "Guestbook", href: "#guestbook" },
    { name: "Location & Arrival", href: "#location" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E3DCD2]/60 shadow-[0_2px_12px_rgba(44,76,59,0.03)] transition-all">
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Heritage Tagline */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-[#8e4925] flex items-center justify-center text-[#FAF8F5] shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-serif text-lg font-bold">B</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg font-bold text-[#8e4925] tracking-tight leading-tight">
              The Banyan Courtyard
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2C4C3B]">
              Est. 1874 • Heritage Sanctuary
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-[#EDE8DE]/60 border border-[#E3DCD2]/40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#54433c] hover:text-[#191c1a] hover:bg-[#FAF8F5] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-[#2C4C3B]">
            <a
              href="https://wa.me/919400012890?text=Hello%20The%20Banyan%20Courtyard%2C%20I%20would%20like%20to%20inquire%20about%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-sm"
              title="Direct WhatsApp Inquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:+914842217890"
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] hover:bg-[#2C4C3B] hover:text-[#FAF8F5] hover:border-[#2C4C3B] transition-all shadow-sm"
              title="Direct Concierge Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenBooking}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#8e4925] text-[#FAF8F5] text-[13px] font-semibold hover:bg-[#ac613b] active:scale-[0.98] transition-all shadow-[0_4px_16px_-2px_rgba(142,73,37,0.3)]"
          >
            <span>Book Direct & Save 15%</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] text-[#191c1a] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E3DCD2] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-[15px] font-medium text-[#191c1a] hover:bg-[#EDE8DE] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#E3DCD2] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#8e4925] text-[#FAF8F5] text-center text-sm font-semibold shadow-md flex items-center justify-center gap-1"
            >
              <span>Book Direct & Save 15%</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <a
                href="https://wa.me/919400012890?text=Hello%20The%20Banyan%20Courtyard%2C%20I%20would%20like%20to%20inquire%20about%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-full bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+914842217890"
                className="flex-1 py-2.5 rounded-full bg-[#2C4C3B] text-white flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Concierge</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
