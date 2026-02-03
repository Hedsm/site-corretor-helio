import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Shield, Building, TrendingUp, Award } from 'lucide-react';

const skills = [
  {
    icon: CheckCircle,
    title: 'Atendimento Consultivo',
    description: 'Entendendo a real necessidade do cliente e oferecendo soluções personalizadas.',
  },
  {
    icon: Users,
    title: 'Acompanhamento Completo',
    description: 'Tirando todas as dúvidas e acompanhando cada cliente de perto, até a entrega das chaves.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Orientação e direcionamento para que o cliente não caia em nenhum tipo de golpe ou fraude.',
  },
  {
    icon: Building,
    title: 'Parcerias Sólidas',
    description: 'Relacionamento com mais de 100 construtoras, facilitando a busca pelo imóvel ideal.',
  },
  {
    icon: TrendingUp,
    title: 'Melhores Taxas',
    description: 'Busca pelas melhores condições de financiamento junto aos principais bancos.',
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Anos de mercado ajudando centenas de famílias a conquistarem o sonho da casa própria.',
  }
];

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que escolher nossa consultoria?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Oferecemos um serviço diferenciado, focado na transparência e no sucesso da sua aquisição imobiliária.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
