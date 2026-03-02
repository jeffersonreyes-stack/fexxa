"use client";

import { useState } from "react";
import { projects } from "@/data/experience";
import { Search } from "lucide-react";

export default function ExperienceTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Filter Header */}
      <div className="p-6 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-serif font-bold text-[#1B365D]">Lista de Clientes</h3>
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar por cliente..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B365D] focus:border-transparent text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold border-b">Cliente / Entidad</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-[#1B365D] align-top">{project.client}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={1} className="p-8 text-center text-gray-500">
                  No se encontraron resultados para "{searchTerm}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Count */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-right">
        Mostrando {filteredProjects.length} clientes
      </div>
    </div>
  );
}
