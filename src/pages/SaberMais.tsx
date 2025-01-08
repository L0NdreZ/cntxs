import React from 'react';
import { Smartphone } from 'lucide-react';

const SaberMais = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">ContaxSaúde: A Solução Completa para sua Gestão Contábil</h2>
            
            <p className="text-gray-600">
              A ContaxSaúde, sempre pensando no melhor para seus clientes, oferece um serviço inovador para facilitar a comunicação e a troca de documentos contábeis: o Onvio.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Vantagens da ContaxSaúde</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Acesso Rápido e Fácil:</strong> Consulte e faça download de documentos importantes a qualquer momento e de qualquer lugar.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Calendário de Vencimentos:</strong> Fique informado sobre as datas de vencimento das suas obrigações fiscais com nosso calendário integrado.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Notificações Instantâneas:</strong> Receba alertas em tempo real sobre atualizações e novos documentos.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Solicitações de Serviço:</strong> Envie solicitações diretamente pelo portal ou aplicativo de forma prática e rápida.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Segurança Avançada:</strong> Garanta a proteção de suas informações com a autenticação multifator.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Experimente o Serviço da ContaxSaúde</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Mobilidade:</strong> Acesse o portal do cliente através de seu celular, tablet ou desktop.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Notificações em Tempo Real:</strong> Receba notificações onde quer que esteja para nunca perder uma atualização importante.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Documentos na Mão:</strong> Tenha sempre acesso aos seus documentos de forma rápida e segura.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                  <span><strong>Autenticação Multifator:</strong> Proteja suas informações com a segurança robusta oferecida pela ContaxSaúde.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600">
              Para começar a usar este serviço exclusivo, a ContaxSaúde fornecerá o login e a senha de acesso ao portal e aplicativo. Aproveite a conveniência e eficiência que a ContaxSaúde oferece para simplificar sua vida contábil.
            </p>

            <p className="text-xl font-semibold text-blue-600">
              ContaxSaúde - Sua parceira na gestão contábil
            </p>
            
            <p className="text-gray-600 italic">
              A modernidade e segurança que você merece, agora ao seu alcance com a ContaxSaúde.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[2rem] bg-gray-900 rounded-b-3xl"></div>
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center space-y-8 p-6">
                <Smartphone className="w-16 h-16 text-blue-600" />
                <h3 className="text-xl font-bold text-center">Baixe nosso aplicativo</h3>
                <div className="space-y-4">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" 
                      alt="Disponível no Google Play" 
                      className="h-16"
                    />
                  </a>
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/pt-br?size=250x83" 
                      alt="Baixar na App Store" 
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaberMais;