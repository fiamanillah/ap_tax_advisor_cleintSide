import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import SectionInvert from "../Shared/SectionInvert";

export default function OurMission() {
  return (
    <SlideIn section direction="right" className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-90">
          <div className="mx-auto flex flex-col items-center gap-20 max-lg:px-5 xl:max-w-4xl xl:flex-row 2xl:max-w-6xl">
            <div>
              <Image
                src="/assets/misson.png"
                alt="Our Mission"
                className="mx-auto h-auto max-w-full object-cover sm:max-w-[400px]"
                width={1280}
                height={720}
                loading="lazy"
              />
            </div>

            <div className="w-full text-center md:text-left lg:w-1/2">
              <h2 className="text-background mb-4 text-2xl leading-tight font-medium sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-[40px]">
                Our Mission
              </h2>
              <p className="text-muted-foreground mx-auto text-sm leading-relaxed sm:text-base md:mx-0">
                To make tax simple, personal, and empowering. We provide
                trusted, tailored advice that helps individuals and businesses
                stay compliant, maximize their income, and plan for the future
                with confidence. Through expert guidance and proactive support,
                we turn tax from a burden into a tool for growth.
              </p>
            </div>
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
