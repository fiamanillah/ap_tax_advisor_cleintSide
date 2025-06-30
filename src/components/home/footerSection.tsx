import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
  return (
    <footer className=" mt-10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.svg"
              alt="AP Tax Advisors"
              width={60}
              height={60}
            />
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Something you want to write here. Please comment.</p>
            <p>Something you want to write here. Please comment.</p>
            <p>Something you want to write here.</p>
          </div>
          <Link href="#" className="text-blue-600 mt-2 text-xl">
            <i className="fab fa-facebook" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-20 items-start">
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

      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between text-[16px] text-[#000000]">
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
