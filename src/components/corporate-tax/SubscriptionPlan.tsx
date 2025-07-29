import SlideIn from "../animated/SlideIn";
import SectionInvert from "../Shared/SectionInvert";
import ComparisonTable from "../tax-advice/ComparisonTable";

export default function SubscriptionPlan() {
  return (
    <SlideIn section direction="right" className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-180 max-lg:px-2">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-muted-foreground border-muted mx-auto mb-6 w-fit border-b-2 text-center text-xl font-medium max-xl:mt-10 md:text-3xl lg:text-[40px]">
              Why Clients Choose AP Tax Advisors
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Not all accountants are created equal. While most are reactive and
              focused on historical data, we take a strategic, forward-thinking
              approach to tax, helping you protect wealth, extract profits
              efficiently, and plan for the future with clarity.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-lg:overflow-x-scroll">
            <ComparisonTable />
          </div>

          <p className="text-muted-foreground mx-auto mt-8 max-w-3xl text-center text-xs max-md:pb-5 sm:text-sm">
            Why settle for compliance when you can have clarity, confidence and
            tax done properly? With AP Tax Advisors, you don’t just stay
            compliant. You stay ahead. We combine technical expertise, strategic
            thinking, and clear communication to give you tax advice that’s
            smarter, sharper, and built entirely around you.
          </p>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
