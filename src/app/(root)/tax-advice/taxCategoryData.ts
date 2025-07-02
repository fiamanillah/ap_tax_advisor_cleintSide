import { TTaxCategoryProps } from "@/types/TaxCategoryProps";

const taxCategories = [
  {
    id: 1,
    icon: "User",
    title: "Personal Tax",
    questions: [
      "Have I overpaid tax without realising?",
      "What reliefs or allowances can I claim?",
      "Do I need to file a return if I'm PAYE?",
      "Can you check my tax code or past returns?",
      "What reliefs or allowances can I claim?",
    ],
    bgColor: "bg-green-100", // Light green background for the card
  },
  {
    id: 2,
    icon: "Briefcase",
    title: "Limited Company Tax",
    questions: [
      "What's the most tax-efficient way to pay myself?",
      "Do I need to file both accounts and a CT600?",
      "Can I claim that as a business expense?",
    ],
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    icon: "Home",
    title: "Capital Gains & Property Tax",
    questions: [
      "Do I need to report the sale of my flat or shares?",
      "How do I work out capital gains vs. income tax?",
      "Can I reduce the tax on a property sale?",
    ],
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    icon: "DollarSign", // Using a generic money icon, could be a custom SVG for 'Self-Employed'
    title: "Self-Employed & Freelancers",
    questions: [
      "Should I stay sole trader or go limited?",
      "What expenses can I claim for my business?",
      "Do I need to register for VAT?",
    ],
    bgColor: "bg-green-100",
  },
  {
    id: 5,
    icon: "TrendingUp",
    title: "Tax Planning & Advice",
    questions: [
      "Am I paying more tax than I need to?",
      "How do I plan ahead for upcoming liabilities?",
      "What's the best setup for my long-term goals?",
    ],
    bgColor: "bg-green-100",
  },
  {
    id: 6,
    icon: "Mail",
    title: "HMRC Letters & Penalties",
    questions: [
      "I've had a letter from HMRC — what now?",
      "Can you help reduce or appeal a penalty?",
      "How do I fix a return I submitted wrong?",
    ],
    bgColor: "bg-green-100",
  },
];

export const taxCategoryProps: TTaxCategoryProps = {
  taxCategories: taxCategories,
};
