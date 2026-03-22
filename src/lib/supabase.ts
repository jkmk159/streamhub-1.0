import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://placeholder.supabase.co') {
  console.error('ERRO: Credenciais do Supabase não encontradas!');
  console.error('Por favor, adicione VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no painel de Secrets (Configurações) do AI Studio.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
