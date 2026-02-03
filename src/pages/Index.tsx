import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PropertiesSection from '@/components/PropertiesSection';
import CompaniesCarousel from '@/components/CompaniesCarousel';
import LegalServicesSection from '@/components/LegalServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <CompaniesCarousel />
      <LegalServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
