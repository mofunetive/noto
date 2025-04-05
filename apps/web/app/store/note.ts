import { openDB } from "idb";
import { create } from "zustand";
import type { notes, Prisma } from "@noto/database";

interface State {
	allNotes: notes[];
	getNotes: () => void;
	addNote: (note: notes | Prisma.notesUpdateInput) => void;
	updateNote: (noteId: number, title: string, content: string) => void;
	removeNote: (noteId: number) => void;
}

const openIndexDB = async () => {
	return await openDB("noto", 3, {
		upgrade(db) {
			if (!db.objectStoreNames.contains("notes")) {
				const objectStore = db.createObjectStore("notes", { keyPath: "id", autoIncrement: true });
				objectStore.createIndex("id", "id");
				objectStore.createIndex("title", "title");
				objectStore.createIndex("content", "content");
				objectStore.createIndex("createdAt", "createdAt");
				objectStore.createIndex("updatedAt", "updatedAt");
				objectStore.createIndex("userId", "userId");

				console.log("Store Created");
			}
		},
	});
};

export const useNoteStore = create<State>((set) => ({
	allNotes: [],
	getNotes: async () => {
		const db = await openIndexDB();
		const tx = db.transaction("notes", "readonly");
		const store = tx.objectStore("notes");

		const allNotes = await store.getAll();

		return set({ allNotes });
	},
	addNote: async (note) => {
		const cloneNotes = structuredClone(useNoteStore.getState().allNotes);
		cloneNotes.unshift(note as notes);

		const db = await openDB("noto", 3);
		const tx = db.transaction("notes", "readwrite");
		const store = tx.objectStore("notes");
		await store.add(note);

		return set({ allNotes: cloneNotes });
	},
	updateNote: async (noteId, title, content) => {
		const cloneNotes = structuredClone(useNoteStore.getState().allNotes);
		const note = cloneNotes.filter((note) => note.id == noteId);

		if (note.length > 0) {
			note[0].title = title;
			note[0].content = content;
			note[0].updatedAt = new Date();

			const db = await openDB("noto", 3);
			const tx = db.transaction("notes", "readwrite");
			const store = tx.objectStore("notes");

			await store.put({ ...note[0] });
		} else {
			console.error("Note not found!");
		}

		return set({ allNotes: cloneNotes });
	},
	removeNote: async (noteId) => {
		const cloneNotes = structuredClone(useNoteStore.getState().allNotes);
		const noteIndex = cloneNotes.findIndex((note) => note.id == noteId);

		if (noteIndex === -1) return;

		cloneNotes.splice(noteIndex, 1);

		const db = await openDB("noto", 3);
		const tx = db.transaction("notes", "readwrite");
		const store = tx.objectStore("notes");

		await store.delete(noteId);

		return set({ allNotes: cloneNotes });
	},
}));
