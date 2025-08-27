import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Funções para gerenciar participantes
export const participantesDB = {
  // Buscar todos os participantes
  async getAll() {
    const { data, error } = await supabase
      .from('participantes')
      .select('*')
      .order('nome')
    
    if (error) {
      console.error('Erro ao buscar participantes:', error)
      throw new Error(`Erro ao carregar participantes: ${error.message}`)
    }
    return data || []
  },

  // Adicionar participante
  async add(participante) {
    const { data, error } = await supabase
      .from('participantes')
      .insert([{
        nome: participante.nome.trim(),
        turma: participante.turma,
        grupo_id: participante.grupo_id,
        subgrupo_id: participante.subgrupo_id
      }])
      .select()
      .single()
    
    if (error) {
      console.error('Erro ao adicionar participante:', error)
      throw new Error(`Erro ao adicionar participante: ${error.message}`)
    }
    return data
  },

  // Atualizar participante
  async update(id, participante) {
    const { data, error } = await supabase
      .from('participantes')
      .update({
        nome: participante.nome.trim(),
        turma: participante.turma
      })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Erro ao atualizar participante:', error)
      throw new Error(`Erro ao atualizar participante: ${error.message}`)
    }
    return data
  },

  // Remover participante
  async remove(id) {
    const { error } = await supabase
      .from('participantes')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Erro ao remover participante:', error)
      throw new Error(`Erro ao remover participante: ${error.message}`)
    }
  },

  // Limpar todos os participantes
  async clearAll() {
    const { error } = await supabase
      .from('participantes')
      .delete()
      .neq('id', 0) // Remove todos os registros
    
    if (error) {
      console.error('Erro ao limpar participantes:', error)
      throw new Error(`Erro ao limpar dados: ${error.message}`)
    }
  },

  // Importar dados em lote
  async importBatch(participantesList) {
    if (!participantesList || participantesList.length === 0) {
      throw new Error('Lista de participantes está vazia')
    }

    // Validar dados antes da importação
    const dadosValidos = participantesList.filter(p => 
      p.nome && p.nome.trim() && 
      p.turma && 
      p.grupo_id && 
      p.subgrupo_id
    ).map(p => ({
      nome: p.nome.trim(),
      turma: p.turma,
      grupo_id: p.grupo_id,
      subgrupo_id: p.subgrupo_id
    }))

    if (dadosValidos.length === 0) {
      throw new Error('Nenhum dado válido encontrado para importação')
    }

    // Primeiro, limpar dados existentes
    await this.clearAll()
    
    // Importar em lotes menores para evitar timeouts
    const batchSize = 100
    const results = []
    
    for (let i = 0; i < dadosValidos.length; i += batchSize) {
      const batch = dadosValidos.slice(i, i + batchSize)
      
      const { data, error } = await supabase
        .from('participantes')
        .insert(batch)
        .select()
      
      if (error) {
        console.error(`Erro no lote ${i}-${i + batch.length}:`, error)
        throw new Error(`Erro ao importar lote: ${error.message}`)
      }
      
      results.push(...(data || []))
    }
    
    return results
  },

  // Obter estatísticas
  async getStats() {
    const { data, error } = await supabase
      .from('participantes')
      .select('turma, grupo_id, subgrupo_id')
    
    if (error) {
      console.error('Erro ao buscar estatísticas:', error)
      throw new Error(`Erro ao carregar estatísticas: ${error.message}`)
    }

    const stats = {
      total: data.length,
      porTurma: {},
      porGrupo: {},
      alunosUnicos: new Set(data.map(p => p.nome)).size
    }

    data.forEach(p => {
      // Contar por turma
      stats.porTurma[p.turma] = (stats.porTurma[p.turma] || 0) + 1
      
      // Contar por grupo
      stats.porGrupo[p.grupo_id] = (stats.porGrupo[p.grupo_id] || 0) + 1
    })

    return stats
  }
}

