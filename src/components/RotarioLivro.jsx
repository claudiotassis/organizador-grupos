import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react';

const RotarioLivro = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [livroAberto, setLivroAberto] = useState(false);

  // Conteúdo do roteiro "CRESCER" dividido em páginas
  const paginas = [
    // CAPA
    {
      tipo: 'capa',
      conteudo: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white p-8">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold mb-4">🎭</h1>
            <h1 className="text-5xl font-bold leading-tight">CRESCER:</h1>
            <h1 className="text-4xl font-bold leading-tight">Uma Jornada de</h1>
            <h1 className="text-4xl font-bold leading-tight">Sonhos e Amizades</h1>
            <div className="mt-8 text-xl opacity-90">
              Musical Escolar
            </div>
            <div className="mt-4 text-lg opacity-75">
              Turmas do 8º Ano - 2025
            </div>
          </div>
        </div>
      )
    },

    // INFORMAÇÕES GERAIS
    {
      tipo: 'info',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Informações Gerais</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-700 mb-2">Duração Total</h3>
              <p>Aproximadamente 50-55 minutos</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-700 mb-2">Número de Cenas</h3>
              <p>7 cenas principais</p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-semibold text-pink-700 mb-2">Participantes</h3>
              <p>Todas as turmas do 8º ano (A, B e C)</p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-700 mb-2">Tema Central</h3>
              <p>Crescimento, amizade, superação e sonhos</p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-700 mb-2">Público-Alvo</h3>
              <p>Famílias, professores, comunidade escolar</p>
            </div>
          </div>
        </div>
      )
    },

    // ÍNDICE DAS CENAS
    {
      tipo: 'indice',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Índice das Cenas</h2>
          <div className="space-y-3">
            {[
              { num: 1, titulo: "Era Uma Vez... Nós", tema: "Nostalgia e Infância", duracao: "8 min" },
              { num: 2, titulo: "Nova em Folha", tema: "Adaptação e Coragem", duracao: "7 min" },
              { num: 3, titulo: "Friendship Bridge", tema: "Amizades através do tempo", duracao: "4 min" },
              { num: 4, titulo: "Fix You - Quando a Luz se Apaga", tema: "Saúde Mental e Apoio", duracao: "8-10 min" },
              { num: 5, titulo: "Cafeteria dos Sonhos", tema: "Ambição e Esperança", duracao: "6 min" },
              { num: 6, titulo: "Rivalidade na Quadra", tema: "Superação e Trabalho em Equipe", duracao: "6 min" },
              { num: 7, titulo: "Um Milhão de Sonhos - Grande Finale", tema: "Sonhos Coletivos", duracao: "8 min" }
            ].map(cena => (
              <div key={cena.num} className="bg-white p-4 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-indigo-700">Cena {cena.num}: {cena.titulo}</h3>
                    <p className="text-sm text-gray-600 mt-1">{cena.tema}</p>
                  </div>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{cena.duracao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // CENA 1 - PARTE 1
    {
      tipo: 'cena',
      numero: 1,
      conteudo: (
        <div className="p-8">
          <div className="bg-purple-100 p-4 rounded-t-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800">CENA 1: Era Uma Vez... Nós</h2>
            <p className="text-sm text-purple-600">Tema: Nostalgia e Infância • Duração: 8 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Conceito</h3>
              <p className="text-gray-700">
                Abertura nostálgica que transporta o público de volta à infância dos alunos. 
                Um livro gigante se abre revelando memórias através de fotos projetadas no telão.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Cenário</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Livro gigante aberto no centro (3m de altura)</li>
                <li>• Telão projetando fotos da infância dos alunos</li>
                <li>• Iluminação quente e dourada</li>
                <li>• Carteiras escolares antigas em semicírculo</li>
                <li>• Objetos de infância: bola, corda de pular, giz</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Personagens Principais</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Alice</strong> - Líder carismática, sorridente</li>
                <li><strong>Guilherme</strong> - Alegre e brincalhão</li>
                <li><strong>João Paulino</strong> - Sentimental, guarda memórias</li>
                <li><strong>Narrador</strong> - Voz over</li>
                <li><strong>Coro/Dançarinos</strong> - 15-20 alunos</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Música</h3>
              <p className="text-gray-700 text-sm">
                Canção nostálgica sobre amizade infantil com crescimento musical gradual
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 1 - PARTE 2 (Roteiro)
    {
      tipo: 'cena',
      numero: 1,
      conteudo: (
        <div className="p-8">
          <div className="bg-purple-100 p-4 rounded-t-lg border-l-4 border-purple-500 mb-4">
            <h2 className="text-xl font-bold text-purple-800">CENA 1: Roteiro Detalhado</h2>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700 mb-1">ABERTURA (2 minutos)</p>
              <p className="text-gray-600 italic mb-2">
                *Luzes se acendem gradualmente. O livro gigante está fechado. Música instrumental suave. Fumaça baixa opcional.*
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-purple-700 mb-1">NARRADOR (voz over):</p>
              <p className="text-gray-700">
                "Era uma vez... não, espere. Esta não é uma história de faz de conta. Esta é NOSSA história. 
                A história de quando éramos apenas crianças... crianças cheias de sonhos e amizades que nunca 
                imaginaríamos onde nos levariam."
              </p>
            </div>

            <div className="bg-blue-50 p-3 rounded">
              <p className="text-gray-600 italic mb-2">
                *Alice, Guilherme e João Paulino entram por lados opostos, olhando ao redor com nostalgia.*
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-blue-700 mb-1">ALICE (acenando animada):</p>
              <p className="text-gray-700">"Oi, Guilherme! Quanto tempo!"</p>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-green-700 mb-1">GUILHERME (abrindo os braços):</p>
              <p className="text-gray-700">
                "Alice! Que saudade de você! Parece que faz uma eternidade..."
              </p>
            </div>

            <div className="bg-blue-50 p-3 rounded">
              <p className="text-gray-600 italic">
                *Eles se abraçam no centro do palco.*
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-orange-700 mb-1">JOÃO PAULINO (entrando com álbum):</p>
              <p className="text-gray-700">
                "Nossa, vocês dois? Não acredito que nos encontramos aqui!"
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 2
    {
      tipo: 'cena',
      numero: 2,
      conteudo: (
        <div className="p-8">
          <div className="bg-blue-100 p-4 rounded-t-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-800">CENA 2: Nova em Folha</h2>
            <p className="text-sm text-blue-600">Tema: Adaptação, Coragem e Novas Amizades • Duração: 7 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Conceito</h3>
              <p className="text-gray-700">
                Uma aluna que se mudou dos EUA para o Brasil enfrenta o desafio de fazer novos amigos. 
                Seus pensamentos aparecem em inglês no telão, contrastando com os diálogos em português, 
                simbolizando sua barreira emocional e cultural.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Cenário</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Sala de aula realista com carteiras em fileiras</li>
                <li>• Telão mostra pensamentos da Aluna Nova em inglês</li>
                <li>• Decoração de sala brasileira (mapa do Brasil, cartazes)</li>
                <li>• Atmosfera inicialmente fria, gradualmente acolhedora</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Personagens</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Aluna Nova</strong> - Tímida, introspectiva, corajosa</li>
                <li><strong>Narradora (Luísa Fabris)</strong> - Voz empática</li>
                <li><strong>Alunos 1, 2, 3, 4</strong> - Diferentes personalidades</li>
                <li><strong>Professora</strong> - Figura gentil e compreensiva</li>
                <li><strong>Coro/Dançarinos</strong> - 12-15 alunos</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Mensagem Central</h3>
              <p className="text-gray-700 text-sm italic">
                "É preciso ter coragem para tentar coisas novas. Novos lugares, novos amigos, novos sabores. 
                Porque é no novo que a gente se descobre."
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 3
    {
      tipo: 'cena',
      numero: 3,
      conteudo: (
        <div className="p-8">
          <div className="bg-cyan-100 p-4 rounded-t-lg border-l-4 border-cyan-500">
            <h2 className="text-2xl font-bold text-cyan-800">CENA 3: Friendship Bridge</h2>
            <p className="text-sm text-cyan-600">Tema: Amizades que atravessam o tempo • Duração: 4 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Conceito</h3>
              <p className="text-gray-700">
                Acompanhamos duas amizades desde o nascimento até a adolescência através de três atos: 
                vídeos das mães, vídeos das crianças brincando, e cena ao vivo das adolescentes se apoiando.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Estrutura</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Ato 1 (Vídeo):</strong> Mães com bebês - 1 minuto</li>
                <li><strong>Ato 2 (Vídeo):</strong> Crianças brincando - 1 minuto</li>
                <li><strong>Ato 3 (Ao vivo):</strong> Adolescentes se apoiando - 2 minutos</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Personagens</h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Vídeos:</strong></p>
                <ul className="ml-4">
                  <li>• Mãe 1 (Stella Balbino) - Animada, sonhadora</li>
                  <li>• Mãe 2 (Gabriela Baltazar) - Doce, esperançosa</li>
                  <li>• Criança 1 e 2 (Irmãs das protagonistas)</li>
                </ul>
                <p className="mt-2"><strong>Palco:</strong></p>
                <ul className="ml-4">
                  <li>• Ludmila Gaede - Leal, empática, protetora</li>
                  <li>• Isabela Grip - Sensível, determinada, emotiva</li>
                </ul>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Música</h3>
              <p className="text-gray-700 text-sm">
                "Count On Me" - Bruno Mars
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 4
    {
      tipo: 'cena',
      numero: 4,
      conteudo: (
        <div className="p-8">
          <div className="bg-orange-100 p-4 rounded-t-lg border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-800">CENA 4: Fix You - Quando a Luz se Apaga</h2>
            <p className="text-sm text-orange-600">Tema: Saúde Mental, Superação, Apoio • Duração: 8-10 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Conceito Aprofundado</h3>
              <p className="text-gray-700">
                Uma jornada emocional intensa sobre uma adolescente enfrentando múltiplos desafios: 
                pressão acadêmica, problemas familiares, bullying, solidão e insegurança. Quando está 
                à beira do colapso, luzes (representando esperança e apoio) aparecem para guiá-la.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Elementos Visuais</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Iluminação dramática: escuridão gradual, focos individuais</li>
                <li>• Efeito de "vozes": Problemas falam em camadas sobrepostas</li>
                <li>• Lanternas/Luzes LED portadas pelos "portadores de luz"</li>
                <li>• Projeções: palavras negativas → positivas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">7 Problemas</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>1. Pais Brigando</li>
                <li>2. Professora Exigente</li>
                <li>3. Amigo Falso</li>
                <li>4. Bullying</li>
                <li>5. Solidão</li>
                <li>6. Comparações Sociais</li>
                <li>7. Insegurança/Pressão</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Mensagem</h3>
              <p className="text-gray-700 text-sm italic">
                "Você não está sozinho. Sempre há luz, mesmo nos momentos mais escuros."
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 5
    {
      tipo: 'cena',
      numero: 5,
      conteudo: (
        <div className="p-8">
          <div className="bg-teal-100 p-4 rounded-t-lg border-l-4 border-teal-500">
            <h2 className="text-2xl font-bold text-teal-800">CENA 5: Cafeteria dos Sonhos</h2>
            <p className="text-sm text-teal-600">Tema: Ambição, Esperança e Apoio Entre Amigos • Duração: 6 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Conceito</h3>
              <p className="text-gray-700">
                Grupo de jovens discute sonhos de futuro em cafeteria. Um deles não acredita em si, 
                mas com apoio dos amigos, descobre esperança. Anos depois, vemos que realizaram seus sonhos.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Estrutura</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Parte 1:</strong> A Cafeteria - Conversa sobre sonhos (2 min)</li>
                <li><strong>Parte 1.5:</strong> Número Musical motivacional (2 min)</li>
                <li><strong>Parte 2:</strong> A Formatura - 1 ano depois (1 min)</li>
                <li><strong>Parte 3:</strong> O Museu - Sonho realizado (1 min)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Personagens</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Paula</strong> - Líder, encorajadora</li>
                <li><strong>Fabiola</strong> - Sonhadora, otimista</li>
                <li><strong>Francisco</strong> - Engraçado, inseguro</li>
                <li><strong>Carlos</strong> - Brincalhão, competitivo</li>
                <li><strong>Thiago</strong> - Introvertido, inseguro, talentoso</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Mensagem</h3>
              <p className="text-gray-700 text-sm italic">
                "Esperança é o combustível que transforma sonhos em realidade."
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 6
    {
      tipo: 'cena',
      numero: 6,
      conteudo: (
        <div className="p-8">
          <div className="bg-red-100 p-4 rounded-t-lg border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-800">CENA 6: Rivalidade na Quadra</h2>
            <p className="text-sm text-red-600">Tema: Superação, Trabalho em Equipe, Resiliência • Duração: 6 minutos</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Conceito</h3>
              <p className="text-gray-700">
                Time de basquete do 8º ano sofre bullying do 9º após perder. Determinados a provar seu valor, 
                treinam intensamente e na final usam provocações como motivação para conquistar vitória.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Cenário</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Quadra de basquete no palco</li>
                <li>• Arquibancadas/bancos nas laterais</li>
                <li>• Cesta de basquete (representativa)</li>
                <li>• Telão mostra vídeos de treino</li>
                <li>• Iluminação esportiva dinâmica</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Personagens</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Guilherme</strong> - Capitão, determinado</li>
                <li><strong>Catarina</strong> - Vice-capitã, estrategista</li>
                <li><strong>Gabriel</strong> - Inseguro no início</li>
                <li><strong>Leonardo</strong> - Solidário</li>
                <li><strong>Madu</strong> - Motivadora</li>
                <li><strong>Treinador e Torcedor</strong> - Apoio</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Mensagem</h3>
              <p className="text-gray-700 text-sm italic">
                "Transforme sua dor em poder. Sua luta em força."
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 7 - Parte 1
    {
      tipo: 'cena',
      numero: 7,
      conteudo: (
        <div className="p-8">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-t-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800">CENA 7: Um Milhão de Sonhos - GRANDE FINALE</h2>
            <p className="text-sm text-purple-600">Tema: A Magnitude dos Sonhos Coletivos • Duração: 8 MINUTOS</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Conceito Expandido</h3>
              <p className="text-gray-700">
                O grande final une todas as histórias. No telão, timelapses criados por IA mostram cada aluno 
                transformando-se de criança até adulto realizando sua profissão dos sonhos. Todos se reúnem 
                no palco para celebração épica da imaginação e possibilidades infinitas.
              </p>
            </div>

           <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Elementos Visuais</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Telão com timelapses IA: Cada aluno de criança até adulto em profissão</li>
                <li>• Iluminação dourada/laranja: Cores quentes de esperança</li>
                <li>• Projeções de palavras-chave: Sonhos escritos flutuando</li>
                <li>• Efeitos de estrelas: Pontos de luz como estrelas cadentes</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Participantes</h3>
              <p className="text-gray-700 text-sm">
                <strong>TODAS AS TURMAS</strong> (8º A, B e C) - 80-100 alunos
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Música</h3>
              <p className="text-gray-700 text-sm">
                Inspirada em "A Million Dreams" (The Greatest Showman)
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Timing Exato</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>0:00-0:45 → Abertura/Narradores</li>
                <li>0:45-2:45 → Timelapses IA + Coreografia (2 min)</li>
                <li>2:45-4:15 → Primeira Explosão Musical (1min 30seg)</li>
                <li>4:15-5:15 → Momento Íntimo (1 min)</li>
                <li>5:15-7:45 → Apoteose Final (2min 30seg)</li>
                <li>7:45-8:00 → Encerramento (15 seg)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // CENA 7 - Parte 2 (Coreografia)
    {
      tipo: 'cena',
      numero: 7,
      conteudo: (
        <div className="p-8">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-t-lg border-l-4 border-purple-500 mb-4">
            <h2 className="text-xl font-bold text-purple-800">CENA 7: Coreografia do Grande Finale</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Movimento 1 - "Explosão de Estrelas" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Todos espalhados pelo palco</li>
                <li>• Braços abrem como estrelas explodindo</li>
                <li>• Giram 360 graus no lugar</li>
                <li>• Param em pose com braço apontando para cima</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Movimento 2 - "Ondas de Possibilidades" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Formação de ondas humanas esquerda → direita</li>
                <li>• Cada fileira faz a onda em sequência rápida</li>
                <li>• Efeito visual de mar de pessoas</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Movimento 3 - "Círculos de Sonhos" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Formam 3 círculos concêntricos</li>
                <li>• Círculo interno gira → direita</li>
                <li>• Círculo do meio gira → esquerda</li>
                <li>• Círculo externo gira → direita</li>
                <li>• Efeito hipnótico e belo</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2">Movimento 4 - "Voo Coletivo" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Todos correm para frente em diagonal</li>
                <li>• Braços abertos como asas</li>
                <li>• Pulam sincronizados</li>
                <li>• Param em pose de "super-herói"</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2">Movimento 5 - "Conexão Universal" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Formam linhas horizontais</li>
                <li>• Dão as mãos criando "corrente"</li>
                <li>• Onda passa pela corrente (impulso elétrico)</li>
                <li>• Soltam mãos e giram</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-2">Movimento 6 - "Pirâmide de Esperança" (15 seg)</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Formam níveis (se houver plataformas)</li>
                <li>• Ou: uns ajoelham, outros em pé, outros com braços erguidos</li>
                <li>• Efeito de "montanha" humana</li>
                <li>• Todos olham para cima, braços erguidos</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // MATERIAIS NECESSÁRIOS
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">📋 Lista de Materiais Necessários</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Cenários</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Livro gigante aberto (3m altura) - Cena 1</li>
                <li>• Carteiras escolares antigas - 10 unidades</li>
                <li>• Sofás/mesa de cafeteria - Cena 5</li>
                <li>• Quadra de basquete (fita crepe) - Cena 6</li>
                <li>• Plataformas em 3 níveis (opcional) - Cena 7</li>
                <li>• Cortinas douradas de fundo - Cena 7</li>
                <li>• Painel de armários - Cena 3</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Adereços</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Álbum de fotos grande - Cena 1</li>
                <li>• Mochilas escolares - 5 unidades</li>
                <li>• Pão de queijo cenográfico - Cena 2</li>
                <li>• Bonecas bebê - 2 unidades (vídeo)</li>
                <li>• Brinquedos Barbie - 2 unidades (vídeo)</li>
                <li>• 30-40 luzes LED/lanternas - Cenas 4 e 7</li>
                <li>• Xícaras de café - 5 unidades</li>
                <li>• Becas e capelos - 5 unidades</li>
                <li>• Bola de basquete e troféu - Cena 6</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Tecnologia</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Sistema de som profissional (mínimo 2000W)</li>
                <li>• 8-10 microfones headset para solistas</li>
                <li>• Microfones ambiente para coro</li>
                <li>• Telão/projetor FULL HD (recomendado 4K)</li>
                <li>• Computador para vídeos (com BACKUP)</li>
                <li>• Mesa de luz com mínimo 12 canais</li>
                <li>• Refletores PAR LED coloridos (mínimo 8)</li>
                <li>• Moving lights - 2-4 unidades (opcional)</li>
                <li>• Máquina de fumaça baixa (opcional)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-2">Figurinos</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Roupas casuais coloridas - Cena 1 (15-20 alunos)</li>
                <li>• Uniformes escolares - Cena 2 (15-20 alunos)</li>
                <li>• Roupas brancas - Cena 3 (20 alunos)</li>
                <li>• Roupas escuras p/ "Problemas" - Cena 4 (7 alunos)</li>
                <li>• Roupas claras p/ "Portadores de Luz" - Cena 4 (6 alunos)</li>
                <li>• Uniformes de basquete - 2 cores (10-12 alunos)</li>
                <li>• <strong>Roupas douradas/elegantes - Cena 7 (TODOS)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // CRONOGRAMA DE ENSAIOS
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6">📅 Cronograma Sugerido de Ensaios</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Mês 1 - Preparação</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Semana 1-2: Audições e distribuição de papéis</li>
                <li>• Semana 3-4: Leitura de roteiro, marcação de bloqueios</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Mês 2 - Ensaios por Cena</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Semana 1: Cenas 1, 2 e 3</li>
                <li>• Semana 2: Cenas 4, 5 e 6</li>
                <li>• Semana 3: Cena 7 (Finale) - coreografia básica</li>
                <li>• Semana 4: Cena 7 (Finale) - integração com vídeos</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Mês 3 - Integração e Ajustes</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Semana 1-2: Ensaios sequenciais (todas as cenas seguidas)</li>
                <li>• Semana 3: Ensaio técnico (luz, som, cenário, vídeos)</li>
                <li>• Semana 4: Ensaio geral com figurinos completos</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-2">Semana da Apresentação</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Segunda: Ensaio geral completo (run-through total)</li>
                <li>• Terça: Ajustes técnicos + ensaio parcial</li>
                <li>• Quarta: Ensaio geral final com cronometragem</li>
                <li>• Quinta: Descanso/Preparação mental</li>
                <li>• <strong>Sexta/Sábado: APRESENTAÇÕES</strong></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // DICAS IMPORTANTES
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-green-50 to-teal-50">
          <h2 className="text-3xl font-bold text-green-800 mb-6">💡 Dicas Finais Importantes</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Para os Alunos</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Cheguem 2h30min antes da apresentação</li>
                <li>• Façam refeição leve 3h antes</li>
                <li>• Tragam água (muita!)</li>
                <li>• Usem o banheiro ANTES de vestir figurino</li>
                <li>• Desliguem celulares completamente</li>
                <li>• Façam aquecimento vocal em grupo (15min)</li>
                <li>• Façam alongamento corporal (10min)</li>
                <li>• <strong>Respirem fundo e se divirtam - vocês MERECEM!</strong></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Para os Professores/Diretores</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Tenham 2 kits de emergência (costura, cola, fita, alfinetes)</li>
                <li>• Tenham lista de todos com locais de entrada/saída</li>
                <li>• Cronometrem TUDO nos ensaios gerais</li>
                <li>• Filmem ensaios e mostrem evolução aos alunos</li>
                <li>• Celebrem cada vitória pequena</li>
                <li>• No dia: CALMA e POSITIVIDADE acima de tudo</li>
                <li>• <strong>Lembrem: "Se errarem, continuem. Público não sabe o roteiro!"</strong></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Para os Pais</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Apoio emocional é fundamental - seus filhos estão nervosos</li>
                <li>• Ajudem com figurinos/maquiagem se solicitado</li>
                <li>• Cheguem cedo ao teatro para bons lugares</li>
                <li>• <strong>NÃO CHAMEM os alunos durante a apresentação</strong></li>
                <li>• Preparem flores e presentes para o final</li>
                <li>• Filmem, mas aproveitem o momento ao vivo também</li>
                <li>• Comemorem MUITO - este é um marco na vida deles!</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // TIMELAPSES IA
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">🎨 Dicas para os Timelapses IA (Cena 7)</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Aplicativos Recomendados</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>FaceApp</strong> (iOS/Android) - melhor para aging</li>
                <li>• <strong>Remini</strong> (iOS/Android) - ótimo para melhorar qualidade</li>
                <li>• <strong>Reface</strong> (iOS/Android) - bom para transformações</li>
                <li>• <strong>Aging Booth</strong> (iOS/Android) - específico para envelhecimento</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Processo de Criação</h3>
              <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                <li>Cada aluno fornece foto de quando criança (3-7 anos)</li>
                <li>Usar IA para criar progressão até adulto (25-30 anos)</li>
                <li>Adicionar elementos da profissão na foto final</li>
                <li>Criar transição suave (20-30 frames)</li>
                <li>Duração de cada timelapse: 3-4 segundos</li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Especificações Técnicas</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Resolução mínima: 1080p (1920x1080)</li>
                <li>• Formato: MP4 ou MOV</li>
                <li>• Codec: H.264</li>
                <li>• Frame rate: 30fps</li>
                <li>• Total de timelapses: 30-35 alunos</li>
                <li>• Editar todos em sequência contínua</li>
                <li>• Duração total do vídeo: 2 minutos</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2">Profissões Sugeridas</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Médico(a), Enfermeiro(a), Veterinário(a)</li>
                <li>• Professor(a), Psicólogo(a)</li>
                <li>• Engenheiro(a), Arquiteto(a), Programador(a)</li>
                <li>• Músico(a), Artista, Chef</li>
                <li>• Piloto, Atleta, Advogado(a)</li>
                <li>• Cientista, Designer, Fotógrafo(a)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // MENSAGEM FINAL
    {
      tipo: 'final',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">💫 Mensagem Final</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border-2 border-orange-300">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-orange-700">Queridos alunos do 8º ano,</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vocês embarcaram em uma jornada extraordinária. Cada ensaio foi um passo em direção 
                a um sonho coletivo. Vocês aprenderam não apenas a cantar, dançar e atuar, mas 
                aprenderam sobre:
              </p>
              <ul className="text-gray-700 space-y-2 text-sm ml-6">
                <li>• <strong>Compromisso</strong> - aparecer mesmo quando estavam cansados</li>
                <li>• <strong>Trabalho em equipe</strong> - depender uns dos outros</li>
                <li>• <strong>Superação</strong> - enfrentar medos e inseguranças</li>
                <li>• <strong>Dedicação</strong> - praticar até conseguir</li>
                <li>• <strong>Amizade</strong> - criar laços que durarão para sempre</li>
                <li>• <strong>Confiança</strong> - em si mesmos e nos outros</li>
                <li>• <strong>Resiliência</strong> - levantar após cada erro</li>
                <li>• <strong>Celebração</strong> - aproveitar cada vitória pequena</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-purple-700">Quando subirem naquele palco, lembrem-se:</strong>
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>✨ Vocês são capazes</li>
                <li>✨ Vocês são talentosos</li>
                <li>✨ Vocês são especiais</li>
                <li>✨ Vocês merecem estar ali</li>
                <li>✨ Vocês já venceram ao chegar até aqui</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border-2 border-blue-300">
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                <strong>Vocês estão realizando não apenas um milhão de sonhos no palco,</strong>
              </p>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                <strong>mas também o sonho de cada pessoa na plateia que um dia</strong>
              </p>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                <strong>também teve 12, 13, 14 anos e sonhou grande.</strong>
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-400 text-center">
              <p className="text-2xl font-bold text-yellow-800 mb-2">
                Inspirem. Emocionem. Brilhem.
              </p>
              <p className="text-xl text-yellow-700 mb-4">
                O palco é de vocês.<br/>
                Os sonhos são de vocês.<br/>
                O futuro é de vocês.
              </p>
              <p className="text-3xl font-bold text-yellow-900 mt-4">
                QUEBREM UMA PERNA! 🎭✨
              </p>
            </div>
          </div>
        </div>
      )
    },

    // CONTRACAPA
    {
      tipo: 'contracapa',
      conteudo: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white p-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">✨</h2>
            <h2 className="text-3xl font-bold leading-relaxed">
              "O futuro pertence àqueles que<br/>
              acreditam na beleza de seus sonhos."
            </h2>
            <p className="text-lg opacity-90 italic">
              — Eleanor Roosevelt
            </p>
            <div className="mt-12 text-lg opacity-90">
              Um musical sobre crescimento,<br/>
              amizade e a coragem de sonhar
            </div>
            <div className="mt-8 text-sm opacity-75">
              7 cenas • 50-55 minutos<br/>
              Turmas do 8º Ano A, B e C
            </div>
            <div className="mt-8 text-xs opacity-60">
              © 2025 - Projeto Musical Escolar<br/>
              "CRESCER: Uma Jornada de Sonhos e Amizades"
            </div>
          </div>
        </div>
      )
    }
  ];

  const abrirLivro = () => {
    setLivroAberto(true);
    setPaginaAtual(0);
  };

  const fecharLivro = () => {
    setLivroAberto(false);
    setPaginaAtual(0);
  };

  const proximaPagina = () => {
    if (paginaAtual < paginas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  if (!livroAberto) {
    return (
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-2xl p-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-8 shadow-xl">
              <BookOpen className="w-24 h-24 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-purple-800">
            CRESCER
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700">
            Uma Jornada de Sonhos e Amizades
          </h3>
          <p className="text-xl text-gray-600">
            Roteiro Completo do Musical
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um musical escolar para as turmas do 8º ano, com 7 cenas emocionantes sobre 
            crescimento, amizade, superação e a coragem de sonhar grande.
          </p>
          <button
            onClick={abrirLivro}
           className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Abrir Roteiro 📖
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Header do Livro */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <BookOpen className="w-6 h-6" />
          <span className="font-bold text-lg">CRESCER: Uma Jornada de Sonhos e Amizades</span>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="text-sm">
            Página {paginaAtual + 1} de {paginas.length}
          </span>
          <button
            onClick={fecharLivro}
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Conteúdo da Página */}
      <div className="min-h-[600px] max-h-[70vh] overflow-y-auto">
        {paginas[paginaAtual].conteudo}
      </div>

      {/* Controles de Navegação */}
      <div className="bg-gray-100 p-4 flex items-center justify-between border-t">
        <button
          onClick={paginaAnterior}
          disabled={paginaAtual === 0}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          Anterior
        </button>

        <div className="flex gap-2">
          {paginas.map((_, index) => (
            <button
              key={index}
              onClick={() => setPaginaAtual(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === paginaAtual 
                  ? 'bg-purple-600 w-8' 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={proximaPagina}
          disabled={paginaAtual === paginas.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próxima
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default RotarioLivro;
