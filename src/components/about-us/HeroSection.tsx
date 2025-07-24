import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import { AppButton } from "../Shared/AppButton";
export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="main-gradient mx-auto flex items-center justify-center rounded-4xl py-32">
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

            <AppButton className="mt-4">Get Started</AppButton>
          </SlideIn>

          {/* Image Section */}
          <SlideIn
            direction="right"
            className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
          >
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[520px] xl:w-[520px]">
              <Image
                src="/assets/about-hero.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 520px"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
