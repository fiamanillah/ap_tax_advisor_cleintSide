"use client";

import { useState } from "react";

export default function VideoPlayer({ video }: { video: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoElement = document.querySelector("video") as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-full w-full">
      <video
        className="h-full w-full object-cover rounded-xl"
        muted
        onClick={handlePlayPause}>
        <source src={video} type="video/mp4" />
      </video>
      {!isPlaying && (
        <button
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all duration-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            className="w-14 h-14 lg:w-24 lg:h-24">
            <path
              d="M50.8527 52.8533C50.346 52.8533 49.8394 52.6667 49.4394 52.2667C48.666 51.4933 48.666 50.2133 49.4394 49.44C59.066 39.8133 59.066 24.16 49.4394 14.56C48.666 13.7867 48.666 12.5067 49.4394 11.7333C50.2127 10.96 51.4927 10.96 52.266 11.7333C63.4394 22.9067 63.4394 41.0933 52.266 52.2667C51.866 52.6667 51.3594 52.8533 50.8527 52.8533Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M13.1468 52.8533C12.6402 52.8533 12.1335 52.6667 11.7335 52.2667C0.560182 41.0933 0.560182 22.9067 11.7335 11.7333C12.5068 10.96 13.7868 10.96 14.5602 11.7333C15.3335 12.5067 15.3335 13.7867 14.5602 14.56C4.93352 24.1867 4.93352 39.84 14.5602 49.44C15.3335 50.2133 15.3335 51.4933 14.5602 52.2667C14.1602 52.6667 13.6535 52.8533 13.1468 52.8533Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M31.9997 60.56C28.6663 60.5334 25.493 60 22.533 58.96C21.493 58.5867 20.933 57.44 21.3063 56.4C21.6797 55.36 22.7997 54.8 23.8663 55.1734C26.4263 56.0534 29.1463 56.5334 32.0264 56.5334C34.8797 56.5334 37.6264 56.0534 40.1597 55.1734C41.1997 54.8267 42.3464 55.36 42.7197 56.4C43.093 57.44 42.533 58.5867 41.493 58.96C38.5063 60 35.333 60.56 31.9997 60.56Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M40.7997 8.90667C40.5864 8.90667 40.3464 8.88 40.133 8.8C37.5997 7.89334 34.853 7.44 31.9997 7.44C29.1463 7.44 26.4263 7.92 23.8663 8.8C22.7997 9.14667 21.6797 8.61334 21.3063 7.57334C20.933 6.53334 21.493 5.38667 22.533 5.01334C25.5197 3.97334 28.693 3.44 31.9997 3.44C35.3064 3.44 38.5064 3.97334 41.4664 5.01334C42.5064 5.38667 43.0664 6.53334 42.693 7.57334C42.3997 8.4 41.6264 8.90667 40.7997 8.90667Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M23.3076 32V27.5467C23.3076 22 27.2276 19.7334 32.0276 22.5067L35.8943 24.7467L39.761 26.9867C44.561 29.76 44.561 34.2934 39.761 37.0667L35.8943 39.3067L32.0276 41.5467C27.2276 44.32 23.3076 42.0534 23.3076 36.5067V32Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
