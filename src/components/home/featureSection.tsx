import { TFeature } from "@/types/feature";
import { Check } from "lucide-react";
import SlideIn from "../animated/SlideIn";
import SectionInvert from "../Shared/SectionInvert";

interface FeatureSectionProps {
  data: TFeature["data"];
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  return (
    <SlideIn section direction="right" className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-reverse-90">
          <div className="mx-auto max-w-7xl pt-5">
            <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
              {data.map((feature, idx) => (
                <div key={idx}>
                  <h2 className="text-primary-foreground text-lg font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {feature.features.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
