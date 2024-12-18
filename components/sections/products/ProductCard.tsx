"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { ProductModal } from "./ProductModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  index: number;
  category: string;
}

export function ProductCard({
  icon,
  title,
  description,
  image,
  index,
  category
}: ProductCardProps) {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group h-full"
      >
        <Card className="relative h-full bg-gradient-to-br from-gray-900/90 to-black border-gray-800 hover:border-[var(--primary-blue)] transition-all duration-500 overflow-hidden">
          {/* Image Header */}
          <div className="relative h-48 overflow-hidden">
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-blue)] transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-4 mb-6">
              {description}
            </p>

            {/* Action Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-[var(--primary-blue)] hover:text-[var(--accent-blue)] transition-colors duration-300 group/btn mt-auto"
            >
              <span className="mr-2">
                {language === "es" ? "Saber más" : "Learn more"}
              </span>
              <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </Card>
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ icon, title, description, image: image || "", category }}
      />
    </>
  );
}