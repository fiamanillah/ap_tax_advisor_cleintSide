import Image from "next/image";
import { AppButton } from "../Shared/AppButton";

export default function PersonalTaxHeroSection() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <div className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              Personal tax returns - We handle the numbers. You stay in control.
            </h2>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              Whether you’re a high earner, landlord, freelancer, have overseas
              income or multiple income sources, we take the stress out of Self
              Assessment. Our process is simple, professional and designed to
              give you complete peace of mind - no guesswork, no generic
              software, just a real tax expert handling your return.
            </p>

            <AppButton>Get Started</AppButton>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0">
            <div>
              <Image
                src="/assets/personal-tax-hero.png"
                alt="Professional tax advisor support"
                className="object-cover"
                priority
                height={720}
                width={1080}
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
