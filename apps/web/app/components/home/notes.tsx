import { useNote } from "@noto/api";
import { addNote } from "@noto/api";
import type { notes, Prisma } from "@noto/database";
import { Label } from "@radix-ui/react-label";
import { Session } from "@supabase/supabase-js";
import { NotebookText } from "lucide-react";
import React, { useState } from "react";

import EditNote from "@/components/home/edit.note";
import { handleDragStart, handleDrop } from "@/function/notes/on-drag";
import supabase from "@/services/supabase";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Spinner } from "../ui/spinner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import AddNote from "./add.note";

export function NotesList({ session }: { session: Session }) {
	const refresh_token = session.refresh_token;
	const [open, setOpen] = useState(false);
	const [editDrawerOpen, setEditDrawerOpen] = useState<Prisma.notesUncheckedCreateInput | undefined>(undefined);
	const { notes, isError, isLoading, mutate } = useNote(refresh_token);
	const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const reorder = (list: notes[], fromIndex: number, toIndex: number) => {
		const updated = [...list];
		const [movedItem] = updated.splice(fromIndex, 1);
		updated.splice(toIndex, 0, movedItem);
		return updated;
	};

	if (isError || (notes === undefined && !isLoading)) {
		if (isError?.toString().includes("500")) {
			(async () => {
				await supabase.auth.refreshSession();
				window.location.reload();
			})();
		} else {
			return (
				<div className="flex gap-2 h-full justify-center items-center">
					<p>{isError?.toString()}</p>
				</div>
			);
		}
	}

	return (
		<>
			{(notes === undefined || notes.length <= 0) && !isLoading && (
				<div className="flex gap-2 h-full justify-center items-center">
					<p>เพิ่มโน๊ตแรกของคุณโดย กดปุ่ม</p>
					<Button variant="outline" size="icon" onClick={() => setOpen(true)}>
						<NotebookText />
					</Button>
					<p>ที่ขวาล่างได้เลย</p>
				</div>
			)}
			{!isLoading ? (
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
					{Array.isArray(notes) &&
						notes
							.sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
							.map(({ id, title, content, updatedAt, createdAt }, index) => {
								const date = new Date(updatedAt ?? createdAt ?? Date.now()).toLocaleString();

								return (
									<Card
										key={id}
										className={`relative break-words overflow-ellipsis cursor-pointer transition-all duration-200 ease-in-out transform ${
											hoveredIndex === index ? "scale-90 opacity-50" : ""
										}`}
										draggable
										onDragStart={(event) => {
											handleDragStart(event, index);
											setDraggedIndex(index);
											event.dataTransfer.effectAllowed = "move";
										}}
										onDragOver={(event) => {
											event.preventDefault();
											if (index !== hoveredIndex) {
												setHoveredIndex(index);
												if (draggedIndex !== null && draggedIndex !== index) {
													const newNotes = reorder(notes, draggedIndex, index);
													mutate(newNotes, false);
													setDraggedIndex(index);
												}
											}
										}}
										onDrop={(event) => {
											handleDrop(event, index, notes, refresh_token, mutate);
											setDraggedIndex(null);
											setHoveredIndex(null);
										}}
										onDragEnd={() => {
											setDraggedIndex(null);
											setHoveredIndex(null);
										}}
										onClick={() =>
											setEditDrawerOpen({
												id,
												title,
												content,
											})
										}
									>
										<CardHeader>
											<CardTitle className="overflow-hidden line-clamp-1">{title}</CardTitle>
										</CardHeader>
										<CardContent className="h-18 line-clamp-3">
											<p>{content}</p>
										</CardContent>
										<CardFooter className="ml-auto">
											<CardDescription>
												<Label className="text-sm cursor-pointer">{date}</Label>
											</CardDescription>
										</CardFooter>
									</Card>
								);
							})}
				</div>
			) : (
				<div className="flex gap-2 h-full justify-center items-center">
					<Spinner size="lg" className="bg-black dark:bg-white" />
				</div>
			)}

			{editDrawerOpen && <EditNote session={session} note={editDrawerOpen} setOpen={() => setEditDrawerOpen(undefined)} mutate={mutate} />}

			<div className="sticky mt-auto ml-auto mr-2 bottom-8">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button className="cursor-pointer w-14 h-14 p-3" variant="outline" size="icon" onClick={() => setOpen(true)}>
								<NotebookText className="w-8 h-8" />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>เพิ่มโน๊ต</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<AddNote
				onAdd={async (newNote) => {
					try {
						await addNote(
							{
								title: newNote.title,
								content: newNote.content,
							},
							refresh_token,
						);
						await mutate();
						setOpen(false);
					} catch (error) {
						console.error("Failed to add note:", error);
					}
				}}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
}

export default NotesList;
