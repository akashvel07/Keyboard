"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface TextOverlayProps {
  heading: string;
  subtext: string;
  scrollStart: number; // 0-1
  scrollEnd: number;   // 0-1
  alignment: "left" | "center" | "right";
  containerRef: React.RefObject<HTMLDivElement | null>;
  isBold?: boolean;
  isAccent?: boolean;
  overlayClass?: string;
}

export default function TextOverlay({
  heading,
  subtext,
  scrollStart,
  scrollEnd,
  alignment,
  containerRef,
  isBold,
  isAccent,
  overlayClass,
}: TextOverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade in over first 30% of the range, hold, fade out over last 30%
  const range = scrollEnd - scrollStart;
  const fadeIn = scrollStart;
  const peakStart = scrollStart + range * 0.25;
  const peakEnd = scrollEnd - range * 0.25;
  const fadeOut = scrollEnd;

  const opacity = useTransform(
    scrollYProgress,
    [fadeIn, peakStart, peakEnd, fadeOut],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeIn, peakStart, peakEnd, fadeOut],
    [14, 0, 0, -14]
  );

  // Alignment classes
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const paddingStyle = {};
  // Vertical position centered for all layouts per user preference
  const verticalClasses = {
    left: "justify-center",
    center: "justify-center",
    right: "justify-center",
  };

  return (
    <motion.div
      className="text-overlay-wrapper"
      style={{ opacity }}
    >
      {/* Cinematic black overlay */}
      <div className={`cinematic-backdrop ${overlayClass || 'bg-black/60'}`} />

      {/* Text Container */}
      <motion.div
        className={`text-content-container site-padding ${alignClasses[alignment]} ${verticalClasses[alignment]}`}
        style={{ y, ...paddingStyle }}
      >
        <div className="max-w-xl flex flex-col">
          {subtext && (
            <p className="subtext-eyebrow">
              {subtext}
            </p>
          )}
          <h2
            className={`heading-text ${isBold ? 'font-bold' : 'font-semibold'}`}
            style={{ color: isAccent ? "#F5A623" : undefined }}
          >
            {heading}
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
