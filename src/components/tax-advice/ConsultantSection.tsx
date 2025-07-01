import Image from "next/image";
import { Button } from "../ui/button";

export default function ConsultantSection() {
  return (
    <section className="bg-[#CAE5FF]">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 lg:max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
          {/* Left Section - Image */}
          <div className="w-full max-w-md flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/assets/consultant.png"
                alt="Team collaborating on business documents"
                width={500}
                height={350}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2 px-4 lg:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Ready to book your consultation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-2 md:mb-3 max-w-md lg:max-w-lg">
              Great! If you&apos;re ready, let&apos;s get this show on the road.
            </p>
            <p className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl mb-6 md:mb-8 flex items-center justify-center lg:justify-start gap-2">
              <span>Excellent 4.8 out of 5</span>
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
