import HeroSection from "@/components/about-us/HeroSection";
import OurMission from "@/components/about-us/OurMission";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import { FAQSection } from "@/components/Shared/FAQSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import { FAQSectionProps } from "./faqData";

export default async function page() {
  return (
    <main className="space-y-16 lg:space-y-32">
      <HeroSection />
      <TestimonialSection />
      <OurMission />
      {/* <OurValues {...ourValueSectionProps} /> */}
      {/* <OurInSights /> */}
      <FAQSection {...FAQSectionProps} />
      <WhyChooseUs />
    </main>
  );
}
