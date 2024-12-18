"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ProductCard } from "./products/ProductCard";

export function ProductsSection() {
  const { language } = useLanguage();
  const [showMultiservices, setShowMultiservices] = useState(false);
  const [showVarios, setShowVarios] = useState(false);

  const products = [
    {
      icon: null,
      title: "AI Innovation",
      description: language === "es"
        ? "IPINNOVATECH permite a las empresas mejorar la eficiencia de procesos operativos, automatizando tareas y reduciendo costos, aplicando los diferentes modelos de Inteligencia Artificial, también podría crear nuevos productos y servicios de manera rápida y de calidad, haciendo mas competitivas a las empresas en la transformación digital a Empresas 4.0."
        : "IPINNOVATECH enables companies to improve operational process efficiency by automating tasks and reducing costs, applying different Artificial Intelligence models, it could also create new products and services quickly and with quality, making companies more competitive in the digital transformation to Industry 4.0.",
      image: "/Images/Productos/Ai_innovation_1.jpg",
      category: "AI",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "AI CallConnect",
      description: language === "es"
        ? "Nuestros asistentes de IA pueden comunicarse a través de múltiples canales como voz, chat, y redes sociales, ofreciendo soporte en múltiples idiomas, realizando encuestas, integrándose con sistemas y atendiendo clientes, los cuales son entrenados para que se parezcan a los humanos en tareas básicas y complejas y se adapten como si fuera un ser humano."
        : "Our AI assistants can communicate through multiple channels such as voice, chat, and social networks, offering support in multiple languages, conducting surveys, integrating with systems and serving customers, which are trained to resemble humans in basic and complex tasks and adapt as if they were human.",
      image: "/Images/Productos/Ai_Call_Connect.jpg",
      category: "AI",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "AI Trainer",
      description: language === "es"
        ? "Capacitaciones Especializadas: Formación avanzada para maximizar el uso de IA en procesos críticos de negocio. Capacitación Básica: Orientada a facilitar la adopción de tecnologías de IA en la empresa y preparar al personal para su uso efectivo."
        : "Specialized Training: Advanced training to maximize the use of AI in critical business processes. Basic Training: Oriented to facilitate the adoption of AI technologies in the company and prepare staff for their effective use.",
      image: "/Images/Productos/Ai_Mentor_Trainer.jpg",
      category: "Training",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "AI CyberSecurity",
      description: language === "es"
        ? "Detección automatizada de amenazas y verificación mediante firma digital, asegurando la integridad de datos y transacciones en la empresa. Las firmas digitales con IA, utilizan diferentes mecanismos de identificación inherentes al ser humano (Rostro, Voz, Escritura etc) lo que permite firmar cualquier tipo archivos de forma Binaria garantizando la propiedad del mismo."
        : "Automated threat detection and verification through digital signature, ensuring data integrity and transactions in the company. AI digital signatures use different identification mechanisms inherent to humans (Face, Voice, Writing, etc.) which allows signing any type of files in Binary form guaranteeing their ownership.",
      image: "/Images/Productos/Ai_Cybersecurity.jpg",
      category: "Security",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "ANALITICA BIG DATA",
      description: language === "es"
        ? "Consultoria e implementación de modelos de análisis y manejo de grandes volúmenes de datos, contamos con modelos propios de predicción, clasificación, recomendados, utilizando practicas tradicionales matematicas probabilísticas y técnicas de Inteligencia artificial como Machine Learning y Deep Learning."
        : "Consulting and implementation of analytics models and handling of large volumes of data, we have our own prediction, classification, and recommendation models, using traditional mathematical probabilistic practices and Artificial Intelligence techniques such as Machine Learning and Deep Learning.",
      image: "/Images/Varios/Analitica_BigData.jpg",
      category: "Analytics",
      isMultiservice: false,
      isVarios: true
    },
    {
      icon: null,
      title: "VIRTUAL SMART VIDEO",
      description: language === "es"
        ? "Plataforma de video, desarrollada para realizar entrevistas (videollamadas, videoentrevistas) y capacitaciones con almacenamiento de información para análisis. Incorpora inteligencia artificial para reconocimiento de emociones y perfil biofisico. Disponible las 24 horas, permite ahorrar costos."
        : "Video platform, developed to conduct interviews (video calls, video interviews) and training with information storage for analysis. Incorporates artificial intelligence for emotion recognition and biophysical profile. Available 24 hours, allows cost savings.",
      image: "/Images/Varios/Virtual_SmartVideo.jpg",
      category: "Video",
      isMultiservice: false,
      isVarios: true
    },
    {
      icon: null,
      title: "VIRTUAL QUALITY FIELD",
      description: language === "es"
        ? "Plataforma web y móvil que realiza auditorías y supervisiones remotas en tiempo real, con toma de evidencia multimedia, garantizando calidad de los servicios e incrementando productividad, la satisfacción de los clientes y la rentabilidad de los negocios. Incluye elementos de video analítica e IA. Utilizado en el sector de telecomunicaciones, energia, gas, médico entre otros."
        : "Web and mobile platform that performs real-time remote audits and supervisions, with multimedia evidence collection, guaranteeing service quality and increasing productivity, customer satisfaction and business profitability. Includes video analytics and AI elements. Used in telecommunications, energy, gas, medical sectors among others.",
      image: "/Images/Varios/Virtual_Quality.jpg",
      category: "Quality",
      isMultiservice: false,
      isVarios: true
    },
    {
      icon: null,
      title: "AI INFLUENCER",
      description: language === "es"
        ? "Creación de personajes de IA que influyen en redes sociales, promoviendo marcas y productos y Servicios de manera estratégica y alcanzando grandes audiencias. Utilizando voz, video, imagen, tienen apariencia propia y voz propia con IA."
        : "Creation of AI characters that influence social networks, promoting brands, products, and services strategically and reaching large audiences. Using voice, video, image, they have their own appearance and voice with AI.",
      image: "/Images/Varios/Ai_Influencer.jpg",
      category: "Social",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "AI FaceAuth",
      description: language === "es"
        ? "Nuestro sistema de Reconocimiento Facial con Liveness proporciona una verificación de identidades confiable, combinando precisión, velocidad y seguridad. Identifica rostros con alta exactitud y verifica en tiempo real si el usuario es una persona real, evitando suplantaciones. Con algoritmos avanzados de detección de vida, ofrece autenticación segura y rápida, ideal para entornos de alta demanda, mejorando la experiencia del usuario al eliminar pasos complicados. Compatible con múltiples dispositivos y fácil de integrar, nuestra tecnología se aplica en accesos seguros, banca digital y e-commerce. Utilizando inteligencia artificial de última generación y cumpliendo con regulaciones de privacidad, transformamos la verificación de identidades de manera inteligente y moderna."
        : "Our Facial Recognition system with Liveness provides reliable identity verification, combining accuracy, speed and security. It identifies faces with high accuracy and verifies in real time if the user is a real person, preventing impersonation. With advanced life detection algorithms, it offers secure and fast authentication, ideal for high-demand environments, improving user experience by eliminating complicated steps. Compatible with multiple devices and easy to integrate, our technology is applied in secure access, digital banking and e-commerce. Using state-of-the-art artificial intelligence and complying with privacy regulations, we transform identity verification in an intelligent and modern way.",
      image: "/Images/Productos/Ai_Face_Detection.jpg",
      category: "Security",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "AI AVATAR",
      description: language === "es"
        ? "Avatares interactivos y realistas que pueden asistir en soporte, ventas y capacitaciones virtuales, conectarse a los sistemas de información de su empresa etc... Tienen capacidad de enviar correos, SMS y de establecer Ilamadas si se requiere."
        : "Interactive and realistic avatars that can assist in support, sales and virtual training, connect to your company's information systems, etc... They have the ability to send emails, SMS and establish calls if required.",
      image: "/Images/Varios/Ai_Avatar.jpg",
      category: "Avatar",
      isMultiservice: true,
      isVarios: false
    },
    {
      icon: null,
      title: "FABRICA DE SOFTWARE",
      description: language === "es"
        ? "Servicio de desarrollo de Software a la medida, desarrollamos en PHP, Java, Nodejs, Python, Angular, .net, Android, IOS. Bases de Datos MySql, Oracle, SQLServer, AWS Aurora, MongoDB, Amazon DynamoDB. Realizamos consultoría e implementación de plataformas, para ello contamos con Ingenieros IT Arquetic para diseñar aplicaciones escalables con infraestructura en AWS. Se incluye un Lider de proyecto, Lider de desarrollo, Ingenieros de desarrollo y Analista de pruebas de desarrollo, los cuales permiten la entrega del producto en tiempos muy cortos y con un alto nivel de calidad."
        : "Custom software development service, we develop in PHP, Java, Nodejs, Python, Angular, .net, Android, IOS. Databases MySql, Oracle, SQLServer, AWS Aurora, MongoDB, Amazon DynamoDB. We provide consulting and platform implementation, for which we have IT Arquetic Engineers to design scalable applications with AWS infrastructure. It includes a Project Leader, Development Leader, Development Engineers and Development Test Analyst, which allow product delivery in very short times and with a high level of quality.",
      image: "/Images/Varios/FabricaSoftware.jpg",
      category: "Development",
      isMultiservice: false,
      isVarios: true
    },
    {
      icon: null,
      title: "¡Pa´Ya!",
      description: language === "es"
        ? "Plataforma de servicios y productos, se cataloga como delivery, tiene tres componentes ¡Pa' Ya! Estándar (servicios y productos B2C), ¡Pa' Ya! Delivery, y ¡Pa' Yal Business (B2B), Tienen un algoritmo de asignación inteligente de servicios y productos de acuerdo a la georreferenciación de cliente y delivery, para optimizar rutas, tiempos de entrega y algoritmo de compensación de delivery. ¡Pa' Ya! utiliza tecnologías de IA para recomendación, video, chat, RPA para verificar (cédula, ARL, salud, antecedentes) y banda inteligente que mide la temperatura del delivery ¡Pa' Ya! aplica para cualquier tipo de servicios por ejemplo (medicina, telecomunicaciones, hogar, educación etc)."
        : "Service and product platform, cataloged as delivery, has three components ¡Pa' Ya! Standard (B2C services and products), ¡Pa' Ya! Delivery, and ¡Pa' Ya! Business (B2B), They have an intelligent service and product allocation algorithm according to client and delivery georeferencing, to optimize routes, delivery times and delivery compensation algorithm. ¡Pa' Ya! uses AI technologies for recommendation, video, chat, RPA to verify (ID, ARL, health, background) and smart band that measures delivery temperature ¡Pa' Ya! applies to any type of services for example (medicine, telecommunications, home, education etc).",
      image: "/Images/Varios/Pa_Ya.jpg",
      category: "Delivery",
      isMultiservice: false,
      isVarios: true
    }
  ];

  const getFilteredProducts = () => {
    if (showVarios) {
      return products.filter(p => p.isVarios);
    }
    if (showMultiservices) {
      return products.filter(p => p.isMultiservice);
    }
    return products;
  };

  const handleMultiservicesClick = () => {
    setShowMultiservices(true);
    setShowVarios(false);
  };

  const handleVariosClick = () => {
    setShowVarios(true);
    setShowMultiservices(false);
  };

  const handleAllClick = () => {
    setShowVarios(false);
    setShowMultiservices(false);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="products" className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-[#EEF2FF] opacity-95" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Nuestros Productos" : "Our Products"}
          </h2>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto mb-12">
            {language === "es"
              ? "Soluciones innovadoras impulsadas por IA para transformar su negocio"
              : "Innovative AI-driven solutions to transform your business"}
          </p>

          {/* Product Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={handleAllClick}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${(!showMultiservices && !showVarios)
                  ? 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200'
                }`}
            >
              AI Connect
            </button>
            <button
              onClick={handleMultiservicesClick}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${showMultiservices
                  ? 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200'
                }`}
            >
              {language === "es" ? "Red Multiservicios" : "Multiservices Network"}
            </button>
            <button
              onClick={handleVariosClick}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${showVarios
                  ? 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200'
                }`}
            >
              {language === "es" ? "Varios" : "Others"}
            </button>
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}