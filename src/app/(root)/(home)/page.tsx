import FeatureSection from "@/components/home/featureSection";
import HeroSection from "@/components/home/heroSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import OurApproach from "@/components/Shared/OurApproach";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import { FAQSectionProps } from "./faqdata";
import { featureData } from "./featureData";
import { OurApproachData } from "./ourApproachData";

export default async function Home() {
  return (
    <main className="space-y-32">
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
