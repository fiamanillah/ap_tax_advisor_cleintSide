import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "What’s included in your corporate tax service?",
    answer: (
      <div>
        <p>From a compliance perspective, we offer:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>Corporation Tax returns</li>
          <li>Statutory accounts</li>
          <li>Bookkeeping</li>
          <li>VAT returns</li>
          <li>Payroll</li>
          <li>Confirmation statements</li>
          <li>Company secretarial</li>
          <li>
            Registered office address From a CFO-as-a-Service (CFOaaS)
            perspective, we act as a virtual finance team, offering financial
            oversight, cash flow forecasting, board reporting, budgeting, and
            strategic support around growth, exit or funding. From a tax
            advisory perspective, we support group structuring, tax-efficient
            planning for directors and shareholders, profit extraction, and
            long-term succession planning.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "q2",
    question: "Can you help me take money out of my company tax-efficiently?",
    answer:
      "Yes, we’ll advise on salary, dividends, pension contributions, director loans, and even allowable company-paid personal expenses, tailored to your situation.",
  },
  {
    id: "q3",
    question: "How much does it cost?",
    answer:
      "Our pricing is based on your company’s size, transaction volume, and required services, from accounts and tax returns to CFO-level support. We operate on a subscription model with monthly direct debit, providing full transparency and no hidden costs.",
  },
  {
    id: "q4",
    question: "Do I still need to file if I didn’t trade this year?",
    answer:
      "Yes, dormant or non-trading companies often still need to file. We’ll clarify your obligations and keep you compliant.",
  },
  {
    id: "q5",
    question: "Can you help with group companies or international structures?",
    answer:
      "Absolutely. We assist with inter-company structuring, group relief, international tax coordination, and holding company strategies.",
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "General FAQs",
  description:
    "Got more questions? Ask away! Get in touch via 'Contact us' where you can submit a query. We're happy to help",
};
