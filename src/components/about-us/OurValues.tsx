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
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-10"
          value={openItem}
          onValueChange={setOpenItem}>
          {values.map((value, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg">
              <AccordionTrigger
                className={cn(
                  "hover:no-underline [&>svg]:hidden bg-[#87C9BD]/20 px-4 text-xl",
                  {
                    "bg-[#87C9BD]": openItem === `item-${index}`,
                  }
                )}>
                <div className="flex justify-between items-center w-full">
                  <span>{value.title}</span>
                  {openItem === `item-${index}` ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </AccordionTrigger>
              {value.description && (
                <AccordionContent className="mt-2">
                  <div className="shadow-lg rounded-lg p-4 bg-white border border-gray-200">
                    {value.description}
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
