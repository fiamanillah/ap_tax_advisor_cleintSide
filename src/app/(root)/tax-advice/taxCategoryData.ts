import { TTaxCategoryProps } from "@/types/TaxCategoryProps";

const taxCategories = [
  {
    title: "Income Tax",
    questions: [
      "Is your income working as hard for you as it should?",
      "Do I need to complete a Self Assessment?",
      "Am I using all my allowances and reliefs?",
      "Am I making tax-efficient pension or charity contributions?",
      "Could my income be shared with a spouse?",
      "Am I losing out on child benefit or personal allowance?",
      "Is my structure aligned with my goals?",
    ],
  },
  {
    title: "Self-Employed",
    questions: [
      "Is your setup helping or holding you back?",
      "When do I need to register as self-employed?",
      "Am I claiming all my business expenses?",
      "Should I register for VAT?",
      "How do I pay tax on my freelance income?",
      "What records do I need to keep and for how long?",
      "Should I set up a limited company instead?",
    ],
  },
  {
    title: "Capital Gains Tax",
    questions: [
      "CGT, you may be paying more than you need to.",
      "Do I need to pay CGT and at what rate?",
      "Could I restructuring to reduce the gain before I sell?",
      "Can I use my spouse's allowance to reduce tax?",
      "What costs can I deduct to reduce the gain?",
      "What is the 60-day CGT reporting rule for UK property sales?",
    ],
  },
  {
    title: "Inheritance Tax & Succession Planning",
    questions: [
      "The earlier you plan, the more your family keeps.",
      "How much of my estate is exposed to tax?",
      "Can I pass my estate to my children tax-free?",
      "Am I using my gift allowances and exemptions?",
      "How do I minimise IHT while keeping control of my assets?",
      "Should I be using a Trust or Family Investment Company?",
      "Is a Will alone enough for estate planning?",
    ],
  },
  {
    title: "Property",
    questions: [
      "How you hold property matters.",
      "Should I own property personally or through a company?",
      "How is mortgage interest treated?",
      "What costs can I deduct to reduce my tax bill?",
      "Could my income be shared with a spouse?",
      "What's the CGT position if I sell a former main residence?",
      "Do you need to pay SDLT on a second home or a company?",
      "Can I incorporate my property portfolio?",
    ],
  },
  {
    title: "Companies",
    questions: [
      "Running a company? How you take money out matters.",
      "Am I extracting profits in the most tax-efficient way?",
      "Should I pay myself a salary, dividends, or both?",
      "Could I introduce my spouse and children to share the income?",
      "Can my company pay for my car, phone, or pension?",
      "Should I set up a holding company or restructure?",
      "Are you planning ahead for exit, succession or sale?",
    ],
  },
  {
    title: "Residency (UK Pre-Arrival/ Leaver)",
    questions: [
      "Moving in or out of the UK? The timing could cost you or save you.",
      "How is UK tax residency determined?",
      "How long can I stay in the UK without becoming tax resident?",
      "Can I split the tax year when arriving or leaving?",
      "Can I use the remittance basis, foreign income & gains regime, or Temporary Repatriation facility?",
      "Should I restructure income or gains before I move?",
    ],
  },
  {
    title: "International & Offshore Tax",
    questions: [
      "Overseas assets? UK tax rules might reach further than you think.",
      "Do I need to report foreign income, gains, or offshore assets to HMRC?",
      "Will HMRC know if I don't report overseas income or assets?",
      "How do double tax treaties work and can I benefit from being taxed twice?",
      "What are the UK tax implications of moving money from abroad?",
      "Are my offshore structures still effective under UK tax rules?",
    ],
  },
  {
    title: "HMRC Enquiries & Penalties",
    questions: [
      "Heard from HMRC? Knowing what to do next can save you time, money and stress.",
      "I have received a letter, what does it mean?",
      "Why has HMRC opened an enquiry into your return?",
      "Can I appeal a penalty and interest?",
      "How far back can HMRC go when reviewing my tax history?",
      "Should I make a voluntary disclosure before HMRC contacts me?",
    ],
  },
];

export const taxCategoryProps: TTaxCategoryProps = {
  taxCategories: taxCategories,
};
