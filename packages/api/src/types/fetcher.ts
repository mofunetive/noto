import type { HttpMethod } from "./http-method";

export interface Options {
	refresh_token: string | undefined;
	method: HttpMethod;
	url: RequestInfo;
	options?: RequestInit;
}
