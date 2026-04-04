"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  images: string[];
  title: string;
  category: string;
  description?: string;
  linkPrefix: string; // e.g., "remodelaciones" or "mobiliario"
}

export default function ProductCard({ id, images, title, category, description, linkPrefix }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const productUrl = `/producto/${linkPrefix}/${id}`;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-white">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-50 flex items-center justify-center">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`${title} - image ${currentImageIndex + 1}`}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Zoom Overlay (Click to view details) */}
        <Link href={productUrl} className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
           <span className="text-white flex items-center gap-2 bg-[#C5A059] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <Search className="w-4 h-4" /> Ver Detalles
           </span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">{category}</p>
                <Link href={productUrl} className="hover:underline decoration-[#1B365D]">
                  <h3 className="text-xl font-serif font-bold text-[#1B365D]">{title}</h3>
                </Link>
            </div>
        </div>
        {description && <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>}

        {/* Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">FEXXA Design</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">Precisión de Ingeniería</span>
        </div>
      </div>
    </div>
  );
}
