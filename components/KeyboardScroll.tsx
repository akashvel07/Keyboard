"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 192;

function getFramePath(index: number): string {
  const padded = String(index + 1).padStart(3, "0");
  return `/frames/ezgif-frame-${padded}.png`;
}

interface KeyboardScrollProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function KeyboardScroll({ containerRef }: KeyboardScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Setup canvas sizing
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, []);

  // Draw frame to canvas with "cover" fit
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

    const rect = canvas.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    ctx.clearRect(0, 0, cw, ch);

    // Fill with fog color first for seamless edges
    ctx.fillStyle = "#d4d4d4";
    ctx.fillRect(0, 0, cw, ch);

    // Cover fit: scale image to completely cover canvas while preserving aspect ratio
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = cw / ch;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      // Image is wider — fit to height
      drawH = ch;
      drawW = ch * imgAspect;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    } else {
      // Image is taller — fit to width
      drawW = cw;
      drawH = cw / imgAspect;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setupCanvas();
      if (isReady) {
        requestAnimationFrame(() => {
          drawFrame(currentFrameRef.current);
        });
      }
    };
    
    setupCanvas();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setupCanvas, isReady, drawFrame]);

  // Initial draw after ready
  useEffect(() => {
    if (isReady) {
      drawFrame(0);
    }
  }, [isReady, drawFrame]);

  // Listen to frame changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(Math.max(Math.round(latest), 0), TOTAL_FRAMES - 1);
    if (index === currentFrameRef.current) return;
    currentFrameRef.current = index;


    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(index);
    });
  });

  const loadProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <>
      {/* Loading overlay */}
      {!isReady && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#d4d4d4" }}
        >
          <div className="relative mb-8">
            <svg
              className="loader-spin"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M24 4 A20 20 0 0 1 44 24"
                stroke="rgba(0,0,0,0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "rgba(0,0,0,0.4)", letterSpacing: "0.2em" }}
          >
            Loading Akxshv
          </p>
          <div
            className="mt-6 w-48 h-[1px] rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${loadProgress}%`,
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            />
          </div>
          <p
            className="mt-3 text-xs tabular-nums font-light"
            style={{ color: "rgba(0,0,0,0.25)" }}
          >
            {loadProgress}%
          </p>
        </div>
      )}

      {/* The tall scroll container */}
      <div className="h-[500vh] relative">
        {/* Sticky canvas */}
        <div className="sticky top-0 h-screen w-full">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />

        </div>
      </div>
    </>
  );
}
