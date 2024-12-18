"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "@/components/ui/use-toast";

export function ChatBot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    message: ""
  });

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  const countries = [
    { value: "co", label: "Colombia" },
    { value: "pe", label: "Perú" },
    { value: "ec", label: "Ecuador" },
    { value: "us", label: "Estados Unidos" },
    { value: "other", label: language === "es" ? "Otro" : "Other" }
  ];

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.country || !formData.message) {
      toast({
        title: language === "es" ? "Error" : "Error",
        description: language === "es" 
          ? "Por favor, completa todos los campos" 
          : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
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
    
    // Simulate form submission
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
    setFormData({ firstName: "", lastName: "", country: "", message: "" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200"
          >
            {/* Header */}
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

            {/* Form */}
            <form onSubmit={handleSubmitClick} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {language === "es" ? "Nombre" : "First Name"}
                  </label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {language === "es" ? "Apellido" : "Last Name"}
                  </label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {language === "es" ? "País" : "Country"}
                </label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder={language === "es" ? "Selecciona un país" : "Select a country"} />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {language === "es" ? "Mensaje" : "Message"}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-gray-50 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting 
                  ? (language === "es" ? "Enviando..." : "Sending...") 
                  : (language === "es" ? "Enviar Mensaje" : "Send Message")}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* reCAPTCHA Dialog */}
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