import { MessageSquare } from "lucide-react";

export default function WhatsAppFloatingCTA() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Desktop Chat Bubble Prompt */}
      <div className="hidden lg:flex items-center px-4 py-2 rounded-full bg-[#FAF8F5] text-[#191c1a] border border-[#E3DCD2] shadow-[0_8px_32px_-4px_rgba(44,76,59,0.12)]">
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2.5 animate-pulse" />
        <span className="text-xs font-medium text-[#191c1a]">
          Have a question? We reply in &lt; 5 mins
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919400012890?text=Hello%20The%20Banyan%20Courtyard%2C%20I%20would%20like%20to%20inquire%20about%20availability%20and%20rates."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </aside>
  );
}