// Funções para gerenciar cronogramas
export const cronogramasDB = {
  // Buscar cronogramas por data
  async getByData(data) {
    const { data: cronogramas, error } = await supabase
      .from('cronogramas')
      .select(`
        *,
        cronograma_atividades (
          id,
          grupo_id,
          atividade,
          concluida
        )
      `)
      .eq('data', data)
      .order('created_at')
    
    if (error) {
      console.error('Erro ao buscar cronogramas:', error)
      throw new Error(`Erro ao carregar cronogramas: ${error.message}`)
    }
    return cronogramas || []
  },

  // Buscar cronogramas de um mês
  async getByMes(ano, mes) {
    const inicioMes = `${ano}-${String(mes).padStart(2, '0')}-01`
    const fimMes = new Date(ano, mes, 0).toISOString().split('T')[0]
    
    const { data: cronogramas, error } = await supabase
      .from('cronogramas')
      .select('data, titulo')
      .gte('data', inicioMes)
      .lte('data', fimMes)
    
    if (error) {
      console.error('Erro ao buscar cronogramas do mês:', error)
      throw new Error(`Erro ao carregar cronogramas do mês: ${error.message}`)
    }
    return cronogramas || []
  },

  // Criar cronograma
  async criar(cronograma, atividades) {
    const { data: novoCronograma, error: errorCronograma } = await supabase
      .from('cronogramas')
      .insert([{
        data: cronograma.data,
        titulo: cronograma.titulo,
        descricao: cronograma.descricao,
        grupo_alvo: cronograma.grupo_alvo,
        pontuacao: cronograma.pontuacao
      }])
      .select()
      .single()
    
    if (errorCronograma) {
      console.error('Erro ao criar cronograma:', errorCronograma)
      throw new Error(`Erro ao criar cronograma: ${errorCronograma.message}`)
    }

    if (atividades && atividades.length > 0) {
      const atividadesFormatadas = atividades.map(ativ => ({
        cronograma_id: novoCronograma.id,
        grupo_id: ativ.grupo_id,
        atividade: ativ.atividade
      }))

      const { error: errorAtividades } = await supabase
        .from('cronograma_atividades')
        .insert(atividadesFormatadas)
      
      if (errorAtividades) {
        console.error('Erro ao criar atividades:', errorAtividades)
        throw new Error(`Erro ao criar atividades: ${errorAtividades.message}`)
      }
    }

    return novoCronograma
  },

  // Atualizar cronograma
  async atualizar(id, cronograma, atividades) {
    const { data: cronogramaAtualizado, error: errorUpdate } = await supabase
      .from('cronogramas')
      .update({
        titulo: cronograma.titulo,
        descricao: cronograma.descricao,
        grupo_alvo: cronograma.grupo_alvo,
        pontuacao: cronograma.pontuacao
      })
      .eq('id', id)
      .select()
      .single()
    
    if (errorUpdate) {
      console.error('Erro ao atualizar cronograma:', errorUpdate)
      throw new Error(`Erro ao atualizar cronograma: ${errorUpdate.message}`)
    }

    // Deletar atividades antigas
    await supabase
      .from('cronograma_atividades')
      .delete()
      .eq('cronograma_id', id)

    // Inserir novas atividades
    if (atividades && atividades.length > 0) {
      const atividadesFormatadas = atividades.map(ativ => ({
        cronograma_id: id,
        grupo_id: ativ.grupo_id,
        atividade: ativ.atividade
      }))

      const { error: errorAtividades } = await supabase
        .from('cronograma_atividades')
        .insert(atividadesFormatadas)
      
      if (errorAtividades) {
        console.error('Erro ao atualizar atividades:', errorAtividades)
        throw new Error(`Erro ao atualizar atividades: ${errorAtividades.message}`)
      }
    }

    return cronogramaAtualizado
  },

  // Deletar cronograma
  async deletar(id) {
    const { error } = await supabase
      .from('cronogramas')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Erro ao deletar cronograma:', error)
      throw new Error(`Erro ao deletar cronograma: ${error.message}`)
    }
  },

  // Marcar/desmarcar atividade como concluída
  async toggleAtividade(atividadeId, concluida) {
    const { error } = await supabase
      .from('cronograma_atividades')
      .update({ concluida })
      .eq('id', atividadeId)
    
    if (error) {
      console.error('Erro ao atualizar atividade:', error)
      throw new Error(`Erro ao atualizar atividade: ${error.message}`)
    }
  }
}