import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { useNote } from "@noto/api";
import { Session } from "@supabase/supabase-js";
import { Prisma } from "@noto/database";
import EditNote from "@/components/home/edit.note";
import AddNote from "./add-note";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { NotebookText } from "lucide-react";
import { Button } from "../ui/button";
import { addNote } from "@noto/api";

export function NotesList({ session }: { session: Session }) {
	const refresh_token = session.refresh_token;
	const [open, setOpen] = useState(false);
	const [editDrawerOpen, setEditDrawerOpen] = useState<Prisma.notesUncheckedCreateInput | undefined>(undefined);
	const { notes, isError, isLoading, mutate } = useNote(refresh_token);

	if (isError) {
		return <p className="text-red-500">Failed to load notes.</p>;
	}

	return (
		<>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{!isLoading ? (
					notes.map(({ id, title, content, updatedAt, createdAt }) => {
						const date = new Date(updatedAt ?? createdAt).toLocaleString();

						return (
							<Card
								key={id}
								className="relative break-words overflow-ellipsis cursor-pointer"
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
										<Label className="text-sm">{date}</Label>
									</CardDescription>
								</CardFooter>
							</Card>
						);
					})
				) : (
					<p>Loading notes...</p>
				)}
			</div>

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
							<p>Add Note</p>
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
