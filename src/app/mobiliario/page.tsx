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
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.46%20PM%20(2).jpeg",
    description: "Diseño estructural oculto con iluminación LED inferior y cabecera tapizada."
  },
  {
    id: 2,
    title: "Walk-in Closet Modular",
    category: "Clósets",
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.47%20PM%20(2).jpeg",
    description: "Sistema de almacenamiento inteligente con herrajes de cierre lento."
  },
  {
    id: 3,
    title: "Biblioteca Geométrica",
    category: "Estanterías",
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.47%20PM%20(3).jpeg",
    description: "Estantería de acero y madera con diseño asimétrico de alta carga."
  },
  {
    id: 4,
    title: "Mesa de Juntas Ejecutiva",
    category: "Mesas",
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.46%20PM%20(3).jpeg",
    description: "Superficie en vidrio templado con bases de concreto pulido."
  },
  {
    id: 5,
    title: "Closet Empotrado Minimalista",
    category: "Clósets",
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.46%20PM%20(1).jpeg",
    description: "Puertas corredizas de piso a techo con sistema de rieles silenciosos."
  },
  {
    id: 6,
    title: "Cama Multifuncional",
    category: "Camas",
    image: "https://fexxa-web-3882.s3.us-east-1.amazonaws.com/imagenes%20productos%20y%20servicios/fexxa/WhatsApp%20Image%202026-03-30%20at%208.35.48%20PM%20(1).jpeg",
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
