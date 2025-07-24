"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

import { motion } from "motion/react";
import { ReactSVG } from "react-svg";

const navItems = [
  { name: "Home", href: "/", bg: "#F9F6F3" },
  { name: "Tax advice", href: "/tax-advice", bg: "#F8F4F0" },
  { name: "Personal Tax", href: "/personal-tax", bg: "#F9F4EE" },
  { name: "Corporate Tax", href: "/corporate-tax", bg: "#F9F3EB" },
  { name: "About Us", href: "/about-us", bg: "#F8F1E8" },
];

export default function HeaderSection() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo Section */}
          <div className="ml-10 flex items-center">
            <Link
              href="/"
              className="text-foreground flex items-center text-4xl font-semibold"
            >
              AP
            </Link>
          </div>
          {/* bg-primary-gradient */}
          {/* Navigation Links */}
          <nav className="hidden h-full space-x-2 pt-2 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-md text-foreground relative h-full rounded-t-4xl px-8 py-4 font-medium",
                    {
                      "text-black": isActive,
                    },
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="clickedbutton"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.8,
                      }}
                      className={cn(
                        "curve absolute inset-0 -z-1 rounded-t-4xl",
                      )}
                      style={{ backgroundColor: item.bg }}
                    />
                  )}

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "text-md text-foreground flex h-full items-center gap-2 rounded-t-4xl px-8 py-5 font-medium",
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
