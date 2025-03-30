import { PrismaClient } from "@noto/database";

export async function deleteNote(db: PrismaClient, id: number) {
	const note = await db.note.findUnique({ where: { id } });

	if (!note) {
		throw new Error(`Note with id ${id} does not exist.`);
	}
	await db.note.delete({
		where: { id },
	});

	return { success: true };
}
