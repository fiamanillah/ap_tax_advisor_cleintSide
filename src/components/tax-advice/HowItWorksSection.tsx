import { THowItWorksSectionProps } from "@/types/HowItWorks";

export default function HowItWorksSection({
  benefits,
}: THowItWorksSectionProps) {
  return (
    <section className="bg-[#CFEDC7]">
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <div className="flex flex-wrap justify-between items-center gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 text-center flex-1 min-w-xs space-y-3">
              <h3 className="font-semibold text-2xl">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
