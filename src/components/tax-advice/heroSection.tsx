import { list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";
import { AppButton } from "../Shared/AppButton";
import Icon from "../Shared/Icon";
import TagCard from "../Shared/TagCard";
import SlideIn from "../animated/SlideIn";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="main-gradient rounded-2xl py-10 md:py-20 lg:rounded-4xl">
          <div className="mx-auto flex flex-col-reverse gap-10 max-xl:items-center max-md:px-10 max-sm:px-5 md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex-row 2xl:max-w-7xl">
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

                <ul className="text-primary-foreground grid items-start gap-y-4 md:grid-cols-2">
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
              <div className="relative h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[520px] xl:w-[520px]">
                <Image
                  src="/assets/tax-advice-hero.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-fill"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 520px"
                />

                {/* Floating Cards - Responsive positioning */}

                <TagCard
                  title="Childcare"
                  checked={true}
                  className="top-0 sm:top-0 sm:left-0"
                />

                <TagCard
                  title="Profit Extraction"
                  checked={false}
                  className="top-3 -right-5 md:top-10 md:right-5"
                />

                <TagCard
                  title="Pensions"
                  checked={false}
                  className="top-15 sm:-left-10 md:top-30 lg:top-40"
                />

                <TagCard
                  title="Trusts"
                  checked={true}
                  className="top-25 right-0 sm:-right-10 md:top-40 lg:top-60"
                />

                <TagCard
                  title="Tax Residency"
                  checked={true}
                  className="bottom-30 sm:bottom-25 sm:-left-10"
                />

                <TagCard
                  title="Property Incorporation"
                  checked={false}
                  className="right-0 bottom-15 sm:-right-10 md:-right-5 lg:bottom-12"
                />
                <TagCard
                  title="Legacy Planning"
                  checked={true}
                  className="-bottom-5 left-10 md:left-30"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
