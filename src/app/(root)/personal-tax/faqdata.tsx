import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "Who needs to file a tax return?",
    answer: (
      <div>
        <p>You may need to file if:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>You earn over £150,000 through PAYE</li>
          <li>
            You receive untaxed income from self-employment, rental property,
            dividends, investments, or foreign sources
          </li>
          <li>You’ve made gains on property, shares or crypto</li>
          <li>HMRC has issued you a notice to file</li>
        </ul>
      </div>
    ),
  },
  {
    id: "q2",
    question: "How long does it take?",
    answer:
      "Once we have everything, we’ll usually prepare and submit your return within 1–3 working days. If you have a complex return, it may take longer, but we’ll keep you updated throughout the process.",
  },
  {
    id: "q3",
    question:
      "Once we have everything, we’ll usually prepare and submit your return within 1–3 working days.",
    answer:
      "We operate on a subscription model, with a monthly direct debit that covers your return and ongoing access to support. Fees are based on complexity and agreed upfront... no surprises.",
  },
  {
    id: "q4",
    question: "Can you handle returns with overseas income or property?",
    answer:
      "Yes. We’re experienced in handling returns involving foreign income, non-UK property, and residency matters, ensuring full HMRC compliance.",
  },
  {
    id: "q5",
    question: "Will I see the return before it’s submitted?",
    answer:
      "Always. We’ll share the draft with you, explain anything that’s unclear, and only submit once you’ve approved everything.",
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "General FAQs",
  description:
    "Got more questions? Ask away! Get in touch via 'Contact us' where you can submit a query. We're happy to help",
  contactEmail: "support@aptaxadvisor.com",
  contactText: "or via the live chat on our homepage",
};
