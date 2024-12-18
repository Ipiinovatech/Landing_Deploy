"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ServiceOptions } from "./ServiceOptions";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

interface FormData {
  companyName: string;
  email: string;
  phone: string;
  country: string;
  selectedServices: string[];
}

export function VirtualAssistantForm({ 
  onSubmit,
  isSubmitting 
}: { 
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    email: "",
    phone: "",
    country: "",
    selectedServices: []
  });

  const countries = [
    { value: "co", label: "Colombia" },
    { value: "pe", label: "Perú" },
    { value: "ec", label: "Ecuador" },
    { value: "us", label: "Estados Unidos" },
    { value: "other", label: language === "es" ? "Otro" : "Other" }
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.email || !formData.phone || !formData.country || formData.selectedServices.length === 0) {
      toast({
        title: language === "es" ? "Error" : "Error",
        description: language === "es" 
          ? "Por favor, completa todos los campos y selecciona al menos un servicio" 
          : "Please fill in all fields and select at least one service",
        variant: "destructive",
      });
      return;
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        value={formData.companyName}
        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        placeholder={language === "es" ? "Nombre de la empresa" : "Company name"}
        className="bg-gray-50"
        required
      />
      
      <Input
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        type="email"
        placeholder={language === "es" ? "Correo electrónico" : "Email"}
        className="bg-gray-50"
        required
      />
      
      <Input
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder={language === "es" ? "Número de contacto" : "Contact number"}
        className="bg-gray-50"
        required
      />

      <Select
        value={formData.country}
        onValueChange={(value) => setFormData({ ...formData, country: value })}
      >
        <SelectTrigger className="bg-gray-50">
          <SelectValue placeholder={language === "es" ? "Selecciona un país" : "Select a country"} />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg">
          {countries.map((country) => (
            <SelectItem 
              key={country.value} 
              value={country.value}
              className="cursor-pointer py-2.5 px-4 hover:bg-gray-50 bg-white border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-700">{country.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <ServiceOptions 
        selectedServices={formData.selectedServices}
        onToggle={handleServiceToggle}
      />

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
  );
}