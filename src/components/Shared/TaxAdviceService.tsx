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
        "mx-auto grid grid-cols-1 gap-8 md:grid-cols-2",
        classNames,
        lg ? lgClasses[lg] : "lg:grid-cols-4",
        xl ? xlClasses[xl] : undefined,
      )}
    >
      {data.map((step) => (
        <div key={step.id} className="relative flex h-full w-full">
          <span className="absolute top-5 left-5 text-white">/02</span>
          <div className="inverted-radius bg-background relative flex h-full flex-col items-center rounded-xl p-6">
            {/* Icon with concentric circles */}
            <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
              <Image
                src={step.icon}
                alt={`Step ${step.id} icon`}
                width={1280}
                height={720}
                className="z-10 h-full w-full object-contain"
                unoptimized
              />
            </div>
            <div className="flex flex-col items-start">
              {/* Step Number */}
              <p className="mb-2 text-start text-sm font-semibold text-[#F1A141]">
                Step {step.id}
              </p>

              {/* Title */}
              <h3 className="mb-3 text-start text-xl font-semibold text-black">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-start text-sm leading-relaxed text-black">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
