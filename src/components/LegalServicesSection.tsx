import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Scale, FileText, Shield, Building2, Landmark, Briefcase, Award, UserCheck } from 'lucide-react';

const legalServices = [
  {
    icon: Scale,
    title: 'Atuação Contenciosa - Judicial',
    items: [
      'Ações Possessórias (Reintegração, Manutenção, Interdito Proibitório)',
      'Ações Reais Imobiliárias (Reivindicatória, Imissão na Posse, Usucapião)',
      'Locação Urbana (Despejo, Cobrança, Revisional)',
      'Condomínio e Vizinhança',
      'Incorporação Imobiliária e Construção',
    ],
  },
  {
    icon: FileText,
    title: 'Atuação Extrajudicial',
    items: [
      'Notificações Extrajudiciais (Cobrança, Rescisão, Desocupação)',
      'Usucapião Extrajudicial',
      'Regularização Imobiliária (Retificação, Georreferenciamento)',
      'Registro de Contratos e Escrituras',
    ],
  }
];

export default function LegalServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="legal" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Assessoria Jurídica Especializada</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Segurança e tranquilidade em todas as etapas do seu negócio imobiliário.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
