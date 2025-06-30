"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tax advice", href: "/tax-advice" },
  { name: "Personal Tax", href: "#" },
  { name: "Corporate Tax", href: "#" },
  { name: "About Us", href: "#" },
];

export default function HeaderSection() {
  const pathname = usePathname();

  return (
    <header className="bg-[#F6F6F6] text-[#212121] p-4 w-full mx-auto">
      <div className="mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-18">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src={"/assets/logo.svg"}
              alt="Company Logo"
              className="rounded-full"
              width={56}
              height={44}
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "hover:text-[#009900] transition duration-150 ease-in-out font-medium text-md text-[#212121]",
                    {
                      "text-[#009900]": isActive,
                    }
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <Button className="bg-[#009900] font-semibold">Contact Us</Button>

        {/* <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                     ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                     disabled:opacity-50 bg-green-500 text-white hover:bg-green-600 h-10 px-4 py-2"
        >
          Contact Us
        </button> */}
      </div>
    </header>
  );
}
