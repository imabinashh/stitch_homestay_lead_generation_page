import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F1EA]">
      {/* Background Image Container with Gradient Overlay */}
      <div className="relative w-full min-h-[580px] lg:h-[640px]">
        <Image
          src="/images/hero-courtyard.jpg"
          alt="An expansive sunlit 150-year-old heritage courtyard surrounded by weathered lime-wash walls, restored wooden colonnades, and central ancient banyan tree"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Soft Vignette & Editorial Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />

        {/* Hero Content */}
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 flex flex-col justify-end h-full pb-20 sm:pb-24">
          <div className="max-w-3xl space-y-4 text-left">
            {/* Heritage Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/15 backdrop-blur-md border border-[#FAF8F5]/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c7ebd4] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#c7ebd4]">
                Fort Heritage Precinct • Est. 1874
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.12]">
              Slow Living in a{" "}
              <span className="italic font-normal text-[#ffdbcc]">
                150-Year-Old
              </span>{" "}
              Courtyard.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#e7e9e5] max-w-2xl font-normal leading-relaxed">
              An artisanal sanctuary in the heart of historic Fort Heritage. Direct bookings enjoy complimentary seasonal courtyard breakfasts, high-speed fiber atelier access, and private twilight heritage walking tours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
