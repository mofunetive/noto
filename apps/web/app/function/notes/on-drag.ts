import { orderNotes } from "@noto/api";
import type { Prisma } from "@noto/database";
import React from "react";

export const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
	event.dataTransfer.setData("text/plain", index.toString());
	//  event.dataTransfer.setDragImage(new Image(), 0, 0);
};

export const handleDrop = async (
	event: React.DragEvent<HTMLDivElement>,
	targetIndex: number,
	notes: Prisma.notesUncheckedCreateInput[],
	refresh_token: string,
	mutate: (data?: Prisma.notesUncheckedCreateInput[] | undefined) => void,
) => {
	event.preventDefault();

	const sourceIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
	if (isNaN(sourceIndex) || sourceIndex === targetIndex) return;

	const reorderedNotes = [...notes];
	const [movedNote] = reorderedNotes.splice(sourceIndex, 1);
	reorderedNotes.splice(targetIndex, 0, movedNote);

	const hasOrderChanged = reorderedNotes.some((note, idx) => note.order !== idx + 1);
	if (!hasOrderChanged) return;

	const updatedNotes = reorderedNotes.map((note, idx) => ({
		...note,
		order: idx + 1,
	}));

	try {
		const orders = updatedNotes.map(({ id, order, updatedAt }) => ({
			id: Number(id),
			order: order ?? null,
			updatedAt: new Date(updatedAt ?? ""),
		}));

		await orderNotes(orders, refresh_token);
		mutate(updatedNotes);
	} catch (error) {
		console.error("Failed to reorder notes:", error);
	}
};
