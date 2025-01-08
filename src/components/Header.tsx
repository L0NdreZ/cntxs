import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Stethoscope, Instagram, Linkedin } from 'lucide-react';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalClienteVisivel, setModalClienteVisivel] = useState(false);
  const [menuDropdownAtivo, setMenuDropdownAtivo] = useState<string | null>(null);

  const alternarMenu = () => setMenuAberto(!menuAberto);

  const aoEntrarMouse = (menu: string) => {
    setMenuDropdownAtivo(menu);
  };

  const aoSairMouse = () => {
    setTimeout(() => {
      setMenuDropdownAtivo(null);
    }, 100);
  };
  
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">ContaxSaúde</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <div 
              className="relative group"
              onMouseEnter={() => aoEntrarMouse('contabilidade')}
              onMouseLeave={aoSairMouse}
            >
              <span className="cursor-pointer py-2">Contabilidade</span>
              {menuDropdownAtivo === 'contabilidade' && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
                  <Link to="/contabil" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Contábil</Link>
                  <Link to="/tributario" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Tributário</Link>
                  <Link to="/folha" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Folha de Pagamento</Link>
                  <Link to="/patrimonial" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Patrimonial</Link>
                  <Link to="/empresas" className="block px-4 py-2 hover:bg-gray-100">Abertura e Alterações</Link>
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => aoEntrarMouse('controladoria')}
              onMouseLeave={aoSairMouse}
            >
              <span className="cursor-pointer py-2">Controladoria</span>
              {menuDropdownAtivo === 'controladoria' && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
                  <Link to="/planejamento" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Planejamento Tributário</Link>
                  <Link to="/orcamento" className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100">Controle Orçamentário</Link>
                  <Link to="/custos" className="block px-4 py-2 hover:bg-gray-100">Controle de Custos</Link>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-pink-600" />
              </a>
            </div>

            <Link to="/como-funciona" className="text-blue-600 hover:text-blue-700">
              Como Funciona
            </Link>

            <button
              onClick={() => setModalClienteVisivel(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              Área do Cliente
            </button>
          </div>

          <button className="md:hidden" onClick={alternarMenu}>
            {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuAberto && (
          <div className="md:hidden mt-4 border-t border-gray-100">
            <Link to="/contabil" className="block px-4 py-2 hover:bg-gray-100">Contábil</Link>
            <Link to="/tributario" className="block px-4 py-2 hover:bg-gray-100">Tributário</Link>
            <Link to="/folha" className="block px-4 py-2 hover:bg-gray-100">Folha de Pagamento</Link>
            <Link to="/patrimonial" className="block px-4 py-2 hover:bg-gray-100">Patrimonial</Link>
            <Link to="/empresas" className="block px-4 py-2 hover:bg-gray-100">Abertura e Alterações</Link>
            <Link to="/planejamento" className="block px-4 py-2 hover:bg-gray-100">Planejamento Tributário</Link>
            <Link to="/orcamento" className="block px-4 py-2 hover:bg-gray-100">Controle Orçamentário</Link>
            <Link to="/custos" className="block px-4 py-2 hover:bg-gray-100">Controle de Custos</Link>
            <Link to="/como-funciona" className="block px-4 py-2 hover:bg-gray-100">Como Funciona</Link>
          </div>
        )}

        {modalClienteVisivel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Área do Cliente</h2>
              <p className="mb-4">Você já é cliente?</p>
              <div className="flex space-x-4">
                <a
                  href="https://onvio.com.br/br-portal-do-cliente/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  Sim, fazer login
                </a>
                <button
                  onClick={() => setModalClienteVisivel(false)}
                  className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  Não, saber mais
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Cabecalho;