import { useState } from 'react';
import { motion } from 'framer-motion';
// Button component replaced
import { Menu, Phone } from 'lucide-react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511934135688?text=Olá!%20Gostaria%20de%20uma%20Simulação%20e%20Consultoria%20Gratuita!', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* logo - left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ml-2 md:ml-0"
            >
              <img src="/logo.png" alt="Logo" className="h-10 md:h-12" />
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#properties" className="text-gray-600 hover:text-blue-600 transition-colors">Imóveis</a>
              <button onClick={scrollToContact} variant="primary">Contato</button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-sm pb-4"
          >
            <nav className="flex flex-col items-center space-y-4">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#properties" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-blue-600 transition-colors">Imóveis</a>
              <button onClick={() => { scrollToContact(); setMenuOpen(false); }} variant="primary">Contato</button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Realize o Sonho da Casa Própria
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Sua jornada para encontrar o lar perfeito começa aqui. Com nossa assessoria completa, você tem a segurança e a tranquilidade que precisa para fazer o melhor negócio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={openWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <Phone className="mr-2 h-5 w-5" />
            Simulação Gratuita no WhatsApp
          </button>
        </motion.div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </section>
  );
}
