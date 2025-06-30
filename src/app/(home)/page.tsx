import HeaderSection from '@/components/home/headerSection';
import HeroSection from '@/components/home/heroSection';
import OurApproach from '@/components/home/OurApproach';
import SupportHighlights from '@/components/home/SupportHighlights';
import Testimonials from '@/components/home/testimonial';

export default function Home() {
    return (
        <>
            <HeaderSection />
            <HeroSection />
            <Testimonials />
            <OurApproach />
            <SupportHighlights />
        </>
    );
}
