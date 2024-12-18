import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { BlogSection } from "./sections/BlogSection";
import { FaqSection } from "./sections/FaqSection";
import { ContactSection } from "./sections/ContactSection";

export function Sections() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}