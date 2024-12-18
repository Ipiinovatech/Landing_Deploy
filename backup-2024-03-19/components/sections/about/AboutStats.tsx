"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Globe2, Award, Cpu } from "lucide-react";

export function AboutStats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "13+",
      label: language === "es" ? "Años de Experiencia" : "Years of Experience",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      value: "4",
      label: language === "es" ? "Países" : "Countries",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "100+",
      label: language === "es" ? "Proyectos Exitosos" : "Successful Projects",
      color: "from-green-600 to-green-400"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      value: "50+",
      label: language === "es" ? "Soluciones de IA" : "AI Solutions",
      color: "from-red-600 to-red-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="modern-card p-6 flex flex-col items-center text-center group hover:scale-105"
        >
          <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent mb-2">
            {stat.value}
          </h3>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}