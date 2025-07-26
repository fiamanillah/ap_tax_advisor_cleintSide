import HeroSection from "@/components/home/heroSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";

export default async function Home() {
  return (
    <main className="space-y-16 lg:space-y-32">
      <HeroSection />
      <TestimonialSection />
      {/* <OurApproach OurApproachData={OurApproachData} /> */}
      {/* <FeatureSection data={featureData} /> */}
      {/* <SupportHighlights /> */}
      {/* <ServicesSection {...serviceSectionProps} /> */}
      {/* <FAQSection {...FAQSectionProps} /> */}
    </main>
  );
}
