import { TFAQSectionProps } from "@/types/faq";
const faqs = [
  {
    id: "q1",
    question: "What's the difference between a tax advisor and an accountant",
    answer:
      "An accountant typically reacts to your needs by preparing accounts and submitting returns based on the information you provide. A tax advisor takes a more proactive approach — helping you plan ahead, make tax-efficient decisions, and ensure you’re not overpaying. We provide a bespoke, personable service that goes beyond compliance. We stay by your side year-round, offering strategic support tailored to your situation.",
  },
  {
    id: "q2",
    question: "What sets us apart from other advisors?",
    answer:
      "We offer personal, proactive support that doesn’t begin and end with your tax return. Our service includes deadline reminders, document requests, HMRC liaison, and tailored advice — all year round. You’re never just a number here. We take the time to understand your goals and work with you in a way that suits your lifestyle or business.",
  },
  {
    id: "q3",
    question: "When should I speak to a tax advisor?",
    answer:
      "The sooner, the better. Whether you're self-employed, investing, earning additional income, or simply unsure if you're getting it right — speaking to a tax advisor early can help you avoid mistakes, save money, and plan effectively. Even if your situation seems simple, it’s always worth getting expert input.",
  },
  {
    id: "q4",
    question: "Do we work with your existing accounts or representative?",
    answer:
      "Yes. We’re happy to collaborate with your existing accountant, bookkeeper, or financial advisor to keep everything aligned. If you’re looking to switch providers, we can also manage a smooth handover with minimal disruption.",
  },
  {
    id: "q5",
    question: "How do we take payments for our services?",
    answer: (
      <div>
        <p>
          We offer clear, flexible payment options depending on the service:
        </p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>Tax compliance (personal and corporate)</strong> — For
            ongoing services like personal tax returns, corporation tax, VAT,
            payroll, and accounts, we charge on a
            <strong> monthly subscription basis</strong>. This reflects the
            continuous support we provide throughout the year and helps spread
            the cost evenly.
          </li>
          <li>
            <strong>Advisory work </strong> — For one-off advisory services such
            as tax planning, profit extraction, or relief claims, we agree a
            <strong> fixed, one-off fee</strong> in advance, with no hidden
            costs. Payments can be made securely via bank transfer or online
            invoice.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "q6",
    question: "What type of clients do you work with?",
    answer: (
      <div>
        <p>
          We work with a wide range of individuals and businesses. Whether your
          affairs are simple or complex, we tailor our service to suit your
          needs.
        </p>
        <p>Our clients include:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>Higher earners and those with additional income</li>
          <li>Non-UK tax residents</li>
          <li>Individuals affected by the High Income Child Benefit Charge</li>
          <li>Retirees drawing pensions or managing savings</li>

          <li>Clients with investment income, dividends, or capital gains</li>
          <li>Crypto investors and digital asset traders</li>
          <li>Landlords and property owners</li>
          <li>Freelancers, sole traders, and contractors</li>
          <li>Start-ups and growing businesses</li>
          <li>Directors and shareholders of limited companies</li>
          <li>
            Anyone who wants their taxes done properly with clarity and care
          </li>
        </ul>
      </div>
    ),
  },
];

export const FAQSectionProps: TFAQSectionProps = {
  faqs,
  title: "General FAQs",
  description:
    "Got more questions? Ask away! Get in touch via  'Contact us' where you can submit a query. We're happy to help",
};
