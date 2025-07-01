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
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
