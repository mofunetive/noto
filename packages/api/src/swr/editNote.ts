import type { Options } from "../types/fetcher";
import type { notes, Prisma } from "@noto/database";
import { fetcher } from "./fetcher";

export async function editNote(id: string, input: Prisma.notesCreateInput, refresh_token: Options["refresh_token"]) {
	try {
		const response = await fetcher({
			refresh_token,
			method: "PATCH",
			url: `/api/v1/notes/${id}`,
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

export async function orderNotes(orders: { id: notes["id"]; order: notes["order"]; updatedAt: notes["updatedAt"] }[], refresh_token: Options["refresh_token"]) {
	try {
		const response = await fetcher({
			refresh_token,
			method: "PATCH",
			url: `/api/v1/notes/order`,
			options: {
				body: JSON.stringify({ orders }),
			},
		});

		const data = response as notes[];

		return {
			notes: data,
		};
	} catch (error) {
		return {
			notes: null,
		};
	}
}
