import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from "@/components/ui/toaster";
import { Footer } from '@/components/Footer';
import { VirtualAssistant } from '@/components/chat/VirtualAssistant';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ipinnovatech - Red Multiservicios de IA',
  description: 'IPINNOVATECH es una compañía de tecnología TI en el área de servicios ITO y BPO con más de 13 años en mercado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
          <VirtualAssistant />
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}