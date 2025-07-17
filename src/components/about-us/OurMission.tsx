import Image from "next/image";

export default function OurMission() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="section-inverted-radius flex w-full flex-col items-center justify-between gap-6 px-4 sm:gap-8 sm:px-6 md:flex-row md:gap-10 lg:gap-12 lg:px-8">
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <Image
              src="/assets/our-mission.png"
              alt="Our Mission"
              className="h-auto w-full rounded-lg object-cover shadow-lg sm:rounded-xl"
              width={600}
              height={400}
              loading="lazy"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 w-full text-center md:order-2 md:w-1/2 md:text-left">
            <h2 className="text-background mb-4 text-2xl leading-tight font-semibold sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-[40px]">
              Our Mission
            </h2>
            <p className="text-muted-foreground mx-auto max-w-md text-sm leading-relaxed sm:text-base md:mx-0 md:max-w-none">
              To make tax simple, personal, and empowering. We provide trusted,
              tailored advice that helps individuals and businesses stay
              compliant, maximize their income, and plan for the future with
              confidence. Through expert guidance and proactive support, we turn
              tax from a burden into a tool for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
