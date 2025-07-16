// import { THeroSectionProps } from "@/types/HeroSectionProps";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <div className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              Bespoke tax advice to protect, grow and preserve your wealth
            </h2>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              We work closely with you to build a proactive tax strategy that
              aligns with your goals, ensures your affairs are structured
              efficiently, and helps you retain more of your wealth. From
              optimising your current position to planning for the long term,
              our advice is designed to support growth, protection, and smart
              succession... whatever your ambitions.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]">
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
              <Image
                src="/assets/tax-hero.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
