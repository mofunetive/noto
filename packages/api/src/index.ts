import { database, disconnectDatabase } from "./database";
import { createNote, CreateNoteParams } from "./services/notes/create";
import { getNotes } from "./services/notes/get";
import { updateNote, UpdateNoteParams } from "./services/notes/update";
import { deleteNote } from "./services/notes/delete";
import { CreateUserParams, getOrCreateUser } from "./services/users/user";

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

	async createUser(params: CreateUserParams) {
		return this.executeWithDatabase(() => getOrCreateUser(database, params));
	}

	async create(userId: number, params: CreateNoteParams) {
		return this.executeWithDatabase(() => createNote(database, userId, params));
	}

	async getAll(userId: number) {
		return this.executeWithDatabase(() => getNotes(database, userId));
	}

	async update(id: number, userId: number, params: UpdateNoteParams) {
		return this.executeWithDatabase(() => updateNote(database, id, userId, params));
	}

	async delete(id: number, userId: number) {
		return this.executeWithDatabase(() => deleteNote(database, id, userId));
	}
}

export default new NoteService();
