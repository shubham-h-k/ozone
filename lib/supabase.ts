import { createClient } from "@supabase/supabase-js";

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_KEY;

if (!URL) throw new Error("SUPABASE_URL  is not set");
if (!KEY) throw new Error("SUPABASE_KEY is not set");

const supabase = createClient(URL, KEY);

export default supabase;
