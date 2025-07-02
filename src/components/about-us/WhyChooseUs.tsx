import ChooseCard from "./ChooseCard";

export default function WhyChooseUs() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <div className="max-w-md space-y-5 lg:space-y-8">
          <h2 className="text-lx lg:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="font-semibold">
            At AP Tax Advisor, we go beyond the numbers. Our mission is simple:
            make tax feel manageable, personal, and strategic — not just
            something you “get through.” Whether you&apos;re self-employed,
            running a company, or planning ahead, here&apos;s what makes our
            approach different:
          </p>
          <button className="bg-[#009900] text-white px-4 py-2 rounded-md hover:bg-[#007700] transition">
            Contact Us
          </button>
        </div>

        <div className="flex lg:justify-end max-md:mt-10">
          <div className="flex max-md:flex-col md:max-w-4xl">
            <div className="md:border-r border-gray-500 space-y-5 md:px-8">
              <div className="max-md:hidden h-32" />
              <ChooseCard
                title="Truly Personal Service"
                description="We take the time to understand your goals, not just your income. That means ongoing support, proactive reminders, and advice that actually fits your life or business."
                icon="/icons/personal-service.svg"
              />
              <ChooseCard
                title="Trust, Privacy & Security"
                description="Your financial information is handled with the highest level of confidentiality and care. We’re committed to keeping your data safe and your mind at ease"
                icon="/icons/privacy.svg"
              />
            </div>
            <div className="space-y-5 md:px-8">
              <ChooseCard
                title="Expert Advice That Works for You"
                description="Our team doesn’t just understand tax law — we apply it practically to save you time, money, and stress. You’ll always get clear, up-to-date guidance tailored to your situation. "
                icon="/icons/expert-advice.svg"
              />
              <ChooseCard
                title="Transparent & Honest Guidance"
                description="We believe in clarity from the start — no hidden costs, no guesswork, and no pressure. You’ll always know what we’re doing, why we’re doing it, and what it means for you. Our advice is open, practical, and always in your best interest."
                icon="/icons/guidance.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
