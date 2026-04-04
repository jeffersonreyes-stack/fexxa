import LogoCloud from "@/components/LogoCloud";

const importantClients = [
  "Consejo Superior de la Judicatura",
  "Universidad del Valle",
  "Emcali EICE E.S.P.",
  "Servicio Nacional de Aprendizaje (SENA)",
  "Departamento del Valle del Cauca",
  "Alcaldía Mayor de Bogotá - IDARTES",
  "Ministerio de Defensa Nacional",
  "Industria Licorera de Caldas",
  "Acuavalle S.A. E.S.P.",
  "Secretaría de Educación y Deporte - Cali",
  "Fondo de Bienestar Social - Contraloría General",
  "EDAT S.A. E.S.P. Oficial - Tolima"
];

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

      {/* Clients Section */}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B365D] mb-4">
            Clientes más importantes
          </h2>
          <p className="text-gray-600 text-lg">
            Entidades públicas, académicas y privadas que respaldan nuestra trayectoria.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantClients.map((client) => (
            <div
              key={client}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 text-center"
            >
              <p className="text-[#1B365D] font-semibold text-lg">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
