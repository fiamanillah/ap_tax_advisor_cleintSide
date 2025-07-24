import Image from "next/image";
import SlideIn from "../animated/SlideIn";
export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-3xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <SlideIn className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              Tax done differently — with <br /> clarity, care, and confidence.
            </h2>
            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              At AP Tax Advisors, we specialise in providing intelligent,
              personalised tax solutions for individuals, business owners,
              landlords, and internationally mobile clients. From routine
              compliance to high-level planning, our clients trust us to get it
              right and to get ahead of issues before they arise.
            </p>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              We don’t just file returns or respond to tax problems. We build
              personalised tax strategies that protect wealth, support growth,
              and create long-term peace of mind.
            </p>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              Founded by qualified professionals with Big Four and boutique
              experience, we bring deep technical expertise and real-world
              insight to every client relationship without ever losing our human
              touch. <br /> (set out our accreditations here)
            </p>
          </SlideIn>

          {/* Image Section */}
          <SlideIn
            direction="right"
            className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
          >
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
              <Image
                src="/assets/about-hero.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
