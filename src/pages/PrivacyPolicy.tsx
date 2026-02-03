import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o site
          </Button>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p>
                Sua privacidade é importante para nós. É política do Corretor Hélio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Corretor Hélio, e outros sites que possuímos e operamos.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Coleta de Informações</h2>
              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8">2. Uso das Informações</h2>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Compartilhamento de Dados</h2>
              <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Compromisso do Usuário</h2>
              <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Corretor Hélio oferece no site e com caráter enunciativo, mas não limitativo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Corretor Hélio;</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8">Mais informações</h2>
              <p>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
              </p>
              
              <p className="pt-8 border-t border-gray-100">
                Esta política é efetiva a partir de Janeiro/2024.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
