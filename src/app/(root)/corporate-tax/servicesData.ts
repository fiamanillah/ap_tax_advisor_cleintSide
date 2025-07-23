import { TService } from "@/types/TService";

export const services = [
  {
    title: "🏢 Corporate Accountant",
    align: "left" as const,
    items: [
      "UK based Chartered Tax Advisor and Chartered Accountant",
      "Preparation and submission with HMRC and Companies house of: sub-indent: corporation tax return (CT600, accounts bookkeeping vat payroll confirmation statement",
      "Review of tax reliefs, allowances and tax planning",
      "Review of eligibility for expense claims",
      "Review of tax efficient profit extraction",
      "Clear and simple information requests",
      "Updates on tax changes that affect you",
    ],
    image: "/assets/corporate-tax-includes.png",
    imageTitle: "Charted Accountant",
    verifyLogo: "/icons/verifiedGreen.svg",
  },
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
