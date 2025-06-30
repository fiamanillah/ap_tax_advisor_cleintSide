import { cn } from "@/lib/utils";
import Image from "next/image";

type Step = {
  id: number;
  icon: string; // Path to the icon image
  title: string;
  description: string;
};

interface TaxAdviceServiceProps {
  data: Step[];
  classNames?: string;
  lg?: 1 | 2 | 3 | 4 | 5 | 6;
  xl?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function TaxAdviceService({
  data,
  classNames,
  lg,
  xl,
}: TaxAdviceServiceProps) {
  // Create explicit class mappings for Tailwind to detect
  const lgClasses = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  };

  const xlClasses = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto",
        classNames,
        lg ? lgClasses[lg] : "lg:grid-cols-4",
        xl ? xlClasses[xl] : undefined
      )}>
      {data.map((step) => (
        <div
          key={step.id}
          className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
          {/* Icon with concentric circles */}
          <div className="relative flex items-center justify-center w-48 h-48 mb-6">
            <Image
              src={step.icon}
              alt={`Step ${step.id} icon`}
              width={500}
              height={500}
              className="w-full h-full object-contain z-10"
              unoptimized
            />
          </div>
          <div className="flex flex-col items-start">
            {/* Step Number */}
            <p className="text-[#F1A141] text-sm font-semibold mb-2 text-start">
              Step {step.id}
            </p>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black mb-3 text-start">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-black text-sm leading-relaxed text-start">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
