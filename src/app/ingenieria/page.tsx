import ServiceGrid from "@/components/ServiceGrid";
import { Download } from "lucide-react";

export default function IngenieriaPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
            Ingeniería e Infraestructura
          </h1>
          <p className="text-gray-600 text-lg">
            Soluciones integrales para el sector público y privado.
            Nuestra experiencia técnica garantiza la viabilidad y sostenibilidad de cada proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <ServiceGrid />

        {/* CTA Section */}
        <div className="mt-20 bg-[#1B365D] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Descargue nuestro Portafolio Corporativo</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Conozca en detalle nuestra capacidad técnica, maquinaria y certificaciones.
              Ideal para procesos licitatorios y evaluación de proveedores.
            </p>
            <a
              href="/publicaciones"
              className="inline-flex items-center bg-[#C5A059] text-white font-bold py-3 px-8 rounded hover:bg-[#b08d4b] transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              Ver Publicaciones
            </a>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3 w-96 h-96 text-white fill-current" viewBox="0 0 200 200">
                  <path d="M45.7,-70.5C58.9,-62.5,69.3,-49.6,75.9,-35.1C82.5,-20.6,85.4,-4.6,82.4,10.1C79.4,24.8,70.6,38.2,59.3,48.6C48,59,34.2,66.4,19.6,69.4C5,72.4,-10.4,71,-24.6,65.8C-38.8,60.6,-51.8,51.6,-61.6,39.6C-71.4,27.6,-78,12.6,-76.6,-1.8C-75.1,-16.2,-65.6,-30,-54.2,-40.8C-42.8,-51.6,-29.6,-59.4,-15.8,-63.3C-2,-67.2,12.4,-67.2,26.8,-67.2" transform="translate(100 100)" />
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
