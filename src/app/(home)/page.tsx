import HeroSection from "@/components/home/heroSection";
import OurApproach from "@/components/home/OurApproach";
import SupportHighlights from "@/components/home/SupportHighlights";
import Testimonials from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <OurApproach />
      <SupportHighlights />
    </>
  );
}
