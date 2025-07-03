import HeroSection from "@/components/home/heroSection";
import ServicesSection from "@/components/home/servicesSection";
import SupportHighlights from "@/components/home/SupportHighlights";
import { FAQSection } from "@/components/Shared/FAQSection";
import OurApproach from "@/components/Shared/OurApproach";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import { delay } from "@/lib/utils";
import { FAQSectionProps } from "./faqdata";
import { OurApproachData } from "./ourApproachData";
import { serviceSectionProps } from "./servicesData";

export default async function Home() {
  // Simulate a delay to show the loading state
  await delay(1000); // Adjust the delay as needed

  return (
    <main>
      <HeroSection />
      <TestimonialSection />
      <OurApproach OurApproachData={OurApproachData} />
      <SupportHighlights />
      <ServicesSection {...serviceSectionProps} />
      <FAQSection {...FAQSectionProps} />
    </main>
  );
}
