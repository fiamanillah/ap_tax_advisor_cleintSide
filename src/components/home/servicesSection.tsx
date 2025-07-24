import { cn } from "@/lib/utils";
import { TService } from "@/types/TService";
import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import Icon from "../Shared/Icon";
import SectionInvert from "../Shared/SectionInvert";
// data/services-data.ts

export default function ServicesSection({ data }: TService) {
  return (
    <SlideIn section>
      <div className="container mx-auto">
        <SectionInvert className="gradient-90">
          <h1 className="text-background mb-8 text-center text-[40px] font-medium">
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
                      "mx-auto flex w-full max-w-5xl items-center justify-between gap-8 max-lg:flex-col",
                      {
                        "md:flex-row-reverse": service.align === "right",
                      },
                    )}
                  >
                    <div>
                      <h1 className="text-background mb-5 text-2xl font-medium">
                        {service.title}
                      </h1>
                      <ul className="text-muted-foreground max-w-xl space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
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
