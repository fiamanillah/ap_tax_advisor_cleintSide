import GetStarted from "@/components/Shared/GetStarted";
import TaxCategories from "@/components/tax-advice/TaxCategories";
import Testimonial from "@/components/tax-advice/Testimonial";
import { steps } from "@/data/tax-advisor";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TaxAdviceService from "../../components/tax-advice/TaxAdviceService";

export default function page() {
  return (
    <main className="space-y-8">
      {/* reserve 64px for the fixed header */}
      <section className="relative min-h-[calc(100vh-64px)]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted>
          <source src="/videos/tax-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 min-h-[calc(100vh-64px)] bg-black/30">
          <div className="bg-[#A4F5D3]">
            <p className="text-center text-black text-base">
              New tax year, new return! File for 24/25 today🧑‍🚀
            </p>
          </div>
          <div className="container mx-auto px-4 py-8 lg:max-w-6xl min-h-[calc(100vh-64px-40px)] flex items-center">
            <div className="flex flex-col items-start justify-center h-full max-w-lg">
              <h2 className="text-4xl font-semibold mb-4 text-white">
                Tax advice, made simple :)
              </h2>
              <p className="text-xl mb-8 text-white">
                For tax-based problem? Get simple, one-off tax advice from an
                accredited accountant. 139, all in.
              </p>
              <ul className="">
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>We match you with an accredited accountant. </span>
                </li>
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>Professional support with your tax situation</span>
                </li>
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>1-1 consultation by phone or video call</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            What are people saying
          </h2>

          <Testimonial />
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Need clarity on your tax situation?
          </h2>

          <p className="text-center max-w-xl">
            We&apos;re here to help. These are just a few of the common
            questions clients bring to us – and we’ve got answers.
          </p>

          <TaxCategories />
        </div>
      </section>

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
                Great! If you&apos;re ready, let&apos;s get this show on the
                road.
              </p>
              <p className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl mb-6 md:mb-8 flex items-center justify-center lg:justify-start gap-2">
                <span>Excellent 4.8 out of 5</span>
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </p>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-semibold text-sm sm:text-base rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            How Our <span className="text-yellow-500">Tax Advice service</span>
            works
          </h2>

          <TaxAdviceService data={steps} lg={3} />
        </div>
      </section>

      <GetStarted />
    </main>
  );
}
