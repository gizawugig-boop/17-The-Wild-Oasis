<<<<<<< HEAD
﻿import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart the Vite dev server.",
  );
}

export { supabaseUrl };
=======
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jiktdwltyjkwejhtupxt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppa3Rkd2x0eWprd2VqaHR1cHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0Mjg5NTUsImV4cCI6MjA5OTAwNDk1NX0.jfel2bcFqoBbZjY0DwoAEwlyl0PrQtKPSR0tQUzO_r4";
>>>>>>> 3b240f893c42443adca2e8a7eb29c213ac421cad
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
