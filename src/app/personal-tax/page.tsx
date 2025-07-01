import ServicesSection from "@/components/home/servicesSection";
import PersonalTaxHeroSection from "@/components/personal-tax/PersonalTaxHeroSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import GetStarted from "@/components/Shared/GetStarted";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";
import { FAQSectionProps } from "./faqdata";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";

export default function PersonalTaxPage() {
  return (
    <main>
      <PersonalTaxHeroSection />
      <TestimonialSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <GetStarted
        title="Ready to file"
        description={["Let’s get your corporate tax return sorted today."]}
        buttonText="Get Started"
      />
      <ServicesSection {...serviceSectionProps} />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn />
      <GetStarted
        title="Why choose AP Tax Advisor?"
        description={[
          "No matter how complicated it gets or why you need to do a return,it’ll cost £169.",
          "That includes VAT, last-minute changes and all the support you may need.",
        ]}
        buttonText="Get Started"
      />
    </main>
  );
}
