import { HardHat, Droplets, ClipboardCheck, Ruler, Building2, Truck } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Obras Civiles y Urbanísticas",
    description: "Ejecución de proyectos de infraestructura vial, pavimentación, y adecuación de espacios públicos con cumplimiento normativo riguroso."
  },
  {
    icon: Droplets,
    title: "Diseño y construcción de sistemas de agua potable y alcantarillado",
    description: "Diseño y construcción de plantas de tratamiento de aguas residuales, acueductos y sistemas de alcantarillado complejos."
  },
  {
    icon: ClipboardCheck,
    title: "Consultoría e Interventoría",
    description: "Supervisión técnica, administrativa y financiera de obras públicas y privadas, asegurando calidad y cumplimiento de cronogramas."
  },
  {
    icon: Building2,
    title: "Edificaciones Institucionales",
    description: "Construcción y reforzamiento estructural de colegios, hospitales y edificios administrativos."
  },
  {
    icon: Ruler,
    title: "Diseño y Cálculo Estructural",
    description: "Estudios de vulnerabilidad sísmica y diseño estructural optimizado para seguridad y eficiencia."
  },
  {
    icon: Truck,
    title: "Movimientos de Tierra",
    description: "Excavaciones, rellenos y adecuación de terrenos con maquinaria especializada."
  }
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#1B365D] hover:shadow-xl transition-shadow duration-300">
          <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <service.icon className="w-8 h-8 text-[#1B365D]" />
          </div>
          <h3 className="text-xl font-serif font-bold text-[#1B365D] mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
