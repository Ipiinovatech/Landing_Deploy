"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Database, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "SaaS",
      subtitle: language === "es" ? "Software como servicio" : "Software as a Service",
      features: language === "es" 
        ? [
          "Software es almacenado en un servidor remoto",
          "El software es propiedad del cliente",
          "El software es entregado y administrado por el proveedor",
          "El mantenimiento y soporte lo realiza el proveedor"
        ]
        : [
          "Software is stored on a remote server",
          "Software is owned by the client",
          "Software is delivered and managed by the provider",
          "Maintenance and support is done by the provider"
        ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "IaaS",
      subtitle: language === "es" ? "Infraestructura como servicio" : "Infrastructure as a Service",
      features: language === "es"
        ? [
          "Servicio enfocado en empresas de tecnología",
          "Permite ajustar la infraestructura a las necesidades del cliente",
          "El cliente usa los recursos sin intervención humana",
          "El proveedor arrienda sus servidores para ser usado por sus clientes"
        ]
        : [
          "Service focused on technology companies",
          "Allows infrastructure adjustment to client needs",
          "Client uses resources without human intervention",
          "Provider leases servers to be used by clients"
        ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "PaaS",
      subtitle: language === "es" ? "Plataforma como servicio" : "Platform as a Service",
      features: language === "es"
        ? [
          "La combinación de IaaS y SaaS como una plataforma",
          "La integración del software con la infraestructura permite crear una plataforma",
          "Usa la tecnología más reciente",
          "Menos costos, manejo financiero más flexible y eficiente y valor agregado"
        ]
        : [
          "The combination of IaaS and SaaS as a platform",
          "Software and infrastructure integration enables platform creation",
          "Uses the latest technology",
          "Lower costs, more flexible and efficient financial management, and added value"
        ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-[var(--bg-gradient-end)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8">
              {language === "es"
                ? "Además de nuestros productos, nos especializamos en desarrollar servicios para nuestros clientes basados en Cloud Computing o Servicios en la Nube, qué es una tecnología que permite acceso remoto a software, almacenamiento de archivos y procesamiento de datos a través de internet, sin necesidad de instalar aplicaciones localmente."
                : "In addition to our products, we specialize in developing services for our clients based on Cloud Computing or Cloud Services, which is a technology that allows remote access to software, file storage, and data processing through the internet, without the need to install applications locally."}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[var(--primary-blue)] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-700">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Cloud className="h-5 w-5 text-[var(--primary-blue)] mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}