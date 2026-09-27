"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import StoryBento from "@/components/StoryBento";
import RoomGrid from "@/components/RoomGrid";
import Experiences from "@/components/Experiences";
import Guestbook from "@/components/Guestbook";
import LocationAndFaq from "@/components/LocationAndFaq";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import WhatsAppFloatingCTA from "@/components/WhatsAppFloatingCTA";
import MobileStickyBookingBar from "@/components/MobileStickyBookingBar";
import RoomDetailModal from "@/components/RoomDetailModal";
import BookingModal from "@/components/BookingModal";
import { ROOMS, Room } from "@/data/homestay";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [searchParams, setSearchParams] = useState<{
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: string;
  } | null>(null);

  const handleOpenBooking = () => {
    setSelectedRoom(null);
    setBookingModalOpen(true);
  };

  const handleSearch = (data: {
    checkIn: string;
    checkOut: string;
    suiteType: string;
    guests: string;
  }) => {
    setSearchParams(data);
    const matched = ROOMS.find((r) => r.name === data.suiteType) || null;
    setSelectedRoom(matched);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setBookingModalOpen(true);
  };

  const handleViewDetails = (room: Room) => {
    setDetailRoom(room);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#191c1a] selection:bg-[#8e4925]/20 selection:text-[#8e4925]">
      {/* Global Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Floating Booking Engine */}
        <BookingBar onSearch={handleSearch} />

        {/* The Story & Architectural Ethos (Bento Mosaic) */}
        <StoryBento />

        {/* Suites & Sanctuaries Showcase */}
        <RoomGrid
          rooms={ROOMS}
          onSelectRoom={handleSelectRoom}
          onViewDetails={handleViewDetails}
        />

        {/* Curated Experiences & Workcation */}
        <Experiences />

        {/* Social Proof & Guestbook */}
        <Guestbook />

        {/* Location Enclave, Map & FAQs */}
        <LocationAndFaq />

        {/* Seasonal Guide & 20% Voucher Lead Magnet */}
        <LeadMagnet />
      </main>

      {/* Global Footer with NAP and Trust Badges */}
      <Footer />

      {/* Floating Sticky Actions */}
      <WhatsAppFloatingCTA />
      <MobileStickyBookingBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Modals */}
      <RoomDetailModal
        room={detailRoom}
        onClose={() => setDetailRoom(null)}
        onBook={(room) => {
          setSelectedRoom(room);
          setBookingModalOpen(true);
        }}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoom={selectedRoom}
        searchData={searchParams}
      />
    </div>
  );
}
