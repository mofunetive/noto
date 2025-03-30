import { database, disconnectDatabase } from "./database";
import { createNote } from "./services/note/create";
import { getNotes } from "./services/note/get";
import { updateNote } from "./services/note/update";
import { deleteNote } from "./services/note/delete";

class NoteService {
	private async executeWithDatabase<T>(operation: () => Promise<T>, onError?: (error: any) => void): Promise<T> {
		try {
			return await operation();
		} catch (error) {
			console.error("Database operation error:", error);
			if (onError) onError(error);
			throw error;
		} finally {
			await disconnectDatabase();
		}
	}

	async create(params: { title: string; content: string }) {
		return this.executeWithDatabase(() => createNote(database, params));
	}

	async getAll() {
		return this.executeWithDatabase(() => getNotes(database));
	}

	async update(id: number, params: { title?: string; content?: string }) {
		return this.executeWithDatabase(() => updateNote(database, id, params));
	}

	async delete(id: number) {
		return this.executeWithDatabase(() => deleteNote(database, id));
	}
}

export default new NoteService();
