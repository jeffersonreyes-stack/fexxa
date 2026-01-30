"use client";

import { useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import ProductCard from "@/components/ProductCard";

const categories = ["Todos", "Camas", "Clósets", "Estanterías", "Mesas"];

const furniture = [
  {
    id: 1,
    title: "Cama Flotante King",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1505693416388-b0346ef41439?q=80&w=2674&auto=format&fit=crop",
    description: "Diseño estructural oculto con iluminación LED inferior y cabecera tapizada."
  },
  {
    id: 2,
    title: "Walk-in Closet Modular",
    category: "Clósets",
    image: "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2530&auto=format&fit=crop",
    description: "Sistema de almacenamiento inteligente con herrajes de cierre lento."
  },
  {
    id: 3,
    title: "Biblioteca Geométrica",
    category: "Estanterías",
    image: "https://images.unsplash.com/photo-1594056908332-94fa9158c3bb?q=80&w=2670&auto=format&fit=crop",
    description: "Estantería de acero y madera con diseño asimétrico de alta carga."
  },
  {
    id: 4,
    title: "Mesa de Juntas Ejecutiva",
    category: "Mesas",
    image: "https://images.unsplash.com/photo-1505409627970-66b520069482?q=80&w=2574&auto=format&fit=crop",
    description: "Superficie en vidrio templado con bases de concreto pulido."
  },
  {
    id: 5,
    title: "Closet Empotrado Minimalista",
    category: "Clósets",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2670&auto=format&fit=crop",
    description: "Puertas corredizas de piso a techo con sistema de rieles silenciosos."
  },
  {
    id: 6,
    title: "Cama Multifuncional",
    category: "Camas",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2691&auto=format&fit=crop",
    description: "Incluye almacenamiento inferior y mesas de noche integradas."
  },
];

export default function MobiliarioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos"
    ? furniture
    : furniture.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
