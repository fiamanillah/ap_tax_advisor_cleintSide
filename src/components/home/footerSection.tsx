import Image from "next/image";
import Link from "next/link";
import Icon from "../Shared/Icon";
import SlideIn from "../animated/SlideIn";

export default function FooterSection() {
  return (
    <footer className="mt-10 px-2 sm:mt-16 lg:mt-32">
      <SlideIn direction="right" className="container mx-auto">
        <div className="gradient-0 rounded-2xl py-6 sm:gap-8 sm:py-8 lg:flex-row lg:gap-12 lg:rounded-4xl lg:p-10 xl:gap-16 xl:px-20">
          <div className="flex flex-col justify-between px-4 max-md:gap-4 sm:px-8 md:flex-row md:px-12">
            {/* Left Section */}
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div>
                <Image
                  src="/assets/logo.svg"
                  alt="AP Tax Advisors"
                  width={100}
                  height={72}
                  className="h-auto w-[80px] sm:w-[100px] md:w-[120px]"
                />
              </div>
              <p className="text-background text-base font-medium sm:text-lg">
                AP Tax Advisors
              </p>
              <div className="flex gap-4 sm:gap-6">
                <Link href="#">
                  <Icon src="/icons/facebook.svg" />
                </Link>
                <Link href="#">
                  <Icon src="/icons/instagram.svg" />
                </Link>
                <Link href="#">
                  <Icon src="/icons/tiktok.svg" />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10 md:mt-0 md:gap-20">
              <div className="space-y-2">
                <h4 className="text-background text-base font-semibold sm:text-lg">
                  AP Tax Advisor
                </h4>
                <ul className="space-y-1 text-xs text-gray-700 sm:text-sm md:text-base">
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-background text-base font-semibold sm:text-lg">
                  Our Services
                </h4>
                <ul className="space-y-1 text-xs text-gray-700 sm:text-sm md:text-base">
                  <li>
                    <Link href="#">Tax Advice</Link>
                  </li>
                  <li>
                    <Link href="#">Personal Tax</Link>
                  </li>
                  <li>
                    <Link href="#">Corporate Tax</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-muted-foreground mx-auto mt-4 max-w-7xl px-4 sm:px-12" />

          <div className="text-muted-foreground mt-4 flex flex-col-reverse items-center gap-3 px-4 sm:px-12 md:flex-row md:justify-between md:gap-5">
            <p className="text-xs sm:text-sm md:text-base">
              @ 2025 AP Tax Advisors. All right reserved
            </p>
            <div className="flex gap-2 text-xs sm:gap-4 sm:text-sm md:text-base">
              <Link href="#">Privacy Policy</Link>
              <span>|</span>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </SlideIn>
    </footer>
  );
}
