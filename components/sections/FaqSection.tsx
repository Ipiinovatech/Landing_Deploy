"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FaqSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: language === "es"
        ? "¿Qué servicios ofrece IPINNOVATECH?"
        : "What services does IPINNOVATECH offer?",
      answer: language === "es"
        ? "IPINNOVATECH ofrece servicios de IA avanzada, automatización de procesos, desarrollo de software personalizado, consultoría tecnológica y soluciones de seguridad digital."
        : "IPINNOVATECH offers advanced AI services, process automation, custom software development, technology consulting, and digital security solutions."
    },
    {
      question: language === "es"
        ? "¿Cómo puedo implementar sus soluciones en mi empresa?"
        : "How can I implement your solutions in my company?",
      answer: language === "es"
        ? "Nuestro equipo realiza una evaluación inicial de sus necesidades, desarrolla un plan personalizado y proporciona soporte continuo durante todo el proceso de implementación."
        : "Our team conducts an initial assessment of your needs, develops a customized plan, and provides ongoing support throughout the implementation process."
    },
    {
      question: language === "es"
        ? "¿Qué soporte técnico ofrecen?"
        : "What technical support do you offer?",
      answer: language === "es"
        ? "Ofrecemos soporte técnico 24/7, mantenimiento preventivo, actualizaciones regulares y capacitación continua para su equipo."
        : "We offer 24/7 technical support, preventive maintenance, regular updates, and ongoing training for your team."
    },
    {
      question: language === "es"
        ? "¿Cuál es el tiempo promedio de implementación?"
        : "What is the average implementation time?",
      answer: language === "es"
        ? "El tiempo de implementación varía según el proyecto, pero típicamente oscila entre 2-8 semanas, dependiendo de la complejidad y alcance del proyecto."
        : "Implementation time varies by project, but typically ranges from 2-8 weeks, depending on project complexity and scope."
    },
    {
      question: language === "es"
        ? "¿Ofrecen servicios personalizados?"
        : "Do you offer customized services?",
      answer: language === "es"
        ? "Sí, desarrollamos soluciones completamente personalizadas según las necesidades específicas de cada cliente y sector empresarial."
        : "Yes, we develop fully customized solutions according to the specific needs of each client and business sector."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-[var(--bg-gradient-end)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Preguntas Frecuentes" : "FAQ"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios"
              : "Find answers to common questions about our services"}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[var(--primary-blue)] transition-all duration-300">
                <CardContent className="p-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-[var(--primary-blue)]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[var(--primary-blue)]" />
                    )}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}