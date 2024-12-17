import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a single supabase client for interacting with your database
export const createSupabaseClient = (token?: string) => {
  if (!supabaseUrl) {
    console.error("Supabase URL is not defined");
    throw new Error("Supabase URL is required");
  }

  // Log key details (first few characters)
  console.log("[Supabase] Client initialization:", {
    url: supabaseUrl,
    keyType: token ? "JWT Token" : "Anon Key",
    keyLength: token?.length || supabaseAnonKey?.length,
    hasToken: !!token,
    hasAnonKey: !!supabaseAnonKey
  });

  // When using JWT token, we still need anon key for client creation
  const client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false
    },
    global: {
      headers: token ? {
        Authorization: `Bearer ${token}`
      } : undefined
    }
  });

  return client;
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
});

export interface Project {
  id: string
  name: string
  description: string | null
  url: string | null
  user_id: string
  created_at: string
  updated_at: string
  documents_count: number
  status: 'active' | 'archived'
}

export interface Message {
  id: string
  project_id: string
  user_id: string
  role: "user" | "assistant"
  content: string
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: Omit<Project, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>
      }
      messages: {
        Row: Message
        Insert: Omit<Message, 'id' | 'created_at'>
        Update: Partial<Omit<Message, 'id' | 'created_at'>>
      }
    }
  }
}
