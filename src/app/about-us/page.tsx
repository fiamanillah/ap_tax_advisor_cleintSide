import OurInSights from "@/components/about-us/OurInSights";
import OurMission from "@/components/about-us/OurMission";
import OurValues from "@/components/about-us/OurValues";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import Hero from "@/components/Shared/Hero";
import { heroSectionProps } from "./heroData";
import { ourValueSectionProps } from "./ourValueData";

export default function page() {
  return (
    <main>
      <Hero {...heroSectionProps} />
      <OurMission />
      <OurValues {...ourValueSectionProps} />
      <OurInSights />
      <WhyChooseUs />
    </main>
  );
}
