import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/schema";

export const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey)
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
