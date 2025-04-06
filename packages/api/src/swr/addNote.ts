import type { Options } from "../types/fetcher";
import { notes, Prisma } from "@noto/database";
import { fetcher } from "./fetcher";

export async function addNote(input: Prisma.notesCreateInput, refresh_token: Options["refresh_token"]) {
	try {
		const response = await fetcher({
			refresh_token,
			method: "POST",
			url: "/api/v1/notes",
			options: {
				body: JSON.stringify(input),
			},
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
