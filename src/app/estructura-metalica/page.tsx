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

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
             {estructuraMetalica.map(project => (
               <ProductCard
                 key={project.id}
                 {...project}
                 linkPrefix="estructura-metalica"
               />
             ))}

             {/* Copy Block */}
             <div className="md:col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col justify-center">
               <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1B365D] mb-6">
                 La Excelencia en Nuestros Terminados Arquitectónicos
               </h3>
               <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                 <p>
                   En FEXXA, entendemos que una estructura metálica es mucho más que resistencia y capacidad de carga; es la columna vertebral de tu visión. Por eso, para nosotros, el terminado arquitectónico es el punto donde la ingeniería se encuentra con el diseño.
                 </p>
                 <p>
                   No nos conformamos únicamente con construir estructuras robustas. Nos apasiona entregar acabados impecables que no solo definen la identidad visual y la elegancia de la obra, sino que actúan como la defensa principal contra el desgaste y el clima. Sabemos que un terminado de alta calidad garantiza que tu inversión perdure impecable a lo largo del tiempo, logrando la combinación perfecta entre durabilidad extrema y sofisticación estética.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
