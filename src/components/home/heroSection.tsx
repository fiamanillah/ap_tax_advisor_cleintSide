import { Check, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";

export default function HeroSection() {
  return (
    <section className="bg-[#E5D4F7] py-16">
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div className="max-w-[700px] w-full space-y-6">
          <h2 className="text-[36px] font-bold text-[#1E1E1E]">
            Tax doesn’t have to be taxing.
          </h2>
          <p className="text-gray-700">
            You’ve got enough on your plate. Let us take care of the numbers.
            This isn’t a one-size-fits-all service. We offer personalised,
            proactive support that’s built around you, not just what HMRC
            expects. We’re with you every step of the way:
          </p>
          <ul className="text-gray-800 space-y-2">
            {[
              "Personalised support from start to finish",
              "Friendly reminders so you never miss a deadline",
              "Market updates that actually matter",
              "Simple, clear information requests",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className=" mt-1 w-4 h-4" />
                {text}
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            Whether you&apos;re self-employed, running a company, or juggling
            multiple income streams, we make tax straightforward, stress-free,
            and surprisingly human.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-[600px] flex justify-center items-center">
          <div className="relative rounded-full overflow-hidden w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
            <Image
              src="/assets/girl.png"
              alt="Support"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Cards */}
          <Card className="absolute top-14 left-6 bg-[#A4F5D3] text-sm shadow-md">
            <CardContent className="flex items-center gap-2">
              Documents submitted
              <div className="bg-white rounded-full p-1">
                <Check className=" w-4 h-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="absolute bottom-12 right-12 bg-[#FFF4A0] text-sm shadow-md">
            <CardContent className="flex items-top gap-2">
              Ready to approve
              <div className="bg-white rounded-full p-1">
                <Plus className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
