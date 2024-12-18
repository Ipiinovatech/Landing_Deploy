"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  
  const socialLinks = [
    {
      icon: <Facebook className="h-6 w-6" />,
      href: "https://www.facebook.com/ipinnovatech.ltda/",
      label: "Facebook"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/ipinnovatech/",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://co.linkedin.com/company/ipinnovatech",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[var(--bg-gradient-end)] to-gray-900 text-white">
      <div className="section-container py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              IPINNOVATECH
            </h3>
            <p className="text-gray-300">
              {language === "es" 
                ? "Transformando el futuro con tecnología inteligente"
                : "Transforming the future with intelligent technology"}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {language === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5 text-[var(--primary-blue)]" />
                <a href="mailto:Info@ipinnovatech.co" className="hover:text-white transition-colors">
                  Info@ipinnovatech.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5 text-[var(--primary-blue)]" />
                <a href="tel:+5723758188" className="hover:text-white transition-colors">
                  57 (2) 3758188
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-5 w-5 text-[var(--primary-blue)] flex-shrink-0" />
                <span>Calle 15a #103 - 20</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {language === "es" ? "Síguenos" : "Follow Us"}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} IPINNOVATECH. {language === "es" ? "Todos los derechos reservados" : "All rights reserved"}.</p>
        </div>
      </div>
    </footer>
  );
}