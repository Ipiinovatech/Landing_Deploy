"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ContactForm() {
  const { language } = useLanguage();
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
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
        ? "¡Mensaje Enviado con Éxito!" 
        : "Message Sent Successfully!",
      description: language === "es"
        ? "¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente. Nuestro equipo especializado lo revisará y te responderá dentro de las próximas 24-48 horas hábiles. Valoramos tu interés en IPINNOVATECH y nos aseguraremos de brindarte la mejor atención posible."
        : "Thank you for reaching out! We have successfully received your message. Our specialized team will review it and respond within the next 24-48 business hours. We value your interest in IPINNOVATECH and will ensure to provide you with the best possible assistance.",
      className: "bg-white border-2 border-[var(--primary-blue)] shadow-lg",
    });
    
    setIsSubmitting(false);
    setIsVerified(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmitClick} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={language === "es" ? "Nombre" : "Name"}
            className="bg-white/50"
            required
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={language === "es" ? "Correo" : "Email"}
            type="email"
            className="bg-white/50"
            required
          />
        </div>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder={language === "es" ? "Asunto" : "Subject"}
          className="bg-white/50"
          required
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={language === "es" ? "Mensaje" : "Message"}
          className="bg-white/50 min-h-[150px]"
          required
        />
        
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? (language === "es" ? "Enviando..." : "Sending...") 
            : (language === "es" ? "Enviar Mensaje" : "Send Message")}
        </Button>
      </form>

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