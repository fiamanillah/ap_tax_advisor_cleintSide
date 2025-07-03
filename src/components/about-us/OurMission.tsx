import Image from "next/image";

export default function OurMission() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Image
            src="/assets/our-mission.png"
            alt="Our Mission"
            className="rounded-lg sm:rounded-xl w-full h-auto object-cover shadow-lg"
            width={600}
            height={400}
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
            To make tax simple, personal, and empowering. We provide trusted,
            tailored advice that helps individuals and businesses stay
            compliant, maximize their income, and plan for the future with
            confidence. Through expert guidance and proactive support, we turn
            tax from a burden into a tool for growth.
          </p>
        </div>
      </div>
    </section>
  );
}
