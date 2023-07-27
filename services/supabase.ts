import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/schema";

export const supabaseUrl = "https://lzrslhygdxwyshinircf.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) throw new Error("Missing SUPABASE_KEY");

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
