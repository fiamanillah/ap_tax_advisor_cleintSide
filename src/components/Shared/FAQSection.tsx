import { cn } from "@/lib/utils";
import { TFAQSectionProps } from "@/types/faq";
import Link from "next/link";
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
    <SlideIn section className="px-2">
      <div className="container mx-auto">
        <SectionInvert
          className={cn("gradient-reverse-180", {
            "gradient-180": FAQSectionProps.page === "tax-advice",
          })}
        >
          <div className="mx-auto flex max-w-xl flex-col gap-5 pt-10 max-lg:px-4 lg:max-w-3xl lg:flex-row xl:max-w-5xl 2xl:max-w-7xl">
            <div className={"flex basis-1/2 flex-col gap-4"}>
              <h2 className="text-background text-2xl leading-tight font-medium sm:text-3xl md:text-4xl lg:text-[40px]">
                {FAQSectionProps.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg lg:w-2/3">
                {FAQSectionProps.description}
              </p>

              <Link href="/contact">
                <AppButton className="w-fit">Contact us</AppButton>
              </Link>
            </div>
            <div className={"basis-1/2"}>
              <AccordionCustom type="single" collapsible className="w-full">
                {FAQSectionProps.faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-muted-foreground cursor-pointer text-left text-sm sm:text-base">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground mb-4 border-l pl-4 text-xs sm:text-sm">
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
