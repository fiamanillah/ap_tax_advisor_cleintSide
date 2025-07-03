import { THowItWorksSectionProps } from "@/types/HowItWorks";

export default function HowItWorksSection({
  benefits,
}: THowItWorksSectionProps) {
  return (
    <section className="bg-[#CFEDC7] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
