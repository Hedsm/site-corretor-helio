import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Card components replaced
// Button component replaced
import { Bed, Bath, Maximize, MapPin, Building2, Calendar, Construction, X } from 'lucide-react';

const properties = [
  {
    id: 1,
    code: 'MCMV-001',
    image: '/assets/property-up-imirim.png',
    title: '🏢 Up Imirim - Fase 1 - MGTEC Construtora',
    location: 'Avenida Imirim, 3465 - Imirim, São Paulo/SP',
    status: 'Em construção',
    delivery: 'Setembro de 2026',
    units: [
      { area: 34.1, price: 'R$ 219.000', bedrooms: 2, bathrooms: 1, parking: 0 },
      { area: 37.9, price: 'R$ 295.900', bedrooms: 2, bathrooms: 1, parking: 1 },
      { area: 34.1, price: 'R$ 304.645', bedrooms: 2, bathrooms: 1, parking: 1 },
    ],
    category: 'mcmv',
  },
  {
    id: 2,
    code: 'MCMV-002',
    image: '/assets/property-mundo-apto.png',
    title: '🏢 Mundo Apto Estação São Luiz - Mundo Apto',
    location: 'Rua São Luiz, 123 - São Luiz, São Paulo/SP',
    status: 'Lançamento',
    delivery: 'Dezembro de 2027',
    units: [
      { area: 32.5, price: 'R$ 199.000', bedrooms: 1, bathrooms: 1, parking: 0 },
      { area: 42.0, price: 'R$ 280.000', bedrooms: 2, bathrooms: 1, parking: 1 },
    ],
    category: 'mcmv',
  }
];

export default function PropertiesSection() {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.category === filter);

  return (
    <section id="properties" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Imóveis em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Confira as melhores oportunidades do programa Minha Casa Minha Vida e Médio Padrão.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden border-none shadow-lg h-full flex flex-col">
                <div className="relative h-64">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {property.status}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{property.title}</h3>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    {property.units.map((unit, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg text-sm">
                        <div className="flex gap-3">
                          <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {unit.bedrooms}</span>
                          <span className="flex items-center"><Maximize className="w-4 h-4 mr-1" /> {unit.area}m²</span>
                        </div>
                        <span className="font-bold text-blue-600">{unit.price}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
