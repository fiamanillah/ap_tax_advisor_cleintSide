import { FAQSection } from '@/components/home/FAQSection';
import HeroSection from '@/components/home/heroSection';
import OurApproach from '@/components/home/OurApproach';
import ServicesSection from '@/components/home/servicesSection';
import SupportHighlights from '@/components/home/SupportHighlights';
import Testimonials from '@/components/home/testimonial';
import { FAQSectionProps } from './faqdata';
import { OurApproachData } from './ourApproachData';

export default function Home() {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <OurApproach OurApproachData={OurApproachData} />
            <SupportHighlights />
            <ServicesSection />
            <FAQSection {...FAQSectionProps} />
        </>
    );
}
