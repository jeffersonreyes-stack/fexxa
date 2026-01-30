"use client";

import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    // Construct mailto link
    const subject = `Nuevo Contacto Web: ${data.projectType} - ${data.name}`;
    const body = `Nombre: ${data.name}%0D%0AEmail: ${data.email}%0D%0ATeléfono: ${data.phone}%0D%0ATipo de Proyecto: ${data.projectType}%0D%0AMensaje: ${data.message}`;

    // Open mail client
    window.location.href = `mailto:congapacifico@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">¡Gracias por escribirnos!</h3>
        <p className="text-green-700">
          Hemos abierto tu cliente de correo para enviar la solicitud.
          Si no se abrió, por favor contáctanos directamente a nuestros correos o WhatsApp.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-green-600 font-medium hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-xl">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
          <input
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B365D] focus:border-transparent outline-none transition-all"
            placeholder="Juan Pérez"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B365D] focus:border-transparent outline-none transition-all"
            placeholder="juan@ejemplo.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp *</label>
          <input
            {...register("phone", { required: "El teléfono es obligatorio" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B365D] focus:border-transparent outline-none transition-all"
            placeholder="+57 300 123 4567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Proyecto *</label>
          <select
            {...register("projectType", { required: "Seleccione un tipo" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B365D] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Seleccione una opción...</option>
            <option value="Remodelación Residencial">Remodelación Residencial</option>
            <option value="Remodelación Corporativa">Remodelación Corporativa</option>
            <option value="Mobiliario a Medida">Mobiliario a Medida</option>
            <option value="Ingeniería / Obra Civil">Ingeniería / Obra Civil</option>
            <option value="Consultoría">Consultoría</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Detalles del Proyecto</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1B365D] focus:border-transparent outline-none transition-all"
            placeholder="Cuéntanos brevemente qué necesitas..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B365D] text-white font-bold py-4 rounded-md hover:bg-[#152a48] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Send className="w-5 h-5" />
          Enviar Solicitud
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          Al enviar este formulario, aceptas nuestra política de tratamiento de datos.
        </p>
      </div>
    </form>
  );
}
