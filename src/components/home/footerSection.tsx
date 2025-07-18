import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="px-16 md:mt-10">
      <div className="container mx-auto">
        <div className="main-gradient rounded-xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:px-20">
          <div className="flex flex-col justify-between max-md:gap-4 md:flex-row">
            {/* Left Section */}
            <div className="flex flex-col space-y-4 max-md:items-center">
              <div className="">
                <Image
                  src="/assets/logo.svg"
                  alt="AP Tax Advisors"
                  width={120}
                  height={86}
                />
              </div>
              <p className="text-back text-background text-lg font-medium">
                AP Tax Advisors
              </p>

              <Link href="#">
                <FaFacebook className="size-7 text-blue-600" />
              </Link>
            </div>

            <div className="flex flex-row items-start gap-4 max-md:justify-between max-md:py-4 md:gap-20">
              <div className="space-y-2">
                <h4 className="text-background font-semibold">
                  AP Tax Advisor
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-background font-semibold">Our Services</h4>
                <ul className="space-y-1 text-sm text-gray-700">
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

          <hr className="mt-4 border-gray-300" />

          <div className="text-muted-foreground mt-4 flex flex-col justify-between md:flex-row">
            <p>@ 2025 AP Tax Advisors. All right reserved</p>
            <div className="flex gap-4">
              <Link href="#">Privacy Policy</Link>
              <span>|</span>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
