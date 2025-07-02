import { cn } from "@/lib/utils";
import { TSubscriptionProps } from "@/types/SubscriptionProps";
import { AppButton } from "../Shared/AppButton";

export default function SubscriptionPlan({
  subscriptions,
}: TSubscriptionProps) {
  // Helper component for checkmark or dash
  const CheckOrDash = ({ value }: { value: boolean | null }) => {
    if (value === true) {
      return (
        <svg
          className="w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"></path>
        </svg>
      );
    } else if (value === false) {
      return <span className="text-gray-400 text-xl font-bold">-</span>;
    }
    return null;
  };

  return (
    <section>
      <div className="container mx-auto px-4 lg:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find the right fit for your business
          </h2>
          <p className="text-gray-600 text-lg">
            A one-off service for companies in their filing period or a
            subscription service for newly formed companies or those not in
            their filing period.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 text-gray-700 font-semibold text-lef gap-x-1">
            <div className="p-4"></div>{" "}
            {/* Empty cell for the feature column header */}
            <div className="p-4 text-center bg-[#A4F5D3]">One-off service</div>
            <div className="p-4 text-center bg-[#E6E6E6]">
              Subscription service
            </div>
          </div>

          {/* Table Body */}
          {subscriptions.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 text-gray-800 text-sm md:text-base gap-x-1`}>
              <div
                className={cn("p-4", {
                  "bg-[#E6E6E6]/20": index % 2 === 0,
                  "bg-[#E6E6E6]": index % 2 !== 0,
                })}>
                {row.feature}
              </div>
              <div
                className={cn(
                  "p-4 flex items-center justify-center bg-[#A4F5D3]/20",
                  {
                    "bg-[#A4F5D3]/20": index % 2 === 0,
                    "bg-[#A4F5D3]": index % 2 !== 0,
                  }
                )}>
                <CheckOrDash value={row.oneOff} />
              </div>
              <div
                className={cn("p-4 flex items-center justify-center", {
                  "bg-[#E6E6E6]/20": index % 2 === 0,
                  "bg-[#E6E6E6]": index % 2 !== 0,
                })}>
                <CheckOrDash value={row.subscription} />
              </div>
            </div>
          ))}

          {/* Table Footer - Buttons */}
          <div className="grid grid-cols-3 bg-white text-gray-800 text-sm md:text-base gap-x-1">
            <div className="p-4 font-medium bg-[#E6E6E6]/20">More details</div>
            <div className="p-4 flex items-center justify-center bg-[#A4F5D3]/20">
              <AppButton>Get started</AppButton>
            </div>
            <div className="p-4 flex items-center justify-center bg-[#E6E6E6]/20">
              <AppButton>Learn more</AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
