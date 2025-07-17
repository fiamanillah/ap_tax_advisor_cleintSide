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
import Link from "next/link";
import { useState } from "react";

export default function OurValues({ title, values }: TOurValueSectionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>("item-0");

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="section-inverted-radius w-full">
          <h2 className="mb-6 text-center text-2xl leading-tight font-bold text-gray-800 sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl">
            {title}
          </h2>

          <Accordion
            type="single"
            collapsible
            className="space-y-3 sm:space-y-4 md:space-y-5"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {values.map((value, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-lg border-0 sm:rounded-xl"
              >
                <AccordionTrigger
                  className={cn(
                    "cursor-pointer px-4 py-4 text-base font-semibold transition-all duration-300 hover:no-underline sm:px-6 sm:py-5 sm:text-lg md:px-8 md:py-6 md:text-xl lg:text-2xl [&>svg]:hidden",
                    {
                      "bg-[#87C9BD] text-white shadow-md":
                        openItem === `item-${index}`,
                      "bg-[#87C9BD]/20 text-gray-800 hover:bg-[#87C9BD]/30":
                        openItem !== `item-${index}`,
                    },
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-left leading-tight">
                      {value.title}
                    </span>
                    {openItem === `item-${index}` ? (
                      <Minus className="ml-4 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    ) : (
                      <Plus className="ml-4 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    )}
                  </div>
                </AccordionTrigger>
                {value.description && (
                  <AccordionContent className="px-0 pt-0 pb-0">
                    <div className="my-2 rounded-lg border border-t-0 border-gray-200 bg-white p-4 shadow-sm sm:rounded-b-xl sm:p-6 md:p-8">
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                        {value.description}
                      </p>
                      <Link
                        href={"/"}
                        className="mt-4 inline-block text-blue-600 hover:underline"
                      >
                        Learn more
                      </Link>
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
