"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProductDetailCarouselProps {
  images: string[];
  title: string;
}

export default function ProductDetailCarousel({ images, title }: ProductDetailCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div
          className="relative aspect-video w-full overflow-hidden bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-inner group cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[currentIndex]}
            alt={`${title} - view ${currentIndex + 1}`}
            className="h-full w-full object-contain transition-transform duration-500 ease-in-out"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1B365D] rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          title={title}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onChangeIndex={setCurrentIndex}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  title,
  currentIndex,
  onClose,
  onChangeIndex,
}: {
  images: string[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (idx: number) => void;
}) {
  const handlePrev = useCallback(() => {
    onChangeIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onChangeIndex]);

  const handleNext = useCallback(() => {
    onChangeIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onChangeIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white z-[110] bg-black/40 rounded-full p-2 transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-sm font-medium z-[110]">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-3 z-[110] transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-3 z-[110] transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[110] max-w-[90vw] overflow-x-auto px-2 py-1">
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); onChangeIndex(idx); }}
              className={`w-16 h-16 shrink-0 rounded overflow-hidden border-2 transition-all ${
                idx === currentIndex ? "border-[#C5A059] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={imgSrc}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
