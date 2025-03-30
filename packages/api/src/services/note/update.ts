import { PrismaClient } from "@noto/database";

export async function updateNote(db: PrismaClient, id: number, params: { title?: string; content?: string }) {
	if (!params.title && !params.content) {
		throw new Error("At least one of 'title' or 'content' must be provided to update a note.");
	}

	const updatedNote = await db.note.update({
		where: { id },
		data: params,
	});

	return { success: true, data: updatedNote };
}
