import SubscriptionPlan from "@/components/corporate-tax/SubscriptionPlan";
import HeroSection from "@/components/home/heroSection";
import ServicesSection from "@/components/home/servicesSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import { delay } from "@/lib/utils";
import { FAQSectionProps } from "./faqdata";
import { newFormedProps } from "./newFormedData";
import { serviceSectionProps } from "./servicesData";
import { subscriptionProps } from "./subscriptionData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";

export default async function page() {
  await delay(1000);
  return (
    <main className="space-y-8">
      <HeroSection />
      <TestimonialSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      {/* <GetStarted
        title="Ready to file"
        description={["Let’s get your corporate tax return sorted today."]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      /> */}
      {/* <CompanyTaxReturn {...companyTaxReturnProps} /> */}
      <ConsultantSection buttonText="Book now" />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn {...newFormedProps} />
      <SubscriptionPlan {...subscriptionProps} />

      {/* <GetStarted
        title="Why choose AP Tax Advisor?"
        description={[
          "No matter how complicated it gets or why you need to do a return,it’ll cost £169.",
          "That includes VAT, last-minute changes and all the support you may need.",
        ]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      /> */}
    </main>
  );
}
