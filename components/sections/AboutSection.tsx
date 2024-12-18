"use client";

import { AboutHeader } from "./about/AboutHeader";
import { AboutCarousel } from "./about/AboutCarousel";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative z-10 section-container section-padding">
        <AboutHeader />
        
        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <AboutCarousel />
        </motion.div>
      </div>
    </section>
  );
}