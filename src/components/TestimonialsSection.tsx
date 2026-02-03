import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Card components replaced
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dona Maria Aparecida",
    image: "/assets/testimonial-maria-aparecida.png",
    text: "Depois de anos sonhando com a casa própria, o Hélio tornou esse sonho realidade.",
    rating: 5,
  },
  {
    name: "Marcos Paulo",
    image: "/assets/testimonial-marcos-paulo.png",
    text: "Trabalhar com o Hélio foi uma experiência incrível. Ele conhece todas as constru...",
    rating: 5,
  },
  {
    name: "Carlos Silva",
    image: "/assets/testimonial-carlos-silva.png",
    text: "O Hélio foi fundamental para eu conseguir meu primeiro apartamento. Ele me expli...",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    image: "/assets/testimonial-fernanda-lima.png",
    text: "O Hélio é muito atencioso e sempre disponível para tirar dúvidas. Consegui um an...",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    image: "/assets/testimonial-roberto-oliveira.png",
    text: "Excelente profissional. Recomendo a todos que buscam segurança na compra de um imóvel.",
    rating: 5,
  },
  {
    name: "Patrícia Souza",
    image: "/assets/testimonial-patricia-souza.png",
    text: "Agradeço imensamente ao Hélio por toda a paciência e dedicação no meu processo.",
    rating: 5,
  },
  {
    name: "Família Albuquerque",
    image: "/assets/testimonial-familia-albuquerque.png",
    text: "Nossa família está muito feliz com a nova casa. O Hélio foi um anjo em nossas vidas.",
    rating: 5,
  },
  {
    name: "Bruno Oliano",
    image: "/assets/testimonial-bruno-oliano.png",
    text: "Processo rápido e transparente. O Hélio é o melhor corretor com quem já trabalhei.",
    rating: 5,
  },
  {
    name: "Katarina Silva",
    image: "/assets/testimonial-katarina-silva.png",
    text: "Muito satisfeita com o atendimento. O Hélio realmente se preocupa com o cliente.",
    rating: 5,
  },
  {
    name: "Juliana F. Aparecida",
    image: "/assets/testimonial-juliana-f-aparecida.png",
    text: "Obrigada Hélio por me ajudar a conquistar minha independência com meu novo apê!",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Histórias reais de pessoas que realizaram o sonho da casa própria com nossa ajuda.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-none shadow-xl">
                <divContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prev} className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors">
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
