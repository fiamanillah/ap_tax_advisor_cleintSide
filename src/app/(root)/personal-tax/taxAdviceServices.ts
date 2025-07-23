import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";

export const steps = [
  {
    id: 1,
    icon: "/icons/qa.svg", // Placeholder for Q&A icon
    title: "Answer a few simple questions",
    cta: "Get started",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we'll have everything we need to start preparing your tax return.",
  },
  {
    id: 2,
    icon: "/icons/bookmeeting.svg", // Placeholder for Users icon
    title: "Book a meeting",
    cta: "Get started",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we'll have everything we need to start preparing your tax return.",
  },
  {
    id: 3,
    icon: "/icons/bookproposal.svg", // Placeholder for Documents icon
    title: "Receive your bespoke proposal",
    cta: "Get started",
    description:
      "Once you've signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
  {
    id: 4,
    icon: "/icons/delivery-report.svg", // Placeholder for Documents icon
    title: "We file your Self Assessment for you",
    cta: "Get started",
    description:
      "Once you've signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
  {
    id: 4,
    icon: "/icons/support-report.svg", // Placeholder for Documents icon
    title: "Post-report support",
    cta: "Get started",
    description:
      "Once you've signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
];

export const TaxAdviceServiceProps: TTaxAdviceServiceProps = {
  data: steps,
  sectionMainTitle: "How Our Personal Tax service works",
};
