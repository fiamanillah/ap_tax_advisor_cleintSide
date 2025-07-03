import { TFAQSectionProps } from "@/types/faq";
import {
  AccordionContent,
  AccordionCustom,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordionCustom";
export function FAQSection(FAQSectionProps: TFAQSectionProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto max-md:flex-col flex bg-muted px-4 py-16 sm:px-6 lg:px-8 border-2 gap-5 my-10">
        <div className={"basis-1/2 flex flex-col gap-4"}>
          <h2 className="text-3xl font-bold">{FAQSectionProps.title}</h2>
          <p className="text-muted-foreground lg:w-2/3">
            {FAQSectionProps.description}
            <a
              href={"mailto:" + FAQSectionProps.contactEmail}
              className="text-primary hover:underline">
              {FAQSectionProps.contactEmail}
            </a>
            {FAQSectionProps.contactText}
          </p>
        </div>
        <div className={"basis-1/2"}>
          <AccordionCustom type="single" collapsible className="w-full">
            {FAQSectionProps.faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium hover:text-primary">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionCustom>
        </div>
      </div>
    </section>
  );
}
