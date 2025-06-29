import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#F7F2FB] py-16 px-4 md:px-0 overflow-hidden">
      {" "}
      {/* Updated background color and added overflow-hidden */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Tax doesn&lsquo;t have to be taxing.
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            You&apos;ve got enough on your plate. Let us take care of the
            numbers. This isn&apos;t a one-size-fits-all service. We offer
            personalised, proactive support that&apos;s built around you, not
            just what HMRC expects. We&lsquo;re with you every step of the way.
          </p>

          <ul className="text-gray-700 space-y-3 mb-8 text-lg">
            <li className="flex items-center justify-center md:justify-start">
              {/* Checkmark SVG Icon */}
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Personalised support from start to finish
            </li>
            <li className="flex items-center justify-center md:justify-start">
              {/* Checkmark SVG Icon */}
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Friendly reminders so you never miss a deadline
            </li>
            <li className="flex items-center justify-center md:justify-start">
              {/* Checkmark SVG Icon */}
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Market updates that actually matter
            </li>
            <li className="flex items-center justify-center md:justify-start">
              {/* Checkmark SVG Icon */}
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Simple, clear information requests
            </li>
          </ul>

          <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Whether you&apos;re self-employed, running a company, or juggling
            multiple income streams, we make tax straightforward, stress-free,
            and surprisingly human.
          </p>
        </div>

        {/* Right Section - Image and Status Boxes */}
        <div className="relative flex justify-center items-center w-full min-h-[400px] md:min-h-[500px] p-4">
          {/* Blob background for the image section */}
          <div
            className="absolute bg-[#EBE0F4] rounded-[55%_45%_50%_50%/50%_60%_40%_50%]
                       w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-3 z-0"
            style={{
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              // Custom irregular border-radius for blob
              borderRadius: "55% 45% 50% 50% / 50% 60% 40% 50%",
              transform: "translate(-50%, -50%) rotate(-3deg)",
            }}
          ></div>
          <Image
            src="https://placehold.co/400x400/F0F0F0/2C3E50?text=Smiling+Woman"
            alt="Smiling woman working on laptop"
            className="w-[90%] h-[90%] object-cover relative z-10"
            style={{
              borderRadius: "25% 75% 25% 75% / 75% 25% 75% 25%",
              transform: "rotate(2deg)",
            }}
            width={400}
            height={400}
          />
          {/* Decorative Plant Placeholder */}
          <Image
            src="https://placehold.co/100x150/D1E7DD/2C3E50?text=Plant"
            alt="Decorative plant"
            className="absolute bottom-[10%] left-[0%] z-5 hidden md:block opacity-70" // Adjusted z-index and opacity
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%",
              transform: "rotate(-10deg)",
            }}
            width={100}
            height={150}
          />

          {/* Documents Submitted Box */}
          <div className="absolute top-[10%] left-[15%] bg-green-200 text-green-800 py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2 z-20">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Documents submitted</span>
          </div>
          {/* Ready to Approve Box */}
          <div className="absolute bottom-[10%] right-[15%] bg-yellow-200 text-yellow-800 py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2 z-20">
            <span>Ready to approve</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
