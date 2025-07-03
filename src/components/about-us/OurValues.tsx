"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { TOurValueSectionProps } from "@/types/OurValue";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function OurValues({ title, values }: TOurValueSectionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>("item-0");

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center leading-tight">
          {title}
        </h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-3 sm:space-y-4 md:space-y-5"
          value={openItem}
          onValueChange={setOpenItem}>
          {values.map((value, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg sm:rounded-xl border-0 overflow-hidden">
              <AccordionTrigger
                className={cn(
                  "hover:no-underline [&>svg]:hidden px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-300",
                  {
                    "bg-[#87C9BD] text-white shadow-md":
                      openItem === `item-${index}`,
                    "bg-[#87C9BD]/20 text-gray-800 hover:bg-[#87C9BD]/30":
                      openItem !== `item-${index}`,
                  }
                )}>
                <div className="flex justify-between items-center w-full">
                  <span className="text-left leading-tight">{value.title}</span>
                  {openItem === `item-${index}` ? (
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0 ml-4" />
                  )}
                </div>
              </AccordionTrigger>
              {value.description && (
                <AccordionContent className="px-0 pt-0 pb-0">
                  <div className="shadow-lg rounded-b-lg sm:rounded-b-xl p-4 sm:p-6 md:p-8 bg-white border border-gray-200 border-t-0">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
