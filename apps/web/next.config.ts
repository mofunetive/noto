import dotenv from "dotenv";
import type { NextConfig } from "next";

dotenv.config({ path: "../../.env" });

const nextConfig: NextConfig = {
	env: {
		DATABASE_URL: process.env.DATABASE_URL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_KEY: process.env.SUPABASE_KEY,
	},
};

export default nextConfig;
