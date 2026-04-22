"use client";

import ProductCard from "@/components/ProductCard";
import { estructuraMetalica } from "@/data/products";

export default function EstructuraMetalicaPage() {

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] text-center mb-6">
          Estructura Metálica
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Diseñamos, fabricamos y montamos estructuras metálicas arquitectónicas que brindan soluciones robustas y estéticas para cubiertas, pérgolas y ampliaciones, integrando materiales de alta resistencia con acabados de primera calidad.
        </p>

        {/* Gallery Section */}
        <div>
           <h2 className="text-2xl font-serif font-bold text-[#1B365D] mb-8 text-center">Nuestros Proyectos</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {estructuraMetalica.map(project => (
               <ProductCard
                 key={project.id}
                 {...project}
                 linkPrefix="estructura-metalica"
               />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
