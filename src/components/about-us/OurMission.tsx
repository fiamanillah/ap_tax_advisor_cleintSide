import Image from "next/image";
import SlideIn from "../animated/SlideIn";

export default function OurMission() {
  return (
    <SlideIn section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="section-inverted-radius">
          <div className="mx-auto flex max-w-6xl items-center gap-20">
            <div className="order-2 md:order-1">
              <Image
                src="/assets/misson.png"
                alt="Our Mission"
                className="mx-auto h-auto max-w-[400px] object-cover"
                width={1280}
                height={720}
                loading="lazy"
              />
            </div>

            <div className="order-1 w-full text-center md:order-2 md:w-1/2 md:text-left">
              <h2 className="text-background mb-4 text-2xl leading-tight font-medium sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-[40px]">
                Our Mission
              </h2>
              <p className="text-muted-foreground mx-auto max-w-md text-sm leading-relaxed sm:text-base md:mx-0 md:max-w-none">
                To make tax simple, personal, and empowering. We provide
                trusted, tailored advice that helps individuals and businesses
                stay compliant, maximize their income, and plan for the future
                with confidence. Through expert guidance and proactive support,
                we turn tax from a burden into a tool for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideIn>
  );
}
