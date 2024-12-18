"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ClientsSection() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      role: language === "es" ? "Director de Innovación" : "Innovation Director",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      text: language === "es"
        ? "Ipinnovatech ha transformado completamente nuestra gestión de conocimiento. La implementación fue impecable."
        : "Ipinnovatech has completely transformed our knowledge management. The implementation was flawless."
    },
    {
      name: "Sarah Johnson",
      role: language === "es" ? "CEO" : "CEO",
      company: "DataFlow Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      text: language === "es"
        ? "La solución de IA personalizada superó todas nuestras expectativas. El soporte es excepcional."
        : "The custom AI solution exceeded all our expectations. The support is exceptional."
    },
    {
      name: "Miguel Santos",
      role: language === "es" ? "CTO" : "CTO",
      company: "InnovaSoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      text: language === "es"
        ? "La plataforma es intuitiva y potente. Ha mejorado significativamente nuestra productividad."
        : "The platform is intuitive and powerful. It has significantly improved our productivity."
    }
  ];

  return (
    <section id="clients" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Nuestros Clientes" : "Our Clients"}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {language === "es"
              ? "Lo que dicen nuestros clientes sobre nosotros"
              : "What our clients say about us"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 border-gray-200 hover:border-[var(--primary-blue)] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-[var(--primary-blue)]">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}