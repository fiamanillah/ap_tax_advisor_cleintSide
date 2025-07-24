import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "Human First",
    answer:
      "Real people, real support. We bring warmth, patience and care to everything we do.",
  },
  {
    id: "q2",
    question: "Integrity Always",
    answer:
      "We’re transparent, honest and accountable. We’ll never promise what we can’t deliver, and we’ll always put your interests first.",
  },
  {
    id: "q3",
    question: "Personalised Service",
    answer:
      "We tailor our approach to your unique needs. No cookie-cutter solutions here – just expert advice that fits your situation.",
  },
  {
    id: "q4",
    question: "We take time to understand your specific situation and goals",
    answer:
      "We’ll ask the right questions, listen carefully, and provide advice that’s relevant to you. No jargon, no confusion – just clear, actionable insights.",
  },
  {
    id: "q5",
    question: "Proactive Support",
    answer:
      "We don’t just react to issues – we anticipate them. Our team is always looking ahead to help you avoid pitfalls and seize opportunities.",
  },
  {
    id: "q6",
    question: "We anticipate.",
    answer:
      "We’ll keep you updated throughout the process, and you can always reach out with questions. Our goal is to make this as smooth and stress-free as possible.",
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "Our Values",
  description:
    "Got more questions? Ask away! Get in touch via 'Contact us' where you can submit a query. We're happy to help",
  contactEmail: "support@aptaxadvisor.com",
  contactText: "or via the live chat on our homepage",
};
