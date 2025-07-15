"use client";
import React from "react";
import { ReactSVG } from "react-svg";

export default function Icon({
  src,
  desc,
  className,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  desc?: string;
  title?: string;
}) {
  return (
    <ReactSVG
      afterInjection={(svg) => {
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", desc || "Icon");
        svg.setAttribute("focusable", "false");
        svg.setAttribute("class", className || "");
      }}
      src={src}
      desc={desc}
      evalScripts="always"
      fallback={() => <span>Error!</span>}
      httpRequestWithCredentials={true}
      loading={() => <span>Loading</span>}
      onClick={() => {
        console.log("wrapper onClick");
      }}
      onError={(error) => {
        console.error(error);
      }}
      renumerateIRIElements={false}
      useRequestCache={false}
    />
  );
}
