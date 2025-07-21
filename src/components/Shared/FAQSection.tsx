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
      <div className="container mx-auto my-10 flex gap-5 py-16 max-md:flex-col">
        <div className="section-inverted-radius">
          <div className="flex">
            <div className={"flex basis-1/2 flex-col gap-4"}>
              <h2 className="text-background text-[40px] leading-tight font-medium">
                {FAQSectionProps.title}
              </h2>
              <p className="text-muted-foreground lg:w-2/3">
                {FAQSectionProps.description}
              </p>
            </div>
            <div className={"basis-1/2"}>
              <AccordionCustom type="single" collapsible className="w-full">
                {FAQSectionProps.faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-muted-foreground cursor-pointer text-left">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground mb-4 border-l pl-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionCustom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
