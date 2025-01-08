import React from 'react';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8" />
              <span className="text-2xl font-bold">ContaxSaúde</span>
            </div>
            <p className="text-gray-400">
              Soluções contábeis e financeiras especializadas para a área médica
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>eduardo.bedin@contaxsaude.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(41) 9 8831-5027</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Curitiba, Pr</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/como-funciona" className="hover:text-blue-400">Como Funciona</a></li>
              <li><a href="/contabil" className="hover:text-blue-400">Serviços Contábeis</a></li>
              <li><a href="/planejamento" className="hover:text-blue-400">Planejamento Tributário</a></li>
              <li><a href="/orcamento" className="hover:text-blue-400">Controle Orçamentário</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e atualizações sobre contabilidade médica
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ContaxSaúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;