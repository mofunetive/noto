import type { Options } from "../types/fetcher";
import type { notes } from "@noto/database";
import { fetcher } from "./fetcher";

export async function delNote(id: string, refresh_token: Options["refresh_token"]) {
	try {
		const response = await fetcher({
			refresh_token,
			method: "DELETE",
			url: `/api/v1/notes/${id}`,
		});

		const data = response as notes;

		return {
			notes: data,
		};
	} catch (error) {
		return {
			notes: null,
		};
	}
}
