import type { PrismaClient } from "@noto/database";

export async function createNote(database: PrismaClient, params: { title: string; content: string }) {
	if (!params.title.trim() || !params.content.trim()) {
		throw new Error("Both 'title' and 'content' must be non-empty strings.");
	}

	const newNote = await database.note.create({
		data: {
			title: params.title,
			content: params.content,
		},
	});

	return newNote;
}
