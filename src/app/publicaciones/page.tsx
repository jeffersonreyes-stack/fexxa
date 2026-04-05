"use client";

import { useState } from "react";
import { FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";

const catalogs = [
  {
    id: "brochure-2025",
    title: "Brochure Oficial Fexxa SAS 2025",
    description: "Presentacion corporativa con capacidades, enfoque y servicios clave.",
    href: "/catalogos/brochure-oficial-fexxa-sas-2025.pdf",
    fileName: "brochure-oficial-fexxa-sas-2025.pdf"
  },
  {
    id: "catalogo-2",
    title: "Catalogo Fexxa",
    description: "Resumen tecnico y comercial de proyectos y soluciones integrales.",
    href: "/catalogos/catalogo-fexxa-2.pdf",
    fileName: "catalogo-fexxa-2.pdf"
  }
];

export default function PublicacionesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = catalogs[activeIndex];

  return (
    <div className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-4">
            Publicaciones
          </h1>
          <p className="text-gray-600 text-lg">
            Catalogos oficiales. Visualizalos directamente o descargalos.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {catalogs.map((catalog, idx) => (
            <button
              key={catalog.id}
              onClick={() => setActiveIndex(idx)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all text-sm md:text-base ${
                idx === activeIndex
                  ? "bg-[#1B365D] text-white shadow-lg"
                  : "bg-white text-[#1B365D] border border-gray-200 hover:border-[#C5A059] hover:text-[#C5A059]"
              }`}
            >
              <FileText className="w-4 h-4" />
              {catalog.title}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-4 bg-[#1B365D]">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">{active.title}</h2>
              <p className="text-white/70 text-sm">{active.description}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Nav arrows */}
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? catalogs.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-white/80 text-sm font-medium">
                {activeIndex + 1} / {catalogs.length}
              </span>
              <button
                onClick={() => setActiveIndex((prev) => (prev === catalogs.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {/* Download button */}
              <a
                href={active.href}
                download={active.fileName}
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#b08d4b] text-white font-bold py-2 px-5 rounded-full transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Descargar
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="w-full" style={{ height: "80vh" }}>
            <iframe
              key={active.id}
              src={`${active.href}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full border-0"
              title={active.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
