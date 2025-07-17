import { cn } from "@/lib/utils";
import { TService } from "@/types/TService";
import Image from "next/image";
import { Card } from "../ui/card";
// data/services-data.ts

export default function ServicesSection({ data }: TService) {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="section-inverted-radius-reverse">
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

                    <Card className="from-secondary-gradient to-primary-gradient relative flex w-full flex-col items-center border-0 bg-gradient-to-bl p-4 shadow-xl sm:w-fit">
                      <Image
                        src={service.image}
                        alt="Separator"
                        width={150}
                        height={150}
                      />
                      <h1 className="text-muted-foreground max-w-[250px] text-center text-xl font-medium">
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
      </div>
    </section>
  );
}
