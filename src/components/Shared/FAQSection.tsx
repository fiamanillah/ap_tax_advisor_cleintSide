import { cn } from "@/lib/utils";
import { TFAQSectionProps } from "@/types/faq";
import SlideIn from "../animated/SlideIn";
import {
  AccordionContent,
  AccordionCustom,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordionCustom";
import { AppButton } from "./AppButton";
import SectionInvert from "./SectionInvert";
export function FAQSection(FAQSectionProps: TFAQSectionProps) {
  return (
    <SlideIn section>
      <div className="container mx-auto">
        <SectionInvert
          className={cn("gradient-reverse-180", {
            "gradient-180": FAQSectionProps.page === "tax-advice",
          })}
        >
          <div className="mx-auto flex max-w-7xl pt-10">
            <div className={"flex basis-1/2 flex-col gap-4"}>
              <h2 className="text-background text-[40px] leading-tight font-medium">
                {FAQSectionProps.title}
              </h2>
              <p className="text-muted-foreground lg:w-2/3">
                {FAQSectionProps.description}
              </p>

              <AppButton className="w-fit">Contact us</AppButton>
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
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
