import { AppButton } from "../Shared/AppButton";
import ChooseCard from "./ChooseCard";

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
        <div className="max-w-md lg:max-w-2xl space-y-5 sm:space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800">
            Why Choose Us
          </h2>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            At AP Tax Advisor, we go beyond the numbers. Our mission is simple:
            make tax feel manageable, personal, and strategic — not just
            something you &quot;get through.&quot; Whether you&apos;re
            self-employed, running a company, or planning ahead, here&apos;s
            what makes our approach different:
          </p>
          <AppButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
            Contact Us
          </AppButton>
        </div>

        <div className="flex lg:justify-end max-md:mt-10 sm:mt-12 md:mt-16">
          <div className="flex max-md:flex-col md:max-w-4xl lg:max-w-5xl gap-6 sm:gap-8 md:gap-0">
            <div className="md:border-r border-gray-300 space-y-5 sm:space-y-6 lg:space-y-8 md:px-6 lg:px-8">
              <div className="max-md:hidden h-16 sm:h-20 md:h-24 lg:h-32" />
              <ChooseCard
                title="Truly Personal Service"
                description="We take the time to understand your goals, not just your income. That means ongoing support, proactive reminders, and advice that actually fits your life or business."
                icon="/icons/personal-service.svg"
              />
              <ChooseCard
                title="Trust, Privacy & Security"
                description="Your financial information is handled with the highest level of confidentiality and care. We're committed to keeping your data safe and your mind at ease."
                icon="/icons/privacy.svg"
              />
            </div>
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 md:px-6 lg:px-8">
              <ChooseCard
                title="Expert Advice That Works for You"
                description="Our team doesn't just understand tax law — we apply it practically to save you time, money, and stress. You'll always get clear, up-to-date guidance tailored to your situation."
                icon="/icons/expert-advice.svg"
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
    </section>
  );
}
