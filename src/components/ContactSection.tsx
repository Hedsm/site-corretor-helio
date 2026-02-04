import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Button component replaced
// Input component replaced
// Textarea component replaced
// Label component replaced
// Select components removed
import { Phone, Clock, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { client } from '@/lib/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulação de envio ou integração com backend Atoms
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', propertyInterest: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fale Conosco</h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para tirar suas dúvidas e ajudar você a encontrar o imóvel ideal.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">(11) 93413-5688</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 22h</p>
                  <p className="text-gray-600">Sábados e Domingos: 09h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Atendimento em toda Grande São Paulo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:w-2/3 bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone">Telefone / WhatsApp</label>
                  <input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="interest">Interesse</label>
                 <div
                  onValueChange={(value) => setFormData({ ...formData, propertyInterest: value })}
                >
                   <divTrigger>
                     <divValue placeholder="Selecione o tipo de imóvel" />
                   </div>
                   <div>
                     <divItem value="apartamento">Apartamento </div>
                     <divItem value="casa">Casa Verde e Amarela </div>
                     <divItem value="terreno">Terreno / Loteamento </div>
                     <divItem value="comercial">Comercial </div>
                   </div>
                 </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Mensagem (Opcional)</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Consultoria Gratuita'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
