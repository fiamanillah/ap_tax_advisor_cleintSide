import { FAQSection } from '@/components/home/FAQSection';
import HeroSection from '@/components/home/heroSection';
import OurApproach from '@/components/home/OurApproach';
import ServicesSection from '@/components/home/servicesSection';
import SupportHighlights from '@/components/home/SupportHighlights';
import Testimonials from '@/components/home/testimonial';

export default function Home() {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <OurApproach />
            <SupportHighlights />
            <ServicesSection />
            <FAQSection />
        </>
    );
}
