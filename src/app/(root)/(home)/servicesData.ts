import { TService } from "@/types/TService";

export const services = [
  {
    title: "👤 Personal Tax (Self-Assessment)",
    align: "left" as const,
    items: [
      "UK-based ACCA accredited accountant works on your taxes",
      "Full calculation of your tax bill for approval",
      "Filing with HMRC on your behalf",
      "Review of tax reliefs and tax planning opportunities",
      "Reviewing eligibility for expense claims",
      "Assistance with late filing penalties and interests",
      "Submitted overpayment relief claims",
      "Tax payment reminders",
      "Changes in the tax landscape that may impact you",
    ],
    image: "/assets/taxAdvisor.png",
    imageTitle: "Tax Advisor",
    verifyLogo: "/icons/verifiedBlue.svg",
  },
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
  {
    title: "📊 Tax Advice",
    align: "left" as const,
    items: [
      "Personal or business tax strategy review",
      "Guidance on structure; see broker vs. limited company",
      "Advice on future tax planning and liabilities",
      "Support with HMRC letters, queries, and disputes",
      "Recommendations tailored to your financial goals",
      "Ongoing updates on relevant tax law or changes",
    ],
    image: "/assets/customerSupport.png",
    imageTitle: "Customer Support",
    verifyLogo: "/icons/verifiedYellow.svg",
  },
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
