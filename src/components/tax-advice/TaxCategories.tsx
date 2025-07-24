"use client";
import { cn } from "@/lib/utils";
import { TTaxCategory } from "@/types/TaxCategoryProps";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function TaxCategories({
  taxCategories,
}: {
  taxCategories: TTaxCategory[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray<HTMLElement>(
      "[data-animate-card]",
      containerRef.current,
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.15,
          from: "start",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {taxCategories.map((category, idx) => (
            <Card
              key={idx}
              data-animate-card
              className={cn(
                "flex w-full flex-col items-center rounded-3xl border-none px-4",
                {
                  "main-gradient": idx % 2 === 0,
                  "main-gradient-reverse": idx % 2 !== 0,
                },
              )}
            >
              <CardHeader className="flex w-full flex-col items-start justify-center px-2">
                <CardTitle className="text-background w-full text-center text-xl font-medium">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {category.questions[0]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc space-y-2">
                  {category.questions.slice(1).map((question, index) => (
                    <li key={index} className="pl-2 text-sm">
                      {question}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
