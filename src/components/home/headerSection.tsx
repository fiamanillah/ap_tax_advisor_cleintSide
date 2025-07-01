"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tax advice", href: "/tax-advice" },
  { name: "Personal Tax", href: "/personal-tax" },
  { name: "Corporate Tax", href: "/corporate-tax" },
  { name: "About Us", href: "#" },
];

export default function HeaderSection() {
  const pathname = usePathname();
  const router = useRouter();

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
                  )}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <Button
          variant="primary"
          onClick={() => router.push("/contact")}
          className="bg-[#009900] font-semibold">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
