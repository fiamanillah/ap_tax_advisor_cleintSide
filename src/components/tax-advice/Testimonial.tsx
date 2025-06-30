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
    <div className="relative w-full mt-8">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="px-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              {/* Removed the extra p-1 div around the Card, as CardContent handles padding */}
              <Card className="bg-[#f9fafb] shadow-md rounded-none border-none h-full">
                <CardContent className="flex flex-col items-start justify-start p-6">
                  <div className="flex items-center space-x-1 mb-2">
                    {Array.from({ length: Math.floor(testimonial.stars) }).map(
                      (_, starIndex) => (
                        <div
                          key={starIndex}
                          className="flex items-center justify-center">
                          <div className="bg-[#00B67A] p-1">
                            <Star
                              size={16}
                              strokeWidth={1.5}
                              fill="#fff"
                              stroke="#fff"
                            />
                          </div>
                        </div>
                      )
                    )}
                    {testimonial.stars % 1 !== 0 && (
                      <div className="flex items-center justify-center">
                        <div className="bg-[#00B67A] p-1 relative overflow-hidden">
                          <Star
                            size={16}
                            strokeWidth={1.5}
                            fill="#fff"
                            stroke="#fff"
                          />
                          {/* Mask for half star - for perfect half, you might need SVG or more precise masking */}
                          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f9fafb]"></div>
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
                        <span className="text-sm font-semibold text-gray-600 ml-1">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-black font-semibold text-xs flex-grow mb-4">
                    {testimonial.review}
                  </p>
                  <div className="text-xs mt-auto">
                    <span className="font-semibold text-gray-600">
                      {testimonial.author},{" "}
                    </span>
                    <span className="text-gray-500 font-semibold">
                      {testimonial.time_ago}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}{" "}
        </CarouselContent>
        <button
          className="absolute left-2 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 disabled:opacity-50 cursor-pointer"
          onClick={() => api?.scrollPrev()}>
          <CircleChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          className="absolute right-2 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 disabled:opacity-50 cursor-pointer"
          onClick={() => api?.scrollNext()}>
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
