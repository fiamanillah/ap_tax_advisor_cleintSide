"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CircleCheck,
  CircleChevronLeft,
  CircleChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="relative mt-8 w-full">
      <Carousel setApi={setApi}>
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full px-2 sm:basis-3/4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="bg-primary-gradient h-full rounded-none border-none shadow-none">
                <CardContent className="flex flex-col items-start justify-start p-4 sm:p-6">
                  <div className="mb-2 flex items-center space-x-1">
                    {Array.from({ length: Math.floor(testimonial.stars) }).map(
                      (_, starIndex) => (
                        <div
                          key={starIndex}
                          className="flex items-center justify-center"
                        >
                          <div className="bg-[#00B67A] p-1">
                            <Star
                              size={16}
                              strokeWidth={1.5}
                              fill="#fff"
                              stroke="#fff"
                            />
                          </div>
                        </div>
                      ),
                    )}
                    {testimonial.stars % 1 !== 0 && (
                      <div className="flex items-center justify-center">
                        <div className="relative overflow-hidden bg-[#00B67A] p-1">
                          <Star
                            size={16}
                            strokeWidth={1.5}
                            fill="#fff"
                            stroke="#fff"
                          />
                          {/* Mask for half star - for perfect half, you might need SVG or more precise masking */}
                          <div className="absolute top-0 right-0 h-full w-1/2 bg-[#f9fafb]"></div>
                        </div>
                      </div>
                    )}
                    {testimonial.verified && (
                      <div className="ml-2 flex items-center">
                        <CircleCheck
                          size={20}
                          strokeWidth={1.5}
                          fill="#A9A9A9"
                          stroke="#fff"
                        />
                        <span className="ml-1 text-sm font-semibold text-gray-600">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-background mb-2 text-base font-semibold">
                    {testimonial.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-xs font-semibold sm:text-sm">
                    {testimonial.review}
                  </p>
                  <div className="mt-auto text-xs sm:text-sm">
                    <span className="font-semibold text-gray-600">
                      {testimonial.author},{" "}
                    </span>
                    <span className="font-semibold text-gray-500">
                      {testimonial.time_ago}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button
          className="text-background absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer transition-all duration-200 disabled:opacity-50 max-md:hidden md:-left-8 lg:-left-12"
          onClick={() => api?.scrollPrev()}
        >
          <CircleChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          className="text-background absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer transition-all duration-200 disabled:opacity-50 max-md:hidden md:-right-8 lg:-right-12"
          onClick={() => api?.scrollNext()}
        >
          <CircleChevronRight size={20} strokeWidth={1.5} />
        </button>
      </Carousel>
    </div>
  );
}

const testimonials = [
  {
    stars: 5,
    title: "Diligent and quick",
    review:
      "Karen Smith was a delight to work with. She was very quick and diligent, was able to...",
    author: "Jon",
    time_ago: "2 hours ago",
  },
  {
    stars: 4.5,
    title: "Simple, efficient & quick!",
    review:
      "A very straightforward approach to gathering the necessary information. This leads on...",
    author: "Consumer",
    time_ago: "5 hours ago",
  },
  {
    stars: 5,
    verified: true,
    title: "Brilliant",
    review: "Super efficient",
    author: "Jane",
    time_ago: "10 hours ago",
  },
  {
    stars: 5,
    title: "Excellent service",
    review:
      "Excellent service. Accounts and Tax information completed. The accountant was very go...",
    author: "John Gibson",
    time_ago: "10 hours ago",
  },
  {
    stars: 5,
    title: "I love that everything is I...",
    review:
      "I love that everything is in one place and it's really easy to follow the step by ste...",
    author: "Customer",
    time_ago: "11 hours ago",
  },
];
