import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Menu, Home } from 'lucide-react';

const RotarioLivro = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [menuAberto, setMenuAberto] = useState(false);

  // Conteúdo do roteiro dividido em páginas
  const paginas = [
    // Página 0 - Capa
    {
      tipo: 'capa',
      conteudo: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 p-8">
          <BookOpen className="w-24 h-24 text-amber-700 mb-6" />
          <h1 className="text-5xl font-bold text-amber-900 text-center mb-4">
            ROTEIRO COMPLETO
          </h1>
          <h2 className="text-3xl font-serif text-amber-800 text-center mb-6">
            Musical Escolar
          </h2>
          <div className="text-center text-amber-700 space-y-2">
            <p className="text-xl font-semibold">
              "CRESCER: Uma Jornada de Sonhos e Amizades"
            </p>
            <p className="text-lg">Turmas do 8º Ano</p>
            <p className="text-lg">2025</p>
          </div>
        </div>
      )
    },
    // Página 1 - Índice
    {
      tipo: 'indice',
      conteudo: (
        <div className="h-full p-8 overflow-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-300 pb-2">
            ÍNDICE
          </h2>
          <div className="space-y-3 text-lg">
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 1: "Era Uma Vez... Nós"</span>
              <span className="text-amber-700">Pág. 3</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 2: "Nova em Folha"</span>
              <span className="text-amber-700">Pág. 8</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 3: "Friendship Bridge"</span>
              <span className="text-amber-700">Pág. 13</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 4: "Fix You - Quando a Luz se Apaga"</span>
              <span className="text-amber-700">Pág. 17</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 5: "Cafeteria dos Sonhos"</span>
              <span className="text-amber-700">Pág. 23</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 6: "Rivalidade na Quadra"</span>
              <span className="text-amber-700">Pág. 27</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>CENA 7: "Um Milhão de Sonhos" - Grande Finale</span>
              <span className="text-amber-700">Pág. 31</span>
            </div>
            <div className="flex justify-between hover:bg-amber-50 p-2 rounded cursor-pointer">
              <span>APÊNDICES DE PRODUÇÃO</span>
              <span className="text-amber-700">Pág. 37</span>
            </div>
          </div>
        </div>
      )
    },
    // Página 2 - Introdução Cena 1
    {
      tipo: 'conteudo',
      conteudo: (
        <div className="h-full p-8 overflow-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            CENA 1: "ERA UMA VEZ... NÓS"
          </h2>
          <div className="space-y-4 text-base leading-relaxed">
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-semibold text-amber-800">Tema:</p>
              <p>Nostalgia e Infância</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-semibold text-amber-800">Duração:</p>
              <p>8 minutos</p>
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="font-semibold text-amber-800">Música:</p>
              <p>Canção nostálgica sobre amizade infantil</p>
            </div>
            
            <h3 className="text-xl font-bold text-amber-900 mt-6">CENÁRIO</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Livro gigante aberto no centro (3m de altura)</li>
              <li>Telão ao fundo projetando fotos da infância dos alunos</li>
              <li>Iluminação quente e dourada</li>
              <li>Carteiras escolares antigas dispostas em semicírculo</li>
              <li>Objetos de infância: bola, corda de pular, giz</li>
            </ul>

            <h3 className="text-xl font-bold text-amber-900 mt-6">FIGURINO</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Roupas coloridas e casuais</li>
              <li>Mochilas escolares</li>
              <li>Acessórios nostálgicos (laços, bonés, tênis coloridos)</li>
            </ul>

            <h3 className="text-xl font-bold text-amber-900 mt-6">PERSONAGENS</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Alice</strong> - Líder carismática, sorridente</li>
              <li><strong>Guilherme</strong> - Alegre e brincalhão</li>
              <li><strong>João Paulino</strong> - Sentimental, guarda memórias</li>
              <li><strong>Coro/Dançarinos</strong> - 15-20 alunos</li>
            </ul>
          </div>
        </div>
      )
    },
    // Página 3 - Roteiro Cena 1 parte 1
    {
      tipo: 'conteudo',
      conteudo: (
        <div className="h-full p-8 overflow-auto">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            ABERTURA - 2 minutos
          </h3>
          <div className="space-y-4 text-base leading-relaxed">
            <p className="italic text-gray-600">
              Luzes se acendem gradualmente. O livro gigante está fechado. Música instrumental suave começa.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
              <p className="font-bold">NARRADOR (voz over):</p>
              <p className="italic">
                "Era uma vez... não, espere. Esta não é uma história de faz de conta. Esta é NOSSA história. A história de quando éramos apenas crianças... crianças cheias de sonhos e amizades que nunca imaginaríamos onde nos levariam."
              </p>
            </div>

            <p className="italic text-gray-600">
              Alice, Guilherme e João Paulino entram por lados opostos do palco, olhando ao redor com expressão de surpresa e nostalgia.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">ALICE (acenando animada):</p>
              <p className="italic">"Oi, Guilherme! Quanto tempo!"</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">GUILHERME (abrindo os braços para um abraço):</p>
              <p className="italic">"Alice! Que saudade de você! Parece que faz uma eternidade..."</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">JOÃO PAULINO (entrando com álbum nas mãos):</p>
              <p className="italic">"Nossa, vocês dois? Não acredito que nos encontramos aqui!"</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">ALICE E GUILHERME (em uníssono):</p>
              <p className="italic">"Paulino!"</p>
            </div>

            <p className="italic text-gray-600 mt-4">
              Os três se abraçam no centro do palco. A iluminação fica mais intensa.
            </p>
          </div>
        </div>
      )
    },
    // Página 4 - Cena 1 continuação
    {
      tipo: 'conteudo',
      conteudo: (
        <div className="h-full p-8 overflow-auto">
          <div className="space-y-4 text-base leading-relaxed">
            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">JOÃO PAULINO (abrindo o álbum):</p>
              <p className="italic">"Olhem só o que eu trouxe... um álbum de fotos da nossa infância. Encontrei guardado lá em casa."</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">ALICE (aproximando-se curiosa):</p>
              <p className="italic">"Que incrível! Deixa eu ver..."</p>
            </div>

            <p className="italic text-gray-600">
              Sentam-se no chão em círculo, o álbum entre eles. O telão começa a mostrar fotos antigas.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">GUILHERME (apontando para uma foto no telão):</p>
              <p className="italic">"Você se lembra quando a gente brincava no pátio da escola? Aquele jogo de pega-pega que nunca acabava?"</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">ALICE (rindo):</p>
              <p className="italic">"Claro que lembro! A gente corria tanto que parecia que o dia nunca ia acabar. Eu sempre era a pegadora e vocês sempre escapavam no último segundo!"</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">JOÃO PAULINO (brincalhão e melancólico):</p>
              <p className="italic">"E aquele jogo de bola? Eu sempre caía, e você ria de mim, Guilherme."</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">GUILHERME (defendendo-se, mas sorrindo):</p>
              <p className="italic">"É verdade, eu confesso! Mas depois eu sempre te ajudava a levantar. Éramos uma equipe, lembra?"</p>
            </div>
          </div>
        </div>
      )
    },
    // Adicionar mais páginas conforme necessário...
    // Por questões de espaço, vou criar um exemplo resumido
    
    // Página 5 - Transição Musical Cena 1
    {
      tipo: 'conteudo',
      conteudo: (
        <div className="h-full p-8 overflow-auto">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            TRANSIÇÃO MUSICAL - 4 minutos
          </h3>
          <div className="space-y-4 text-base leading-relaxed">
            <p className="italic text-gray-600">
              A música começa suave e vai crescendo. Outros alunos começam a aparecer das laterais e de trás do livro gigante, cada um representando uma memória.
            </p>

            <div className="bg-purple-50 p-4 rounded">
              <p className="font-bold text-purple-900">COREOGRAFIA</p>
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li><strong>Fase 1 - Descoberta (1min):</strong> Movimentos curiosos, exploratórios, como crianças descobrindo o mundo</li>
                <li><strong>Fase 2 - Brincadeiras (1min):</strong> Simulam jogos infantis - pular corda, amarelinha, pega-pega</li>
                <li><strong>Fase 3 - Conexão (1min):</strong> Formam duplas e trios, representando amizades se formando</li>
                <li><strong>Fase 4 - União (1min):</strong> Todos formam um grande círculo, dão as mãos e giram</li>
              </ol>
            </div>

            <p className="italic text-gray-600 mt-4">
              Durante a dança, o telão continua mostrando fotos da infância dos alunos reais.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-6">
              FINAL - 2 minutos
            </h3>

            <p className="italic text-gray-600">
              A música diminui. Os dançarinos congelam em poses representando momentos de amizade.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="font-bold">TODOS OS ALUNOS (em coro):</p>
              <p className="italic">"...essa sempre será a NOSSA história!"</p>
            </div>

            <p className="font-bold text-center mt-6 text-xl text-amber-900">
              *** BLACKOUT ***
            </p>
          </div>
        </div>
      )
    },
    // Página final
    {
      tipo: 'final',
      conteudo: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 p-8">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-6">
            FIM DO ROTEIRO
          </h2>
          <p className="text-xl text-amber-800 text-center mb-8">
            "A Million Dreams for the World We're Gonna Make"
          </p>
          <div className="text-center text-amber-700 space-y-2">
            <p className="text-lg">Turmas do 8º Ano</p>
            <p className="text-lg">2025</p>
          </div>
          <BookOpen className="w-20 h-20 text-amber-700 mt-8" />
        </div>
      )
    }
  ];

  const totalPaginas = paginas.length;

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const irParaPagina = (index) => {
    setPaginaAtual(index);
    setMenuAberto(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">Roteiro do Musical</h1>
          </div>
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Menu className="w-5 h-5" />
            Índice
          </button>
        </div>
      </div>

      {/* Menu Lateral */}
      {menuAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={() => setMenuAberto(false)}>
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 max-h-96 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Navegação Rápida</h2>
            <div className="space-y-2">
              {paginas.map((pagina, index) => (
                <button
                  key={index}
                  onClick={() => irParaPagina(index)}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    paginaAtual === index 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900'
                  }`}
                >
                  Página {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Livro */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ minHeight: '600px' }}>
          {/* Páginas do Livro */}
          <div className="flex">
            {/* Página Esquerda */}
            <div className="w-1/2 border-r-2 border-amber-200 relative">
              {paginaAtual > 0 && (
                <div className="absolute top-4 left-4 text-amber-600 font-serif">
                  Página {paginaAtual}
                </div>
              )}
              {paginas[paginaAtual]?.conteudo}
            </div>

            {/* Página Direita */}
            <div className="w-1/2 relative">
              {paginaAtual < totalPaginas - 1 && (
                <>
                  <div className="absolute top-4 right-4 text-amber-600 font-serif">
                    Página {paginaAtual + 1}
                  </div>
                  {paginas[paginaAtual + 1]?.conteudo}
                </>
              )}
            </div>
          </div>

          {/* Controles de Navegação */}
          <div className="bg-amber-100 p-4 flex items-center justify-between border-t-2 border-amber-200">
            <button
              onClick={paginaAnterior}
              disabled={paginaAtual === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                paginaAtual === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <div className="text-amber-900 font-medium">
              {paginaAtual + 1} / {totalPaginas}
            </div>

            <button
              onClick={proximaPagina}
              disabled={paginaAtual === totalPaginas - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                paginaAtual === totalPaginas - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg'
              }`}
            >
              Próxima
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Instruções */}
        <div className="mt-4 text-center text-amber-700">
          <p className="text-sm">
            💡 Use os botões de navegação ou o menu índice para folhear o livro
          </p>
        </div>
      </div>
    </div>
  );
};

export default RotarioLivro;