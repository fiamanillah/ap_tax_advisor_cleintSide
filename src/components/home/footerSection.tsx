import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="md:mt-10">
      <div className="container mx-auto px-4 md:py-10 flex flex-col md:flex-row justify-between max-md:gap-4">
        {/* Left Section */}
        <div className="flex flex-col max-md:items-center space-y-4">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="AP Tax Advisors"
              width={120}
              height={86}
            />
          </div>
          <p className="font-medium text-lg">AP Tax Advisors</p>
          <div className="space-y-1 max-md:text-center">
            <p>Something you want to write here. Please comment.</p>
            <p>Something you want to write here. Please comment.</p>
            <p>Something you want to write here.</p>
          </div>
          <Link href="#">
            <FaFacebook className="size-7 text-blue-600" />
          </Link>
        </div>

        <div className="flex flex-row gap-4 md:gap-20 items-start max-md:py-4 max-md:justify-between">
          <div className="space-y-2">
            <h4 className="font-semibold">AP Tax Advisor</h4>
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
            <h4 className="font-semibold">Our Services</h4>
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

      <hr className="border-gray-300 container mx-auto" />

      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between">
        <p>@ 2025 AP Tax Advisors. All right reserved</p>
        <div className="flex gap-4">
          <Link href="#">Privacy Policy</Link>
          <span>|</span>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
