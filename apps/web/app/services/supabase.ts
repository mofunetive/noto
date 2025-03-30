import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || "https://ltcjnkyfkclceohjkizl.supabase.co"
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Y2pua3lma2NsY2VvaGpraXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDgzODksImV4cCI6MjA1ODkyNDM4OX0.HMCLls0LRM7GFR8fzhUegWGewN_IO1inNNpEq_nf-Zc"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 
