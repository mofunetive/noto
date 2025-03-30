import type { PrismaClient } from "@noto/database";

export async function getNotes(database: PrismaClient) {
	const notes = await database.note.findMany({
		orderBy: { createdAt: "desc" },
	});

	return notes;
}
