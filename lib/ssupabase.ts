import { createClient } from "@supabase/supabase-js";

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_KEY;
// secret_key
// const KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4bmx0d25hb2h4YnJ5ZXBxdWJ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTYxMjkwMCwiZXhwIjoyMDQxMTg4OTAwfQ._jyT7Ko4fi88kwvyVnN8fLCcU_EA4Cdz0EUkpwVIUl0";

// if (!URL) throw new Error("SUPABASE_URL  is not set");
// if (!KEY) throw new Error("SUPABASE_KEY is not set");

const supabase = createClient(URL, KEY);

export default supabase;
