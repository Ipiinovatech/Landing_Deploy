"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function AboutHeader() {
  const { language } = useLanguage();
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={textVariants}
        className="text-center"
      >
        <h2 className="section-header mb-10">
          {language === "es" ? "Nosotros" : "About Us"}
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-medium"
        >
          IPINNOVATECH es una compañía de tecnología desde el 2007 estamos en el mercado Corporativo, con presencia nacional en Colombia, y en otros países como Perú, Ecuador y Estados Unidos.
        </motion.p>
        
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          Enfocada en soluciones de TIC'S con IA, y nos caracterizamos por ser una empresa que crea servicios y productos INNOVADORES proyectos de ultima tecnología, creando soluciones innovadoras para nuestros clientes en todos los sectores Corporativos, Gobierno y próximamente en el mercado Masivo.
        </motion.p>
        
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          Utilizamos metodología
          <span className="inline-block w-40 h-10 relative mx-1 align-middle">
            <Image
              src="/Images/Brochure/Logo_infinito.png"
              alt="Metodología"
              fill
              className="object-contain"
              priority
              sizes="160px"
            />
          </span>
          que nos permite crear plataformas y servicios de manera ágil y con calidad, generando valor a nuestros clientes, y convirtiéndonos en su mejor aliado.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          Ofrecemos productos y servicios en modalidades <span className="font-semibold text-[var(--primary-blue)]">SaaS</span> ("Software como un servicio"), <span className="font-semibold text-[var(--primary-blue)]">IaaS</span> ("Infraestructura como un servicio"), y <span className="font-semibold text-[var(--primary-blue)]">PaaS</span> ("Plataforma como un servicio").
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          Toda nuestra infraestructura está soportada en uno de los <span className="font-semibold text-[var(--primary-blue)]">CLOUD COMPUTING</span> más grandes del mundo, <span className="font-semibold text-[var(--primary-blue)]">AWS</span> ("Amazon Web Services"), el cual nos permite crecer la infraestructura de los servicios fácilmente, garantizar la disponibilidad, y dar continuidad de los mismos y trabajamos con una de las mas grandes tecnologías de <span className="font-semibold text-[var(--primary-blue)]">IA (LLM)</span> como <span className="font-semibold text-[var(--primary-blue)]">Open IA</span>.
        </motion.p>
      </div>
    </div>
  );
}