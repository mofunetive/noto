import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({
	ignores: ["dist/**/*.js", "dist/**/*.d.ts", "src/types/**/*.ts"],
	extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintPluginPrettierRecommended],
	languageOptions: {
		globals: {
			...globals.node,
		},
		ecmaVersion: 5,
		sourceType: "module",
		parserOptions: {
			projectService: true,
			tsconfigRootDir: __dirname,
		},
	},
	plugins: {
		"simple-import-sort": simpleImportSort,
	},
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-floating-promises": "warn",
		"@typescript-eslint/no-unsafe-argument": "warn",
		"simple-import-sort/imports": "warn",
		"simple-import-sort/exports": "warn",
	},
});
