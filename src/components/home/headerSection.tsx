import Image from "next/image";
import React from "react";

export default function HeaderSection() {
  return (
    <header className="bg-white text-black p-4 w-full mx-auto">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* <Image
            src="https://placehold.co/40x40/000000/FFFFFF?text=AD"
            alt="Company Logo"
            className="rounded-full"
            width={40}
            height={40}
          /> */}
          <span className="text-xl font-bold">AD</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            Personal Tax
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            Corporate Tax
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            About Us
          </a>
        </nav>

        {/* Contact Us Button - Styled like a shadcn/ui button */}
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                     ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                     disabled:opacity-50 bg-green-500 text-white hover:bg-green-600 h-10 px-4 py-2"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
