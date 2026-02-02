"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TrustCounters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#F3F4F6]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Counter Section */}
          <div className="flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-12">
            <div className="text-7xl md:text-8xl font-bold text-[#1B365D] mb-4 font-serif">
              {isInView ? (
                <CountUp
                  start={0}
                  end={18}
                  duration={2.5}
                  prefix="+"
                />
              ) : (
                <span>0</span>
              )}
            </div>
            <p className="text-gray-600 font-medium tracking-widest uppercase text-xl">
              Años de Experiencia
            </p>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1B365D]">
              Experiencia y Confianza
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Nuestra trayectoria de más de 18 años es el pilar de nuestra solidez. Construimos relaciones duraderas basadas en la honestidad y el cumplimiento, transformando no solo espacios, sino la confianza que nuestros clientes depositan en nosotros. Cada obra es un compromiso de calidad garantizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
