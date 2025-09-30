import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react';

const RotarioLivro = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [livroAberto, setLivroAberto] = useState(false);

  // Conteúdo completo do roteiro dividido em páginas
  const paginas = [
    // CAPA
    {
      tipo: 'capa',
      conteudo: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white p-8">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold mb-4">🎭</h1>
            <h1 className="text-5xl font-bold">O Mistério da</h1>
            <h1 className="text-5xl font-bold">Floresta Encantada</h1>
            <div className="mt-8 text-xl opacity-90">
              Um Musical Original
            </div>
            <div className="mt-4 text-lg opacity-75">
              Para 131 Alunos do 8º Ano
            </div>
          </div>
        </div>
      )
    },

    // PÁGINA DE CRÉDITOS
    {
      tipo: 'creditos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Ficha Técnica</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-purple-700">Projeto Musical - 2025</h3>
              <p className="text-sm">Escola de Ensino Fundamental</p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold text-purple-700 mb-2">Elenco Total: 131 alunos</h3>
              <ul className="space-y-1 text-sm">
                <li>• Grupo 1 - Performance: 58 alunos</li>
                <li>• Grupo 2 - Produção Audiovisual: 29 alunos</li>
                <li>• Grupo 3 - Arte e Produção: 24 alunos</li>
                <li>• Grupo 4 - Documentação: 20 alunos</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-purple-700 mb-2">Duração Estimada</h3>
              <p className="text-sm">45-60 minutos</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold text-purple-700 mb-2">Gênero</h3>
              <p className="text-sm">Musical Infantojuvenil / Aventura / Fantasia</p>
            </div>
          </div>
        </div>
      )
    },

    // SINOPSE
    {
      tipo: 'sinopse',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Sinopse</h2>
          <div className="space-y-4 text-gray-700 text-justify">
            <p className="text-lg leading-relaxed">
              Em uma floresta mágica onde a natureza e a música estão profundamente conectadas, 
              uma antiga maldição está fazendo as árvores perderem suas cores e os animais 
              esquecerem suas canções.
            </p>
            <p className="text-lg leading-relaxed">
              Um grupo diverso de jovens aventureiros - cada um com um talento especial - 
              precisa trabalhar em equipe para encontrar as cinco Notas Mágicas escondidas 
              pela floresta e restaurar a harmonia perdida.
            </p>
            <p className="text-lg leading-relaxed">
              Durante a jornada, eles descobrem que suas diferenças são na verdade suas 
              maiores forças, e que somente unidos pela música e pela amizade podem salvar 
              a Floresta Encantada.
            </p>
            <p className="text-base italic text-green-700 mt-6 p-4 bg-white rounded-lg border-l-4 border-green-500">
              Temas principais: Trabalho em equipe, respeito à natureza, amizade, 
              descoberta de talentos pessoais e valorização da diversidade.
            </p>
          </div>
        </div>
      )
    },

    // PERSONAGENS
    {
      tipo: 'personagens',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Personagens Principais</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700">LUNA</h3>
              <p className="text-sm text-gray-600">Líder otimista, adora música e natureza</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700">THEO</h3>
              <p className="text-sm text-gray-600">Inteligente e estudioso, conhece lendas antigas</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700">MIA</h3>
              <p className="text-sm text-gray-600">Tímida mas talentosa cantora</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-700">DAVI</h3>
              <p className="text-sm text-gray-600">Enérgico e divertido, adora dançar</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700">SÁBIA WILLOW</h3>
              <p className="text-sm text-gray-600">Guardiã anciã da floresta</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700">ESPÍRITO DA FLORESTA</h3>
              <p className="text-sm text-gray-600">Entidade mágica e misteriosa</p>
            </div>
          </div>
        </div>
      )
    },

    // CENA 1
    {
      tipo: 'cena',
      numero: 1,
      conteudo: (
        <div className="p-8">
          <div className="bg-purple-100 p-4 rounded-t-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800">CENA 1: Prólogo da Floresta</h2>
            <p className="text-sm text-purple-600">Abertura Musical • Cenário: Floresta ao amanhecer</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 1:</p>
              <p className="text-gray-600 italic">
                "Era uma vez, em um lugar onde as árvores cantavam e os rios dançavam, 
                uma floresta mágica cheia de vida e harmonia..."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 1: "A Floresta Acorda"</p>
              <p className="text-sm text-blue-700 mb-2">(Coro completo - 36 alunos)</p>
              <div className="text-gray-700 space-y-2">
                <p>♪ Quando o sol desperta devagar</p>
                <p>♪ A floresta começa a cantar</p>
                <p>♪ Cada folha, cada flor</p>
                <p>♪ Traz uma nota de amor</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Ação Cênica:</p>
              <p className="text-gray-600">
                • Dançarinos representam elementos da natureza<br/>
                • Iluminação simula amanhecer gradual<br/>
                • Animais da floresta (coro) entram em formação
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 2:</p>
              <p className="text-gray-600 italic">
                "Mas algo terrível estava prestes a acontecer... Uma antiga maldição 
                começou a apagar as cores e silenciar as canções."
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Efeito Visual:</p>
              <p className="text-gray-600">
                Iluminação muda para tons de cinza. Música vai diminuindo até o silêncio.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm font-semibold text-purple-800">Envolvimento dos Grupos:</p>
            <p className="text-sm text-purple-700">
              • Performance: Coro, dançarinos, narradores<br/>
              • Audiovisual: Filmagem da abertura, efeitos sonoros<br/>
              • Arte: Cenário da floresta, figurinos dos elementos naturais<br/>
              • Documentação: Registro dos ensaios, making of
            </p>
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
            <h2 className="text-2xl font-bold text-blue-800">CENA 2: O Chamado da Aventura</h2>
            <p className="text-sm text-blue-600">Cenário: Clareira central • Introdução dos protagonistas</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "Olhem! As árvores estão perdendo suas cores... Isso nunca aconteceu antes!"
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-700 mb-2">THEO:</p>
              <p className="text-gray-600">
                "Eu li sobre isso nos livros antigos. É a Maldição do Silêncio! 
                Só pode ser quebrada com as cinco Notas Mágicas."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-green-700 mb-2">MIA (timidamente):</p>
              <p className="text-gray-600">
                "M-mas... como vamos encontrá-las? A floresta é tão grande..."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-red-700 mb-2">DAVI (animado):</p>
              <p className="text-gray-600">
                "Juntos! Somos um time, lembra? Cada um com seu talento especial!"
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 2: "Somos Um Time"</p>
              <p className="text-sm text-blue-700 mb-2">(Quarteto principal + Coro)</p>
              <div className="text-gray-700 space-y-2">
                <p>♪ Quando estamos juntos, nada pode nos parar</p>
                <p>♪ Cada um é diferente, mas vamos nos completar</p>
                <p>♪ Você tem a força, eu tenho a canção</p>
                <p>♪ Unidos somos mais, essa é nossa missão</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Coreografia:</p>
              <p className="text-gray-600">
                Dançarinos fazem movimentos que representam união e trabalho em equipe. 
                Formam círculos e correntes humanas.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-700 mb-2">SÁBIA WILLOW (entrando):</p>
              <p className="text-gray-600 italic">
                "Jovens corajosos, ouçam bem. A primeira Nota está escondida onde o rio 
                encontra o sol. Mas cuidado... o caminho não será fácil."
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-800">Transição de Cena:</p>
            <p className="text-sm text-blue-700">
              Grupo se prepara para a jornada. Iluminação muda para indicar movimento pela floresta.
            </p>
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
            <h2 className="text-2xl font-bold text-cyan-800">CENA 3: O Rio Cantante</h2>
            <p className="text-sm text-cyan-600">Cenário: Margem do rio • Primeiro desafio</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Ação Cênica:</p>
              <p className="text-gray-600">
                Grupo chega à margem do rio. Tecidos azuis simulam água em movimento. 
                Sons de água corrente (efeito sonoro do Grupo 2).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "A Sábia disse 'onde o rio encontra o sol'... Olhem! Aquele reflexo dourado!"
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 3: "Canção do Rio"</p>
              <p className="text-sm text-blue-700 mb-2">(Solo de Mia + Coro)</p>
              <div className="text-gray-700 space-y-2">
                <p className="italic">Mia canta timidamente no início, mas sua voz vai ganhando força:</p>
                <p>♪ Água que corre, leva meu medo</p>
                <p>♪ Voz que ecoa, não tenho segredo</p>
                <p>♪ Canto pro rio, canto pro céu</p>
                <p>♪ Hoje descobri, tenho o meu papel</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Momento Mágico:</p>
              <p className="text-gray-600">
                Quando Mia termina de cantar, uma luz especial (projeção ou iluminação) 
                revela a primeira Nota Mágica flutuando sobre o rio. Coro faz sons de "Ahhh!" 
                de admiração.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-red-700 mb-2">DAVI:</p>
              <p className="text-gray-600">
                "Mia! Você conseguiu! Sua voz desfez a magia!"
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-green-700 mb-2">MIA (surpresa e feliz):</p>
              <p className="text-gray-600">
                "Eu... eu consegui mesmo! Talvez minha voz não seja tão fraca assim..."
              </p>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
              <p className="font-semibold text-gray-700 mb-2">Coreografia do Rio:</p>
              <p className="text-gray-600">
                Dançarinos com tecidos azuis fazem movimentos fluidos representando 
                a água. Quando Mia canta, os movimentos ficam mais suaves e harmoniosos.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <p className="text-sm font-semibold text-cyan-800">Lição da Cena:</p>
            <p className="text-sm text-cyan-700">
              Descobrir e confiar nos próprios talentos, mesmo quando nos sentimos inseguros.
            </p>
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
          <div className="bg-green-100 p-4 rounded-t-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-800">CENA 4: A Montanha dos Ecos</h2>
            <p className="text-sm text-green-600">Cenário: Encosta da montanha • Segundo desafio</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 3:</p>
              <p className="text-gray-600 italic">
                "Com a primeira Nota em mãos, o grupo seguiu até a Montanha dos Ecos, 
                onde os sons se multiplicam e se confundem..."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-700 mb-2">THEO:</p>
              <p className="text-gray-600">
                "Cuidado! A lenda diz que esta montanha confunde os viajantes com ecos 
                falsos. Precisamos encontrar o eco verdadeiro."
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Efeito Especial:</p>
              <p className="text-gray-600">
                Grupo 2 (Audiovisual) cria efeito de eco com microfones e equipamento de som. 
                Vozes vêm de diferentes direções confundindo os personagens.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 4: "Ecos da Verdade"</p>
              <p className="text-sm text-blue-700 mb-2">(Ensemble dividido em grupos)</p>
              <div className="text-gray-700 space-y-2">
                <p className="italic">Diferentes grupos cantam em canon (um após o outro):</p>
                <p>GRUPO 1: ♪ Qual é o eco verdadeiro?</p>
                <p>GRUPO 2: ♪ (eco) ...verdadeiro?</p>
                <p>GRUPO 3: ♪ Qual caminho é o certo?</p>
                <p>GRUPO 4: ♪ (eco) ...o certo?</p>
                <p>TODOS: ♪ Só o coração sabe a resposta!</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-700 mb-2">THEO (concentrado):</p>
              <p className="text-gray-600">
                "Esperem! Precisamos usar a lógica. Vamos testar cada eco com um padrão 
                rítmico diferente!"
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Desafio Interativo:</p>
              <p className="text-gray-600">
                Theo e outros personagens batem palmas em ritmos diferentes. Apenas um eco 
                responde corretamente. Quando descobrem o eco correto, a segunda Nota Mágica 
                aparece.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "Theo, você é incrível! Seu conhecimento nos salvou!"
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm font-semibold text-green-800">Lição da Cena:</p>
            <p className="text-sm text-green-700">
              O valor do conhecimento, raciocínio lógico e trabalho intelectual para 
              resolver problemas complexos.
            </p>
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
          <div className="bg-orange-100 p-4 rounded-t-lg border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-800">CENA 5: O Vale das Sombras</h2>
            <p className="text-sm text-orange-600">Cenário: Vale escuro • Momento de tensão</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Ação Cênica:</p>
              <p className="text-gray-600">
                Iluminação fica mais escura. Névoa artificial (se possível). 
                Música ambiente tensa e misteriosa.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-green-700 mb-2">MIA (com medo):</p>
              <p className="text-gray-600">
                "Está tão escuro... Não consigo ver o caminho..."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-red-700 mb-2">DAVI:</p>
              <p className="text-gray-600">
                "Não tenham medo! Mesmo quando está escuro, podemos encontrar a luz. 
                Vamos dançar para espantar as sombras!"
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 5: "Dança da Coragem"</p>
              <p className="text-sm text-blue-700 mb-2">(Davi solo + Dançarinos completos)</p>
              <div className="text-gray-700 space-y-2">
                <p>♪ Quando o medo vem me pegar</p>
                <p>♪ Eu começo a dançar, dançar, dançar</p>
                <p>♪ Movimento o corpo, movo o coração</p>
                <p>♪ E afasto a escuridão</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Coreografia Especial:</p>
              <p className="text-gray-600">
                Dançarinos fazem movimentos energéticos e luminosos. Usam adereços 
                refletivos ou com LED (Grupo 3). A cada movimento, as "sombras" 
                (outros dançarinos vestidos de preto) recuam.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Momento Mágico:</p>
              <p className="text-gray-600">
                Conforme a dança fica mais intensa, a iluminação vai clareando gradualmente. 
                As sombras desaparecem e a terceira Nota Mágica surge brilhando no centro do palco.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA (admirada):</p>
              <p className="text-gray-600">
                "Davi, sua energia iluminou tudo! Você transformou nosso medo em coragem!"
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm font-semibold text-orange-800">Lição da Cena:</p>
            <p className="text-sm text-orange-700">
              Superar o medo através da ação positiva, usar a energia e alegria para 
              transformar situações difíceis.
            </p>
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
          <div className="bg-pink-100 p-4 rounded-t-lg border-l-4 border-pink-500">
            <h2 className="text-2xl font-bold text-pink-800">CENA 6: O Jardim dos Espelhos</h2>
            <p className="text-sm text-pink-600">Cenário: Jardim mágico • Quarto desafio</p>
          </div>
          
        <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 4:</p>
              <p className="text-gray-600 italic">
                "Os heróis chegaram ao Jardim dos Espelhos, onde cada reflexo mostrava 
                uma versão diferente de si mesmos..."
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Cenário:</p>
              <p className="text-gray-600">
                Painéis prateados ou espelhados criados pelo Grupo 3. Dançarinos se 
                movimentam criando "reflexos" dos personagens principais.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "Que estranho... Os espelhos mostram quem poderíamos ser, não quem somos..."
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
              <p className="font-semibold text-gray-700 mb-2">Momento Reflexivo:</p>
              <p className="text-gray-600">
                Cada personagem principal vê seu "reflexo" mostrando seus medos e inseguranças. 
                Os dançarinos espelham os movimentos de forma distorcida.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 6: "Olhar para Dentro"</p>
              <p className="text-sm text-blue-700 mb-2">(Ensemble completo)</p>
              <div className="text-gray-700 space-y-2">
                <p>♪ Olho no espelho, o que vou ver?</p>
                <p>♪ Meus medos ou quem eu posso ser?</p>
                <p>♪ Aceito quem sou, com luz e escuridão</p>
                <p>♪ Sou imperfeito, mas tenho o coração</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA (para o grupo):</p>
              <p className="text-gray-600">
                "Não precisamos ser perfeitos! Cada um de nós é especial do jeito que é. 
                Nossa diferença é nossa força!"
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Resolução:</p>
              <p className="text-gray-600">
                Quando os personagens aceitam a si mesmos, os espelhos param de distorcer 
                e mostram seus reflexos verdadeiros. A quarta Nota Mágica aparece no centro, 
                emergindo de um espelho.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-sm font-semibold text-pink-800">Lição da Cena:</p>
            <p className="text-sm text-pink-700">
              Autoaceitação, reconhecer que nossas "imperfeições" nos tornam únicos e valiosos.
            </p>
          </div>
        </div>
      )
    },

    // CENA 7
    {
      tipo: 'cena',
      numero: 7,
      conteudo: (
        <div className="p-8">
          <div className="bg-indigo-100 p-4 rounded-t-lg border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-indigo-800">CENA 7: A Árvore Anciã</h2>
            <p className="text-sm text-indigo-600">Cenário: Centro da floresta • Quinta e última nota</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Ação Cênica:</p>
              <p className="text-gray-600">
                Uma grande árvore cenográfica domina o palco. Suas folhas estão cinzas e caídas. 
                A atmosfera é de tristeza.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-700 mb-2">THEO:</p>
              <p className="text-gray-600">
                "Esta é a Árvore Anciã, o coração da floresta. Se ela está morrendo, 
                toda a floresta morrerá também."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-700 mb-2">VOZ DA ÁRVORE (do coro):</p>
              <p className="text-gray-600 italic">
                "Jovens corajosos... a última Nota está dentro de mim... mas só posso libertá-la 
                se vocês me mostrarem... o verdadeiro poder da união..."
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "Nós vamos salvar você! Juntos, com tudo que aprendemos!"
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 7: "Raízes da Amizade"</p>
              <p className="text-sm text-blue-700 mb-2">(TODOS os 131 alunos)</p>
              <div className="text-gray-700 space-y-2">
                <p className="italic">Esta é a música mais poderosa do musical, com todos participando:</p>
                <p>♪ Como raízes que se entrelaçam</p>
                <p>♪ Somos mais fortes quando nos abraçamos</p>
                <p>♪ Cada talento, cada coração</p>
                <p>♪ Forma uma grande constelação</p>
                <br/>
                <p>♪ Unidos pela música, unidos pela luz</p>
                <p>♪ Cada voz importa, cada um conduz</p>
                <p>♪ O poder está em nós, juntos vamos vencer</p>
                <p>♪ Esta é nossa canção, nosso poder!</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Grande Momento Visual:</p>
              <p className="text-gray-600">
                • Performance: Todos os atores e coro cantam juntos<br/>
                • Arte: As folhas da árvore começam a ganhar cor novamente<br/>
                • Audiovisual: Projeções de luz e natureza renascendo<br/>
                • Dançarinos: Formam padrões que representam união e crescimento
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Clímax:</p>
              <p className="text-gray-600">
                A quinta e última Nota Mágica emerge do tronco da árvore, brilhando intensamente. 
                A árvore volta à vida completamente. Iluminação muda para tons vibrantes e coloridos.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-sm font-semibold text-indigo-800">Lição Final:</p>
            <p className="text-sm text-indigo-700">
              O verdadeiro poder vem da união de todos os talentos diferentes trabalhando 
              em harmonia pelo bem comum.
            </p>
          </div>
        </div>
      )
    },

    // CENA 8
    {
      tipo: 'cena',
      numero: 8,
      conteudo: (
        <div className="p-8">
          <div className="bg-teal-100 p-4 rounded-t-lg border-l-4 border-teal-500">
            <h2 className="text-2xl font-bold text-teal-800">CENA 8: O Ritual de Restauração</h2>
            <p className="text-sm text-teal-600">Cenário: Clareira central • Momento de magia</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA:</p>
              <p className="text-gray-600">
                "Agora temos todas as cinco Notas Mágicas! Mas... como quebramos a maldição?"
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-700 mb-2">SÁBIA WILLOW:</p>
              <p className="text-gray-600 italic">
                "As Notas devem ser cantadas em harmonia perfeita, com cada um usando 
                seu dom especial. Apenas assim a floresta voltará a viver."
              </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Preparação:</p>
              <p className="text-gray-600">
                Cada protagonista segura uma Nota Mágica (adereço luminoso). 
                Eles se posicionam em formato de pentagrama no centro do palco.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 8: "As Cinco Notas"</p>
              <p className="text-sm text-blue-700 mb-2">(Sequência musical especial)</p>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold">Cada protagonista canta sua nota:</p>
                <p>MIA: ♪ Dó - A voz da coragem (nota grave)</p>
                <p>THEO: ♪ Ré - O som da sabedoria (nota média-grave)</p>
                <p>DAVI: ♪ Mi - A melodia da alegria (nota média)</p>
                <p>LUNA: ♪ Fá - A harmonia da união (nota média-aguda)</p>
                <p>TODOS: ♪ Sol - A luz da esperança! (nota aguda)</p>
                <br/>
                <p className="italic">As cinco vozes se unem em harmonia:</p>
                <p>♪ Dó, Ré, Mi, Fá, Sol</p>
                <p>♪ Juntas formamos o arco-íris musical</p>
                <p>♪ Cinco notas, um coração</p>
                <p>♪ Restaurando toda a criação!</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Efeitos Especiais:</p>
              <p className="text-gray-600">
                • Iluminação: Raios de luz colorida emanam de cada Nota<br/>
                • Som: Efeitos de sino e harpa (Grupo 2)<br/>
                • Projeção: Ondas de energia colorida se espalham pelo cenário<br/>
                • Coro: Faz harmonias de fundo criando atmosfera mágica
              </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Transformação:</p>
              <p className="text-gray-600">
                Conforme cantam, a floresta inteira se transforma. Dançarinos que 
                representavam árvores cinzas agora ganham cores vibrantes. Animais 
                (coro) voltam a cantar.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-sm font-semibold text-teal-800">Simbolismo Musical:</p>
            <p className="text-sm text-teal-700">
              As cinco notas representam cinco qualidades essenciais: coragem, sabedoria, 
              alegria, união e esperança.
            </p>
          </div>
        </div>
      )
    },

    // CENA 9
    {
      tipo: 'cena',
      numero: 9,
      conteudo: (
        <div className="p-8">
          <div className="bg-purple-100 p-4 rounded-t-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800">CENA 9: O Despertar da Floresta</h2>
            <p className="text-sm text-purple-600">Cenário: Floresta revitalizada • Celebração</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 1:</p>
              <p className="text-gray-600 italic">
                "E assim, com o poder da música e da amizade, a Floresta Encantada 
                despertou de seu longo sono cinzento..."
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Transformação Visual Completa:</p>
              <p className="text-gray-600">
                Toda a iluminação muda para cores vibrantes. Flores artificiais se abrem 
                (mecanismos simples). Projeções mostram natureza em pleno vigor.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-pink-700 mb-2">ESPÍRITO DA FLORESTA (aparecendo):</p>
              <p className="text-gray-600 italic">
                "Vocês quebraram a maldição não apenas com música, mas com algo ainda 
                mais poderoso: a união de corações diferentes batendo como um só."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA 9: "A Floresta Canta Novamente"</p>
              <p className="text-sm text-blue-700 mb-2">(Reprise melhorada da Música 1)</p>
              <div className="text-gray-700 space-y-2">
                <p>♪ Quando o sol desperta devagar</p>
                <p>♪ A floresta volta a cantar</p>
                <p>♪ Cada folha, cada flor</p>
                <p>♪ Traz uma nota de amor</p>
                <br/>
                <p>♪ E nós aprendemos, na jornada sem fim</p>
                <p>♪ Que somos mais fortes quando cuidamos assim</p>
                <p>♪ Da natureza, dos amigos, do coração</p>
                <p>♪ Juntos somos uma só canção!</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Coreografia de Celebração:</p>
              <p className="text-gray-600">
                TODOS os 131 alunos em cena. Dançarinos fazem movimentos alegres e expansivos. 
                Coro canta em plena força. Atores principais no centro celebrando.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-700 mb-2">LUNA (para a plateia):</p>
              <p className="text-gray-600">
                "E vocês também fazem parte desta história! Cada um de vocês tem um 
                talento especial. Juntos, podemos criar magia!"
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm font-semibold text-purple-800">Conexão com a Plateia:</p>
            <p className="text-sm text-purple-700">
              Esta cena quebra a quarta parede, convidando o público a fazer parte da 
              mensagem de união e colaboração.
            </p>
          </div>
        </div>
      )
    },

    // CENA 10 - FINAL
    {
      tipo: 'cena',
      numero: 10,
      conteudo: (
        <div className="p-8">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-t-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800">CENA 10: Final - Nossa Canção</h2>
            <p className="text-sm text-purple-600">Grande finale com todos os participantes</p>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-700 mb-2">SÁBIA WILLOW:</p>
              <p className="text-gray-600 italic">
                "Lembrem-se sempre: cada voz importa, cada talento é precioso. 
                Quando trabalhamos juntos, criamos verdadeira magia."
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-800 mb-2">🎵 MÚSICA FINAL: "Nossa Canção"</p>
              <p className="text-sm text-blue-700 mb-2">(TODOS - 131 alunos - Grande Finale)</p>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold">VERSO 1 (Protagonistas):</p>
                <p>♪ Começamos separados, cada um com seu dom</p>
                <p>♪ Mas descobrimos juntos um som muito bom</p>
                <p>♪ Voz, dança, sabedoria, coragem e união</p>
                <p>♪ Formamos juntos uma grande canção</p>
                <br/>
                <p className="font-semibold">REFRÃO (TODOS):</p>
                <p>♪ Esta é nossa canção, cantada por todos nós</p>
                <p>♪ Cada nota, cada voz, forma uma só voz</p>
                <p>♪ Quando estamos unidos, nada pode nos parar</p>
                <p>♪ Nossa música vai ecoar!</p>
                <br/>
                <p className="font-semibold">VERSO 2 (Coro):</p>
                <p>♪ Somos pintores, cantores, dançarinos também</p>
                <p>♪ Escritores, filmmakers, cada um tem alguém</p>
                <p>♪ Que acredita, que apoia, que estende a mão</p>
                <p>♪ Juntos formamos esta constelação</p>
                <br/>
                <p className="font-semibold">PONTE (Crescendo):</p>
                <p>♪ E quando o mundo parecer escuro demais</p>
                <p>♪ Lembre-se: você nunca está sozinho, jamais!</p>
                <p>♪ Tem uma equipe, tem amigos ao redor</p>
                <p>♪ Juntos cantamos com muito mais amor!</p>
                <br/>
                <p className="font-semibold">REFRÃO FINAL (Com energia máxima):</p>
                <p>♪ Esta é nossa canção, cantada por todos nós!</p>
                <p>♪ Cada nota, cada voz, forma uma só voz!</p>
                <p>♪ Quando estamos unidos, nada pode nos parar!</p>
                <p>♪ Nossa música vai sempre ecoar!</p>
                <p>♪ VAI SEMPRE ECOAR! 🎵</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Coreografia do Grande Finale:</p>
              <p className="text-gray-600">
                • Todos os 131 alunos no palco em formação espetacular<br/>
                • Movimentos sincronizados representando união<br/>
                • Efeitos de luz colorida (todos os grupos trabalhando juntos)<br/>
                • Confete ou pétalas caindo (se possível)<br/>
                • Formação final em formato de coração ou estrela
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Momento Final:</p>
              <p className="text-gray-600">
                Após a música, todos se curvam juntos. Iluminação vai diminuindo gradualmente 
                enquanto a música ecoa. Blackout final com aplausos.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">NARRADOR 4 (voz over no escuro):</p>
              <p className="text-gray-600 italic">
                "E assim, a Floresta Encantada foi salva. Mas a verdadeira magia não estava 
                nas Notas Mágicas... estava no coração de cada um que ousou sonhar, criar e 
                trabalhar junto. Fim."
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
            <p className="text-sm font-semibold text-purple-800 mb-2">Mensagem Final do Musical:</p>
            <p className="text-sm text-purple-700">
              Cada pessoa tem talentos únicos e valiosos. Quando trabalhamos juntos, 
              respeitando nossas diferenças e celebrando nossas habilidades individuais, 
              criamos algo muito maior que a soma das partes. A verdadeira magia está na união, 
              na amizade e no respeito mútuo.
            </p>
          </div>
        </div>
      )
    },

    // PÁGINA DE MÚSICAS
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">📝 Lista Completa de Músicas</h2>
          <div className="space-y-3">
            {[
              { num: 1, titulo: "A Floresta Acorda", tipo: "Abertura coral" },
              { num: 2, titulo: "Somos Um Time", tipo: "Quarteto + Coro" },
              { num: 3, titulo: "Canção do Rio", tipo: "Solo de Mia + Coro" },
              { num: 4, titulo: "Ecos da Verdade", tipo: "Canon em grupos" },
              { num: 5, titulo: "Dança da Coragem", tipo: "Solo de Davi + Dançarinos" },
              { num: 6, titulo: "Olhar para Dentro", tipo: "Ensemble completo" },
              { num: 7, titulo: "Raízes da Amizade", tipo: "TODOS (131 alunos)" },
              { num: 8, titulo: "As Cinco Notas", tipo: "Sequência especial" },
              { num: 9, titulo: "A Floresta Canta Novamente", tipo: "Reprise melhorada" },
              { num: 10, titulo: "Nossa Canção", tipo: "Grande Finale - TODOS" }
            ].map(musica => (
              <div key={musica.num} className="bg-white p-4 rounded-lg border-l-4 border-indigo-500 flex justify-between items-center">
                <div>
                  <span className="font-bold text-indigo-700">Música {musica.num}:</span>
                  <span className="ml-2 text-gray-800">{musica.titulo}</span>
                </div>
                <span className="text-sm text-gray-600 italic">{musica.tipo}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // PÁGINA DE DISTRIBUIÇÃO
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-green-50 to-teal-50">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">👥 Distribuição de Funções</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">GRUPO 1 - Performance (58 alunos)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Atores Principais (18):</strong> Protagonistas, Sábia Willow, Espírito da Floresta, personagens secundários</li>
                <li>• <strong>Coro/Dançarinos (36):</strong> Animais da floresta, elementos naturais, coreografias</li>
                <li>• <strong>Narradores (4):</strong> Conduzem a história entre as cenas</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">GRUPO 2 - Produção Audiovisual (29 alunos)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Roteiristas (6):</strong> Ajustes finais do script, diálogos adicionais</li>
                <li>• <strong>Cinegrafistas (6):</strong> Filmagem do espetáculo, making of</li>
                <li>• <strong>Editores (4):</strong> Montagem do vídeo final</li>
                <li>• <strong>Pesquisadores (5):</strong> Pesquisa sobre natureza, música, lendas</li>
                <li>• <strong>Tradutores (3):</strong> Legendas se necessário</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">GRUPO 3 - Arte e Produção (24 alunos)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Cenógrafos/Adereços (14):</strong> Árvores, flores, Notas Mágicas, painéis espelhados</li>
                <li>• <strong>Figurinistas (4):</strong> Costumes de animais, elementos naturais, protagonistas</li>
                <li>• <strong>Coreógrafos (6):</strong> Criação e ensino das danças</li>
              </ul>
            </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-bold text-amber-700 mb-2">GRUPO 4 - Documentação e Exposição (20 alunos)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fotografia dos ensaios e apresentação</li>
                <li>• Diário de bordo do processo criativo</li>
                <li>• Criação de programas e materiais informativos</li>
                <li>• Exposição sobre o tema (natureza, música, trabalho em equipe)</li>
                <li>• Registro escrito das experiências dos participantes</li>
                <li>• Criação de pôsteres e material de divulgação</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // PÁGINA DE CENOGRAFIA
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">🎨 Guia de Cenografia</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">Elementos Principais</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Árvore Anciã:</strong> Estrutura central grande, com galhos móveis, pode começar cinza e ganhar cores</li>
                <li><strong>Floresta:</strong> Árvores menores feitas com papelão, tecido ou materiais recicláveis</li>
                <li><strong>Rio:</strong> Tecidos azuis em movimento, efeito de água com iluminação</li>
                <li><strong>Montanha:</strong> Plataformas ou estruturas em diferentes níveis</li>
                <li><strong>Jardim dos Espelhos:</strong> Painéis prateados ou papel alumínio em estruturas</li>
                <li><strong>Notas Mágicas:</strong> Objetos luminosos (LED ou lanternas decoradas) em formato de notas musicais</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">Materiais Sustentáveis</h3>
              <p className="text-sm text-gray-700 mb-2">Priorizar materiais recicláveis e reutilizáveis:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Caixas de papelão para estruturas</li>
                <li>• Garrafas PET para flores e elementos decorativos</li>
                <li>• Tecidos reutilizados para rios, folhas e cortinas</li>
                <li>• Papel kraft e jornal para papietagem</li>
                <li>• Materiais naturais: galhos, folhas secas, pedras</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">Iluminação</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Abertura:</strong> Tons quentes, amanhecer gradual</li>
                <li>• <strong>Maldição:</strong> Luzes frias, tons de cinza</li>
                <li>• <strong>Rio:</strong> Azul e branco, reflexos de água</li>
                <li>• <strong>Vale das Sombras:</strong> Escuridão com pontos de luz</li>
                <li>• <strong>Restauração:</strong> Todas as cores, vibrante e festivo</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // PÁGINA DE FIGURINOS
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">👗 Guia de Figurinos</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Protagonistas</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>LUNA:</strong> Tons de roxo e prata, representando liderança e magia</li>
                <li><strong>THEO:</strong> Tons de azul e marrom, representando sabedoria e terra</li>
                <li><strong>MIA:</strong> Tons de verde água e branco, representando delicadeza</li>
                <li><strong>DAVI:</strong> Tons de laranja e amarelo, representando energia</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Elementos da Natureza</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Árvores:</strong> Roupas marrons com folhas coladas ou penduradas</li>
                <li><strong>Flores:</strong> Cores variadas, pétalas em tecido na cabeça ou corpo</li>
                <li><strong>Água:</strong> Tecidos fluidos azuis e transparentes</li>
                <li><strong>Animais:</strong> Orelhas, rabos e máscaras simples</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2">Personagens Especiais</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Sábia Willow:</strong> Vestido longo terroso com galhos e folhas, cabelo grisalho</li>
                <li><strong>Espírito da Floresta:</strong> Branco etéreo com elementos brilhantes</li>
                <li><strong>Narradores:</strong> Preto neutro ou tons terrosos</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-2">Dicas de Confecção</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Base: roupas simples dos alunos (camisetas, calças)</li>
                <li>• Adicionar elementos com cola quente, alfinetes ou costura básica</li>
                <li>• TNT é econômico para fazer capas e sobretudo</li>
                <li>• Maquiagem teatral para realçar personagens</li>
                <li>• Acessórios podem transformar completamente um figurino básico</li>
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
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-cyan-700 mb-2">Fase 1: Preparação (2-3 semanas)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Semana 1: Leitura dramática, distribuição de papéis</li>
                <li>• Semana 2: Ensaios das músicas por grupo</li>
                <li>• Semana 3: Início dos ensaios de marcação das cenas</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-cyan-700 mb-2">Fase 2: Desenvolvimento (3-4 semanas)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ensaios de cenas individuais com atores</li>
                <li>• Criação de coreografias pelos dançarinos</li>
                <li>• Grupo 3 começa confecção de cenário e figurinos</li>
                <li>• Grupo 2 filma ensaios e cria storyboard</li>
                <li>• Grupo 4 documenta o processo</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-cyan-700 mb-2">Fase 3: Integração (2-3 semanas)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ensaios corridos de cenas completas</li>
                <li>• Integração de cenário e figurinos</li>
                <li>• Testes de iluminação e som</li>
                <li>• Ajustes finais de timing</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-cyan-700 mb-2">Fase 4: Finalização (1-2 semanas)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ensaio geral completo</li>
                <li>• Ensaio técnico com todos os elementos</li>
                <li>• Ensaio de apresentação para convidados</li>
                <li>• Ajustes finais</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-300">
              <p className="text-sm font-semibold text-cyan-800 mb-2">Dica Importante:</p>
              <p className="text-sm text-cyan-700">
                Adapte o cronograma à realidade da escola. O ideal é ter 2-3 meses de preparação 
                total, com ensaios de 2-3 vezes por semana.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // NOTAS DE PRODUÇÃO
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-rose-50 to-red-50">
          <h2 className="text-3xl font-bold text-red-800 mb-6">📋 Notas de Produção</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Adaptações Possíveis</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• O musical pode ser apresentado em versão reduzida (30-40 min) eliminando algumas músicas</li>
                <li>• Cenas podem ser divididas se o palco for pequeno</li>
                <li>• Número de protagonistas pode ser aumentado criando mais personagens</li>
                <li>• Músicas podem ser adaptadas para instrumentos disponíveis na escola</li>
                <li>• Apresentação pode ser ao ar livre em área verde da escola</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Recursos Técnicos Mínimos</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sistema de som básico (caixas amplificadas)</li>
                <li>• Microfones (pelo menos 2-4 sem fio ou com fio longo)</li>
                <li>• Iluminação básica (pode ser natural + refletores simples)</li>
                <li>• Espaço para apresentação (palco, quadra ou área aberta)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Envolvimento da Comunidade</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Pais podem ajudar com figurinos e cenário</li>
                <li>• Professores de diferentes matérias: música, artes, educação física</li>
                <li>• Parceria com comércio local para materiais</li>
                <li>• Convite à comunidade para assistir</li>
                <li>• Possível captação de recursos para custos básicos</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Aspectos Pedagógicos</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Trabalha colaboração e respeito às diferenças</li>
                <li>• Desenvolve habilidades artísticas diversas</li>
                <li>• Fortalece autoconfiança e expressão</li>
                <li>• Consciência ambiental através do tema</li>
                <li>• Valoriza o trabalho em equipe</li>
                <li>• Integra diferentes disciplinas escolares</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // GLOSSÁRIO MUSICAL
    {
      tipo: 'recursos',
      conteudo: (
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">🎵 Glossário Musical</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Canon</h4>
              <p className="text-xs text-gray-700">Técnica onde diferentes grupos cantam a mesma melodia começando em momentos diferentes</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Ensemble</h4>
              <p className="text-xs text-gray-700">Grupo grande de cantores ou performers atuando juntos</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Reprise</h4>
              <p className="text-xs text-gray-700">Repetição de uma música já apresentada, geralmente com variações</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Crescendo</h4>
              <p className="text-xs text-gray-700">Aumento gradual do volume e intensidade da música</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Bridge (Ponte)</h4>
              <p className="text-xs text-gray-700">Seção musical que conecta duas partes de uma canção, geralmente mudando o clima</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Blackout</h4>
              <p className="text-xs text-gray-700">Apagar súbito de todas as luzes do palco</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Marcação</h4>
              <p className="text-xs text-gray-700">Movimentos e posições dos atores no palco</p>
            </div>

            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-bold text-indigo-700 text-sm">Quarta Parede</h4>
              <p className="text-xs text-gray-700">Barreira imaginária entre atores e plateia. "Quebrar" significa interagir com o público</p>
            </div>
          </div>
        </div>
      )
    },

    // CONTRACAPA
    {
      tipo: 'contracapa',
      conteudo: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-600 via-teal-500 to-blue-500 text-white p-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">🌟</h2>
            <h2 className="text-3xl font-bold">
              "Quando estamos unidos,<br/>
              nada pode nos parar"
            </h2>
            <div className="mt-8 text-lg opacity-90">
              Um musical sobre amizade, natureza e<br/>
              o poder da colaboração
            </div>
            <div className="mt-12 text-sm opacity-75">
              131 alunos • 10 cenas • 10 músicas<br/>
              Um projeto para toda a escola
            </div>
            <div className="mt-8 text-xs opacity-60">
              © 2025 - Projeto Musical Escolar<br/>
              Roteiro adaptável e colaborativo
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
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-2xl p-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-8 shadow-xl">
              <BookOpen className="w-24 h-24 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-purple-800">
            O Mistério da Floresta Encantada
          </h2>
          <p className="text-xl text-gray-700">
            Roteiro Completo do Musical
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um musical original para 131 alunos, com 10 cenas, 10 músicas e uma mensagem 
            poderosa sobre trabalho em equipe, respeito à natureza e valorização das diferenças.
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
          <span className="font-bold text-lg">O Mistério da Floresta Encantada</span>
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
