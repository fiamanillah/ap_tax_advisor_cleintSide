import OurMission from "@/components/about-us/OurMission";
import OurValues from "@/components/about-us/OurValues";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import Hero from "@/components/Shared/Hero";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import { heroSectionProps } from "./heroData";
import { ourValueSectionProps } from "./ourValueData";

export default async function page() {
  return (
    <main>
      <Hero {...heroSectionProps} />
      <TestimonialSection />
      <OurMission />
      <OurValues {...ourValueSectionProps} />
      {/* <OurInSights /> */}
      <WhyChooseUs />
    </main>
  );
}
