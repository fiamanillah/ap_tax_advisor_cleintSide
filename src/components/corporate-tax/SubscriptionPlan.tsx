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
          className="h-5 w-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    } else if (value === false) {
      return <span className="text-xl font-bold text-gray-400">-</span>;
    }
    return null;
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="section-inverted-radius-reverse py-8">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-background mb-4 text-4xl font-medium">
              Find the right fit for your business
            </h2>
            <p className="text-muted-foreground text-sm">
              A one-off service for companies in their filing period or a
              subscription service for newly formed companies or those not in
              their filing period.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="w-full overflow-hidden">
            {/* Table Header */}
            <div className="text-lef grid grid-cols-3 gap-x-1 font-semibold text-gray-700">
              <div className="p-4"></div>{" "}
              {/* Empty cell for the feature column header */}
              <div className="bg-[#A4F5D3] p-4 text-center">
                One-off service
              </div>
              <div className="bg-[#E6E6E6] p-4 text-center">
                Subscription service
              </div>
            </div>

            {/* Table Body */}
            {subscriptions.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-x-1 text-sm text-gray-800 md:text-base`}
              >
                <div
                  className={cn("p-4", {
                    "bg-[#E6E6E6]/20": index % 2 === 0,
                    "bg-[#E6E6E6]": index % 2 !== 0,
                  })}
                >
                  {row.feature}
                </div>
                <div
                  className={cn(
                    "flex items-center justify-center bg-[#A4F5D3]/20 p-4",
                    {
                      "bg-[#A4F5D3]/20": index % 2 === 0,
                      "bg-[#A4F5D3]": index % 2 !== 0,
                    },
                  )}
                >
                  <CheckOrDash value={row.oneOff} />
                </div>
                <div
                  className={cn("flex items-center justify-center p-4", {
                    "bg-[#E6E6E6]/20": index % 2 === 0,
                    "bg-[#E6E6E6]": index % 2 !== 0,
                  })}
                >
                  <CheckOrDash value={row.subscription} />
                </div>
              </div>
            ))}

            {/* Table Footer - Buttons */}
            <div className="grid grid-cols-3 gap-x-1 bg-white text-sm text-gray-800 md:text-base">
              <div className="bg-[#E6E6E6]/20 p-4 font-medium">
                More details
              </div>
              <div className="flex items-center justify-center bg-[#A4F5D3]/20 p-4">
                <AppButton>Get started</AppButton>
              </div>
              <div className="flex items-center justify-center bg-[#E6E6E6]/20 p-4">
                <AppButton>Learn more</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
