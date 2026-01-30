"use client";

import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove as any);
      window.addEventListener("touchmove", handleMove as any);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("touchmove", handleMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("touchmove", handleMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg cursor-col-resize select-none shadow-xl group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Background Image (After) - The base layer */}
      <div className="absolute inset-0">
        <img
            src={afterImage}
            alt={`After ${alt}`}
            className="w-full h-full object-cover"
            draggable={false}
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">Después</div>
      </div>

      {/* Foreground Image (Before) - Clipped */}
      {/* using clip-path avoids width calculation issues during hydration/rendering */}
      <div
        className="absolute inset-0 border-r-2 border-white/50"
        style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img
            src={beforeImage}
            alt={`Before ${alt}`}
            className="w-full h-full object-cover"
            draggable={false}
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">Antes</div>
      </div>

      {/* Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          <MoveHorizontal className="text-[#1B365D] w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
