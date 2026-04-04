"use client";

import { useState } from "react";
import { FileText, Download, X } from "lucide-react";

const catalogs = [
  {
    id: "brochure-2025",
    title: "Brochure Oficial Fexxa SAS 2025",
    description: "Presentacion corporativa con capacidades, enfoque y servicios clave.",
    href: "/catalogos/brochure-oficial-fexxa-sas-2025.pdf",
    fileName: "brochure-oficial-fexxa-sas-2025.pdf"
  },
  {
    id: "catalogo-2",
    title: "Catalogo Fexxa",
    description: "Resumen tecnico y comercial de proyectos y soluciones integrales.",
    href: "/catalogos/catalogo-fexxa-2.pdf",
    fileName: "catalogo-fexxa-2.pdf"
  }
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: ""
};

export default function PublicacionesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof catalogs[number] | null>(null);
  const [formValues, setFormValues] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openModal = (catalog: typeof catalogs[number]) => {
    setSelected(catalog);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
    setFormValues(initialForm);
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("phone", formValues.phone);
      formData.append("company", formValues.company);
      formData.append("catalog", selected.title);

      const response = await fetch("https://formspree.io/f/xreabgyj", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setSubmitSuccess(true);

      const link = document.createElement("a");
      link.href = selected.href;
      link.download = selected.fileName;
      link.target = "_blank";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      setSubmitError("No pudimos enviar tus datos. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B365D] mb-6">
            Publicaciones
          </h1>
          <p className="text-gray-600 text-lg">
            Catalogos oficiales para descarga. Accede a la informacion clave de nuestra compania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1B365D]/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[#1B365D]" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#1B365D] mb-3">
                  {catalog.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {catalog.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openModal(catalog)}
                className="inline-flex items-center justify-center bg-[#C5A059] text-white font-bold py-3 px-6 rounded hover:bg-[#b08d4b] transition-colors"
              >
                <Download className="mr-2 w-5 h-5" />
                Descargar
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar formulario"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-serif font-bold text-[#1B365D] mb-2">
              Formulario de contacto
            </h3>
            <p className="text-gray-600 mb-6">
              Completa tus datos para descargar: <span className="font-semibold">{selected.title}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formValues.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>

              {submitError && (
                <p className="text-sm text-red-600">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-sm text-green-600">Gracias. Descarga iniciada.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-[#C5A059] text-white font-bold py-3 px-6 rounded hover:bg-[#b08d4b] transition-colors"
              >
                {isSubmitting ? "Enviando..." : "Enviar y descargar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
