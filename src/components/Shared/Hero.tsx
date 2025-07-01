import { THeroSectionProps } from "@/types/HeroSectionProps";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero({
  title,
  description,
  video,
  features,
  cta,
}: THeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-64px)]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 min-h-[calc(100vh-64px)] bg-black/30">
        <div className="bg-[#A4F5D3]">
          <p className="text-center text-black text-base">
            New tax year, new return! File for 24/25 today🧑‍🚀
          </p>
        </div>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl min-h-[calc(100vh-64px-40px)] flex items-center">
          <div className="flex flex-col items-start justify-center h-full max-w-lg">
            <h2 className="text-4xl font-semibold mb-4 text-white">{title}</h2>
            {description.map((line, index) => (
              <p key={index} className="text-lg mb-4 text-white">
                {line}
              </p>
            ))}

            <ul className="">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {cta && (
              <Button className="mr-auto mt-8 self-start">{cta.text}</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
