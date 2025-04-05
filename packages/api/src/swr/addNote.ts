import { notes, Prisma } from "@noto/database";
import { fetcher } from "./fetcher";

export async function addNote(input: Prisma.notesCreateInput, refresh_token: string | undefined) {
	try {
		const response = await fetcher(`/api/v1/notes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${refresh_token}`,
			},
			body: JSON.stringify(input),
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
