"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: 18,
    label: "Años de Experiencia",
    prefix: "+",
    suffix: "",
  },
  {
    value: 3451,
    label: "Patrimonio Sólido",
    prefix: "$",
    suffix: "M",
    separator: ".",
  },
  {
    value: 0,
    label: "Endeudamiento",
    prefix: "",
    suffix: "%",
  },
];

export default function TrustCounters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#F3F4F6]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="text-5xl md:text-6xl font-bold text-[#1B365D] mb-2 font-serif">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    separator={stat.separator}
                  />
                ) : (
                  <span>0</span>
                )}
              </div>
              <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
