"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from "../ui/drawer";
import { RiArrowDownSFill } from "react-icons/ri";

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "My finances", href: "/tax-advice" },
  { name: "Tax returns", href: "/personal-tax" },
  { name: "Accountant", href: "/corporate-tax" },
];

export default function DashboardHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="px-4 py-2 w-full mx-auto shadow">
      <div className="mx-auto flex justify-between items-center px-4 py-2">
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
                  "hover:text-primary-1 transition duration-150 ease-in-out font-medium text-md text-foreground",
                  {
                    "text-primary-1": isActive,
                  }
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.push("#")}
            className="flex items-center gap-1"
          >
            Peter <RiArrowDownSFill className="size-5" />
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
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
            <div className="flex justify-end">
              <DrawerClose className="flex items-center justify-center bg-secondary-3 p-1 rounded-md">
                <X className="w-6 h-6" />
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="py-2 px-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <DrawerClose key={item.name} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-primary transition duration-150 ease-in-out font-medium text-md text-foreground border-t border-gray-200 pt-2 last:border-b last:pb-2",
                      {
                        "text-primary": isActive,
                      }
                    )}
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
