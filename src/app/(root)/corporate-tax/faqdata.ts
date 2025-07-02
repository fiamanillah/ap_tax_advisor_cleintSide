import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "Shall  I get to speak to my assigned accountant directly?",
    answer:
      "Yes, you'll have direct access to your assigned accountant for all your tax-related queries and consultations.",
  },
  {
    id: "q2",
    question: "Are VAT returns included?",
    answer:
      "Yes, our standard package includes VAT return filing. This covers preparation and submission of your quarterly VAT returns to HMRC.",
  },
  {
    id: "q3",
    question:
      "Can I still use TaxScouts if I've just incorporated/started my company?",
    answer:
      "Absolutely! We specialize in helping new businesses get set up with proper accounting systems from day one.",
  },
  {
    id: "q4",
    question: "Do you file my company tax return for me?",
    answer:
      "Yes, we handle the complete preparation and filing of your company tax return (CT600) as part of our service.",
  },
  {
    id: "q5",
    question: "What documents do you need to file my company tax return?",
    answer:
      "We typically require your profit and loss statement, balance sheet, bank statements, invoices, and expense receipts. We'll provide a complete checklist after you sign up.",
  },
  {
    id: "q6",
    question: "How should I provide my accounting books?",
    answer:
      "You can upload documents through our secure portal, email them to us, or connect your accounting software (like Xero or QuickBooks) directly to our system.",
  },
  {
    id: "q7",
    question:
      "Will you charge more based on number of directors, transactions or revenue?",
    answer:
      "Our standard pricing covers businesses with up to 2 directors and typical transaction volumes. For complex cases, we may adjust pricing after reviewing your specific needs.",
  },
  {
    id: "q8",
    question:
      "Does the company tax return price include directors' personal tax returns?",
    answer:
      "The company tax return service is separate from personal tax returns. We offer discounted packages if you need both services.",
  },
  {
    id: "q9",
    question: "Is this service suitable for the self-employed?",
    answer:
      "Yes, we have specific packages tailored for sole traders and self-employed individuals, including Self Assessment tax return filing.",
  },
  {
    id: "q10",
    question:
      "What's the difference between dormant and non-trading companies?",
    answer:
      "A dormant company has had no significant accounting transactions, while a non-trading company may have some financial activity (like holding assets) without conducting its main business operations.",
  },
  {
    id: "q11",
    question:
      "Is the pricing the same for Limited Liability Partnerships (LLPs)?",
    answer:
      "LLP accounting is slightly more complex, so we typically charge 15-20% more than for standard limited companies, depending on the specific requirements.",
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "Still got questions?",
  description:
    "Got more questions? Ask away! Get in touch with our UK-based support team either on support@aptaxadvisor.com or via the live chat on our homepage. They're happy to help.",
  contactEmail: "support@aptaxadvisor.com",
  contactText: "or via the live chat on our homepage",
};
