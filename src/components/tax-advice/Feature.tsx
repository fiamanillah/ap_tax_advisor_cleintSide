export default function Feature() {
  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="section-inverted-radius-reverse">
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-primary-foreground text-center text-2xl font-semibold">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground text-center text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
