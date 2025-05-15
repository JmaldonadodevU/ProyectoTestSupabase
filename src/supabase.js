// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbwhsbsvnryskmmuudla.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid2hzYnN2bnJ5c2ttbXV1ZGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzg2ODcsImV4cCI6MjA2MjkxNDY4N30._RfuuJDphR54w4zY9TcYdjYcc43mSa1b-Raig7--rv0';
export const supabase = createClient(supabaseUrl, supabaseKey);