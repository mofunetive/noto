import { PrismaClient } from "@noto/database";

export async function getNotes(db: PrismaClient) {
	const notes = await db.note.findMany({
		orderBy: { createdAt: "desc" },
	});

	return { success: true, data: notes };
}
