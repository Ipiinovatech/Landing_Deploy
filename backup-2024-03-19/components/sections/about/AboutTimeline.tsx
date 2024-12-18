"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutTimeline() {
  const { language } = useLanguage();

  const timelineEvents = [
    {
      year: "2007",
      title: language === "es" ? "Fundación" : "Foundation",
      description: language === "es" 
        ? "Inicio de operaciones en Colombia"
        : "Started operations in Colombia"
    },
    {
      year: "2015",
      title: language === "es" ? "Expansión Regional" : "Regional Expansion",
      description: language === "es"
        ? "Apertura de operaciones en Perú y Ecuador"
        : "Opened operations in Peru and Ecuador"
    },
    {
      year: "2020",
      title: language === "es" ? "Innovación en IA" : "AI Innovation",
      description: language === "es"
        ? "Lanzamiento de soluciones de IA"
        : "Launch of AI solutions"
    },
    {
      year: "2023",
      title: language === "es" ? "Presencia Global" : "Global Presence",
      description: language === "es"
        ? "Expansión a Estados Unidos"
        : "Expansion to United States"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--primary-blue)] to-[var(--accent-blue)]" />

        {/* Timeline Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div className="modern-card p-6 hover:scale-102 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>

              {/* Year Bubble */}
              <div className="w-2/12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white flex items-center justify-center font-bold shadow-lg">
                  {event.year}
                </div>
              </div>

              {/* Empty Space */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}