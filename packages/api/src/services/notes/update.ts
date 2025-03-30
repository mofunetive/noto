import type { PrismaClient } from "@noto/database";

export interface UpdateNoteParams {
	title?: string;
	content?: string;
}

export async function updateNote(database: PrismaClient, id: number, userId: number, params: UpdateNoteParams) {
	if (!params.title && !params.content) {
		throw new Error("At least one of 'title' or 'content' must be provided to update a note.");
	}

	const note = await database.notes.findUnique({ where: { id } });

	if (!note || note.userId !== userId) {
		throw new Error("Note not found or you do not have permission to update this note.");
	}

	const updatedNote = await database.notes.update({
		where: { id },
		data: {
			...params,
			updatedAt: new Date(),
		},
	});

	return updatedNote;
}
