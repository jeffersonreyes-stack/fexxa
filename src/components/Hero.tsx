import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gray-900">
         {/* Placeholder for video */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video> */}
        {/* Using an image placeholder for now since I don't have the video asset */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      {/* Overlay - Reduced opacity to 20% per request */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        {/* Increased text size by ~1.8x and updated content */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-7xl leading-[1.1] mb-8 animate-fade-in-up">
          Diseñamos, remodelamos y construimos espacios que inspiran y transforman vidas
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mb-10 text-gray-100 drop-shadow-md">
          Experiencia, ingeniería de precisión y diseño de autor al servicio de tus proyectos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/remodelaciones"
            className="px-8 py-3 bg-[#C5A059] text-white font-medium rounded hover:bg-[#b08d4b] transition duration-300"
          >
            Ver Remodelaciones
          </Link>
          <Link
            href="/ingenieria"
            className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white hover:text-[#1B365D] transition duration-300 backdrop-blur-sm"
          >
            Servicios de Ingeniería
          </Link>
        </div>
      </div>
    </section>
  );
}
