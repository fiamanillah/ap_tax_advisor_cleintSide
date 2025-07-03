"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function FloatingIcon() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/contact" && (
        <a
          href="#"
          className="fixed bottom-4 right-4 z-50"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/whatsapp.svg"
            alt="WhatsApp"
            width={48}
            height={48}
          />
        </a>
      )}
    </>
  );
}
