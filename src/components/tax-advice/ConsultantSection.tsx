import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import { AppButton } from "../Shared/AppButton";
import SectionInvert from "../Shared/SectionInvert";

export default function ConsultantSection({
  buttonText = "Learn more",
}: {
  buttonText?: string;
}) {
  return (
    <SlideIn section direction="right" className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-180">
          <div className="mx-auto max-w-3xl pt-10 pb-6 max-lg:px-4 xl:max-w-5xl 2xl:max-w-7xl">
            <div className="flex flex-col-reverse items-center justify-between gap-8 md:gap-12 lg:flex-row lg:gap-20">
              {/* Left Section - Image */}
              <div className="order-2 flex w-full max-w-md items-center justify-center lg:order-1">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <Image
                    src="/assets/consultant.png"
                    alt="Team collaborating on business documents"
                    width={500}
                    height={350}
                    className="h-auto w-full rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="order-1 flex max-w-6xl flex-col items-center justify-center px-4 text-center lg:order-2 lg:items-start lg:px-0 lg:text-left">
                <h2 className="text-background mb-4 text-xl leading-tight font-medium sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
                  Ready to book your consultation
                </h2>
                <p className="text-muted-foreground max-w-xl text-sm sm:text-base md:mb-3 md:text-lg">
                  Start with a free, no-obligation enquiry ...we’ll assess your
                  needs and provide a bespoke fixed quote before anything
                  begins.
                </p>

                <AppButton className="mt-6">{buttonText}</AppButton>
              </div>
            </div>
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
