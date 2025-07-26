import { list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import Accreditation from "../Shared/Accreditation";
import TagCard from "../Shared/TagCard";

export default function PersonalTaxHeroSection() {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="main-gradient rounded-2xl py-10 md:py-20 lg:rounded-4xl">
          <div className="mx-auto flex flex-col-reverse gap-10 max-xl:items-center max-md:px-10 max-sm:px-5 md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex-row 2xl:max-w-7xl">
            {/* Text Section */}
            <SlideIn className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
              <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
                We handle the numbers so you don&apos;t have to
              </h2>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                Whether you’re a high earner, landlord, freelancer, have
                overseas income or multiple income sources, we take the stress
                out of Self Assessment. Our process is simple, professional and
                designed to give you complete peace of mind no guesswork, no
                generic software, just a real tax expert handling your return.
              </p>

              <Accreditation list={list2} />
            </SlideIn>

            {/* Image Section */}
            <SlideIn
              direction="right"
              className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
            >
              <div className="relative h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[520px] xl:w-[520px]">
                <Image
                  src="/assets/personal-tax-hero.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-fill"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 520px"
                />

                {/* Floating Cards - Responsive positioning */}
                <TagCard
                  title="Tax 24/7 Advisor"
                  checked={true}
                  className="top-30 left-0"
                />

                <TagCard
                  title="Pensions"
                  checked={false}
                  className="top-15 right-0"
                />

                <TagCard
                  title="Reliefs"
                  checked={false}
                  className="bottom-10 left-0"
                />

                <TagCard
                  title="Tax Return"
                  checked={true}
                  className="right-0 bottom-20"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
