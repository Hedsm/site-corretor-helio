import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img
              src="/assets/logo-habitei.png"
              alt="Habitei Logo"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 text-sm mb-2">
              Consultoria Imobiliária e Jurídica
            </p>
            <p className="text-gray-400 text-sm">
              A primeira imobiliária digital de São Paulo
            </p>
            <p className="text-gray-400 text-xs mt-4">
              CRECI: 239435-F
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:5511934135688" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (11) 93413-5688
              </a>
              <a href="https://instagram.com/corretorhelio" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 mr-2" />
                @corretorhelio
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Imóveis</a></li>
              <li><a href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Corretor Hélio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
