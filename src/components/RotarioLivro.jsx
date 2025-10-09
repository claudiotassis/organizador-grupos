import React, { useState } from 'react';
import { Book, ChevronDown, ChevronUp, Music, Users, Calendar, Film, Lightbulb } from 'lucide-react';

const RoteiroMusicalLivro = () => {
  const [secaoExpandida, setSecaoExpandida] = useState('capa');

  const secoes = [
    { id: 'capa', titulo: 'Capa', icone: <Book className="w-5 h-5" /> },
    { id: 'info', titulo: 'Informações Gerais', icone: <Lightbulb className="w-5 h-5" /> },
    { id: 'cena1', titulo: 'Cena 1: Era Uma Vez... Nós', icone: <Users className="w-5 h-5" /> },
    { id: 'cena2', titulo: 'Cena 2: Novos Começos', icone: <Users className="w-5 h-5" /> },
    { id: 'cena3', titulo: 'Cena 3: Friendship Bridge', icone: <Music className="w-5 h-5" /> },
    { id: 'cena4', titulo: 'Cena 4: Luzes na Escuridão', icone: <Film className="w-5 h-5" /> },
    { id: 'cena5', titulo: 'Cena 5: Esperança e Futuro', icone: <Users className="w-5 h-5" /> },
    { id: 'cena6', titulo: 'Cena 6: Superação', icone: <Film className="w-5 h-5" /> },
    { id: 'cena7', titulo: 'Cena 7: Um Milhão de Sonhos', icone: <Music className="w-5 h-5" /> },
    { id: 'tecnico', titulo: 'Informações Técnicas', icone: <Calendar className="w-5 h-5" /> },
  ];

  const toggleSecao = (id) => {
    setSecaoExpandida(secaoExpandida === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Capa do Livro */}
        <div className="bg-white rounded-lg shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-12 text-center">
            <Book className="w-20 h-20 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Roteiro Musical Completo</h1>
            <h2 className="text-2xl text-white mb-4">Formatura 8º Ano</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-white text-lg italic">
                "Da infância aos sonhos, da amizade à realização"
              </p>
            </div>
          </div>
        </div>

        {/* Índice Interativo */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Book className="w-6 h-6" />
            Índice
          </h2>
          <div className="space-y-2">
            {secoes.map((secao) => (
              <button
                key={secao.id}
                onClick={() => toggleSecao(secao.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                  secaoExpandida === secao.id
                    ? 'bg-purple-100 text-purple-800 font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  {secao.icone}
                  <span>{secao.titulo}</span>
                </div>
                {secaoExpandida === secao.id ? <ChevronUp /> : <ChevronDown />}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo das Seções */}
        <div className="space-y-6">
          {/* CAPA */}
          {secaoExpandida === 'capa' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
                  <h1 className="text-5xl font-bold text-gray-800 mb-4">🎭</h1>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Roteiro Musical Completo
                  </h2>
                  <h3 className="text-2xl text-gray-600 mb-6">
                    Formatura 8º Ano
                  </h3>
                  <div className="border-t-2 border-purple-300 pt-6 mt-6">
                    <p className="text-xl italic text-gray-700 mb-4">
                      "De crianças cheias de sonhos a adultos que realizam"
                    </p>
                    <p className="text-lg text-gray-600">
                      Uma jornada de crescimento, amizade e superação
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-800">Duração Total</p>
                    <p className="text-2xl font-bold text-purple-600">35-40 min</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800">Número de Cenas</p>
                    <p className="text-2xl font-bold text-blue-600">7 cenas</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INFORMAÇÕES GERAIS */}
          {secaoExpandida === 'info' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                Informações Gerais do Espetáculo
              </h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mensagem Central</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Da infância à adolescência, das dúvidas aos sonhos, dos medos às vitórias. Esta é a jornada de crescimento de uma turma que aprendeu que, juntos, somos mais fortes. Que as amizades nos sustentam, que os desafios nos fortalecem, e que os sonhos, por maiores que sejam, são sempre possíveis quando temos esperança e pessoas ao nosso lado."
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Temas Centrais</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 1:</strong> Nostalgia e amizade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 2:</strong> Aceitação e novos começos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 3:</strong> Amizades duradouras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 4:</strong> Superação de desafios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 5:</strong> Esperança e realização</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 6:</strong> Resiliência e vitória</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Cena 7:</strong> Sonhos e futuro</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Estrutura do Espetáculo</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>7 cenas interligadas com narrativa fluida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Transições suaves entre cenas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Uso constante de telão para vídeos e projeções</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Combinação de narrativa, música e dança</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* CENA 1 */}
          {secaoExpandida === 'cena1' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-purple-800 mb-2">CENA 1: "Era Uma Vez... Nós"</h2>
                <p className="text-purple-700">Música: A definir | Duração: ~5 minutos</p>
                <p className="text-purple-600 italic mt-2">Tema: Nostalgia da infância e amizades que construímos</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Livro gigante aberto no centro do palco</li>
                    <li>• Telão com fotos da infância dos alunos</li>
                    <li>• Carteiras escolares ou almofadas no chão</li>
                    <li>• Iluminação suave e nostálgica</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Roupas coloridas e casuais</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Narrador</li>
                    <li>• Alice</li>
                    <li>• Guilherme</li>
                    <li>• João Paulino</li>
                    <li>• Ensemble (todos os outros)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Roteiro</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-purple-700 mb-2">ABERTURA</p>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                      <p className="italic text-gray-600 mb-2"><strong>Narrador:</strong></p>
                      <p className="text-gray-700">"Era uma vez... nós éramos apenas crianças. Crianças cheias de sonhos e amizades."</p>
                      <p className="text-gray-600 text-sm mt-2">(Alice e Guilherme estão sentados no centro, folheando um álbum de fotos)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 mb-1"><strong>Alice:</strong> "Oi, Guilherme!"</p>
                    <p className="text-gray-700 mb-1"><strong>Guilherme:</strong> "Oi, Alice! Que saudade de você!"</p>
                    <p className="text-gray-700 mb-1"><strong>João Paulino:</strong> (entrando) "Nossa, vocês dois?"</p>
                    <p className="text-gray-700 mb-1"><strong>Alice e Guilherme:</strong> (surpresos) "Paulino!"</p>
                    <p className="text-gray-700 mb-1"><strong>João Paulino:</strong> "Eu estou com um álbum de fotos da nossa infância aqui."</p>
                    <p className="text-gray-700"><strong>Alice:</strong> "Que legal! Vamos ver!"</p>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 mb-1"><strong>Guilherme:</strong> "Você se lembra quando a gente brincava no pátio da escola?"</p>
                    <p className="text-gray-700 mb-1"><strong>Alice:</strong> "Claro que lembro! A gente corria muito, parecia que o dia nunca ia acabar."</p>
                    <p className="text-gray-700 mb-1"><strong>João Paulino:</strong> "E aquele jogo de bola? Eu sempre caía e você ria de mim."</p>
                    <p className="text-gray-700 mb-1"><strong>Guilherme:</strong> (rindo) "É verdade! Mas depois eu ajudava você a levantar."</p>
                    <p className="text-gray-700 mb-1"><strong>Alice:</strong> "Olha ali... aquela foto foi no nosso primeiro passeio juntos!"</p>
                    <p className="text-gray-700"><strong>João Paulino:</strong> "Eu nunca vou esquecer. Foi um dos dias mais felizes da minha infância."</p>
                    <p className="text-gray-700 font-bold mt-2"><strong>Juntos:</strong> "Nós éramos crianças cheias de sonhos e amizades."</p>
                  </div>

                  <div>
                    <p className="font-bold text-purple-700 mb-2">TRANSIÇÃO PARA A DANÇA</p>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                      <p className="text-gray-600 text-sm">(A música começa a tocar. Outros alunos se levantam gradualmente e entram para a coreografia. Todos formam um círculo e começam a dança coletiva, representando brincadeiras de infância)</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-purple-700 mb-2">FINAL</p>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                      <p className="text-gray-700 mb-1"><strong>Alice:</strong> "Sonhos que nos fizeram crescer..."</p>
                      <p className="text-gray-700 mb-2"><strong>Guilherme:</strong> "...e amizades que nunca vamos esquecer."</p>
                      <p className="text-gray-700 font-bold mb-2"><strong>Todos os alunos (em coro):</strong> "E essa é a nossa história!"</p>
                      <p className="text-gray-600 text-sm">(A música termina. Última foto aparece no telão com a frase: "Éramos crianças cheias de sonhos e amizades." Lights fade.)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 2 */}
          {secaoExpandida === 'cena2' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">CENA 2: "Novos Começos"</h2>
                <p className="text-blue-700">Música: A definir (sugestão: música sobre pertencimento) | Duração: ~7 minutos</p>
                <p className="text-blue-600 italic mt-2">Tema: Superando a timidez e encontrando seu lugar</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Observação:</strong> A Aluna Nova não tem nome próprio pois representa todas as pessoas que já se sentiram sozinhas ao mudar de escola. Ela morava nos Estados Unidos e seus pais se mudaram para o Brasil. Seus pensamentos aparecem no telão em inglês.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sala de aula com carteiras</li>
                    <li>• Telão exibindo pensamentos em inglês</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Uniforme escolar</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Narradora (Luísa Fabris)</li>
                    <li>• Aluna Nova</li>
                    <li>• Professora</li>
                    <li>• Alunos 1, 2, 3, 4</li>
                    <li>• Ensemble</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 1 (~3 minutos)</h3>
                  
                  <div className="bg-white p-4 rounded mb-4">
                    <p className="text-gray-600 text-sm mb-2">(Sala de aula cheia de alunos conversando e rindo)</p>
                    <p className="text-gray-600 text-sm mb-2">(Aluna Nova entra ouvindo música com fones de ouvido. Narradora entra junto com ela)</p>
                    <p className="text-gray-700 mb-2"><strong>Narradora:</strong></p>
                    <p className="text-gray-700 italic mb-2">"Ela é a Aluna Nova, vinda dos Estados Unidos. Nunca teve muitos amigos e é muito tímida. Ela não tem um nome próprio porque representa todas as pessoas que já tiveram que se mudar para uma escola nova, sem conhecer ninguém."</p>
                    <p className="text-gray-600 text-sm">(Narradora sai de cena. Aluna Nova procura um lugar para sentar)</p>
                  </div>

                  <div className="bg-white p-4 rounded mb-4">
                    <p className="text-gray-700 mb-1"><strong>Aluna Nova:</strong> "Posso sentar aqui?"</p>
                    <p className="text-gray-700 mb-3"><strong>Aluno 1:</strong> "Não, está ocupado!"</p>
                    <p className="text-gray-700 mb-1"><strong>Aluna Nova:</strong> "Ah, OK."</p>
                    <div className="bg-blue-100 p-3 rounded mt-3">
                      <p className="text-xs text-blue-800 font-bold mb-1">PENSAMENTO NO TELÃO (em inglês):</p>
                      <p className="text-sm text-blue-700 italic">"I don't know anyone here. What if I can't make friends? I miss my old school and my friends in the United States."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">(A música começa a aumentar. Aluna Nova retira os fones e começa a dançar sozinha, expressando seus sentimentos)</p>
                    <p className="text-gray-600 text-sm">(Gradualmente, mais alunos começam a dançar com ela. De repente, todos os alunos estão dançando juntos. Durante a dança, a Aluna Nova parece começar a fazer amigos)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 2 (~2 minutos)</h3>
                  
                  <div className="bg-white p-4 rounded space-y-3">
                    <p className="text-gray-600 text-sm">(Sinal toca. Todos se sentam)</p>
                    <p className="text-gray-700"><strong>Professora:</strong> "OK, alunos. Hoje recebemos uma aluna nova. Aluna Nova, pode se levantar e se apresentar?"</p>
                    <p className="text-gray-600 text-sm">(Aluna Nova se levanta e fica na frente da sala, nervosa)</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> "Oi, eu sou a Aluna Nova. Tenho 12 anos e morava nos Estados Unidos."</p>
                    <p className="text-gray-700"><strong>Professora:</strong> (calmamente) "Vai ser um prazer dar aula para você neste ano. Agora sente-se no seu lugar."</p>
                    <p className="text-gray-700"><strong>Professora:</strong> "Então, alunos, hoje teremos um trabalho em grupo. Formem grupos de 4 pessoas."</p>
                    <p className="text-gray-600 text-sm">(Todos os alunos começam a formar grupos. Aluna Nova fica quieta em sua carteira, introspectiva)</p>
                    <p className="text-gray-700"><strong>Aluno 2:</strong> "Ei, Aluna Nova! Quer entrar no nosso grupo? Só falta uma pessoa."</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> (aliviada) "Tá bom, obrigada!"</p>
                    <p className="text-gray-600 text-sm">(Os alunos arrastam suas mesas para formar grupos)</p>
                    <p className="text-gray-700"><strong>Aluno 3:</strong> "Aluna Nova, gostei muito da sua dança. Você fazia algum tipo de aula lá nos Estados Unidos?"</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> "Não, eu não sou muito fã de dançar. Eu gosto mesmo é de música."</p>
                    <p className="text-gray-700"><strong>Aluno 4:</strong> "Que legal, eu também gosto!"</p>
                    <div className="bg-blue-100 p-3 rounded mt-3">
                      <p className="text-xs text-blue-800 font-bold mb-1">PENSAMENTO NO TELÃO:</p>
                      <p className="text-sm text-blue-700 italic">"Wow, they really care about me. I think I should try new things, like making new friends."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">(Narradora entra em cena)</p>
                    <p className="text-gray-700 italic"><strong>Narradora:</strong> "Eles fazem o trabalho e a Aluna Nova se diverte bastante com as conversas sobre música."</p>
                    <p className="text-gray-600 text-sm">(Narradora sai de cena)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 3 (~2 minutos)</h3>
                  
                  <div className="bg-white p-4 rounded space-y-3">
                    <p className="text-gray-600 text-sm">(Sinal toca novamente)</p>
                    <p className="text-gray-700"><strong>Professora:</strong> "OK, alunos, agora é hora do recreio. Podem fazer uma pausa para comer seus lanches."</p>
                    <p className="text-gray-600 text-sm">(Professora sai. Alunos pegam suas lancheiras e começam a comer)</p>
                    <p className="text-gray-700"><strong>Aluno 3:</strong> "Ei, Aluna Nova, você é dos Estados Unidos, né? Já comeu pão de queijo?"</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> "Não, ainda não comi. O que é isso?"</p>
                    <p className="text-gray-700"><strong>Aluno 2:</strong> "É uma das melhores comidas que você vai provar!"</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> "Não sei não, acho que não vou querer..."</p>
                    <p className="text-gray-700"><strong>Aluno 3:</strong> "Pode comer, é gostoso!"</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> "OK, vou provar um."</p>
                    <p className="text-gray-600 text-sm">(Aluna Nova come o pão de queijo)</p>
                    <p className="text-gray-700"><strong>Aluna Nova:</strong> (surpresa) "Que delícia! É bom mesmo!"</p>
                    <p className="text-gray-700"><strong>Aluno 4:</strong> "Não tem como não gostar."</p>
                    <div className="bg-blue-100 p-3 rounded mt-3">
                      <p className="text-xs text-blue-800 font-bold mb-1">PENSAMENTO NO TELÃO:</p>
                      <p className="text-sm text-blue-700 italic">"Wow, I was right. Trying new things is so good. I should do this more often."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">(Narradora entra na cena)</p>
                    <p className="text-gray-700 italic"><strong>Narradora:</strong> "E aqui, nós aprendemos que na vida é preciso tentar tudo."</p>
                    <p className="text-gray-600 text-sm">(Narradora sai de cena. Lights fade.)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 3 */}
          {secaoExpandida === 'cena3' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-green-800 mb-2">CENA 3: "Friendship Bridge"</h2>
                <p className="text-green-700">Música: "Count On Me" - Bruno Mars | Duração: ~4 minutos</p>
                <p className="text-green-600 italic mt-2">Formato: Vídeo colaborativo + performance ao vivo</p>
                <p className="text-green-600 italic">Tema: Amizades que atravessam o tempo</p>
                <p className="text-green-700 font-semibold mt-2">Mensagem: "As amizades são pontes que nos conectam"</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Escola (para a parte ao vivo)</li>
                    <li>• Telão exibindo vídeos gravados</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Roupas brancas</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Vídeo Ato 1: Stella Balbino e Gabriela Baltazar (mães)</li>
                    <li>• Vídeo Ato 2: Irmãs de Isabela Grip e Ludmila (crianças)</li>
                    <li>• Ato 3 (ao vivo): Isabela Grip e Ludmila Gaede</li>
                    <li>• Coro/Ensemble: Todas as turmas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">ATO 1 - VÍDEO (Gravado em ambiente doméstico)</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-600 text-sm mb-3">(Duas meninas representando mães estão com bonecas bebês nos braços)</p>
                    <p className="text-gray-700 mb-1"><strong>M1 (Stella):</strong> "Hello, dear! What's going on? That's your newborn? Is it female or male?"</p>
                    <p className="text-gray-700 mb-1"><strong>M2 (Gabriela):</strong> "Oh, hello sweetie! It's a girl. Her name is Isabella. And yours?"</p>
                    <p className="text-gray-700 mb-1"><strong>M1:</strong> "Oh, she's a girl too! Her name is Ludmila."</p>
                    <p className="text-gray-700 mb-1"><strong>M2:</strong> "She's so sweet and cute. I wish that in the future they can be best friends."</p>
                    <p className="text-gray-700 mb-1"><strong>M1:</strong> "Yes! That would be wonderful. Bye bye!"</p>
                    <p className="text-gray-700"><strong>M2:</strong> "Bye!"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">ATO 2 - VÍDEO (Gravado no playground da escola)</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-600 text-sm mb-3">(As duas crianças cresceram e estão brincando no parque)</p>
                    <p className="text-gray-700 mb-1"><strong>K1 (irmã da Ludmila):</strong> "Oh, Isa! Your doll is gorgeous!"</p>
                    <p className="text-gray-700 mb-1"><strong>K2 (irmã da Isabela):</strong> "Thank you! You are so cute! I like your Barbie, she's so pretty!"</p>
                    <p className="text-gray-700 mb-1"><strong>K1:</strong> "Thanks! Would you like to play with me? I'm playing Barbie and the 12 Princesses. You can be another princess!"</p>
                    <p className="text-gray-700"><strong>K2:</strong> "Yes, please! That's great!"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">ATO 3 - AO VIVO (No palco)</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-600 text-sm mb-3">(Agora as crianças são adolescentes no 8º ano, usando uniforme escolar)</p>
                    <p className="text-gray-700 mb-1"><strong>T1 (Ludmila):</strong> "Hello, Isa! What's going on? You look upset."</p>
                    <p className="text-gray-700 mb-1"><strong>T2 (Isabela):</strong> "Oh, Lud... it's nothing. I did badly in my exams. I'm really mad."</p>
                    <p className="text-gray-700 mb-1"><strong>T1:</strong> "Oh, I get it. But don't worry. You're gonna get over that."</p>
                    <p className="text-gray-700 mb-1"><strong>T2:</strong> "Do you think so? Maybe you're right."</p>
                    <p className="text-gray-700 mb-1"><strong>T1:</strong> "Of course! You're intelligent! I'm your friend and I'll always be at your side!"</p>
                    <p className="text-gray-700 mb-3"><strong>T2:</strong> "Thanks! I'm so grateful for our friendship!"</p>
                    <p className="text-gray-600 text-sm">(Elas se abraçam emocionadas)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">TRANSIÇÃO PARA MÚSICA</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <p className="text-gray-600 text-sm mb-2">(A música "Count On Me" começa. As duas amigas começam a cantar e dançar)</p>
                    <p className="text-gray-600 text-sm mb-2">(O ensemble entra gradualmente, todos com roupas brancas, formando uma coreografia que representa a união e apoio mútuo)</p>
                    <p className="text-gray-600 text-sm">(Final: todos em formação, com as mãos dadas, simbolizando as "pontes de amizade")</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 4 */}
          {secaoExpandida === 'cena4' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-indigo-100 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-indigo-800 mb-2">CENA 4: "Luzes na Escuridão"</h2>
                <p className="text-indigo-700">Música: "Fix You" - Coldplay | Duração: ~6-7 minutos</p>
                <p className="text-indigo-600 italic mt-2">Tema: Superando os desafios e encontrando luz nos momentos difíceis</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Palco escuro inicialmente</li>
                    <li>• Lanternas/luzes para os atores</li>
                    <li>• Iluminação progressiva até explodir em cores</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Roupas escuras/neutras (Problemas)</li>
                    <li>• Roupas claras (Portadores de Luz)</li>
                    <li>• Cores vibrantes (ensemble final)</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Protagonista (Isabela/Pietra/Gabriella)</li>
                    <li>• Problemas (6-7 atores)</li>
                    <li>• Duas Amigas da Protagonista</li>
                    <li>• Portadores de Luz (5-6 atores)</li>
                    <li>• Coro/Dançarinos (15 membros)</li>
                    <li>• Narrador (Pedro Louback)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">INÍCIO - ESCURIDÃO</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-2">
                      <p className="text-xs font-bold text-gray-600">LUZES: Palco escuro. Foco suave sobre a Protagonista</p>
                      <p className="text-xs font-bold text-gray-600">SOM: Início de "Fix You" (voz pré-gravada)</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">(Protagonista entra lentamente, caminhando com passos pesados, expressão abatida)</p>
                    <p className="text-gray-700 mb-2"><strong>Protagonista:</strong> "Eu tenho lutado por tanto tempo... mas nada dá certo. Estou cansada de tudo isso!"</p>
                    
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">OS PROBLEMAS SURGEM</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">LUZES: Sombras revelam atores ao redor dela</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">(Os Problemas (6-7 atores) entram e ficam ao redor dela, formando um bloqueio. Cada um fala alto)</p>
                    
                    <div className="space-y-2">
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Pais Brigando:</strong> "É sempre sua culpa! Você arruína tudo! Você nunca será o suficiente!"</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Professor Exigente:</strong> "Você deveria estudar mais! Está desperdiçando seu futuro! Você nunca faz o suficiente!"</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Amigo Falso:</strong> "Eu fingi me importar, mas a verdade é... você nunca foi realmente meu amigo."</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Bullying:</strong> "Olhe para você... patético, diferente, fraco. Ninguém te quer aqui!"</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Solidão:</strong> "Ninguém te vê. Ninguém se importa. Você é completamente... invisível."</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Comparações:</strong> "Todo mundo é melhor que você. Mais inteligente, mais forte, mais feliz."</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Insegurança:</strong> "Você vai falhar de novo, como sempre. Você não é bom o suficiente..."</p>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <p className="text-red-700 text-sm"><strong>Pressão:</strong> "Você tem que ser perfeito. Se você falhar, todos verão..."</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-yellow-50 p-3 rounded">
                      <p className="text-sm font-bold text-gray-700 mb-2">DESENVOLVIMENTO:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Primeiro, os Problemas falam separadamente, um após o outro</li>
                        <li>• Depois, gradualmente começam a falar juntos, aumentando o ruído</li>
                        <li>• A música começa</li>
                        <li>• Protagonista canta (áudio gravado) e caminha pelo palco tentando escapar</li>
                        <li>• Os Problemas formam uma barreira</li>
                        <li>• Protagonista fica mais desesperada, se curva, cobre os ouvidos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">AS LUZES SE ACENDEM</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">MÚSICA: "Lights will guide you home, and ignite your bones"</p>
                      <p className="text-xs font-bold text-gray-600">LUZES: De dentro dos Problemas, portadores de luz surgem</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">(5-6 atores com luzes surgem lentamente do meio dos Problemas. Alguns também saem da plateia)</p>
                    <p className="text-gray-600 text-sm mb-2">(Eles começam a cantar, dando contraste às vozes negativas)</p>
                    <p className="text-gray-600 text-sm mb-2">(A Protagonista olha para eles, começa a se levantar e tenta segui-los)</p>
                    <p className="text-gray-600 text-sm mb-2">(As duas Amigas aparecem com luzes e cantando)</p>
                    <p className="text-gray-600 text-sm mb-2">(Elas se aproximam da Protagonista, estendem as mãos e a abraçam)</p>
                    <p className="text-gray-600 text-sm mb-2">(Juntas, começam a atravessar os Problemas)</p>
                    <p className="text-gray-600 text-sm">(Os Problemas recuam, diminuindo o volume, até desaparecerem)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">CLÍMAX - SUPERAÇÃO E UNIÃO</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">LUZES: Palco gradualmente se ilumina com cores vibrantes (amarelo, azul, branco)</p>
                    </div>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Protagonista e Amigas erguem suas luzes bem alto</li>
                      <li>• Os portadores de luz se juntam a elas</li>
                      <li>• Todos os 15 dançarinos/coro entram com luzes</li>
                      <li>• A Protagonista se junta ao grupo, parte da união</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">POSE FINAL</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">LUZES: Palco totalmente iluminado. Holofote sobre a Protagonista</p>
                    </div>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Todos se reúnem ao redor dela</li>
                      <li>• Todos erguem suas luzes bem alto</li>
                      <li>• Protagonista olha para cima e sorri</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-3">Música termina. Breve silêncio.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">NARRADOR (após a música)</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">LUZES: Elenco congelado. Holofote ilumina o Narrador na lateral</p>
                    </div>
                    <p className="text-gray-700 italic mb-3"><strong>NARRADOR (Pedro Louback):</strong></p>
                    <p className="text-gray-700">"Crescer nunca é fácil. As vozes do mundo tentam nos derrubar.</p>
                    <p className="text-gray-700">Mas cada dor nos ensina. Cada queda nos torna mais fortes.</p>
                    <p className="text-gray-700">E no final, sempre haverá uma luz para nos guiar... e nos ajudar a evoluir."</p>
                    <p className="text-gray-600 text-sm mt-3">AÇÃO FINAL: Todos lentamente apagam as luzes e saem do palco.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 5 */}
          {secaoExpandida === 'cena5' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-amber-800 mb-2">CENA 5: "Esperança e Futuro"</h2>
                <p className="text-amber-700">Música: A definir (sugestão: música sobre esperança) | Duração: ~5-6 minutos</p>
                <p className="text-amber-600 italic mt-2">Tema: Ter esperança no futuro e realizar sonhos</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Parte 1: Cafeteria futurista (Central Perk)</li>
                    <li>• Parte 2: Cerimônia de formatura</li>
                    <li>• Parte 3: Museu de arte</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Parte 1: Roupas casuais</li>
                    <li>• Parte 2: Beca e capelo</li>
                    <li>• Parte 3: Roupas elegantes</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Paula, Fabíola</li>
                    <li>• Francisco, Carlos, Thiago</li>
                    <li>• Ensemble (frequentadores)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 1 - A CAFETERIA (~2 minutos)</h3>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p className="text-gray-600 text-sm mb-2">(Cinco jovens reunidos em cafeteria futurista)</p>
                    <p className="text-gray-700"><strong>Paula:</strong> "Gente, o que vocês pensam em fazer no futuro?"</p>
                    <p className="text-gray-700"><strong>Fabíola:</strong> "Ah, eu não sei ao certo... mas talvez eu queira ser dentista."</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> "Eu quero ser engenheiro!"</p>
                    <p className="text-gray-700"><strong>Carlos:</strong> (brincando) "Mas você não tem nem inteligência para isso! Já eu quero ser arquiteto."</p>
                    <p className="text-gray-700"><strong>Paula:</strong> "E você, Thiago? Que profissão você pensa em ter no futuro?"</p>
                    <p className="text-gray-700"><strong>Thiago:</strong> (triste) "Eu não acho que eu possa ter profissões como essas. Eu não sou bom em nada."</p>
                    <p className="text-gray-700"><strong>Paula:</strong> "Não fala assim, Thiago! Eu sei que você é bom em pelo menos uma coisa!"</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> "É verdade! Você é muito bom em desenho. Acho que desenhista seria uma ótima profissão para você."</p>
                    <p className="text-gray-700"><strong>Thiago:</strong> "Eu não sei..."</p>
                    <p className="text-gray-700"><strong>Fabíola:</strong> "Vamos, Thiago! Nós somos jovens, nós temos que ter grandes esperanças quanto ao nosso futuro."</p>
                    <p className="text-gray-700"><strong>Carlos:</strong> "É verdade, Thiago. Se até mesmo o Francisco quer ser engenheiro, é claro que você consegue ser desenhista!"</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> "Ei! Eu não sou tão burro!"</p>
                    <p className="text-gray-700"><strong>Carlos:</strong> (rindo) "Desculpa!"</p>
                    <p className="text-gray-700"><strong>Fabíola:</strong> "É, Thiago! Por isso você tem que ter grandes esperanças de que sua vida vai ser boa. Senão, você nunca terá a vida que quer."</p>
                    <p className="text-gray-700"><strong>Thiago:</strong> (refletindo) "Realmente, galera... vocês têm razão. Agora tenho a esperança de que vou conseguir ter a vida que quero!"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 1.5 - TRANSIÇÃO MUSICAL (~1 minuto)</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-amber-400">
                    <p className="text-gray-600 text-sm mb-1">(Thiago começa a cantar)</p>
                    <p className="text-gray-600 text-sm mb-1">(Seus amigos começam a cantar também)</p>
                    <p className="text-gray-600 text-sm mb-1">(Eles começam a dançar)</p>
                    <p className="text-gray-600 text-sm">(Todos na cafeteria se levantam e começam a dançar, criando uma coreografia vibrante e cheia de esperança)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 2 - A FORMATURA (~2 minutos)</h3>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p className="text-gray-600 text-sm mb-2">(Cenário muda para cerimônia de formatura. Todos com becas, animados)</p>
                    <p className="text-gray-700"><strong>Paula:</strong> "E pensar que já se passou um ano desde a nossa conversa naquela cafeteria! E aí, Thiago, você vai continuar com seu sonho de se tornar desenhista?"</p>
                    <p className="text-gray-700"><strong>Thiago:</strong> (confiante) "Eu vou! Eu tenho esperança de que serei um grande desenhista reconhecido mundialmente!"</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> "É isso aí, Thiago! E eu vou planejar os museus onde suas obras vão estar!"</p>
                    <p className="text-gray-700"><strong>Carlos:</strong> "E eu vou ter que deixar as obras do Francisco bonitas, já que você tem um péssimo gosto."</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> (indignado) "Eu tenho bom gosto, sim! Não é, Fabíola?"</p>
                    <p className="text-gray-700"><strong>Fabíola:</strong> (rindo) "Claro, Francisco! Seu gosto é ótimo... seus prédios vão ser iguais a uma fábrica do século XIX: um grande retângulo cinza com janelas!"</p>
                    <p className="text-gray-700"><strong>Francisco:</strong> "Até você!?"</p>
                    <p className="text-gray-600 text-sm">(Todos riem)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PARTE 3 - A REALIZAÇÃO (~1 minuto)</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-600 text-sm mb-3">(Os anos se passam - transição com iluminação e música)</p>
                    <p className="text-gray-600 text-sm mb-3">(Cenário: Museu de arte. Thiago fazendo discurso na inauguração de sua primeira exposição)</p>
                    <div className="bg-amber-100 p-3 rounded">
                      <p className="text-gray-700 italic mb-2"><strong>Thiago:</strong></p>
                      <p className="text-gray-700">"Eu gostaria de agradecer a todos que me apoiaram ao longo dos anos para que esse sonho pudesse ser realizado. Mas, em especial, aos meus quatro melhores amigos: Paula, Fabíola, Carlos e Francisco. Muito obrigado por terem me apoiado e, principalmente, por terem me ajudado a seguir em frente mesmo quando estava indeciso e desesperançoso. Obrigado."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">(Todos começam a aplaudir)</p>
                    <p className="text-gray-600 text-sm">(Paula, Francisco, Fabíola e Carlos sobem no palco para comemorar com Thiago. Abraços emocionados)</p>
                    <p className="text-gray-600 text-sm">(Lights fade com todos celebrando)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 6 */}
          {secaoExpandida === 'cena6' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-red-800 mb-2">CENA 6: "Superação"</h2>
                <p className="text-red-700">Música: A definir (sugestão: música motivacional/esportiva) | Duração: ~5 minutos</p>
                <p className="text-red-600 italic mt-2">Formato: Vídeo inicial + performance ao vivo</p>
                <p className="text-red-600 italic">Tema: Transformar adversidades em combustível para vencer</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Quadra de basquete com bancos</li>
                    <li>• Telão para exibir vídeos</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Uniformes de basquete (8º e 9º ano)</li>
                    <li>• Roupas esportivas para treino</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Time 8º: Guilherme, Catarina, Gabriel, Leonardo, Madu</li>
                    <li>• Time do 9º ano (no vídeo)</li>
                    <li>• Treinador</li>
                    <li>• Torcedor</li>
                    <li>• Ensemble (torcida)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">VÍDEO INICIAL - O CONFRONTO</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <p className="text-gray-600 text-sm mb-2">(Telão mostra: time do 9º ano se esbarrando com o 8º após uma partida)</p>
                    <div className="bg-red-100 p-2 rounded">
                      <p className="text-red-700 font-bold"><strong>Time do 9º:</strong> "Seus ruins! Perdedores! Fracos! Nunca vão ganhar da gente!"</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">(Alguns do 9º empurram jogadores do 8º)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PALCO - A DECISÃO</h3>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p className="text-gray-600 text-sm mb-2">(A cena sai do telão. Time do 8º está abatido)</p>
                    <p className="text-gray-700"><strong>Guilherme:</strong> "A gente não pode continuar perdendo para eles. Será que nós somos tão ruins assim?"</p>
                    <p className="text-gray-700"><strong>Catarina:</strong> (desanimada) "Somos, sim... Talvez sejamos ruins mesmo."</p>
                    <p className="text-gray-700"><strong>Gabriel:</strong> "Não podemos continuar sofrendo bullying. Eles são muito maiores que nós. Não podemos fazer nada."</p>
                    <p className="text-gray-700"><strong>Guilherme:</strong> "Se pudéssemos treinar mais..."</p>
                    <p className="text-gray-700"><strong>Leonardo:</strong> (hesitante) "Lá em casa tem uma quadra de basquete."</p>
                    <p className="text-gray-700"><strong>Gabriel:</strong> "O quê? Repete, por favor!"</p>
                    <p className="text-gray-700"><strong>Leonardo:</strong> "Lá em casa tem uma quadra de basquete."</p>
                    <p className="text-gray-700"><strong>Madu:</strong> (animada) "Perfeito! Temos até quarta-feira para treinar!"</p>
                    <p className="text-gray-700"><strong>Catarina:</strong> "Vamos treinar duro até quarta, jogar a final e ganhar a partida!"</p>
                    <p className="text-gray-700"><strong>Madu:</strong> "Vamos lá! Não podemos perder tempo!"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">MONTAGEM DE TREINO</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <p className="text-gray-600 text-sm mb-2">(A música começa)</p>
                    <p className="text-gray-600 text-sm mb-2">(Junto da dança/coreografia, o telão mostra: cenas do time do 8º treinando intensamente até quarta-feira)</p>
                    <p className="text-gray-600 text-sm">(Em uma parte, o 9º se encontra com o 8º novamente e há uma tensão, mas o 8º está mais confiante)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">O GRANDE JOGO</h3>
                  <div className="bg-white p-4 rounded space-y-2">
                    <p className="text-gray-600 text-sm mb-2">(A música termina e volta ao palco)</p>
                    <p className="text-gray-700"><strong>Torcedor:</strong> "Vamos lá, pessoal! Não podemos perder para eles. É só fazer o que vocês treinaram. Eles são muito bons, mas vocês são melhores!"</p>
                    <p className="text-gray-700"><strong>Treinador:</strong> "O jogo vai ser pegado, muito difícil. Prestem atenção nas jogadas. Uma boa marcação é fundamental para ganhar deles."</p>
                    <p className="text-gray-700"><strong>Torcedor:</strong> "Não vai ser fácil, mas lembrem: usem o que faz mal a vocês como seu combustível!"</p>
                    <p className="text-gray-700"><strong>Treinador:</strong> "Isso aí! Bora jogar!"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">A VITÓRIA</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <p className="text-gray-600 text-sm mb-2">(O jogo começa - coreografia representando lances de basquete)</p>
                    <p className="text-gray-600 text-sm mb-2">(As duas equipes estão trocando pontos - tensão no ar)</p>
                    <p className="text-gray-600 text-sm mb-2">(As luzes se apagam, exceto uma que foca no Guilherme)</p>
                    <p className="text-gray-600 text-sm mb-2">(Ele salta em câmera lenta e faz a cesta da vitória)</p>
                    <p className="text-gray-600 text-sm mb-2">(Luzes se acendem completamente. Todos explodem em comemoração)</p>
                    <p className="text-gray-600 text-sm mb-2">(O troféu é entregue)</p>
                    <p className="text-gray-600 text-sm mb-2">(O time do 8º levanta a taça juntos)</p>
                    <p className="text-gray-600 text-sm">(Blackout ou cortinas fecham com todos celebrando)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CENA 7 */}
          {secaoExpandida === 'cena7' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="bg-pink-100 border-l-4 border-pink-500 p-6 rounded-r-lg mb-6">
                <h2 className="text-3xl font-bold text-pink-800 mb-2">CENA 7: "Um Milhão de Sonhos"</h2>
                <p className="text-pink-700">Música: "A Million Dreams" - The Greatest Showman | Duração: ~6-7 minutos</p>
                <p className="text-pink-600 italic mt-2">Formato: Vídeo no telão + performance ao vivo</p>
                <p className="text-pink-600 italic">Tema: A jornada dos sonhos da infância à realização profissional</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">🎨 Cenário</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Palco vazio inicialmente</li>
                    <li>• Iluminação especial</li>
                    <li>• Telão exibindo vídeo-montagem</li>
                    <li>• Elementos representando profissões</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">👔 Figurino</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Início: Roupas casuais/uniformes</li>
                    <li>• Final: Trajes de diferentes profissões</li>
                    <li>(médico, engenheiro, artista, professor, atleta, etc.)</li>
                  </ul>
                  <h3 className="font-bold text-gray-800 mb-3 mt-4">👥 Personagens</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Solistas (3-5 alunos)</li>
                    <li>• Ensemble completo (todos os alunos)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">ABERTURA - OS SONHADORES</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-gray-100 p-2 rounded mb-3">
                      <p className="text-xs font-bold text-gray-600">LUZES: Palco em penumbra com foco suave no centro</p>
                      <p className="text-xs font-bold text-gray-600">SOM: Introdução instrumental de "A Million Dreams"</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">(3-5 alunos entram lentamente, olhando para cima com expressão sonhadora)</p>
                    <div className="bg-pink-100 p-3 rounded">
                      <p className="text-pink-700"><strong>SOLISTA 1:</strong> (começa a cantar)</p>
                      <p className="text-pink-600 italic">"I close my eyes and I can see</p>
                      <p className="text-pink-600 italic">A world that's waiting up for me</p>
                      <p className="text-pink-600 italic">That I call my own..."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">(O telão se acende)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">VÍDEO NO TELÃO - A TRANSFORMAÇÃO</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-600 text-sm font-semibold mb-3">(Enquanto a música continua, o telão exibe uma montagem emocionante)</p>
                    <div className="bg-pink-100 p-3 rounded">
                      <p className="font-bold text-gray-700 mb-2">CONTEÚDO DO VÍDEO:</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Fotos de cada aluno quando criança</li>
                        <li>• Transição gradual (timelapse) mostrando o crescimento</li>
                        <li>• Imagens dos alunos hoje, vestidos representando suas profissões dos sonhos:</li>
                      </ul>
                      <ul className="text-sm text-gray-600 ml-6 mt-2 space-y-1">
                        <li>- Médicos/Dentistas: com jalecos</li>
                        <li>- Engenheiros/Arquitetos: com capacetes e plantas</li>
                        <li>- Artistas/Músicos: com instrumentos ou pinturas</li>
                        <li>- Professores: em sala de aula</li>
                        <li>- Atletas: em uniformes esportivos</li>
                        <li>- Cientistas: em laboratórios</li>
                        <li>- Empreendedores: em escritórios</li>
                        <li>- E outras profissões escolhidas pelos alunos</li>
                      </ul>
                      <ul className="text-sm text-gray-700 mt-3 space-y-1">
                        <li>• Entre as transições, frases inspiradoras aparecem:</li>
                      </ul>
                      <ul className="text-sm text-pink-600 ml-6 mt-1 space-y-1 italic">
                        <li>- "Sonhamos juntos..."</li>
                        <li>- "Crescemos juntos..."</li>
                        <li>- "E agora, voamos..."</li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-3">• O vídeo termina com todos os alunos adultos sorrindo para a câmera</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PERFORMANCE AO VIVO - OS SONHOS SE REALIZAM</h3>
                  <div className="bg-white p-4 rounded space-y-3">
                    <p className="text-gray-600 text-sm mb-2">(Conforme o vídeo avança, mais alunos entram no palco)</p>
                    <div className="bg-pink-100 p-3 rounded">
                      <p className="text-pink-700"><strong>SOLISTA 2:</strong> (durante o refrão)</p>
                      <p className="text-pink-600 italic">"'Cause every night I lie in bed</p>
                      <p className="text-pink-600 italic">The brightest colors fill my head</p>
                      <p className="text-pink-600 italic">A million dreams are keeping me awake...</p>
                      <p className="text-pink-600 italic">A million dreams is all it's gonna take..."</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">(Todos começam a se mover pelo palco, cada um representando brevemente sua profissão através de gestos característicos)</p>
                    <ul className="text-sm text-gray-600 ml-4 space-y-1">
                      <li>• Médicos examinando pacientes imaginários</li>
                      <li>• Engenheiros desenhando no ar</li>
                      <li>• Artistas pintando</li>
                      <li>• Professores ensinando</li>
                      <li>• Atletas em movimento</li>
                      <li>• Músicos tocando instrumentos invisíveis</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">PONTE EMOCIONAL</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-pink-100 p-3 rounded mb-3">
                      <p className="text-pink-700"><strong>SOLISTA 3:</strong> (parte mais íntima da música)</p>
                      <p className="text-pink-600 italic">"However big, however small</p>
                      <p className="text-pink-600 italic">Let me be part of it all</p>
                      <p className="text-pink-600 italic">Share your dreams with me..."</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">(Alunos formam pequenos grupos, abraçando-se, representando o apoio mútuo durante a jornada)</p>
                    <p className="text-gray-600 text-sm">(Iluminação fica mais intimista, focando em diferentes grupos pelo palco)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">CLÍMAX - UNIÃO DOS SONHOS</h3>
                  <div className="bg-white p-4 rounded">
                    <div className="bg-pink-100 p-3 rounded mb-3">
                      <p className="text-pink-700 font-bold"><strong>TODOS JUNTOS:</strong> (cantando o refrão final com força total)</p>
                      <p className="text-pink-600 italic">"A million dreams, a million dreams</p>
                      <p className="text-pink-600 italic">A million dreams for the world we're gonna make!"</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="font-bold text-gray-700 mb-2">COREOGRAFIA FINAL:</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Formação inicial:</strong> Todos espalhados pelo palco, cada um em sua "profissão"</li>
                        <li>• <strong>Movimento de união:</strong> Gradualmente, todos se movem em direção ao centro</li>
                        <li>• <strong>Círculo de sonhos:</strong> Formam um grande círculo, de mãos dadas</li>
                        <li>• <strong>Explosão de esperança:</strong> No clímax final da música, todos erguem os braços para o alto, olhando para cima, simbolizando que os sonhos são infinitos</li>
                        <li>• <strong>Pose final:</strong> Alguns permanecem de pé com os braços erguidos, outros se ajoelham na frente, todos com expressões de esperança e determinação</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">MENSAGEM FINAL</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-600 text-sm mb-2">(A música vai diminuindo suavemente)</p>
                    <p className="text-gray-600 text-sm mb-3">(Um último slide aparece no telão com a montagem de todas as fotos dos alunos - infância e presente)</p>
                    <div className="bg-pink-100 p-3 rounded mb-3">
                      <p className="font-bold text-gray-700 mb-2">TEXTO NO TELÃO:</p>
                      <p className="text-gray-700 text-center italic">"De crianças cheias de sonhos...</p>
                      <p className="text-gray-700 text-center italic">...a adultos que realizam.</p>
                      <p className="text-gray-700 text-center italic">Esta é a nossa história.</p>
                      <p className="text-gray-700 text-center italic">Estes são os nossos sonhos.</p>
                      <p className="text-gray-700 text-center italic">E o futuro... o futuro é nosso."</p>
                    </div>
                    <div className="bg-pink-100 p-3 rounded">
                      <p className="text-pink-700"><strong>SOLISTA 1:</strong> (sussurrando as últimas palavras da música)</p>
                      <p className="text-pink-600 italic">"A million dreams for the world we're gonna make..."</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">BLACKOUT FINAL</h3>
                  <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                    <p className="text-gray-600 text-sm mb-2">(As luzes se apagam lentamente)</p>
                    <p className="text-gray-600 text-sm mb-2">(Os alunos permanecem congelados na pose final por 3 segundos no escuro)</p>
                    <p className="text-gray-600 text-sm">(Aplausos)</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-100 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ENCERRAMENTO DO ESPETÁCULO</h3>
                <div className="bg-white p-4 rounded">
                  <p className="font-bold text-gray-700 mb-3">CURTAIN CALL - AGRADECIMENTOS</p>
                  <p className="text-gray-600 text-sm mb-3">(Luzes se acendem. Todos os alunos voltam ao palco, agora relaxados e sorridentes)</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-bold text-gray-700 mb-2">ORDEM DE ENTRADA PARA REVERÊNCIAS:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>1. Ensemble/Coro - todos entram e fazem reverência coletiva</li>
                      <li>2. Cenas individuais - personagens principais de cada cena:</li>
                      <ul className="ml-6 mt-1 space-y-1 text-gray-600">
                        <li>• Cena 1: Alice, Guilherme, João Paulino</li>
                        <li>• Cena 2: Aluna Nova, Narradora</li>
                        <li>• Cena 3: Isabela Grip, Ludmila</li>
                        <li>• Cena 4: Protagonista, Amigas, Pedro Louback (Narrador)</li>
                        <li>• Cena 5: Thiago e amigos</li>
                        <li>• Cena 6: Time de basquete</li>
                      </ul>
                      <li>3. Professores/Coordenação - são convidados ao palco</li>
                      <li>4. Reverência final - todos juntos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INFORMAÇÕES TÉCNICAS */}
          {secaoExpandida === 'tecnico' && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-500" />
                Informações Técnicas e Produção
              </h2>

              <div className="space-y-6">
                {/* Recursos Necessários */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎬 Recursos Técnicos Necessários</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Equipamentos Técnicos:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Sistema de som profissional</li>
                        <li>• Iluminação variada (focos, spots, iluminação colorida)</li>
                        <li>• Telão de projeção grande</li>
                        <li>• Projetor de alta qualidade</li>
                        <li>• Lanternas/luzes LED para Cena 4 (aproximadamente 20 unidades)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Cenográficos:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Livro gigante (Cena 1)</li>
                        <li>• Carteiras escolares (Cenas 1 e 2)</li>
                        <li>• Mesas para grupo (Cena 2)</li>
                        <li>• Elementos de cafeteria (Cena 5)</li>
                        <li>• Quadra de basquete/marcações (Cena 6)</li>
                        <li>• Troféu (Cena 6)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Figurinos:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Roupas coloridas (Cena 1)</li>
                        <li>• Uniformes escolares (Cenas 2, 3, 6)</li>
                        <li>• Roupas brancas (Cena 3)</li>
                        <li>• Roupas escuras e claras (Cena 4)</li>
                        <li>• Becas de formatura (Cena 5)</li>
                        <li>• Uniformes de basquete (Cena 6)</li>
                        <li>• Trajes profissionais diversos (Cena 7)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Audiovisual:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Fotos de infância de todos os alunos</li>
                        <li>• Vídeos gravados (Cenas 3 e 6)</li>
                        <li>• Timelapse de transformação (Cena 7)</li>
                        <li>• Pensamentos em inglês (Cena 2)</li>
                        <li>• Frases inspiradoras para projeção</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Músicas */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎵 Músicas do Espetáculo</h3>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 1:</strong> Música nostálgica sobre infância/amizade</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">A definir</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 2:</strong> Música sobre pertencimento e aceitação</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">A definir</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 3:</strong> "Count On Me" - Bruno Mars</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Confirmada</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 4:</strong> "Fix You" - Coldplay</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Confirmada</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 5:</strong> Música inspiradora sobre esperança</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">A definir</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 6:</strong> Música motivacional/esportiva</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">A definir</span>
                    </div>
                    <div className="bg-white p-3 rounded flex items-center justify-between">
                      <span className="text-gray-700"><strong>Cena 7:</strong> "A Million Dreams" - The Greatest Showman</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Confirmada</span>
                    </div>
                  </div>
                </div>

                {/* Cronograma de Ensaios */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📅 Cronograma Sugerido de Ensaios</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                      <p className="font-bold text-green-700 mb-2">Fase 1 - Preparação (2-3 semanas)</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Leitura dramatizada do roteiro</li>
                        <li>• Divisão de papéis</li>
                        <li>• Ensaios de cada cena separadamente</li>
                        <li>• Gravação dos vídeos</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                      <p className="font-bold text-blue-700 mb-2">Fase 2 - Integração (2 semanas)</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Ensaios com música</li>
                        <li>• Coreografias completas</li>
                        <li>• Integração de cenas</li>
                        <li>• Testes com figurinos</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                      <p className="font-bold text-purple-700 mb-2">Fase 3 - Técnica (1 semana)</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Ensaios com iluminação</li>
                        <li>• Testes de som</li>
                        <li>• Sincronização com vídeos do telão</li>
                        <li>• Ajustes finais</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                      <p className="font-bold text-orange-700 mb-2">Fase 4 - Finalização (últimos dias)</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Ensaio geral completo</li>
                        <li>• Ensaio técnico</li>
                        <li>• Ensaio de estreia</li>
                        <li>• Apresentação</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Notas de Direção */}
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎬 Notas de Direção</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Transições entre cenas:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Devem ser fluidas e rápidas</li>
                        <li>• Usar blackouts ou mudanças de iluminação</li>
                        <li>• O telão pode auxiliar com projeções durante trocas de cenário</li>
                        <li>• Música de transição sutil quando necessário</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Uso do telão:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Elemento narrativo fundamental</li>
                        <li>• Deve complementar, não competir com a ação ao vivo</li>
                        <li>• Vídeos devem ser de alta qualidade</li>
                        <li>• Sincronização perfeita entre vídeo e ação no palco</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Emoção e energia:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Cada cena tem sua própria energia: nostalgia, tensão, alegria, superação</li>
                        <li>• Os atores devem estar completamente conectados com a emoção de cada momento</li>
                        <li>• O ensemble é tão importante quanto os solistas</li>
                        <li>• Manter o público engajado do início ao fim</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Mensagens para o público:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Pais e familiares devem se emocionar com a jornada</li>
                        <li>• Alunos mais novos devem se inspirar</li>
                        <li>• A comunidade escolar deve sentir orgulho</li>
                        <li>• Todos devem sair do teatro com esperança no futuro</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Considerações Finais */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">✨ Considerações Finais ✨</h3>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 text-center mb-4 leading-relaxed">
                      Este roteiro representa a jornada de crescimento, amizade e superação de uma turma do 8º ano.
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Emocionar o público</span>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Valorizar todos os participantes</span>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Transmitir mensagens positivas</span>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Criar momentos memoráveis</span>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Celebrar conquistas e sonhos</span>
                      </p>
                    </div>

                    <div className="border-t-2 border-purple-300 pt-4 mt-4">
                      <p className="text-center text-gray-700 italic text-lg">
                        Que este espetáculo seja inesquecível para todos os envolvidos e que inspire não apenas os que estão no palco, mas também todos aqueles que assistem!
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        🎭✨ FIM DO ROTEIRO ✨🎭
                      </p>
                      <p className="text-gray-600 italic mt-3">
                        "Sonhos não têm prazo de validade. Amizades não têm fim. E a jornada... a jornada é apenas o começo."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoteiroMusicalLivro;
