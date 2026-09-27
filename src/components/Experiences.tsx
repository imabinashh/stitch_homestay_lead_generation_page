import Image from "next/image";
import { EXPERIENCES } from "@/data/homestay";
import { Sparkles, Compass, Coffee } from "lucide-react";

export default function Experiences() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#2C4C3B]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#8e4925]" />;
      case "Coffee":
        return <Coffee className="w-5 h-5 text-[#755635]" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="experiences" className="w-full py-20 lg:py-24 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8 border-b border-[#E3DCD2]/40">
      <div className="max-w-[1320px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-semibold text-[#8e4925] uppercase tracking-[0.15em]">
            Slow Immersions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-normal">
            Designed for stillness and quiet focus.
          </h2>
          <p className="text-[15px] text-[#54433c]">
            Whether you are finishing a manuscript, running remote sprints, or taking time out from city acceleration.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#E3DCD2] rounded-2xl p-6 flex flex-col justify-between shadow-sm space-y-6 hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EDE8DE] flex items-center justify-center border border-[#E3DCD2]">
                  {getIcon(exp.icon)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#191c1a]">
                  {exp.title}
                </h3>
                <p className="text-[13px] text-[#54433c] leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="h-48 sm:h-52 rounded-xl overflow-hidden relative border border-[#E3DCD2]/60">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
