import { cn } from "@/lib/utils";
import { TService } from "@/types/TService";
import Image from "next/image";
import { Card } from "../ui/card";
// data/services-data.ts

export default function ServicesSection({ data }: TService) {
  return (
    <section>
      <div className="container lg:max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          What&apos;s Included
        </h1>
        <div className="flex flex-col gap-20">
          {data.map((service, index) => (
            <div
              key={index}
              className={cn("flex flex-col w-full", {
                "items-start": service.align === "left",
                "items-end": service.align === "right",
              })}>
              {service.items && (
                <div
                  className={cn(
                    "w-full flex max-lg:flex-col items-center gap-8 justify-between",
                    {
                      "md:flex-row-reverse": service.align === "right",
                    }
                  )}>
                  <div>
                    <h1 className="text-2xl mb-5 font-medium">
                      {service.title}
                    </h1>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Image
                            src="/icons/check.svg"
                            alt="Check"
                            width={24}
                            height={24}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className="p-4 flex flex-col items-center relative w-full sm:w-fit">
                    <Image
                      src={service.image}
                      alt="Separator"
                      width={150}
                      height={150}
                    />
                    <h1 className="text-center text-2xl font-medium w-1/2">
                      {service.imageTitle}
                    </h1>
                    <Image
                      src={service.verifyLogo}
                      alt="Separator"
                      width={50}
                      height={50}
                      className="absolute -top-5 -right-5"
                    />
                  </Card>
                </div>
              )}

              {/* {index < services.length - 2 && <Separator className="my-8" />} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
