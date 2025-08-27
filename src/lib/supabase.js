import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const participantesDB = {
  async getAll() {
    const { data, error } = await supabase
      .from('participantes')
      .select('*')
      .order('nome')
    
    if (error) throw new Error(`Erro ao carregar: ${error.message}`)
    return data || []
  },

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
    
    if (error) throw new Error(`Erro ao adicionar: ${error.message}`)
    return data
  },

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
    
    if (error) throw new Error(`Erro ao atualizar: ${error.message}`)
    return data
  },

  async remove(id) {
    const { error } = await supabase
      .from('participantes')
      .delete()
      .eq('id', id)
    
    if (error) throw new Error(`Erro ao remover: ${error.message}`)
  },

  async importBatch(participantesList) {
    // Limpar dados existentes
    await supabase.from('participantes').delete().neq('id', 0)
    
    // Inserir novos dados
    const { data, error } = await supabase
      .from('participantes')
      .insert(participantesList)
      .select()
    
    if (error) throw new Error(`Erro ao importar: ${error.message}`)
    return data
  }
}