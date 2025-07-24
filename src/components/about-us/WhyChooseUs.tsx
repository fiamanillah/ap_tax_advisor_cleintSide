import SlideIn from "../animated/SlideIn";
import { AppButton } from "../Shared/AppButton";
import SectionInvert from "../Shared/SectionInvert";
import ChooseCard from "./ChooseCard";

export default function WhyChooseUs() {
  return (
    <SlideIn section>
      <div className="container mx-auto">
        <SectionInvert className="gradient-90">
          <div className="mx-auto max-w-7xl py-10">
            <div className="max-w-sm space-y-5 sm:space-y-6 lg:max-w-2xl lg:space-y-8">
              <h2 className="text-background mb-4 text-2xl leading-tight font-medium sm:mb-6 sm:text-3xl md:text-4xl lg:text-[40px]">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At AP Tax Advisor, we go beyond the numbers. Our mission is
                simple: make tax feel manageable, personal, and strategic — not
                just something you &quot;get through.&quot; Whether you&apos;re
                self-employed, running a company, or planning ahead, here&apos;s
                what makes our approach different:
              </p>
              <AppButton className="px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg">
                Contact Us
              </AppButton>
            </div>

            <div className="flex max-md:mt-10 sm:mt-12 md:mt-16 lg:justify-end">
              <div className="flex gap-6 max-md:flex-col sm:gap-8 md:max-w-4xl md:gap-0 lg:max-w-5xl">
                <div className="flex-1 space-y-5 border-gray-300 sm:space-y-6 md:border-r md:px-6 lg:space-y-8 lg:px-8">
                  <div className="h-16 max-md:hidden sm:h-20 md:h-24 lg:h-32" />
                  <ChooseCard
                    title="Truly Personal Service"
                    description="We take the time to understand your goals, not just your income. That means ongoing support, proactive reminders, and advice that actually fits your life or business."
                    icon="/icons/personal-service.svg"
                    className="border-b"
                  />
                  <ChooseCard
                    title="Trust, Privacy & Security"
                    description="Your financial information is handled with the highest level of confidentiality and care. We're committed to keeping your data safe and your mind at ease."
                    icon="/icons/privacy.svg"
                  />
                </div>
                <div className="flex-1 space-y-5 sm:space-y-6 md:px-6 lg:space-y-8 lg:px-8">
                  <ChooseCard
                    title="Expert Advice That Works for You"
                    description="Our team doesn't just understand tax law — we apply it practically to save you time, money, and stress. You'll always get clear, up-to-date guidance tailored to your situation."
                    icon="/icons/expert-advice.svg"
                    className="border-b"
                  />
                  <ChooseCard
                    title="Transparent & Honest Guidance"
                    description="We believe in clarity from the start — no hidden costs, no guesswork, and no pressure. You'll always know what we're doing, why we're doing it, and what it means for you. Our advice is open, practical, and always in your best interest."
                    icon="/icons/guidance.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
