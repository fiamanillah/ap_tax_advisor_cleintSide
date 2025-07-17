"use client";

import { TFeature } from "@/types/feature";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Check } from "lucide-react";
import { useRef } from "react";

interface FeatureSectionProps {
  data: TFeature["data"];
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div ref={sectionRef} className="section-inverted-radius">
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
      </div>
    </section>
  );
}
