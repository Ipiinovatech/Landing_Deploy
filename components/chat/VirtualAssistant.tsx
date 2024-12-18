"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VirtualAssistantForm } from "./VirtualAssistantForm";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function VirtualAssistant() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setShowCaptcha(true);
  };

  const handleVerify = async () => {
    if (!isVerified) {
      toast({
        title: language === "es" ? "Error" : "Error",
        description: language === "es" 
          ? "Por favor, verifica que no eres un robot" 
          : "Please verify that you're not a robot",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setShowCaptcha(false);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === "es" 
        ? "¡Mensaje Enviado!" 
        : "Message Sent!",
      description: language === "es"
        ? "Gracias por tu mensaje. Te responderemos pronto."
        : "Thank you for your message. We'll get back to you soon.",
      className: "bg-white border-2 border-[var(--primary-blue)] shadow-lg",
    });
    
    setIsSubmitting(false);
    setIsVerified(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[450px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white rounded-t-2xl">
              <h3 className="text-lg font-semibold">
                {language === "es" ? "Asistente Virtual" : "Virtual Assistant"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ScrollArea className="h-[calc(80vh-64px)]">
              <div className="p-6">
                <VirtualAssistantForm 
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showCaptcha} onOpenChange={setShowCaptcha}>
        <DialogContent className="bg-white border-2 border-[var(--primary-blue)] shadow-xl max-w-md">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              {language === "es" 
                ? "Verificación de Seguridad" 
                : "Security Verification"}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-6 px-4 bg-white">
            <p className="text-base text-gray-700 text-center font-medium">
              {language === "es" 
                ? "Por favor, completa la verificación para enviar tu mensaje"
                : "Please complete the verification to send your message"}
            </p>
            <div className="transform hover:scale-[1.01] transition-transform bg-white p-4 rounded-lg shadow-sm">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value) => setIsVerified(!!value)}
                theme="light"
                size="normal"
              />
            </div>
            <Button
              onClick={handleVerify}
              className={`w-full transition-all duration-300 ${
                isVerified 
                  ? "bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90" 
                  : "bg-gray-400"
              } text-white py-2 px-4 rounded-lg text-base font-medium`}
              disabled={!isVerified || isSubmitting}
            >
              {language === "es" ? "Confirmar y Enviar" : "Confirm and Send"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}