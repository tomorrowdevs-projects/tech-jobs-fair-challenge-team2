import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ftgwvpuqwdqgicyqqncn.supabase.co/rest/v1";
export const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0Z3d2cHVxd2RxZ2ljeXFxbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNjU1NDksImV4cCI6MjAyNzc0MTU0OX0.8Q5GEGZwdc6t6vUWLPPYEOuEjI5Pma5b9TmpIXRTeU8";

export const supabase = createClient(supabaseUrl, API_KEY);