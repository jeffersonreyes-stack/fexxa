import LogoCloud from "@/components/LogoCloud";
import ClientLogosGrid from "@/components/ClientLogosGrid";

export default function ExperienciaPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] text-center mb-6">
          Experiencia y Respaldo
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
          Nuestra trayectoria se construye sobre la confianza de grandes entidades y la ejecución impecable de obras de alta complejidad.
        </p>
      </div>

      {/* Logo Cloud Section */}
      <div className="mb-20">
        <LogoCloud />
      </div>

      {/* Clients Grid Section */}
      <ClientLogosGrid />
    </div>
  );
}
