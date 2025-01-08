import React, { useState } from 'react';
import CampoFormulario from './CampoFormulario';

interface FormularioContatoProps {
  aoFechar?: () => void;
  aoEnviar: (dados: DadosFormulario) => void;
  mostrarCancelar?: boolean;
}

interface DadosFormulario {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const FormularioContato = ({ aoFechar, aoEnviar, mostrarCancelar = true }: FormularioContatoProps) => {
  const [dadosFormulario, setDadosFormulario] = useState<DadosFormulario>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const aoSubmeter = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o link mailto com os dados do formulário
    const assunto = encodeURIComponent('Contato via Website - ContaxSaúde');
    const corpo = encodeURIComponent(`
      Nome: ${dadosFormulario.nome}
      Email: ${dadosFormulario.email}
      Telefone: ${dadosFormulario.telefone}
      
      Mensagem:
      ${dadosFormulario.mensagem}
    `);
    
    // Abrir o cliente de email padrão
    window.location.href = `mailto:eduardo.bedin@contaxsaude.com?subject=${assunto}&body=${corpo}`;
    
    // Chamar a função aoEnviar original
    aoEnviar(dadosFormulario);
  };

  const aoMudarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDadosFormulario(anterior => ({ ...anterior, [name]: value }));
  };

  return (
    <form onSubmit={aoSubmeter} className="space-y-4 border border-gray-200 rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <CampoFormulario
        rotulo="Nome"
        tipo="text"
        nome="nome"
        valor={dadosFormulario.nome}
        aoMudar={aoMudarCampo}
      />
      <CampoFormulario
        rotulo="Email"
        tipo="email"
        nome="email"
        valor={dadosFormulario.email}
        aoMudar={aoMudarCampo}
      />
      <CampoFormulario
        rotulo="Telefone"
        tipo="tel"
        nome="telefone"
        valor={dadosFormulario.telefone}
        aoMudar={aoMudarCampo}
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
        <textarea
          name="mensagem"
          rows={4}
          value={dadosFormulario.mensagem}
          onChange={aoMudarCampo}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          Enviar
        </button>
        {mostrarCancelar && aoFechar && (
          <button
            type="button"
            onClick={aoFechar}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default FormularioContato;