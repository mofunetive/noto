import { methods } from "./methods";

export const handleRequest = async (method: string, request: Request, context?: { params: { api?: string[] } }) => {
	try {
		const { api } = context?.params || {};
		const pathSegments = api || [],
			nestApiPath = pathSegments.join("/"),
			baseUrl = process.env.NEST_API_URL || "http://localhost:1111",
			url = new URL(`${baseUrl}/${nestApiPath}`),
			originalUrl = new URL(request.url);

		url.search = originalUrl.search;

		const body = method !== "GET" && method !== "DELETE" ? JSON.stringify(await request.json()) : undefined,
			headers = new Headers();
		request.headers.forEach((value, key) => {
			if (!["host", "connection", "content-length"].includes(key.toLowerCase())) {
				headers.set(key, value);
			}
		});

		if (body) headers.set("Content-Type", "application/json");

		const response = await fetch(url.toString(), {
				method,
				headers,
				body,
			}),
			contentType = response.headers.get("Content-Type") || "",
			responseData = contentType.includes("application/json") ? await response.json() : await response.text();

		return new Response(contentType.includes("application/json") ? JSON.stringify(responseData) : responseData, {
			status: response.status,
			headers: { "Content-Type": contentType },
		});
	} catch (error) {
		console.error("Proxy error:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
};

export const createHandler = (method: string) => {
	return async (req: Request, ctx?: { params: { api?: string[] } }) => handleRequest(method, req, ctx);
};

export const handlers = Object.fromEntries(methods.map((method) => [method, createHandler(method)]));
