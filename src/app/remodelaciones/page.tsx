"use client";

import { useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProductCard from "@/components/ProductCard";
import { projects } from "@/data/products";

const categories = ["Todos", "Cocinas", "Baños", "Salas", "Oficina", "Escolar"];

export default function RemodelacionesPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] text-center mb-6">
          Remodelaciones
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Transformamos espacios ordinarios en ambientes extraordinarios.
          Cada proyecto es una fusión de funcionalidad técnica y estética refinada.
        </p>

        {/* Before/After Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-serif font-bold text-[#1B365D] mb-8 text-center">Transformaciones Reales</h2>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" // Old construction/empty
            afterImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop" // New office
            alt="Remodelación Oficina"
          />
        </div>

        {/* Gallery Section */}
        <div>
           <h2 className="text-2xl font-serif font-bold text-[#1B365D] mb-8 text-center">Nuestros Proyectos</h2>
           <ProductFilter
             categories={categories}
             activeCategory={activeCategory}
             onSelectCategory={setActiveCategory}
           />

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProjects.map(project => (
               <ProductCard
                 key={project.id}
                 {...project}
                 linkPrefix="remodelaciones"
               />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
