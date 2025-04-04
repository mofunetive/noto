import type { NextConfig } from "next";
import dotenv from "dotenv";

const nextConfig: NextConfig = {
	/* config options here */
};

if (process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development") {
	dotenv.config({ path: "../../.env" });

	nextConfig["env"] = {
		DATABASE_URL: process.env.DATABASE_URL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_KEY: process.env.SUPABASE_KEY,
	};
}

export default nextConfig;
