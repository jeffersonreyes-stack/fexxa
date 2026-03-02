"use client";

import { projects } from "@/data/experience";

export default function ClientLogosGrid() {
  // Extract unique clients
  const uniqueClients = Array.from(
    new Map(
      projects.map((project) => [
        project.client.toLowerCase(),
        project.client,
      ])
    ).values()
  ).sort();

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-4">
          Nuestros Clientes
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Instituciones y empresas que han confiado en nuestros servicios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniqueClients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#1B365D] transition-all duration-300 group cursor-default"
          >
            <p className="text-center font-semibold text-gray-700 group-hover:text-[#1B365D] transition-colors text-sm md:text-base">
              {client}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
