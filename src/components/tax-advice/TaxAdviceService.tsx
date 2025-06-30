import Image from "next/image";

export default function TaxAdviceService() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {steps.map((step) => (
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

const steps = [
  {
    id: 1,
    icon: "/icons/qa.svg", // Placeholder for Q&A icon
    title: "Answer a few simple questions",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we’ll have everything we need to start preparing your tax return.",
  },
  {
    id: 2,
    icon: "/icons/accountant.svg", // Placeholder for Users icon
    title: "Get paired with a tax return accountant",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we’ll have everything we need to start preparing your tax return.",
  },
  {
    id: 3,
    icon: "/icons/assesment.svg", // Placeholder for Documents icon
    title: "We file your Self Assessment for you",
    description:
      "Once you’ve signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
];
