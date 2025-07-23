import { cn } from "@/lib/utils";
import ApproachCard from "../home/ApproachCard";

type Step = {
  id: number;
  icon: string; // Path to the icon image
  title: string;
  description: string;
  cta?: string;
};

interface TaxAdviceServiceProps {
  data: Step[];
  classNames?: string;
  lg?: 1 | 2 | 3 | 4 | 5 | 6;
  xl?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function TaxAdviceService({ data }: TaxAdviceServiceProps) {
  // Create explicit class mappings for Tailwind to detect

  return (
    <>
      <div className={cn("flex items-center justify-center gap-10")}>
        {data.map((step, idx) => (
          <ApproachCard
            key={idx}
            title={step.title}
            icon={step.icon}
            description={step.description}
            index={idx}
            cta={step.cta} // Using title as the call to action
          />
        ))}
      </div>
    </>
  );
}
