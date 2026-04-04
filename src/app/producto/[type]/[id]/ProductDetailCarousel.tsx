"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductDetailCarouselProps {
  images: string[];
  title: string;
}

export default function ProductDetailCarousel({ images, title }: ProductDetailCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-inner group">
        <img
          src={images[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          className="h-full w-full object-contain transition-transform duration-500 ease-in-out"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1B365D] rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1B365D] rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-4">
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all duration-300 ${
                idx === currentIndex ? "border-[#C5A059] opacity-100 shadow-md scale-105" : "border-transparent opacity-60 hover:opacity-100 bg-white"
              }`}
            >
              <img
                src={imgSrc}
                alt={`${title} thumbnail ${idx + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
