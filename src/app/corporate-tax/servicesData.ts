import { TService } from "@/types/TService";

export const services = [
  {
    title: "🏢 Corporate Accountant",
    align: "right" as const,
    items: [
      "Corporation tax return (CT600)",
      "Annual accounts",
      "Bookkeeping",
      "VAT",
      "Payroll",
      "Filing with HMRC and Companies House",
      "Advice on allowable expenses and profit extraction",
      "Support with VAT, payroll, and bookkeeping",
      "Confirmation statement filing",
      "Registered office service",
    ],
    image: "/assets/chartedAccountant.png",
    imageTitle: "Charted Accountant",
    verifyLogo: "/icons/verifiedGreen.svg",
  },
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
