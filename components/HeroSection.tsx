"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Lock } from "lucide-react";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: language === "es" ? "IA Avanzada" : "Advanced AI",
      description: language === "es" 
        ? "Tecnología de punta para potenciar tu negocio"
        : "Cutting-edge technology to power your business"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: language === "es" ? "Gestión de Datos" : "Data Management",
      description: language === "es"
        ? "Organización inteligente de información"
        : "Intelligent information organization"
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: language === "es" ? "Seguridad Total" : "Total Security",
      description: language === "es"
        ? "Protección avanzada de datos"
        : "Advanced data protection"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: language === "es" ? "Automatización" : "Automation",
      description: language === "es"
        ? "Procesos optimizados e inteligentes"
        : "Optimized and intelligent processes"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videoMain.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex flex-col justify-center py-12">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="text-white">
                  {language === "es" ? "IPINNOVATECH" : "IPINNOVATECH"}
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {language === "es" ? "Con su Red Multiservicios de IA" : "With its AI Multiservice Network"}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/80 bg-black/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl mb-6 sm:mb-8 border border-white/10">
                {language === "es" 
                  ? "Se dedica a la transformación y optimización de procesos mediante soluciones de IA avanzadas. Nuestra plataforma multiservicios permite a las empresas mejorar su eficiencia, crear nuevos productos y servicios, y optimizar sus operaciones."
                  : "Dedicated to process transformation and optimization through advanced AI solutions. Our multiservice platform enables companies to improve efficiency, create new products and services, and optimize their operations."}
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                >
                  {language === "es" ? "Saber Más" : "Learn More"}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 p-2 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/70">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}