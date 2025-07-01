import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";

export const steps = [
  {
    id: 1,
    icon: "/icons/company.svg", // Placeholder for Q&A icon
    title: "Tell us about your company",
    description:
      "Answer a few questions about your company and then create an account to get started.",
  },
  {
    id: 2,
    icon: "/icons/service.svg", // Placeholder for Users icon
    title: "We’ll match you with our relevant service",
    description:
      "Based on your answers we’ll match you with the relevant service for your company and your own personal accredited accountant. Your accountant will be on hand whenever you need them.",
  },
  {
    id: 3,
    icon: "/icons/tax.svg", // Placeholder for Documents icon
    title: "We’ll file your company accounts and tax return for you!",
    description:
      "Provide some final information and documents. Your accountant will then prepare your year-end accounts and corporate tax return and submit them to Companies House and HMRC.",
  },
];

export const TaxAdviceServiceProps: TTaxAdviceServiceProps = {
  data: steps,
  sectionMainTitle: "How Our @Personal Tax service@ works",
};
