"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface AboutImageProps {
  src: string;
  aspectRatio: string;
  maxWidth: string;
  index: number;
  removeBackground?: boolean;
}

export function AboutImage({ src, aspectRatio, maxWidth, index, removeBackground }: AboutImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative w-full ${maxWidth} mx-auto`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden rounded-xl ${removeBackground ? 'bg-transparent' : 'bg-white/50'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={src}
            alt={`About section image ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-contain transition-all duration-500 group-hover:scale-102 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            } ${removeBackground ? 'mix-blend-multiply' : ''}`}
            onLoadingComplete={() => setIsLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            quality={100}
            loading="eager"
            unoptimized={src.includes('Estructura_Organizacional')}
          />
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
            <div className="w-8 h-8 border-4 border-[var(--primary-blue)] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </motion.div>
  );
}