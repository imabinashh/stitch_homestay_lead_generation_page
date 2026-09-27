import { REVIEWS } from "@/data/homestay";
import { Star, Award } from "lucide-react";

export default function Guestbook() {
  return (
    <section id="guestbook" className="w-full py-20 lg:py-24 bg-[#F4F1EA] px-4 sm:px-6 lg:px-8 border-b border-[#E3DCD2]/40">
      <div className="max-w-[1320px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-semibold text-[#2C4C3B] uppercase tracking-[0.15em]">
              Verified Reflections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-normal">
              Voices from the courtyard guestbook.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E3DCD2] shadow-sm">
            <Award className="w-4 h-4 text-[#8e4925]" />
            <span className="text-xs font-bold text-[#191c1a]">
              98.4% Net Promoter Score from 600+ Residencies
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF8F5] border border-[#E3DCD2] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#8e4925]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8e4925]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[14px] text-[#191c1a] italic leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#E3DCD2]/60">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-[#FAF8F5]"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#191c1a]">
                    {review.name}
                  </p>
                  <p className="text-[11px] text-[#54433c]">
                    {review.role} • {review.stay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
