"use client";

import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <div className="flex items-center justify-center p-8">
      {/* Main animated container */}
      <div className="relative">
        {/* Main rotating container with actual logo */}
        <div className="animate-spin-slow">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
            <div className="w-20 h-16 relative">
              <Image
                src="/assets/logo.svg"
                alt="AP Tax Advisor"
                fill
                className="object-contain filter invert brightness-0"
                priority
              />
            </div>
          </div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute inset-0 animate-spin-reverse">
          <div className="relative w-32 h-32">
            {/* Top dot */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full animate-bounce shadow-lg border-2 border-white"></div>
            {/* Right dot */}
            <div
              className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-bounce shadow-lg border-2 border-white"
              style={{ animationDelay: "0.2s" }}></div>
            {/* Bottom dot */}
            <div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-bounce shadow-lg border-2 border-white"
              style={{ animationDelay: "0.4s" }}></div>
            {/* Left dot */}
            <div
              className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full animate-bounce shadow-lg border-2 border-white"
              style={{ animationDelay: "0.6s" }}></div>
          </div>
        </div>

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-blue-300 animate-ping opacity-30"></div>
        <div
          className="absolute inset-2 w-28 h-28 rounded-full border-2 border-purple-300 animate-ping opacity-20"
          style={{ animationDelay: "0.5s" }}></div>
      </div>
    </div>
  );
}
