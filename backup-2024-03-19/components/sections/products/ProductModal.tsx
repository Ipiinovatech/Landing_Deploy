"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Image as ImageIcon, ImageOff } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    category: string;
  };
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const { language } = useLanguage();
  const [showImage, setShowImage] = useState(false);

  const handleContactClick = () => {
    onClose();
    const event = new CustomEvent('openChatbot');
    window.dispatchEvent(event);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[1400px] max-h-[95vh] bg-gradient-to-b from-gray-900 to-black border-gray-800 p-0">
        <DialogHeader className="relative p-8 border-b border-gray-800">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <DialogTitle className="text-3xl font-bold text-white">
              {product.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(95vh-200px)] overflow-auto">
          <div className="p-8 space-y-8">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowImage(!showImage)}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                {showImage ? (
                  <>
                    <ImageOff className="h-4 w-4 mr-2" />
                    {language === "es" ? "Ocultar imagen" : "Hide image"}
                  </>
                ) : (
                  <>
                    <ImageIcon className="h-4 w-4 mr-2" />
                    {language === "es" ? "Mostrar imagen" : "Show image"}
                  </>
                )}
              </Button>
            </div>

            <AnimatePresence>
              {showImage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full overflow-hidden rounded-xl"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-8 max-w-[80ch] mx-auto">
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-bold text-[var(--accent-blue)] mt-8 mb-4">{children}</h3>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-300">{children}</li>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-300 leading-relaxed text-lg mb-6">{children}</p>
                    ),
                  }}
                >
                  {product.description}
                </ReactMarkdown>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white text-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {language === "es" ? "Contactar" : "Contact Us"}
                  <ExternalLink className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}