import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wwaiihcqhjpqlprvfpok.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YWlpaGNxaGpwcWxwcnZmcG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxMzgyNTAsImV4cCI6MjAzNTcxNDI1MH0.Wtdi-DZJdz4yyqG9RLtt-KuRRUrFWYuEjlhWwtw2XeQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
