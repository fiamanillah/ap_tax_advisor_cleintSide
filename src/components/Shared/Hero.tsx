import { cn } from "@/lib/utils";
import { THeroSectionProps } from "@/types/HeroSectionProps";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero({
  title,
  description,
  video,
  images, // Not used in this component, but can be added later
  features,
  cta,
}: THeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-64px)]">
      {video && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div
        className={cn("relative z-10 min-h-[calc(100vh-64px)]", {
          "bg-[#CFEDC7]": !video,
          "bg-black/30": video,
        })}>
        <div className="bg-[#A4F5D3]">
          <p className="text-center text-black text-base">
            New tax year, new return! File for 24/25 today🧑‍🚀
          </p>
        </div>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl min-h-[calc(100vh-64px-40px)] flex items-center justify-between">
          <div className="flex flex-col items-start justify-center h-full max-w-lg">
            <h2
              className={cn("text-4xl font-semibold mb-4", {
                "text-black": !video,
                "text-white": video,
              })}>
              {Array.isArray(title)
                ? title.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < title.length - 1 && <br />}
                    </span>
                  ))
                : title}
            </h2>
            {description &&
              description.map((line, index) => (
                <p
                  key={index}
                  className={cn("text-lg mb-4", {
                    "text-black": !video,
                    "text-white": video,
                  })}>
                  {line}
                </p>
              ))}

            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={cn("mb-2 flex items-center gap-2", {
                    "text-black": !video,
                    "text-white": video,
                  })}>
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {cta && (
              <Button className="mr-auto mt-8 self-start">{cta.text}</Button>
            )}
          </div>

          {images && (
            <Image
              src={images}
              alt={`Image`}
              className=""
              width={600}
              height={400}
              loading="lazy"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
