"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageZoom } from "./ImageZoom";

const slides = [
  {
    id: "mission-vision",
    image: "/Images/Brochure/Mision_Vision.png",
    title: "MISIÓN Y VISIÓN"
  },
  {
    id: "how-we-work",
    image: "/Images/Brochure/Como_Trabajamos.png",
    title: "CÓMO TRABAJAMOS"
  },
  {
    id: "org-structure",
    image: "/Images/Brochure/Estructura_Organizacional.jpg",
    title: "ESTRUCTURA ORGANIZACIONAL"
  }
];

export function AboutCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && Date.now() - lastInteraction >= 15000) { // 15 seconds after last interaction
          setDirection(1);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }
      }, 16500); // 16.5 seconds interval
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, lastInteraction]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setLastInteraction(Date.now());
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setLastInteraction(Date.now());
    setCurrentIndex(index);
  };

  const handleDoubleClick = () => {
    setIsZoomed(true);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div 
        className="relative aspect-[16/7] overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
            onDoubleClick={handleDoubleClick}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-contain bg-white/80 backdrop-blur-sm cursor-pointer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${index === currentIndex
                ? 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200'
              }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      <ImageZoom
        isOpen={isZoomed}
        onClose={() => setIsZoomed(false)}
        image={slides[currentIndex].image}
        alt={slides[currentIndex].title}
      />
    </div>
  );
}