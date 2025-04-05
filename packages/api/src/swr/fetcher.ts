const isDev = process.env.npm_lifecycle_event === "dev" || process.env.NODE_ENV === "development";
const baseURL = isDev ? "http://localhost:1111" : "";

export let fetcher = (...args: [RequestInfo, RequestInit?]) => {
	const [url, options] = args;
	const fullUrl = baseURL && typeof url === "string" ? `${baseURL}${url}` : url;
	return fetch(fullUrl, options).then((res) => res.json());
};
