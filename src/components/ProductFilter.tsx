"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProductFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
            activeCategory === category
              ? "bg-[#1B365D] text-white border-[#1B365D]"
              : "bg-white text-gray-600 border-gray-300 hover:border-[#1B365D] hover:text-[#1B365D]"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
