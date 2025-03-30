import type { PrismaClient } from "@noto/database";

export interface UpdateNoteParams {
	title?: string;
	content?: string;
}

export async function updateNote(database: PrismaClient, id: number, params: UpdateNoteParams) {
	if (!params.title && !params.content) {
		throw new Error("At least one of 'title' or 'content' must be provided to update a note.");
	}
	const updatedNote = await database.note.update({
		where: { id },
		data: {
			...params,
			updatedAt: new Date(),
		},
	});

	return updatedNote;
}
