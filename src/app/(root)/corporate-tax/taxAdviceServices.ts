import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";

export const steps = [
  {
    id: 1,
    icon: "/icons/qa.svg", // Placeholder for Q&A icon
    title: "Answer a few simple questions",
    cta: "Get started",
    description:
      "send us a quick summary of your tax situation and we'll respond within 24-48 hours and confirm whether its something we can help with.",
  },
  {
    id: 2,
    icon: "/icons/bookmeeting.svg", // Placeholder for Users icon
    title: "Book a meeting",
    cta: "Get started",
    description:
      "send us a quick summary of your tax situation and we'll respond within 24-48 hours and confirm whether its something we can help with.",
  },
  {
    id: 3,
    icon: "/icons/bookproposal.svg", // Placeholder for Documents icon
    title: "Receive your bespoke proposal",
    cta: "Get started",
    description:
      "Osend us a quick summary of your tax situation and we'll respond within 24-48 hours and confirm whether its something we can help with.",
  },
  {
    id: 4,
    icon: "/icons/delivery-report.svg", // Placeholder for Documents icon
    title: "We file your Self Assessment for you",
    cta: "Get started",
    description:
      "Osend us a quick summary of your tax situation and we'll respond within 24-48 hours and confirm whether its something we can help with.",
  },
  {
    id: 4,
    icon: "/icons/support-report.svg", // Placeholder for Documents icon
    title: "Post-report support",
    cta: "Get started",
    description:
      "send us a quick summary of your tax situation and we'll respond within 24-48 hours and confirm whether its something we can help with.",
  },
];

export const TaxAdviceServiceProps: TTaxAdviceServiceProps = {
  data: steps,
  sectionMainTitle: "How Our Corporate Tax service works",
};
