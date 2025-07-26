import SlideIn from "../animated/SlideIn";
import SectionInvert from "../Shared/SectionInvert";

export default function Feature() {
  return (
    <SlideIn section direction="right" className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-180">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:max-w-5xl 2xl:max-w-7xl 2xl:gap-32">
            {data.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-primary-foreground text-center text-2xl font-medium">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground text-center text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}

const data = [
  {
    title: "Bespoke tax advice",
    description:
      "No generic answers or tick-box advice. You'll get strategic, one-off advice that fits your situation and your goals.",
  },
  {
    title: "Clarity and confidence",
    description:
      "We help you understand the tax implications of your decisions, so you can move forward with peace of mind and no surprises.",
  },
  {
    title: "Bespoke price",
    description:
      "Every proposal is bespoke with a clear, fixed fee agreed before any work begins. No hourly rates. No unexpected bills.",
  },
];
