"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tax advice", href: "/tax-advice", className: "text-primary" },
  {
    name: "Personal Tax",
    href: "/personal-tax",
    className: "personal-tax-curve",
  },
  {
    name: "Corporate Tax",
    href: "/corporate-tax",
    className: "corporate-tax-curve",
  },
  { name: "About Us", href: "/about-us", className: "about-us-curve" },
];

export default function HeaderSection() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-18">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-foreground flex items-center text-5xl font-bold"
            >
              AP
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden h-full space-x-12 pt-2 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-md text-foreground h-full rounded-t-4xl px-8 py-4 font-medium transition duration-150 ease-in-out",
                    {
                      "bg-primary-gradient text-background curve": isActive,
                    },
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "text-md text-foreground flex h-full items-center gap-2 rounded-t-4xl px-8 py-4 font-medium transition duration-150 ease-in-out",
              {
                "bg-secondary-gradient text-background contact-curve":
                  pathname === "/contact",
              },
            )}
          >
            <span>Contact us</span>
            <ReactSVG src="/icons/arrow-circle-right.svg" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Drawer
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        direction="left"
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <div className="flex justify-end">
              <DrawerClose className="bg-secondary-3 flex items-center justify-center rounded-md p-1">
                <X className="h-6 w-6" />
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="flex flex-col gap-2 px-4 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <DrawerClose key={item.name} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-primary text-md text-foreground border-t border-gray-200 pt-2 font-medium transition duration-150 ease-in-out last:border-b last:pb-2",
                      {
                        "text-primary": isActive,
                      },
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </DrawerClose>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
