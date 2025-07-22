import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";

export const steps = [
  {
    id: 1,
    icon: "/icons/qa.svg", // Placeholder for Q&A icon
    title: "Answer a few simple questions",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we'll have everything we need to start preparing your tax return.",
  },
  {
    id: 2,
    icon: "/icons/Bookmeeting.png", // Placeholder for Users icon
    title: "Book a meeting",
    description:
      "And we mean a few. After a couple of minutes of answering questions online we'll have everything we need to start preparing your tax return.",
  },
  {
    id: 3,
    icon: "/icons/recieve-proposal.png", // Placeholder for Documents icon
    title: "Receive your bespoke proposal",
    description:
      "Once you've signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
  {
    id: 4,
    icon: "/icons/assesment.svg", // Placeholder for Documents icon
    title: "We file your Self Assessment for you",
    description:
      "Once you've signed off your return, your AP Tax Advisor accountant will submit your return with HMRC for you.",
  },
];

export const TaxAdviceServiceProps: TTaxAdviceServiceProps = {
  data: steps,
  sectionMainTitle: "How Our Tax Advice Service Works",
};
