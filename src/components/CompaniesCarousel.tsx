import { motion } from 'framer-motion';

const companies = [
  { name: 'Plaenge', logo: '/images/Plaenge.jpg' },
  { name: 'Tenda', logo: 'https://livar.com.br/img/parceiros/TENDA.svg' },
  { name: 'MRV', logo: 'https://livar.com.br/img/parceiros/MRV.svg' },
  { name: 'Plano & Plano', logo: 'https://livar.com.br/img/parceiros/PLANO_PLANO.svg' },
  { name: 'Vibra', logo: 'https://livar.com.br/img/parceiros/VIBRA.svg' },
  { name: 'Conx', logo: 'https://livar.com.br/img/parceiros/CONX.svg' },
  { name: 'Econ', logo: 'https://livar.com.br/img/parceiros/ECON.svg' },
  { name: 'Vivaz', logo: 'https://livar.com.br/img/parceiros/VIVAZ.svg' },
  { name: 'Cury', logo: 'https://livar.com.br/img/parceiros/CURY.svg' },
  { name: 'Direcional', logo: 'https://livar.com.br/img/parceiros/DIRECIONAL.svg' },
  { name: 'Mundo Apto', logo: 'https://mundoapto.com.br/wp-content/uploads/2021/11/logo_orar.png' },
  { name: 'Eztec', logo: 'https://www.eztec.com.br/wp-content/uploads/2017/10/logo-eztec-mer.png' },
  { name: 'Cavazani', logo: 'https://cavazani.com.br/wp-content/uploads/2024/11/logo-cavazani.png' }
];

export default function CompaniesCarousel() {
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Construtoras Parceiras
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Trabalhamos com as melhores construtoras do mercado
        </p>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div
          className="flex space-x-12 items-center whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
