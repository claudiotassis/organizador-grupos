import React, { useState, useEffect } from 'react';
import { participantesDB, cronogramasDB } from './lib/supabase';
import { Users, Camera, Palette, Music, BookOpen, Scissors, Search, Languages, Shirt, Box, Eye, EyeOff, UserPlus, Download, Upload, X, Edit3, Check, Menu, List, BarChart3, Calendar, ChevronLeft, ChevronRight, Plus, Clock, Target } from 'lucide-react';
import RotarioLivro from './components/RotarioLivro';

const App = () => {
  // Estados principais
  const [participantes, setParticipantes] = useState({});
  const [abaAtiva, setAbaAtiva] = useState('grupos');
  const [carregando, setCarregando] = useState(true);
  const [expandidos, setExpandidos] = useState({
    grupo1: true,
    grupo2: false,
    grupo3: false,
    grupo4: false
  });

  // Estados dos modais
  const [modalAdicionar, setModalAdicionar] = useState(false);
  const [modalExportar, setModalExportar] = useState(false);
  const [modalImportar, setModalImportar] = useState(false);
  const [modalSenha, setModalSenha] = useState(false);
  const [modalCronograma, setModalCronograma] = useState(false);
  
  // Estados de autenticação
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [acaoProtegida, setAcaoProtegida] = useState(null);
  const [autenticado, setAutenticado] = useState(false);

  // Estados do calendário
  const [dataAtual, setDataAtual] = useState(new Date());
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [cronogramas, setCronogramas] = useState([]);
  const [cronogramasMes, setCronogramasMes] = useState([]);
  const [cronogramaEditando, setCronogramaEditando] = useState(null);
  
  // Estados do cronograma
  const [novoCronograma, setNovoCronograma] = useState({
    titulo: '',
    descricao: '',
    grupo_alvo: 'todos',
    pontuacao: 0,
    atividades: []
  });

  const [novoAluno, setNovoAluno] = useState({ nome: '', turma: '8º A' });
  const [grupoAtual, setGrupoAtual] = useState('');
  const [subgrupoAtual, setSubgrupoAtual] = useState('');
  const [dadosExportacao, setDadosExportacao] = useState('');
  const [dadosImportacao, setDadosImportacao] = useState('');
  const [mensagem, setMensagem] = useState(null);

  // Estados de edição
  const [editando, setEditando] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState({ nome: '', turma: '' });

  // Definição dos grupos
  const grupos = {
    grupo1: {
      nome: "Grupo 1 - Performance",
      cor: "bg-purple-100 border-purple-300",
      corHeader: "bg-purple-500",
      icone: <Music className="w-6 h-6 text-white" />,
      total: 58,
      subgrupos: {
        atores: {
          nome: "Atores Principais",
          vagas: 18,
          icone: <Users className="w-5 h-5" />
        },
        coro: {
          nome: "Coro/Dançarinos", 
          vagas: 36,
          icone: <Music className="w-5 h-5" />
        },
        narradores: {
          nome: "Narradores",
          vagas: 4,
          icone: <BookOpen className="w-5 h-5" />
        }
      }
    },
    grupo2: {
      nome: "Grupo 2 - Produção Audiovisual",
      cor: "bg-blue-100 border-blue-300", 
      corHeader: "bg-blue-500",
      icone: <Camera className="w-6 h-6 text-white" />,
      total: 29,
      subgrupos: {
        roteiristas: {
          nome: "Roteiristas",
          vagas: 6,
          icone: <BookOpen className="w-5 h-5" />
        },
        cinegrafistas: {
          nome: "Cinegrafistas",
          vagas: 6,
          icone: <Camera className="w-5 h-5" />
        },
        editores: {
          nome: "Editores",
          vagas: 4,
          icone: <Scissors className="w-5 h-5" />
        },
        pesquisadores: {
          nome: "Pesquisadores",
          vagas: 5,
          icone: <Search className="w-5 h-5" />
        },
        tradutores: {
          nome: "Tradutores",
          vagas: 3,
          icone: <Languages className="w-5 h-5" />
        }
      }
    },
    grupo3: {
      nome: "Grupo 3 - Arte e Produção",
      cor: "bg-green-100 border-green-300",
      corHeader: "bg-green-500", 
      icone: <Palette className="w-6 h-6 text-white" />,
      total: 24,
      subgrupos: {
        cenografos: {
          nome: "Cenógrafos, Adereços e Apoio",
          vagas: 14,
          icone: <Box className="w-5 h-5" />
        },
        figurinistas: {
          nome: "Figurinistas",
          vagas: 4,
          icone: <Shirt className="w-5 h-5" />
        },
        coreografia: {
          nome: "Criadores de Coreografia",
          vagas: 6,
          icone: <Music className="w-5 h-5" />
        }
      }
    },
    grupo4: {
      nome: "Grupo 4 - Documentação e Exposição",
      cor: "bg-amber-100 border-amber-300",
      corHeader: "bg-amber-500",
      icone: <BookOpen className="w-6 h-6 text-white" />,
      total: 20,
      subgrupos: {
        geral: {
          nome: "Equipe Completa de Documentação e Exposição",
          vagas: 20,
          icone: <BookOpen className="w-5 h-5" />
        }
      }
    }
  };

  // Carregar dados do banco ao inicializar
  useEffect(() => {
    carregarParticipantes();
    if (abaAtiva === 'calendario') {
      carregarCronogramasMes();
      carregarCronogramasData();
    }
  }, [abaAtiva, dataAtual]);

  // Carregar cronogramas quando muda a data selecionada
  useEffect(() => {
    if (abaAtiva === 'calendario') {
      carregarCronogramasData();
    }
  }, [dataSelecionada, abaAtiva]);

  // Senha de administrador
  const SENHA_ADMIN = 'C$!lv@745515';

  // Verificar se precisa autenticar para ações protegidas
  const verificarAutenticacao = (acao) => {
    if (!autenticado) {
      setAcaoProtegida(acao);
      setModalSenha(true);
      return false;
    }
    return true;
  };

  // Validar senha
  const validarSenha = () => {
    if (senhaDigitada === SENHA_ADMIN) {
      setAutenticado(true);
      setSenhaDigitada('');
      setModalSenha(false);
      
      // Executar ação protegida se houver
      if (acaoProtegida) {
        acaoProtegida();
        setAcaoProtegida(null);
      }
      
      setMensagem({ tipo: 'sucesso', texto: 'Acesso autorizado!' });
    } else {
      setMensagem({ tipo: 'erro', texto: 'Senha incorreta!' });
      setSenhaDigitada('');
    }
  };

  // Auto-logout após 30 minutos de inatividade
  useEffect(() => {
    if (autenticado) {
      const timeout = setTimeout(() => {
        setAutenticado(false);
        setMensagem({ tipo: 'erro', texto: 'Sessão expirada. Faça login novamente.' });
      }, 30 * 60 * 1000); // 30 minutos
      
      return () => clearTimeout(timeout);
    }
  }, [autenticado]);

  // Funções de ação com autenticação
  const abrirModalAdicionarProtegido = (grupoId, subgrupoId) => {
    const acao = () => abrirModalAdicionar(grupoId, subgrupoId);
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const removerParticipanteProtegido = async (grupoId, subgrupoId, participanteId) => {
    const acao = () => removerParticipante(grupoId, subgrupoId, participanteId);
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const iniciarEdicaoProtegido = (grupoId, subgrupoId, participante) => {
    const acao = () => iniciarEdicao(grupoId, subgrupoId, participante);
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const exportarDadosProtegido = () => {
    const acao = exportarDados;
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const abrirModalImportarProtegido = () => {
    const acao = () => setModalImportar(true);
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  // Funções do calendário
  const carregarCronogramasMes = async () => {
    try {
      const cronogramas = await cronogramasDB.getByMes(
        dataAtual.getFullYear(), 
        dataAtual.getMonth() + 1
      );
      setCronogramasMes(cronogramas);
    } catch (error) {
      console.error('Erro ao carregar cronogramas do mês:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao carregar cronogramas do mês' });
    }
  };

  const carregarCronogramasData = async () => {
    try {
      const dataFormatada = formatarData(dataSelecionada);
      const cronogramas = await cronogramasDB.getByData(dataFormatada);
      setCronogramas(cronogramas);
    } catch (error) {
      console.error('Erro ao carregar cronogramas da data:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao carregar cronogramas' });
    }
  };

  const formatarData = (data) => {
    return data.toISOString().split('T')[0];
  };

  const abrirModalCronogramaProtegido = (cronograma = null) => {
    const acao = () => {
      if (cronograma) {
        setCronogramaEditando(cronograma);
        setNovoCronograma({
          titulo: cronograma.titulo,
          descricao: cronograma.descricao || '',
          grupo_alvo: cronograma.grupo_alvo || 'todos',
          pontuacao: cronograma.pontuacao || 0,
          atividades: cronograma.cronograma_atividades || []
        });
      } else {
        setCronogramaEditando(null);
        setNovoCronograma({
          titulo: '',
          descricao: '',
          grupo_alvo: 'todos',
          pontuacao: 0,
          atividades: []
        });
      }
      setModalCronograma(true);
    };
    
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const salvarCronograma = async () => {
    if (!novoCronograma.titulo.trim()) return;
    
    try {
      const dadosCronograma = {
        data: formatarData(dataSelecionada),
        titulo: novoCronograma.titulo.trim(),
        descricao: novoCronograma.descricao.trim(),
        grupo_alvo: novoCronograma.grupo_alvo,
        pontuacao: parseFloat(novoCronograma.pontuacao) || 0
      };

      if (cronogramaEditando) {
        await cronogramasDB.atualizar(cronogramaEditando.id, dadosCronograma, novoCronograma.atividades);
        setMensagem({ tipo: 'sucesso', texto: 'Cronograma atualizado!' });
      } else {
        await cronogramasDB.criar(dadosCronograma, novoCronograma.atividades);
        setMensagem({ tipo: 'sucesso', texto: 'Cronograma criado!' });
      }

      setModalCronograma(false);
      carregarCronogramasData();
      carregarCronogramasMes();
    } catch (error) {
      console.error('Erro ao salvar cronograma:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao salvar cronograma: ' + error.message });
    }
  };

  const deletarCronogramaProtegido = async (cronogramaId) => {
    const acao = async () => {
      try {
        await cronogramasDB.deletar(cronogramaId);
        setMensagem({ tipo: 'sucesso', texto: 'Cronograma deletado!' });
        carregarCronogramasData();
        carregarCronogramasMes();
      } catch (error) {
        console.error('Erro ao deletar cronograma:', error);
        setMensagem({ tipo: 'erro', texto: 'Erro ao deletar cronograma: ' + error.message });
      }
    };
    
    if (verificarAutenticacao(acao)) {
      acao();
    }
  };

  const adicionarAtividade = () => {
    setNovoCronograma(prev => ({
      ...prev,
      atividades: [...prev.atividades, { grupo_id: 'grupo1', atividade: '' }]
    }));
  };

  const removerAtividade = (index) => {
    setNovoCronograma(prev => ({
      ...prev,
      atividades: prev.atividades.filter((_, i) => i !== index)
    }));
  };

  const atualizarAtividade = (index, campo, valor) => {
    setNovoCronograma(prev => ({
      ...prev,
      atividades: prev.atividades.map((ativ, i) => 
        i === index ? { ...ativ, [campo]: valor } : ativ
      )
    }));
  };

  // Funções auxiliares do calendário
  const obterDiasDoMes = (data) => {
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const diasDoMesAnterior = primeiroDia.getDay();
    
    const dias = [];
    
    // Dias do mês anterior
    for (let i = diasDoMesAnterior - 1; i >= 0; i--) {
      const dia = new Date(primeiroDia);
      dia.setDate(dia.getDate() - i - 1);
      dias.push({ data: dia, outroMes: true });
    }
    
    // Dias do mês atual
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      dias.push({ data: new Date(ano, mes, dia), outroMes: false });
    }
    
    // Dias do próximo mês
    const diasRestantes = 42 - dias.length;
    for (let dia = 1; dia <= diasRestantes; dia++) {
      const proximaData = new Date(ano, mes + 1, dia);
      dias.push({ data: proximaData, outroMes: true });
    }
    
    return dias;
  };

  const temCronogramaNaData = (data) => {
    const dataString = formatarData(data);
    return cronogramasMes.some(c => c.data === dataString);
  };

  const navegarMes = (direcao) => {
    const novaData = new Date(dataAtual);
    novaData.setMonth(novaData.getMonth() + direcao);
    setDataAtual(novaData);
  };

  const selecionarData = (data) => {
    setDataSelecionada(data);
  };

  const obterNomesMeses = () => [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const obterNomesDias = () => ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const carregarParticipantes = async () => {
    try {
      setCarregando(true);
      const dadosDB = await participantesDB.getAll();
      
      // Converter array do banco para estrutura de grupos
      const participantesAgrupados = {};
      dadosDB.forEach(p => {
        const chave = `${p.grupo_id}_${p.subgrupo_id}`;
        if (!participantesAgrupados[chave]) {
          participantesAgrupados[chave] = [];
        }
        participantesAgrupados[chave].push({
          id: p.id,
          nome: p.nome,
          turma: p.turma
        });
      });
      
      setParticipantes(participantesAgrupados);
    } catch (error) {
      console.error('Erro ao carregar participantes:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao carregar dados: ' + error.message });
    } finally {
      setCarregando(false);
    }
  };

  // Funções auxiliares
  const obterChave = (grupoId, subgrupoId) => `${grupoId}_${subgrupoId}`;

  const contarParticipantes = (grupoId, subgrupoId = null) => {
    if (subgrupoId) {
      const chave = obterChave(grupoId, subgrupoId);
      return participantes[chave]?.length || 0;
    }
    return Object.keys(grupos[grupoId].subgrupos).reduce((total, subId) => {
      const chave = obterChave(grupoId, subId);
      return total + (participantes[chave]?.length || 0);
    }, 0);
  };

  const contarPorTurma = () => {
    const contagem = { '8º A': 0, '8º B': 0, '8º C': 0 };
    Object.values(participantes).forEach(lista => {
      lista.forEach(p => {
        if (contagem[p.turma] !== undefined) {
          contagem[p.turma]++;
        }
      });
    });
    return contagem;
  };

  const obterParticipantesPorTurma = () => {
    const porTurma = { '8º A': {}, '8º B': {}, '8º C': {} };
    
    Object.entries(participantes).forEach(([chave, lista]) => {
      const [grupoId, subgrupoId] = chave.split('_');
      const grupo = grupos[grupoId];
      const subgrupo = grupo?.subgrupos[subgrupoId];
      
      if (grupo && subgrupo) {
        lista.forEach(participante => {
          if (porTurma[participante.turma] !== undefined) {
            if (!porTurma[participante.turma][participante.nome]) {
              porTurma[participante.turma][participante.nome] = {
                nome: participante.nome,
                turma: participante.turma,
                funcoes: []
              };
            }
            
            porTurma[participante.turma][participante.nome].funcoes.push({
              grupo: grupo.nome,
              subgrupo: subgrupo.nome,
              corGrupo: grupo.corHeader
            });
          }
        });
      }
    });
    
    // Converter objetos em arrays e ordenar por nome
    const resultado = {};
    Object.keys(porTurma).forEach(turma => {
      resultado[turma] = Object.values(porTurma[turma]).sort((a, b) => a.nome.localeCompare(b.nome));
    });
    
    return resultado;
  };

  const obterListagemCompleta = () => {
    const listagemPorFuncao = {};
    const participacoesPorAluno = {};
    
    Object.entries(participantes).forEach(([chave, lista]) => {
      const [grupoId, subgrupoId] = chave.split('_');
      const grupo = grupos[grupoId];
      const subgrupo = grupo?.subgrupos[subgrupoId];
      
      if (grupo && subgrupo) {
        const nomeCompleto = `${subgrupo.nome} (${grupo.nome})`;
        
        if (!listagemPorFuncao[nomeCompleto]) {
          listagemPorFuncao[nomeCompleto] = {
            participantes: [],
            grupo: grupo.nome,
            subgrupo: subgrupo.nome,
            cor: grupo.corHeader
          };
        }
        
        lista.forEach(participante => {
          listagemPorFuncao[nomeCompleto].participantes.push(participante);
          
          if (!participacoesPorAluno[participante.nome]) {
            participacoesPorAluno[participante.nome] = [];
          }
          participacoesPorAluno[participante.nome].push({
            funcao: nomeCompleto,
            grupo: grupo.nome,
            subgrupo: subgrupo.nome,
            cor: grupo.corHeader,
            turma: participante.turma
          });
        });
      }
    });
    
    const alunosUnicaFuncao = [];
    const alunosMultiplasFuncoes = [];
    
    Object.entries(participacoesPorAluno).forEach(([nome, funcoes]) => {
      const aluno = {
        nome,
        funcoes,
        turma: funcoes[0]?.turma,
        quantidadeFuncoes: funcoes.length
      };
      
      if (funcoes.length === 1) {
        alunosUnicaFuncao.push(aluno);
      } else {
        alunosMultiplasFuncoes.push(aluno);
      }
    });
    
    alunosUnicaFuncao.sort((a, b) => a.nome.localeCompare(b.nome));
    alunosMultiplasFuncoes.sort((a, b) => a.nome.localeCompare(b.nome));
    
    return {
      listagemPorFuncao,
      alunosUnicaFuncao,
      alunosMultiplasFuncoes
    };
  };

  // Funções de ação com integração ao banco
  const abrirModalAdicionar = (grupoId, subgrupoId) => {
    setGrupoAtual(grupoId);
    setSubgrupoAtual(subgrupoId);
    setNovoAluno({ nome: '', turma: '8º A' });
    setModalAdicionar(true);
  };

  const adicionarParticipante = async () => {
    if (!novoAluno.nome.trim()) return;
    
    try {
      const novoParticipante = {
        nome: novoAluno.nome.trim(),
        turma: novoAluno.turma,
        grupo_id: grupoAtual,
        subgrupo_id: subgrupoAtual
      };

      const participanteDB = await participantesDB.add(novoParticipante);
      
      // Atualizar estado local
      const chave = obterChave(grupoAtual, subgrupoAtual);
      const lista = participantes[chave] || [];
      setParticipantes(prev => ({
        ...prev,
        [chave]: [...lista, {
          id: participanteDB.id,
          nome: participanteDB.nome,
          turma: participanteDB.turma
        }]
      }));
      
      setModalAdicionar(false);
      setNovoAluno({ nome: '', turma: '8º A' });
      setMensagem({ tipo: 'sucesso', texto: 'Aluno adicionado com sucesso!' });
    } catch (error) {
      console.error('Erro ao adicionar:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao adicionar aluno: ' + error.message });
    }
  };

  const removerParticipante = async (grupoId, subgrupoId, participanteId) => {
    try {
      await participantesDB.remove(participanteId);
      
      const chave = obterChave(grupoId, subgrupoId);
      setParticipantes(prev => ({
        ...prev,
        [chave]: (prev[chave] || []).filter(p => p.id !== participanteId)
      }));
      
      setMensagem({ tipo: 'sucesso', texto: 'Aluno removido!' });
    } catch (error) {
      console.error('Erro ao remover:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao remover aluno: ' + error.message });
    }
  };

  const iniciarEdicao = (grupoId, subgrupoId, participante) => {
    setEditando(`${grupoId}_${subgrupoId}_${participante.id}`);
    setDadosEdicao({ nome: participante.nome, turma: participante.turma });
  };

  const salvarEdicao = async (grupoId, subgrupoId, participanteId) => {
    if (!dadosEdicao.nome.trim()) return;
    
    try {
      await participantesDB.update(participanteId, {
        nome: dadosEdicao.nome.trim(),
        turma: dadosEdicao.turma
      });

      const chave = obterChave(grupoId, subgrupoId);
      setParticipantes(prev => ({
        ...prev,
        [chave]: (prev[chave] || []).map(p => 
          p.id === participanteId 
            ? { ...p, nome: dadosEdicao.nome.trim(), turma: dadosEdicao.turma }
            : p
        )
      }));
      
      setEditando(null);
      setMensagem({ tipo: 'sucesso', texto: 'Dados atualizados!' });
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      setMensagem({ tipo: 'erro', texto: 'Erro ao atualizar dados: ' + error.message });
    }
  };

  const exportarDados = () => {
    const totalParticipacoes = Object.values(participantes).reduce((sum, lista) => sum + lista.length, 0);
    
    const dados = {
      participantes,
      metadados: {
        totalParticipacoes,
        totalGrupos: Object.keys(grupos).length,
        totalSubgrupos: Object.values(grupos).reduce((sum, grupo) => sum + Object.keys(grupo.subgrupos).length, 0),
        contadorPorTurma: contarPorTurma(),
        dataExportacao: new Date().toISOString(),
        versao: "2.0",
        projeto: "Projeto Musical - Organização dos Grupos (Com Banco de Dados)"
      }
    };
    
    setDadosExportacao(JSON.stringify(dados, null, 2));
    setModalExportar(true);
  };

  const importarDados = async () => {
    try {
      const dados = JSON.parse(dadosImportacao);
      
      if (dados.participantes && typeof dados.participantes === 'object') {
        // Converter estrutura de grupos para array
        const participantesList = [];
        Object.entries(dados.participantes).forEach(([chave, lista]) => {
          const [grupo_id, subgrupo_id] = chave.split('_');
          lista.forEach(p => {
            participantesList.push({
              nome: p.nome,
              turma: p.turma,
              grupo_id,
              subgrupo_id
            });
          });
        });
        
        await participantesDB.importBatch(participantesList);
        await carregarParticipantes(); // Recarregar dados
        
        setModalImportar(false);
        setDadosImportacao('');
        setMensagem({ 
          tipo: 'sucesso', 
          texto: `Dados importados! ${participantesList.length} participantes carregados.` 
        });
      } else {
        setMensagem({ tipo: 'erro', texto: 'Formato inválido!' });
      }
    } catch (error) {
      console.error('Erro na importação:', error);
      setMensagem({ tipo: 'erro', texto: `Erro: ${error.message}` });
    }
  };

  const copiarDados = async () => {
    try {
      await navigator.clipboard.writeText(dadosExportacao);
      setMensagem({ tipo: 'sucesso', texto: 'Dados copiados!' });
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: 'Selecione e copie manualmente' });
    }
  };

