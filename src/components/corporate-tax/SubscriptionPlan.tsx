import SlideIn from "../animated/SlideIn";
import ComparisonTable from "../tax-advice/ComparisonTable";

export default function SubscriptionPlan() {
  return (
    <SlideIn section direction="right">
      <div className="container mx-auto">
        <div className="section-inverted-radius-reverse py-8">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-background mb-4 text-4xl font-medium">
              Why Clients Choose AP Tax Advisors
            </h2>
            <p className="text-muted-foreground text-sm">
              Not all accountants are created equal. While most are reactive and
              focused on historical data, we take a strategic, forward-thinking
              approach to tax, helping you protect wealth, extract profits
              efficiently, and plan for the future with clarity.
            </p>
          </div>

          {/* Comparison Table */}
          <ComparisonTable />

          <p className="text-muted-foreground mx-auto mt-8 max-w-3xl text-center text-sm">
            Why settle for compliance when you can have clarity, confidence and
            tax done properly? With AP Tax Advisors, you don’t just stay
            compliant. You stay ahead. We combine technical expertise, strategic
            thinking, and clear communication to give you tax advice that’s
            smarter, sharper, and built entirely around you.
          </p>
        </div>
      </div>
    </SlideIn>
  );
}
