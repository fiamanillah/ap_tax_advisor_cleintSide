import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "How does the process work?",
    answer:
      "Once you get in touch, we’ll arrange a consultation to understand your background, concerns, and goals. This helps us build a clear picture of your position and identify the tax areas to explore. You’ll then receive a tailored proposal with scope, fixed pricing, and next steps.",
  },
  {
    id: "q2",
    question: "How much does tax advice cost?",
    answer:
      "Our pricing is bespoke based on the complexity of your circumstances, the time involved, and the value we’re delivering. You’ll receive a fixed fee upfront before any work begins. No hourly rates. No hidden charges.",
  },
  {
    id: "q3",
    question: "Do I receive a written report?",
    answer:
      "Yes, for formal advice, we’ll provide a comprehensive written report tailored to your position. This includes detailed insights on planning opportunities, potential tax savings, risk areas, and practical recommendations, giving you clarity and confidence to move forward. For informal or one-off queries, we may provide verbal advice, a summary email, or other suitable formats depending on the nature of your enquiry.",
  },
  {
    id: "q4",
    question: "Do you file my company tax return for me?",
    answer:
      "Yes, we handle the complete preparation and filing of your company tax return (CT600) as part of our service.",
  },
  {
    id: "q5",
    question: "What areas of tax can you advise on?",
    answer: (
      <div>
        <p>
          We advise across a wide range of personal and business tax matters,
          including:
        </p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>Income Tax</li>
          <li>Capital Gains Tax (CGT)</li>
          <li>Property tax and structuring</li>
          <li>Inheritance Tax (IHT) and succession planning</li>
          <li>Trusts and Family Investment Companies (FICs)</li>
          <li>Director/shareholder planning</li>
          <li>
            Tax-efficient business structures (e.g. holding companies, group
            structuring)
          </li>
          <li>Cross-border and international tax</li>
          <li>Residency and domicile</li>
          <li>Remittances and the Foreign Income & Gains (FIG) regime</li>
          <li>Overseas income and assets</li>
          <li>
            Our advice is always tailored, whether you&apos;re navigating a
            one-off event or planning for long-term efficiency.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "q6",
    question: "Is this a one-off service or ongoing support?",
    answer:
      "We primarily offer one-off, high-quality advice but many clients return to us for further support as their personal or business circumstances evolve. We’re always here when you need us.",
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "Tax advice FAQs",
  description:
    "Got more questions? Ask away! Get in touch with our UK-based support team either on support@aptaxadvisor.com or via the live chat on our homepage. They're happy to help.",
  contactEmail: "support@aptaxadvisor.com",
  contactText: "or via the live chat on our homepage",
};
