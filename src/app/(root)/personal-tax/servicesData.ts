import { TService } from "@/types/TService";

export const services = [
  {
    title: "👤 Personal Tax (Self-Assessment)",
    align: "left" as const,
    items: [
      "UK based Chartered Tax Advisor and Chartered Accountant",
      "Preparation of your personal tax return",
      "Submission with HMRC on your behalf",
      "Review of tax reliefs, allowances and tax planning",
      "Assistance with late filing penalties and interest",
      "Liaison with HMRC on your behalf",
      "Tax payment reminders",
      "Tax year-end tax planners to help you maximise reliefs and allowances",
      "Clear and simple information requests",
      "Updates on tax changes that affect you",
    ],
    image: "/assets/personal-tax-include.png",
    imageTitle: "Tax Advisor",
    verifyLogo: "/icons/verifiedBlue.svg",
  },
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
