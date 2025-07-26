import Testimonial from "@/components/tax-advice/Testimonial";
import { Star } from "lucide-react";
import SlideIn from "../animated/SlideIn";
import SectionInvert from "./SectionInvert";

export default function TestimonialSection() {
  return (
    <SlideIn section className="px-2">
      <div className="container mx-auto">
        <h2 className="text-foreground border-muted mx-auto mb-8 w-fit border-b-2 pb-8 text-center text-xl font-medium md:text-3xl lg:text-[40px]">
          What are people saying
        </h2>

        <SectionInvert className="gradient-reverse-180">
          <div className="mx-auto max-w-7xl lg:pt-16">
            <Testimonial />
            <p className="text-background mt-5 text-center text-sm">
              Rated 4.5 / 5 based on 6230 reviews, Showing our latest reviews.
              <br />
              <span className="justify- flex items-center justify-center gap-2">
                <Star
                  size={16}
                  strokeWidth={1.5}
                  fill="#00B67A"
                  stroke="#00B67A"
                />
                <span className="font-semibold">Trustpilot</span>
              </span>
            </p>
          </div>
        </SectionInvert>
      </div>
    </SlideIn>
  );
}
