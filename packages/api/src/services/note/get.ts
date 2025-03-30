import type { PrismaClient } from "@noto/database";

export async function getNotes(database: PrismaClient) {
	const notes = await database.note.findMany({
		orderBy: {
			updatedAt: "desc",
			createdAt: "desc",
		},
	});

	return notes;
}
