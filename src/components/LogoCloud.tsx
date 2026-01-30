"use client";

import { motion } from "framer-motion";

const clients = [
  "EMCALI",
  "ACUAVALLE",
  "MinDefensa",
  "SENA",
  "Universidad del Valle",
  "Alcaldía de Cali",
  "Gobernación del Valle",
  "CVC",
  "INVIAS",
  "Policía Nacional"
];

// Duplicate list for infinite loop
const marqueeClients = [...clients, ...clients];

export default function LogoCloud() {
  return (
    <div className="w-full bg-[#1B365D] py-12 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-white font-serif text-xl opacity-80">Confían en Nosotros</h3>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {marqueeClients.map((client, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold text-white/50 uppercase tracking-widest hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
