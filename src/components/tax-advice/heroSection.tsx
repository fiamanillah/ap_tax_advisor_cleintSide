import { list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";
import { AppButton } from "../Shared/AppButton";
import Icon from "../Shared/Icon";
import TagCard from "../Shared/TagCard";
import SlideIn from "../animated/SlideIn";

export default function HeroSection() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="main-gradient rounded-4xl">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 py-32 sm:gap-10 lg:flex-row">
            {/* Text Section */}
            <SlideIn className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
              <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
                Protect, grow and preserve your wealth
              </h2>

              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                We work closely with you to build a proactive tax strategy that
                aligns with your goals, ensures your affairs are structured
                efficiently, and helps you retain more of your wealth. From
                optimising your current position to planning for the long term,
                our advice is designed to support growth, protection, and smart
                succession... whatever your ambitions.
              </p>

              <div className="max-w-2xl">
                <p className="text-primary-foreground border-primary-foreground mb-4 border-b-2 pb-2 text-sm leading-relaxed sm:text-base md:text-lg">
                  Accreditations
                </p>

                <ul className="text-primary-foreground grid grid-cols-2 items-start gap-y-4">
                  {list2.map(({ icon, text }, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <Icon className="h-5 w-5" src={icon} />
                      <span className="text-muted-foreground text-sm">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <AppButton className="mt-10">Get started</AppButton>
              </div>
            </SlideIn>

            {/* Image Section */}
            <SlideIn
              direction="right"
              className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
            >
              <div className="relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
                <Image
                  src="/assets/tax-advice-hero.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
                />
              </div>

              {/* Floating Cards - Responsive positioning */}

              <TagCard
                title="Childcare"
                checked={true}
                className="top-0 left-20"
              />

              <TagCard
                title="Profit Extraction"
                checked={false}
                className="top-0 right-20"
              />

              <TagCard
                title="Pensions"
                checked={false}
                className="top-30 left-0"
              />

              <TagCard
                title="Trusts"
                checked={true}
                className="top-45 right-10"
              />

              <TagCard
                title="Tax Residency"
                checked={true}
                className="bottom-10 left-10"
              />

              <TagCard
                title="Property Incorporation"
                checked={false}
                className="right-10 bottom-12 pb-5"
              />
              <TagCard
                title="Legacy Planning"
                checked={true}
                className="-bottom-10"
              />

              {/* Additional mobile-friendly floating elements */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 transform sm:-right-6 md:-right-8 lg:hidden">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400 sm:h-4 sm:w-4"></div>
              </div>
              <div className="absolute top-1/4 -left-4 sm:-left-6 md:-left-8 lg:hidden">
                <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 sm:h-3 sm:w-3"></div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
