import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function HeroSection() {
  return (
    <section className="bg-secondary-2 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Text Section */}
          <div className="w-full max-w-none lg:max-w-[700px] space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px] font-bold text-[#1E1E1E] leading-tight">
              Tax doesn&apos;t have to be taxing.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              You&apos;ve got enough on your plate. Let us take care of the
              numbers. This isn&apos;t a one-size-fits-all service. We offer
              personalised, proactive support that&apos;s built around you, not
              just what HMRC expects. We&apos;re with you every step of the way:
            </p>
            <ul className="text-gray-800 space-y-2 sm:space-y-3">
              {[
                "Personalised support from start to finish",
                "Friendly reminders so you never miss a deadline",
                "Market updates that actually matter",
                "Simple, clear information requests",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re self-employed, running a company, or juggling
              multiple income streams, we make tax straightforward, stress-free,
              and surprisingly human.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px]">
              <Image
                src="/assets/girl.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>

            {/* Floating Cards - Responsive positioning */}
            <Card className="absolute top-8 sm:top-10 md:top-12 lg:top-14 -left-2 sm:left-2 md:left-4 lg:left-6 bg-[#A4F5D3] shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[140px] sm:max-w-[160px] md:max-w-[380px]">
              <CardContent className="px-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 max-w-[140px]">
                    Documents submitted
                  </span>
                  <div className="bg-white rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-12 -right-2 sm:right-2 md:right-8 lg:right-12 bg-[#FFF4A0] shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
              <CardContent className="px-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 max-w-[140px]">
                    Ready to approve
                  </span>
                  <div className="bg-white rounded-full p-1 flex-shrink-0">
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional mobile-friendly floating elements */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 transform -translate-y-1/2 lg:hidden">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-1/4 -left-4 sm:-left-6 md:-left-8 lg:hidden">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
