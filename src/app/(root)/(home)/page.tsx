import FeatureSection from "@/components/home/featureSection";
import HeroSection from "@/components/home/heroSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import OurApproach from "@/components/Shared/OurApproach";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import { delay } from "@/lib/utils";
import { FAQSectionProps } from "./faqdata";
import { featureData } from "./featureData";
import { OurApproachData } from "./ourApproachData";

export default async function Home() {
  // Simulate a delay to show the loading state
  await delay(1000); // Adjust the delay as needed

  return (
    <main>
      <HeroSection />
      <TestimonialSection />
      <OurApproach OurApproachData={OurApproachData} />
      <FeatureSection data={featureData} />
      {/* <SupportHighlights /> */}
      {/* <ServicesSection {...serviceSectionProps} /> */}
      <FAQSection {...FAQSectionProps} />
    </main>
  );
}
