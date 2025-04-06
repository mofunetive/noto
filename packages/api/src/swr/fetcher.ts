import type { Options } from "../types/fetcher";
const isDev = process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development";
const baseURL = isDev ? "http://localhost:1111" : "";

export let fetcher = ({ refresh_token, method, url, options }: Options) => {
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

	return fetch(fullUrl, updatedOptions).then((res) => res.json());
};
