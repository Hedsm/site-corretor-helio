import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title = 'Habitei - Imóveis Tenda, MRV, Vivaz, Mundo Apto | Minha Casa Minha Vida SP | Hélio Fiorano',
  description = 'Habitei - Consultoria imobiliária especializada em Construtora Tenda, MRV, Vivaz, Mundo Apto e muito mais. Encontre seu imóvel em São Paulo.',
  keywords = 'habitei, hélio fiorano, construtora tenda, mrv, vivaz, mundo apto, minha casa minha vida, sp, imóveis',
  image = 'https://habitei.com.br/assets/logo-habitei-new.png',
  url = 'https://habitei.com.br',
}: SEOHeadProps) {
  useEffect(() => {
    // Update meta tags dynamically if needed
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  return null; // This component only manages side effects for SEO
}