// Limpar mensagens automaticamente
  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);
// Dados calculados
  const contagemTurmas = contarPorTurma();
  const participantesPorTurma = obterParticipantesPorTurma();
  const listagemCompleta = obterListagemCompleta();
  const totalParticipacoes = Object.values(participantes).reduce((sum, lista) => sum + lista.length, 0);
  const alunosUnicos = new Set(Object.values(participantes).flat().map(p => p.nome)).size;

  if (carregando) {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando dados do banco...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              🎭 Projeto Musical - Organização dos Grupos
            </h1>
            {autenticado && (
              <p className="text-sm text-green-600 mt-1">
                🔓 Modo Administrador - Edições habilitadas
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportarDadosProtegido}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              Exportar
            </button>
            <button
              onClick={abrirModalImportarProtegido}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Importar
            </button>
          </div>
        </div>
        
        {/* Estatísticas principais */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-indigo-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-indigo-800">Total</h3>
            <p className="text-2xl font-bold text-indigo-600">{totalParticipacoes}</p>
            <p className="text-sm text-indigo-600">participações</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-orange-800">8º A</h3>
            <p className="text-2xl font-bold text-orange-600">{contagemTurmas['8º A']}</p>
            <p className="text-sm text-orange-600">alunos</p>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-teal-800">8º B</h3>
            <p className="text-2xl font-bold text-teal-600">{contagemTurmas['8º B']}</p>
            <p className="text-sm text-teal-600">alunos</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-pink-800">8º C</h3>
            <p className="text-2xl font-bold text-pink-600">{contagemTurmas['8º C']}</p>
            <p className="text-sm text-pink-600">alunos</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-yellow-800">Únicos</h3>
            <p className="text-2xl font-bold text-yellow-600">{alunosUnicos}</p>
            <p className="text-sm text-yellow-600">pessoas</p>
          </div>
        </div>

        {/* Menu de navegação */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setAbaAtiva('grupos')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors ${
              abaAtiva === 'grupos' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Menu className="w-4 h-4" />
            Por Grupos
          </button>
          <button
            onClick={() => setAbaAtiva('turmas')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors ${
              abaAtiva === 'turmas' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <List className="w-4 h-4" />
            Por Turmas
          </button>
          <button
            onClick={() => setAbaAtiva('estatisticas')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors ${
              abaAtiva === 'estatisticas' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Listagem Completa
          </button>
          <button
            onClick={() => setAbaAtiva('calendario')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors ${
              abaAtiva === 'calendario' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Calendário
          </button>
          <button
            onClick={() => setAbaAtiva('roteiro')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium transition-colors ${
              abaAtiva === 'roteiro' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Roteiro
          </button>
        </div>
      </div>

      {/* Mensagem de feedback */}
      {mensagem && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
          mensagem.tipo === 'sucesso' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {mensagem.texto}
        </div>
      )}

      {/* Conteúdo das abas */}
      {abaAtiva === 'grupos' && (
        <div>
          {Object.entries(grupos).map(([grupoId, grupo]) => {
            const totalGrupo = contarParticipantes(grupoId);
            
            return (
              <div key={grupoId} className={`${grupo.cor} rounded-lg shadow-lg mb-6 border-2`}>
                <div 
                  className={`${grupo.corHeader} p-4 rounded-t-lg cursor-pointer flex items-center justify-between`}
                  onClick={() => setExpandidos(prev => ({ ...prev, [grupoId]: !prev[grupoId] }))}
                >
                  <div className="flex items-center gap-3">
                    {grupo.icone}
                    <div>
                      <h2 className="text-xl font-bold text-white">{grupo.nome}</h2>
                      <p className="text-white opacity-90">Total sugerido: {grupo.total} alunos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-white text-right">
                      <div className="text-sm opacity-90">Inscritos</div>
                      <div className="font-bold">{totalGrupo}</div>
                    </div>
                    {expandidos[grupoId] ? 
                      <EyeOff className="w-5 h-5 text-white" /> : 
                      <Eye className="w-5 h-5 text-white" />
                    }
                  </div>
                </div>
                
                {expandidos[grupoId] && (
                  <div className="p-4">
                    <div className="grid gap-4">
                      {Object.entries(grupo.subgrupos).map(([subgrupoId, subgrupo]) => {
                        const chave = obterChave(grupoId, subgrupoId);
                        const participantesSubgrupo = participantes[chave] || [];
                        
                        return (
                          <div key={subgrupoId} className="bg-white rounded-lg p-4 shadow-sm border">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {subgrupo.icone}
                                <div>
                                  <h3 className="font-semibold text-gray-800">{subgrupo.nome}</h3>
                                  <p className="text-sm text-gray-600">{subgrupo.vagas} vagas sugeridas</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => abrirModalAdicionarProtegido(grupoId, subgrupoId)}
                                  className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                                >
                                  <UserPlus className="w-4 h-4" />
                                  Adicionar
                                </button>
                                <div className="bg-gray-100 px-3 py-2 rounded-lg text-center min-w-[80px]">
                                  <div className="font-bold text-lg">{participantesSubgrupo.length}</div>
                                  <div className="text-xs text-gray-600">de {subgrupo.vagas}</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Barra de progresso */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  participantesSubgrupo.length > subgrupo.vagas ? 'bg-orange-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${Math.min(100, (participantesSubgrupo.length / subgrupo.vagas) * 100)}%` }}
                              ></div>
                            </div>

                            {/* Lista de participantes */}
                            {participantesSubgrupo.length > 0 && (
                              <div className="mb-3">
                                <h4 className="font-medium text-gray-700 mb-2">Participantes:</h4>
                                <div className="space-y-1 max-h-32 overflow-y-auto">
                                  {participantesSubgrupo.map((participante) => {
                                    const editKey = `${grupoId}_${subgrupoId}_${participante.id}`;
                                    const estaEditando = editando === editKey;
                                    
                                    return (
                                      <div key={participante.id} className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded text-sm">
                                        {estaEditando ? (
                                          <div className="flex items-center gap-2 flex-1">
                                            <input
                                              type="text"
                                              value={dadosEdicao.nome}
                                              onChange={(e) => setDadosEdicao(prev => ({ ...prev, nome: e.target.value }))}
                                              className="border rounded px-2 py-1 text-xs flex-1"
                                            />
                                            <select
                                              value={dadosEdicao.turma}
                                              onChange={(e) => setDadosEdicao(prev => ({ ...prev, turma: e.target.value }))}
                                              className="border rounded px-1 py-1 text-xs"
                                            >
                                              <option value="8º A">8º A</option>
                                              <option value="8º B">8º B</option>
                                              <option value="8º C">8º C</option>
                                            </select>
                                            <button
                                              onClick={() => salvarEdicao(grupoId, subgrupoId, participante.id)}
                                              className="text-green-600 hover:text-green-800"
                                            >
                                              <Check className="w-4 h-4" />
                                            </button>
                                            <button
                                              onClick={() => setEditando(null)}
                                              className="text-gray-600 hover:text-gray-800"
                                            >
                                              <X className="w-4 h-4" />
                                            </button>
                                          </div>
                                        ) : (
                                          <>
                                            <span className="font-medium text-gray-800">{participante.nome}</span>
                                            <div className="flex items-center gap-2">
                                              <span className="text-gray-600 text-xs">{participante.turma}</span>
                                              <button
                                                onClick={() => iniciarEdicaoProtegido(grupoId, subgrupoId, participante)}
                                                className="text-blue-600 hover:text-blue-800"
                                              >
                                                <Edit3 className="w-3 h-3" />
                                              </button>
                                              <button
                                                onClick={() => removerParticipanteProtegido(grupoId, subgrupoId, participante.id)}
                                                className="text-red-600 hover:text-red-800"
                                              >
                                                <X className="w-3 h-3" />
                                              </button>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Aba Por Turmas */}
      {abaAtiva === 'turmas' && (
        <div className="space-y-6">
          {Object.entries(participantesPorTurma).map(([turma, alunos]) => (
            <div key={turma} className="bg-white rounded-lg shadow-lg border">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-white">{turma}</h2>
                <p className="text-white opacity-90">{alunos.length} participantes</p>
              </div>
              <div className="p-4">
                {alunos.length === 0 ? (
                  <p className="text-gray-500 italic">Nenhum aluno inscrito nesta turma</p>
                ) : (
                  <div className="space-y-3">
                    {alunos.map((aluno, idx) => (
                      <div key={`${aluno.nome}-${idx}`} className="bg-gray-50 rounded-lg p-4 border">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-gray-800 text-lg">{aluno.nome}</h4>
                          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded font-medium">
                            {aluno.funcoes.length} função{aluno.funcoes.length > 1 ? 'ões' : ''}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {aluno.funcoes.map((funcao, fidx) => (
                            <div key={fidx} className="flex items-center gap-3 bg-white p-2 rounded border-l-4" 
                                 style={{ borderLeftColor: 
                                   funcao.corGrupo === 'bg-purple-500' ? '#8b5cf6' :
                                   funcao.corGrupo === 'bg-blue-500' ? '#3b82f6' :
                                   funcao.corGrupo === 'bg-green-500' ? '#10b981' :
                                   '#f59e0b'
                                 }}>
                              <div className={`w-3 h-3 rounded-full ${
                                funcao.corGrupo === 'bg-purple-500' ? 'bg-purple-500' :
                                funcao.corGrupo === 'bg-blue-500' ? 'bg-blue-500' :
                                funcao.corGrupo === 'bg-green-500' ? 'bg-green-500' :
                                'bg-amber-500'
                              }`}></div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-800">{funcao.subgrupo}</div>
                                <div className="text-xs text-gray-500">{funcao.grupo}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Aba Listagem Completa */}
      {abaAtiva === 'estatisticas' && (
        <div className="space-y-6">
          {/* Resumo Estatístico */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Resumo Estatístico</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-800">Total de Participações</h4>
                <p className="text-3xl font-bold text-blue-600">{totalParticipacoes}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-green-800">Alunos Únicos</h4>
                <p className="text-3xl font-bold text-green-600">{alunosUnicos}</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-orange-800">Participação Múltipla</h4>
                <p className="text-3xl font-bold text-orange-600">{listagemCompleta.alunosMultiplasFuncoes.length}</p>
              </div>
            </div>
          </div>

          {/* Listagem por Função */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Listagem por Função</h3>
            <div className="space-y-4">
              {Object.entries(listagemCompleta.listagemPorFuncao).map(([funcao, dados]) => (
                <div key={funcao} className="border rounded-lg overflow-hidden">
                  <div className={`p-3 ${
                    dados.cor === 'bg-purple-500' ? 'bg-purple-500' :
                    dados.cor === 'bg-blue-500' ? 'bg-blue-500' :
                    dados.cor === 'bg-green-500' ? 'bg-green-500' :
                    'bg-amber-500'
                  }`}>
                    <h4 className="font-semibold text-white">{funcao}</h4>
                    <p className="text-white opacity-90 text-sm">{dados.participantes.length} participantes</p>
                  </div>
                  <div className="p-3 bg-gray-50">
                    {dados.participantes.length === 0 ? (
                      <p className="text-gray-500 italic text-center">Nenhum participante cadastrado</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {dados.participantes.map((participante, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white p-2 rounded border">
                            <span className="font-medium text-gray-800">{participante.nome}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{participante.turma}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Análise de Participação */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Alunos com Única Função */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                👤 Alunos com Única Função ({listagemCompleta.alunosUnicaFuncao.length})
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {listagemCompleta.alunosUnicaFuncao.length === 0 ? (
                  <p className="text-gray-500 italic text-center">Todos os alunos têm múltiplas funções</p>
                ) : (
                  listagemCompleta.alunosUnicaFuncao.map((aluno, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-green-50 rounded border-l-4 border-green-500">
                      <div>
                        <span className="font-medium text-gray-800">{aluno.nome}</span>
                        <div className="text-xs text-gray-600">{aluno.funcoes[0].subgrupo}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{aluno.turma}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Alunos com Múltiplas Funções */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                👥 Alunos com Múltiplas Funções ({listagemCompleta.alunosMultiplasFuncoes.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {listagemCompleta.alunosMultiplasFuncoes.length === 0 ? (
                  <p className="text-gray-500 italic text-center">Nenhum aluno com múltiplas funções</p>
                ) : (
                  listagemCompleta.alunosMultiplasFuncoes.map((aluno, idx) => (
                    <div key={idx} className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{aluno.nome}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{aluno.turma}</span>
                          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
                            {aluno.quantidadeFuncoes} funções
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {aluno.funcoes.map((funcao, fidx) => (
                          <div key={fidx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              funcao.cor === 'bg-purple-500' ? 'bg-purple-500' :
                              funcao.cor === 'bg-blue-500' ? 'bg-blue-500' :
                              funcao.cor === 'bg-green-500' ? 'bg-green-500' :
                              'bg-amber-500'
                            }`}></div>
                            <span className="text-xs text-gray-600">{funcao.subgrupo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aba Calendário */}
      {abaAtiva === 'calendario' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendário - Lado Esquerdo */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {obterNomesMeses()[dataAtual.getMonth()]} {dataAtual.getFullYear()}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => navegarMes(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navegarMes(1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cabeçalho dos dias da semana */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {obterNomesDias().map(dia => (
                <div key={dia} className="p-2 text-center text-sm font-medium text-gray-500">
                  {dia}
                </div>
              ))}
            </div>

            {/* Grade do calendário */}
            <div className="grid grid-cols-7 gap-1">
              {obterDiasDoMes(dataAtual).map((item, index) => {
                const isHoje = item.data.toDateString() === new Date().toDateString();
                const isSelecionado = item.data.toDateString() === dataSelecionada.toDateString();
                const temCronograma = !item.outroMes && temCronogramaNaData(item.data);
                
                return (
                  <button
                    key={index}
                    onClick={() => !item.outroMes && selecionarData(item.data)}
                    disabled={item.outroMes}
                    className={`
                      relative p-2 h-12 text-sm transition-all duration-200
                      ${item.outroMes 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'hover:bg-blue-50 cursor-pointer'
                      }
                      ${isSelecionado && !item.outroMes 
                        ? 'bg-blue-500 text-white rounded-lg' 
                        : ''
                      }
                      ${isHoje && !isSelecionado && !item.outroMes 
                        ? 'bg-blue-100 text-blue-800 rounded-lg font-bold' 
                        : ''
                      }
                    `}
                  >
                    <span>{item.data.getDate()}</span>
                    {temCronograma && (
                      <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${
                        isSelecionado ? 'bg-white' : 'bg-blue-500'
                      }`}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cronogramas - Lado Direito */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Cronograma do Dia
                </h3>
             <p className="text-gray-600 text-sm">
                  {dataSelecionada.toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}
                </p>
              </div>
              <button
                onClick={() => abrirModalCronogramaProtegido()}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Novo Cronograma
              </button>
            </div>

            {/* Lista de cronogramas do dia */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {cronogramas.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Nenhum cronograma para este dia</p>
                  <p className="text-sm">Clique em "Novo Cronograma" para adicionar</p>
                </div>
              ) : (
                cronogramas.map((cronograma) => (
                  <div key={cronograma.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg">{cronograma.titulo}</h4>
                        {cronograma.descricao && (
                          <p className="text-gray-600 text-sm mt-1">{cronograma.descricao}</p>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="text-gray-600">
                              {cronograma.grupo_alvo === 'todos' ? 'Todos os grupos' : 
                               grupos[cronograma.grupo_alvo]?.nome || cronograma.grupo_alvo}
                            </span>
                          </div>
                          {cronograma.pontuacao > 0 && (
                            <div className="flex items-center gap-1 text-sm">
                              <span className="text-yellow-600 font-semibold">
                                {cronograma.pontuacao} pts
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => abrirModalCronogramaProtegido(cronograma)}
                          className="text-blue-600 hover:text-blue-800 p-1"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deletarCronogramaProtegido(cronograma.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Atividades por grupo */}
                    {cronograma.cronograma_atividades && cronograma.cronograma_atividades.length > 0 && (
                      <div className="space-y-3">
                        {Object.entries(grupos).map(([grupoId, grupo]) => {
                          const atividadesGrupo = cronograma.cronograma_atividades.filter(
                            ativ => ativ.grupo_id === grupoId
                          );
                          
                          if (atividadesGrupo.length === 0) return null;
                          
                          return (
                            <div key={grupoId} className="border-l-4 pl-3" 
                                 style={{ borderLeftColor: 
                                   grupo.corHeader === 'bg-purple-500' ? '#8b5cf6' :
                                   grupo.corHeader === 'bg-blue-500' ? '#3b82f6' :
                                   grupo.corHeader === 'bg-green-500' ? '#10b981' :
                                   '#f59e0b'
                                 }}>
                              <h5 className="font-medium text-gray-700 mb-2">{grupo.nome}</h5>
                              <ul className="space-y-1">
                                {atividadesGrupo.map((atividade) => (
                                  <li key={atividade.id} className="flex items-start gap-2 text-sm">
                                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                      grupo.corHeader === 'bg-purple-500' ? 'bg-purple-500' :
                                      grupo.corHeader === 'bg-blue-500' ? 'bg-blue-500' :
                                      grupo.corHeader === 'bg-green-500' ? 'bg-green-500' :
                                      'bg-amber-500'
                                    }`}></div>
                                    <span className="text-gray-700">{atividade.atividade}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Aba Roteiro */}
      {abaAtiva === 'roteiro' && (
        <RotarioLivro />
      )}

      {/* Modal Senha de Administrador */}
      {modalSenha && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
            <h3 className="text-lg font-bold mb-4 text-red-600">🔐 Acesso Restrito</h3>
            <p className="text-gray-700 mb-4">
              Esta ação requer senha de administrador. Digite a senha para continuar:
            </p>
            <div className="space-y-4">
              <div>
                <input
                  type="password"
                  value={senhaDigitada}
                  onChange={(e) => setSenhaDigitada(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Digite a senha de administrador"
                  onKeyPress={(e) => e.key === 'Enter' && validarSenha()}
                  autoFocus
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setModalSenha(false);
                  setSenhaDigitada('');
                  setAcaoProtegida(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={validarSenha}
                disabled={!senhaDigitada.trim()}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Autenticar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cronograma */}
      {modalCronograma && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-90vh overflow-auto mx-4">
            <h3 className="text-lg font-bold mb-4">
              {cronogramaEditando ? 'Editar Cronograma' : 'Novo Cronograma'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título:</label>
                  <input
                    type="text"
                    value={novoCronograma.titulo}
                    onChange={(e) => setNovoCronograma(prev => ({ ...prev, titulo: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: Aula sobre Performance"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descrição:</label>
                  <textarea
                    value={novoCronograma.descricao}
                    onChange={(e) => setNovoCronograma(prev => ({ ...prev, descricao: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descrição detalhada das atividades"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grupo Alvo:</label>
                    <select
                      value={novoCronograma.grupo_alvo}
                      onChange={(e) => setNovoCronograma(prev => ({ ...prev, grupo_alvo: e.target.value }))}
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="todos">Todos os grupos</option>
                      {Object.entries(grupos).map(([id, grupo]) => (
                        <option key={id} value={id}>{grupo.nome}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pontuação:</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      value={novoCronograma.pontuacao}
                      onChange={(e) => setNovoCronograma(prev => ({ ...prev, pontuacao: e.target.value }))}
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.0"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">Atividades por Grupo:</label>
                  <button
                    onClick={adicionarAtividade}
                    className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Adicionar
                  </button>
                </div>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {novoCronograma.atividades.map((atividade, index) => (
                    <div key={index} className="flex gap-2 p-3 border rounded-lg bg-gray-50">
                      <select
                        value={atividade.grupo_id}
                        onChange={(e) => atualizarAtividade(index, 'grupo_id', e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        {Object.entries(grupos).map(([id, grupo]) => (
                          <option key={id} value={id}>
                            {grupo.nome.replace(/Grupo \d+ - /, '')}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        value={atividade.atividade}
                        onChange={(e) => atualizarAtividade(index, 'atividade', e.target.value)}
                        className="flex-1 border rounded px-2 py-1 text-sm"
                        placeholder="Descrição da atividade"
                      />
                      <button
                        onClick={() => removerAtividade(index)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  
                  {novoCronograma.atividades.length === 0 && (
                    <p className="text-gray-500 text-sm italic text-center py-4">
                      Nenhuma atividade específica por grupo. Clique em "Adicionar" para criar.
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalCronograma(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={salvarCronograma}
                disabled={!novoCronograma.titulo.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cronogramaEditando ? 'Atualizar' : 'Criar'} Cronograma
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Adicionar Participante */}
      {modalAdicionar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
            <h3 className="text-lg font-bold mb-4">Adicionar Aluno</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
                <input
                  type="text"
                  value={novoAluno.nome}
                  onChange={(e) => setNovoAluno(prev => ({ ...prev, nome: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o nome do aluno"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Turma:</label>
                <select
                  value={novoAluno.turma}
                  onChange={(e) => setNovoAluno(prev => ({ ...prev, turma: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="8º A">8º A</option>
                  <option value="8º B">8º B</option>
                  <option value="8º C">8º C</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setModalAdicionar(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={adicionarParticipante}
                disabled={!novoAluno.nome.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Exportar */}
      {modalExportar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-90vh overflow-auto mx-4">
            <h3 className="text-lg font-bold mb-4">Exportar Dados</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Resumo da Exportação:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <div>• Total de participações: {totalParticipacoes}</div>
                <div>• Alunos únicos: {alunosUnicos}</div>
                <div>• Grupos ativos: {Object.keys(grupos).length}</div>
                <div>• Data: {new Date().toLocaleString('pt-BR')}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Copie o conteúdo abaixo e salve em um arquivo .json para backup completo:
            </p>
            <div className="relative">
              <textarea
                value={dadosExportacao}
                readOnly
                className="w-full h-64 border rounded-lg p-3 font-mono text-sm bg-gray-50"
              />
              <button
                onClick={copiarDados}
                className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
              >
                Copiar Tudo
              </button>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setModalExportar(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Importar */}
      {modalImportar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-90vh overflow-auto mx-4">
            <h3 className="text-lg font-bold mb-4">Importar Dados</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Atenção:</h4>
              <div className="text-sm text-yellow-700">
                A importação irá <strong>substituir todos os dados atuais</strong>. 
                Certifique-se de ter um backup antes de continuar.
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Cole aqui o conteúdo completo do arquivo .json:
            </p>
            <textarea
              value={dadosImportacao}
              onChange={(e) => setDadosImportacao(e.target.value)}
              className="w-full h-64 border rounded-lg p-3 font-mono text-sm"
              placeholder="Cole aqui o conteúdo completo do arquivo JSON exportado..."
            />
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                {dadosImportacao.trim() && (
                  <span>Arquivo carregado: {Math.round(dadosImportacao.length / 1024)} KB</span>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setModalImportar(false);
                    setDadosImportacao('');
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={importarDados}
                  disabled={!dadosImportacao.trim()}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Importar Dados
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;