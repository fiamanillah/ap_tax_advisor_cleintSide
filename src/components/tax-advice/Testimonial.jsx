import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <Carousel className="w-full" loop>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-full md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-[#f9fafb] shadow-md rounded-none border-none">
                <CardContent className="flex flex-col aspect-square items-start justify-start">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <div
                        key={starIndex}
                        className="mb-4 flex items-center justify-center">
                        <div className="bg-[#00B67A] p-1">
                          <Star
                            size={16}
                            strokeWidth={1.5}
                            fill="#fff"
                            stroke="#fff"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center"></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
