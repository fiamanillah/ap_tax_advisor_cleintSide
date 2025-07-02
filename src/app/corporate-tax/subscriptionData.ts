import { TSubscription, TSubscriptionProps } from "@/types/SubscriptionProps";

export const subscriptions: TSubscription[] = [
  {
    feature: "Get matched with a UK-based accredited accountant",
    oneOff: true,
    subscription: true,
  },
  {
    feature: "Year-end accounts prepared and submitted",
    oneOff: true,
    subscription: true,
  },
  {
    feature: "Corporate tax return sorted and filed",
    oneOff: true,
    subscription: true,
  },
  {
    feature: "Professional help claiming expenses and tax reliefs",
    oneOff: true,
    subscription: true,
  },
  {
    feature: "Kick-off call to discuss key tax considerations",
    oneOff: false,
    subscription: true,
  },
  {
    feature: "Ongoing support throughout the year",
    oneOff: false,
    subscription: true,
  },
  {
    feature: "A one-off fixed fee from £89+VAT",
    oneOff: true,
    subscription: false,
  },
  {
    feature: "£38+VAT/mo. for all business types",
    oneOff: false,
    subscription: true,
  },
];

export const subscriptionProps: TSubscriptionProps = {
  title: "Subscription Plans",
  description: [
    "A one-off service for companies in their filing period or a subscription service for newly formed companies or those not in their filing period.",
  ],
  subscriptions: subscriptions,
};
