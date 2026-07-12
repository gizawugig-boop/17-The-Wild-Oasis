import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jiktdwltyjkwejhtupxt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppa3Rkd2x0eWprd2VqaHR1cHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0Mjg5NTUsImV4cCI6MjA5OTAwNDk1NX0.jfel2bcFqoBbZjY0DwoAEwlyl0PrQtKPSR0tQUzO_r4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
