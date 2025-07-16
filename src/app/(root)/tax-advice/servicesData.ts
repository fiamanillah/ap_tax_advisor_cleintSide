import { TService } from "@/types/TService";

export const services = [
  {
    title: "📊 Tax Advice",
    align: "left" as const,
    items: [
      "Review of your current position and tax exposure",
      "Understanding your personal background facts and circumstances",
      "Consideration of your future objectives",
      "Strategising a plan to enhance your tax efficiency suited to your needs",
      "Quantifying the tax benefits of proposed tax planning",
      "Support with implementation of structures and liaison with, HMRC, Lawyers, IFA's, Accountants and Third Parties",
      "Ongoing updates on relevant tax changes",
    ],
    image: "/assets/customerSupport.png",
    imageTitle: "Human customer support",
    verifyLogo: "/icons/verifiedYellow.svg",
  },
];

export const serviceSectionProps: TService = {
  title: "What’s included",
  data: services,
};
