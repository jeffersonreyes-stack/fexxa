import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
            Hablemos de su Proyecto
          </h1>
          <p className="text-gray-600 text-lg">
            Estamos listos para materializar sus ideas con precisión y diseño.
            Diligencie el formulario y nuestro equipo técnico lo contactará a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#C5A059]">
              <h3 className="text-xl font-serif font-bold text-[#1B365D] mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">Teléfonos</p>
                    <p className="text-gray-800 font-bold text-lg">+57 318 220 8936</p>
                    <p className="text-gray-600 text-sm">Ingeniería</p>
                    <p className="text-gray-800 font-bold text-lg mt-1">+57 316 372 6733</p>
                    <p className="text-gray-600 text-sm">Remodelaciones - Mobiliario</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">Correos Electrónicos</p>
                    <a href="mailto:gerencia@fexxa.com.co" className="block text-gray-800 font-medium hover:text-[#C5A059] transition">gerencia@fexxa.com.co</a>
                    <a href="mailto:mueblesydisenos5042@gmail.com" className="block text-gray-800 font-medium hover:text-[#C5A059] transition">mueblesydisenos5042@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">Ubicación</p>
                    <p className="text-gray-800 font-medium">AV 6N # 14N - 31 oficina 502</p>
                    <p className="text-gray-600 text-sm">Cali, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">Horario de Atención</p>
                    <p className="text-gray-800 font-medium">Lunes a Viernes</p>
                    <p className="text-gray-600 text-sm">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0!2d-76.5437!3d3.4616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6640001!2sAv.+6N+%2314N-31%2C+Cali%2C+Valle+del+Cauca!5e0!3m2!1ses!2sco!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Fexxa - AV 6N # 14N - 31, Cali"
              />
            </div>
          </div>

          {/* Form Side */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
