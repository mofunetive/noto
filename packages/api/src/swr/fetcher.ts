import type { Options } from "../types/fetcher";
const isDev = process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development";
const baseURL = isDev ? "http://localhost:1111" : "";

export let fetcher = async ({ refresh_token, method, url, options }: Options) => {
	const fullUrl = baseURL && typeof url === "string" ? `${baseURL}${url}` : url;

	const updatedOptions = {
		...options,
		method,
		headers: {
			...options?.headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${refresh_token}`,
		},
   };
 
   try {
      const response = await fetch(fullUrl, updatedOptions);
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
   } catch (error) {
      throw new Error(`Fetch failed: ${error.message}`);
   }
};
