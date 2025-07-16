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
      {data.map((step, idx) => (
        <div
          key={step.id}
          className="group relative flex h-full w-full transition-transform duration-500 ease-in-out hover:rotate-y-180"
        >
          <span className="absolute top-5 left-5 text-white group-hover:rotate-y-180">
            /0{idx + 1}
          </span>
          <div className="inverted-radius bg-background">
            {/* Icon with concentric circles */}
            <div className="relative flex h-full flex-col items-center rounded-xl px-4 py-6 group-hover:hidden">
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
                {/* Title */}
                <h3 className="text-foreground mb-3 text-center text-xl font-semibold">
                  {step.title}
                </h3>
              </div>
            </div>

            <div className="bg-card hidden h-full rotate-y-180 flex-col items-start justify-end gap-3 rounded-xl p-6 text-center group-hover:flex">
              <h1 className="text-background text-lg font-medium">
                📝 Get in touch
              </h1>
              <p className="text-background text-start text-sm">
                Send us your query and we’ll get back to you within 24–48 hours
                to understand your needs and kick things off.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
