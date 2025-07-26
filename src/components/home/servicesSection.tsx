import { cn } from "@/lib/utils";
import { TService } from "@/types/TService";
import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import Icon from "../Shared/Icon";
import SectionInvert from "../Shared/SectionInvert";
// data/services-data.ts

export default function ServicesSection({ data }: TService) {
  return (
    <SlideIn section className="px-2">
      <div className="container mx-auto">
        <SectionInvert className="gradient-90">
          <h1 className="text-background text-center text-3xl font-medium max-md:pt-10 lg:mb-8 lg:text-[40px]">
            What&apos;s Included
          </h1>
          <div className="flex flex-col gap-20">
            {data.map((service, index) => (
              <div
                key={index}
                className={cn("flex w-full flex-col", {
                  "items-start": service.align === "left",
                  "items-end": service.align === "right",
                })}
              >
                {service.items && (
                  <div
                    className={cn(
                      "mx-auto flex w-full max-w-3xl items-center justify-between gap-4 max-lg:flex-col max-md:p-10 max-sm:p-5 lg:gap-8 2xl:max-w-5xl",
                      {
                        "md:flex-row-reverse": service.align === "right",
                      },
                    )}
                  >
                    <div>
                      <h1 className="text-background mb-5 text-xl font-medium lg:text-2xl">
                        {service.title}
                      </h1>
                      <ul className="text-muted-foreground max-w-xl space-y-2">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm md:text-base"
                          >
                            <Icon src="/icons/check.svg" className="mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Image
                      src={service.image}
                      alt="Separator"
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                )}

                {/* {index < services.length - 2 && <Separator className="my-8" />} */}
              </div>
            ))}
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
