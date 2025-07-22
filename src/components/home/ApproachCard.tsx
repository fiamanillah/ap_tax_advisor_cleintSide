/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ApproachCardProps {
  title: string;
  description: string;
  index: number;
  icon?: string;
}

export default function ApproachCard({
  title,
  description,
  index,
  icon = "/assets/default-icon.svg",
}: ApproachCardProps) {
  // Special animation for the FIRST CARD ONLY
  if (index === 0) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const animationControls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
      if (isInView && !animationComplete) {
        const sequence = async () => {
          // Infinite smooth rotation
          await animationControls.start({
            rotateY: 360,
            transition: { 
              duration: 3, 
              ease: "linear", 
              repeat: Infinity 
            },
          });
        };

        sequence();

        const timer = setTimeout(() => {
          animationControls.stop();
          // Smooth transition to 180 degrees
          animationControls.start({
            rotateY: 180,
            transition: { 
              type: "tween", 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1]
            },
          }).then(() => setAnimationComplete(true));
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [isInView, animationControls, animationComplete]);

    return (
      <div 
        ref={ref} 
        className="group h-72 w-60 [perspective:1000px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="thecard relative h-full w-full rounded-lg [transform-style:preserve-3d]"
          animate={animationComplete && isHovered ? { rotateY: 0 } : animationControls}
          transition={animationComplete ? { 
            duration: 0.7, 
            ease: "easeOut" 
          } : undefined}
        >
          <CardFaces title={title} description={description} icon={icon} index={index} />
        </motion.div>
      </div>
    );
  }

  // Standard hover animation for ALL OTHER CARDS
  return (
    <div className="group h-72 w-60 cursor-pointer [perspective:1000px]">
      <div
        className={cn(
          "thecard relative h-full w-full rounded-lg transition-transform duration-700",
          "[transform-style:preserve-3d] group-hover:rotate-y-180",
        )}
      >
        <CardFaces title={title} description={description} icon={icon} index={index} />
      </div>
    </div>
  );
}

// Helper component remains the same
const CardFaces = ({ title, description, icon = "/assets/default-icon.svg", index }: ApproachCardProps) => (
  <>
    <div className="absolute top-2 left-2 z-20 h-fit w-fit text-white">
        /{(index + 1).toString().padStart(2, "0")}
    </div>

    <div
      className={cn(
        "thefront inverted-radius absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 px-2 py-8",
        "[backface-visibility:hidden]",
      )}
    >
      <Image src={icon} alt={title} width={150} height={150} className="rounded-lg" />
      <h3 className="text-center text-[17px] font-semibold text-white">{title}</h3>
    </div>

    <div
      className={cn(
        "theback inverted-radius-reverse absolute inset-0 flex flex-col items-start justify-center space-y-4 bg-yellow-300 px-3",
        "[backface-visibility:hidden] rotate-y-180",
      )}
    >
       <div className="absolute top-2 right-2 z-20 h-fit w-fit text-neutral-800">
            /{(index + 1).toString().padStart(2, "0")}
       </div>
      <h3 className="text-start text-lg font-semibold text-neutral-900">
        📝 Get in touch
      </h3>
      <p className="text-start text-xs text-neutral-800">{description}</p>
    </div>
  </>
);