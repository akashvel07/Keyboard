"use client";

import { useRef } from "react";
import KeyboardScroll from "@/components/KeyboardScroll";
import TextOverlay from "@/components/TextOverlay";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative" style={{ backgroundColor: "#d4d4d4" }}>
      {/* Scroll container */}
      <div ref={containerRef} className="relative">
        <KeyboardScroll containerRef={containerRef} />

        {/* Cinematic sequence intro */}
        <TextOverlay
          heading="Introducing"
          subtext=""
          scrollStart={0.0}
          scrollEnd={0.06}
          alignment="center"
          containerRef={containerRef}
          isBold
          isAccent
        />

        <TextOverlay
          heading="Akxshv Keyboard."
          subtext=""
          scrollStart={0.08}
          scrollEnd={0.16}
          alignment="center"
          containerRef={containerRef}
        />

        <TextOverlay
          heading="Built for Precision."
          subtext="Every detail, measured."
          scrollStart={0.22}
          scrollEnd={0.35}
          alignment="left"
          containerRef={containerRef}
        />

        <TextOverlay
          heading="Layered Engineering."
          subtext="See what's inside."
          scrollStart={0.55}
          scrollEnd={0.68}
          alignment="right"
          containerRef={containerRef}
        />

        <TextOverlay
          heading="Assembled. Ready."
          subtext="Scroll back to replay."
          scrollStart={0.85}
          scrollEnd={0.98}
          alignment="center"
          containerRef={containerRef}
          overlayClass="bg-black/100"
          isAccent
        />
      </div>
      <Footer />
    </main>
  );
}
