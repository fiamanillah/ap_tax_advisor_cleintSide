import { TSubscriptionProps } from "@/types/SubscriptionProps";

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
        <div className="w-full max-w-4xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 text-gray-700 font-semibold text-lef">
            <div className="p-4"></div>{" "}
            {/* Empty cell for the feature column header */}
            <div className="p-4 text-center">One-off service</div>
            <div className="p-4 text-center">Subscription service</div>
          </div>

          {/* Table Body */}
          {subscriptions.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 text-gray-800 text-sm md:text-base ${
                index % 2 === 0 ? "bg-white" : "bg-green-50"
              } border-b border-gray-100 last:border-b-0`}>
              <div className="p-4 font-medium">{row.feature}</div>
              <div className="p-4 flex items-center justify-center">
                <CheckOrDash value={row.oneOff} />
              </div>
              <div className="p-4 flex items-center justify-center">
                <CheckOrDash value={row.subscription} />
              </div>
            </div>
          ))}

          {/* Table Footer - Buttons */}
          <div className="grid grid-cols-3 bg-white text-gray-800 text-sm md:text-base border-t border-gray-200">
            <div className="p-4 font-medium">More details</div>
            <div className="p-4 flex items-center justify-center">
              <button className="px-6 py-2 border-2 border-black text-black font-semibold rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200 w-full max-w-[150px]">
                Get started
              </button>
            </div>
            <div className="p-4 flex items-center justify-center">
              <button className="px-6 py-2 border-2 border-black text-black font-semibold rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200 w-full max-w-[150px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
