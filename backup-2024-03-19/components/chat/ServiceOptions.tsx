"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceOptionsProps {
  selectedServices: string[];
  onToggle: (service: string) => void;
}

export function ServiceOptions({ selectedServices, onToggle }: ServiceOptionsProps) {
  const { language } = useLanguage();

  const services = [
    {
      id: "custom-software",
      label: language === "es" 
        ? "Servicios de desarrollo de software a medida" 
        : "Custom software development services"
    },
    {
      id: "ai-apps",
      label: language === "es"
        ? "Aplicaciones con inteligencia artificial"
        : "Artificial intelligence applications"
    },
    {
      id: "tech-consulting",
      label: language === "es"
        ? "Consultoría tecnológica"
        : "Technology consulting"
    },
    {
      id: "maintenance",
      label: language === "es"
        ? "Mantenimiento y soporte de software"
        : "Software maintenance and support"
    },
    {
      id: "automation",
      label: language === "es"
        ? "Soluciones de automatización empresarial"
        : "Business automation solutions"
    },
    {
      id: "mobile-apps",
      label: language === "es"
        ? "Desarrollo de aplicaciones móviles"
        : "Mobile application development"
    },
    {
      id: "integration",
      label: language === "es"
        ? "Integración de sistemas"
        : "System integration"
    },
    {
      id: "data-analytics",
      label: language === "es"
        ? "Análisis y ciencia de datos"
        : "Data analysis and science"
    },
    {
      id: "cybersecurity",
      label: language === "es"
        ? "Ciberseguridad"
        : "Cybersecurity"
    },
    {
      id: "training",
      label: language === "es"
        ? "Capacitación y formación tecnológica"
        : "Technology training and education"
    }
  ];

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700 mb-3">
        {language === "es" 
          ? "Selecciona los servicios de tu interés"
          : "Select services of interest"}
      </p>
      <Select
        onValueChange={onToggle}
      >
        <SelectTrigger className="bg-gray-50">
          <SelectValue 
            placeholder={
              language === "es" 
                ? `${selectedServices.length} servicios seleccionados`
                : `${selectedServices.length} services selected`
            } 
          />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg">
          <ScrollArea className="h-[200px]">
            {services.map((service) => (
              <SelectItem
                key={service.id}
                value={service.id}
                className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-gray-50 bg-white border-b border-gray-100 last:border-b-0"
              >
                <span className="flex-1 text-gray-700">{service.label}</span>
                {selectedServices.includes(service.id) && (
                  <Check className="h-4 w-4 text-[var(--primary-blue)] ml-2 flex-shrink-0" />
                )}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      
      {/* Selected services preview */}
      {selectedServices.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedServices.map((serviceId) => {
            const service = services.find(s => s.id === serviceId);
            return service && (
              <Badge
                key={serviceId}
                variant="secondary"
                className="bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/20"
              >
                <span className="mr-1">{service.label}</span>
                <button
                  type="button"
                  onClick={() => onToggle(serviceId)}
                  className="hover:text-[var(--accent-blue)] inline-flex items-center"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}