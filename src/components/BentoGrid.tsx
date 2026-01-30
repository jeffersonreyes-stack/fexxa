import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] text-center mb-12">
          Nuestras Líneas de Negocio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
          {/* Card 1: Remodelaciones */}
          <Link
            href="/remodelaciones"
            className="group relative h-full w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Línea de Confort</h3>
              <p className="text-gray-200 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Remodelaciones, cocinas integrales y mobiliario de autor.
              </p>
              <span className="inline-flex items-center text-[#C5A059] font-medium group-hover:text-white transition-colors">
                Explorar <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Card 2: Ingeniería */}
          <Link
            href="/ingenieria"
            className="group relative h-full w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Ingeniería e Infraestructura</h3>
              <p className="text-gray-200 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Obras civiles, redes hidrosanitarias y consultoría técnica.
              </p>
              <span className="inline-flex items-center text-[#C5A059] font-medium group-hover:text-white transition-colors">
                Conocer Servicios <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
