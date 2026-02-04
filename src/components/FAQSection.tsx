import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Card components replaced
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona o programa Minha Casa Minha Vida?',
    answer: 'O Minha Casa Minha Vida é um programa do governo federal que facilita o acesso à casa própria para famílias com diversas faixas de renda, oferecendo subsídios e taxas de juros reduzidas.'
  },
  {
    question: 'Qual é o horário de atendimento?',
    answer: 'Atendimento do Corretor Hélio: Segunda a Sexta-feira das 08h às 22h, Sábados, Domingos e Feriados das 09h às 18h.'
  },
  {
    question: 'Vocês atendem em quais regiões de São Paulo?',
    answer: 'Atendemos principalmente a Zona Oeste de São Paulo e região metropolitana, incluindo Osasco, Carapicuíba e Barueri.'
  },
  {
    question: 'Como funciona a parceria jurídica?',
    answer: 'Nossa parceria jurídica oferece suporte completo em todas as etapas da compra do imóvel, garantindo que toda a documentação esteja em ordem e protegendo os interesses do comprador.'
  },
  {
    question: 'Preciso ter o nome limpo para comprar um imóvel?',
    answer: 'Para financiamento bancário, sim, é necessário não ter restrições nos órgãos de proteção ao crédito. No entanto, podemos analisar cada caso e orientar sobre como regularizar sua situação.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tire suas principais dúvidas sobre o processo de aquisição do seu novo imóvel.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="border border-gray-200 shadow-sm overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
