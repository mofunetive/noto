import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		DATABASE_URL: process.env.DATABASE_URL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_KEY: process.env.SUPABASE_KEY,
	},
};

export default nextConfig;
