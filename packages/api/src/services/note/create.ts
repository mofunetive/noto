import { PrismaClient } from "@noto/database";

export async function createNote(db: PrismaClient, params: { title: string; content: string }) {
	if (!params.title.trim() || !params.content.trim()) {
		throw new Error("Both 'title' and 'content' must be non-empty strings.");
	}

	const newNote = await db.note.create({
		data: {
			title: params.title,
			content: params.content,
		},
	});

	return { success: true, data: newNote };
}
