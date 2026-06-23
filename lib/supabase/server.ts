import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cachedServerClient: SupabaseClient | null = null;

export function getSupabaseServerClient() {
  if (cachedServerClient) {
    return cachedServerClient;
  }

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase server environment variables are missing.");
  }

  cachedServerClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return cachedServerClient;
}
