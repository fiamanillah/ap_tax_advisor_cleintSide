import { TService } from "@/types/TService";

export const services = [
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
