import type { PrismaClient } from "@noto/database";

export interface CreateNoteParams {
	title: string;
	content: string;
}

export async function createNote(database: PrismaClient, userId: number, params: CreateNoteParams) {
	if (!params.title.trim() || !params.content.trim()) {
		throw new Error("Both 'title' and 'content' must be non-empty strings.");
	}

	const newNote = await database.notes.create({
		data: {
			title: params.title,
			content: params.content,
			userId,
			createdAt: new Date(),
		},
	});

	return newNote;
}
