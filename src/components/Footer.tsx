import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif font-bold mb-4">FEXXA</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Diseñamos y remodelamos espacios que inspiran y transforman vidas.
            Ingeniería de precisión y mobiliario de autor.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-serif font-semibold mb-4 text-[#C5A059]">Explorar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/remodelaciones" className="hover:text-white transition">Remodelaciones</Link></li>
            <li><Link href="/mobiliario" className="hover:text-white transition">Mobiliario</Link></li>
            <li><Link href="/ingenieria" className="hover:text-white transition">Ingeniería</Link></li>
            <li><Link href="/experiencia" className="hover:text-white transition">Experiencia</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-serif font-semibold mb-4 text-[#C5A059]">Contacto</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#C5A059]" />
              <div className="flex flex-col">
                <a href="mailto:gerencia@fexxa.com.co" className="hover:text-white">gerencia@fexxa.com.co</a>
                <a href="mailto:mueblesydisenos5042@gmail.com" className="hover:text-white">mueblesydisenos5042@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#C5A059]" />
              <span>+57 300 000 0000 (Líneas Comerciales)</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
              <span>Cali, Colombia</span>
            </div>
          </div>

          <div className="mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition">
              <Instagram className="w-6 h-6" />
              <span className="font-medium">Síguenos en Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Fexxa Ingeniería y Diseño. Todos los derechos reservados.
      </div>
    </footer>
  );
}
