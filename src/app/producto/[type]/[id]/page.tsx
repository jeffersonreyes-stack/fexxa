import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { projects, furniture } from "@/data/products";

// Ensure static export works with all product paths
export function generateStaticParams() {
  const paths: { type: string; id: string }[] = [];

  projects.forEach((project) => {
    paths.push({ type: "remodelaciones", id: project.id.toString() });
  });

  furniture.forEach((item) => {
    paths.push({ type: "mobiliario", id: item.id.toString() });
  });

  return paths;
}

// Define the client component to handle the carousel in a separate file
import ProductDetailCarousel from "./ProductDetailCarousel";

export default async function ProductDetailPage({ params }: { params: Promise<{ type: string; id: string }> }) {
  const { type, id } = await params;

  let product = null;
  let backLink = "/";

  if (type === "remodelaciones") {
    product = projects.find((p) => p.id.toString() === id);
    backLink = "/remodelaciones";
  } else if (type === "mobiliario") {
    product = furniture.find((f) => f.id.toString() === id);
    backLink = "/mobiliario";
  }

  if (!product) {
    notFound();
  }

  const defaultMessage = `Hola Fexxa, me gustaría obtener más información sobre el producto o servicio: ${product.title}.`;
  const whatsappUrl = `https://wa.me/573182208936?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <main className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Link
          href={backLink}
          className="inline-flex items-center text-[#C5A059] hover:text-[#1B365D] transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a {backLink === "/remodelaciones" ? "Remodelaciones" : "Mobiliario"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image Carousel */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg p-4">
             <ProductDetailCarousel images={product.images || []} title={product.title} />
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-[#C5A059] font-bold tracking-wider uppercase text-sm mb-2 block">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
              {product.title}
            </h1>

            <div className="h-1 w-20 bg-[#C5A059] mb-8 rounded-full"></div>

            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="leading-relaxed">
                {product.description || "Contáctanos para más detalles sobre este producto."}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-10">
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">Detalles del Servicio</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#C5A059] rounded-full mr-3"></span>
                  Precisión de ingeniería y diseño a medida
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#C5A059] rounded-full mr-3"></span>
                  Materiales de alta calidad y durabilidad
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#C5A059] rounded-full mr-3"></span>
                  Garantía FEXXA Design
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#1B365D] hover:bg-[#2A4B7C] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
