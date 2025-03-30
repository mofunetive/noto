import type { PrismaClient } from "@noto/database";

export async function getNotes(database: PrismaClient, userId: number) {
	const notes = await database.notes.findMany({
		where: { userId },
	});

	return notes;
}
