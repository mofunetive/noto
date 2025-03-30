import type { PrismaClient } from "@noto/database";

export async function deleteNote(database: PrismaClient, id: number, userId: number) {
	const note = await database.notes.findUnique({ where: { id } });

	if (!note || note.userId !== userId) {
		throw new Error("Note not found or you do not have permission to delete this note.");
	}

	await database.notes.delete({
		where: { id },
	});

	return { success: true };
}
