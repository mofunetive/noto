import type { PrismaClient } from "@noto/database";

export async function deleteNote(database: PrismaClient, id: number) {
	const note = await database.note.findUnique({ where: { id } });

	if (!note) {
		throw new Error(`Note with id ${id} does not exist.`);
	}

	await database.note.delete({
		where: { id },
	});

	return { success: true };
}
