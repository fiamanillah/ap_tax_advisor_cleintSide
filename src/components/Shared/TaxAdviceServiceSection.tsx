import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";
import TaxAdviceService from "./TaxAdviceService";

export default function TaxAdviceServiceSection({
  data,
  sectionMainTitle,
}: TTaxAdviceServiceProps) {
  const titles = sectionMainTitle.split("@");

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center leading-tight">
          {titles[0]} <span className="text-yellow-500">{titles[1]}</span>
          {titles[2]}
        </h2>

        <TaxAdviceService data={data} lg={3} />
      </div>
    </section>
  );
}
