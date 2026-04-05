"use client";

import { useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import ProductCard from "@/components/ProductCard";
import { furniture } from "@/data/products";

const categories = ["Todos", "Camas", "Closets", "Salas"];

export default function MobiliarioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos"
    ? furniture
    : furniture.filter(p => p.category === activeCategory);

  return (
    <div className="pt-44 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] text-center mb-6">
          Mobiliario de Autor
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Precisión de ingeniería aplicada al diseño de interiores.
          Cada pieza es fabricada con materiales de primera calidad y atención obsesiva al detalle.
        </p>

        <ProductFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <ProductCard
              key={item.id}
              {...item}
              linkPrefix="mobiliario"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
