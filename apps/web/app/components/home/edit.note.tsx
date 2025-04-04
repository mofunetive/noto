"use client";

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Prisma } from "@noto/database";
import { useNoteStore } from "@/store/note";

export default function EditNote({ note, setOpen }: { note: Prisma.notesUncheckedCreateInput | []; setOpen: () => void }) {
	const { updateNote, removeNote } = useNoteStore();

	const [noteId, setNoteId] = useState<number | undefined>(undefined);
	const [title, setTitle] = useState("");
	const [context, setContext] = useState("");

	useEffect(() => {
		if (note != undefined && !Array.isArray(note)) {
			setNoteId(note.id);
			setTitle(note.title);
			setContext(note.content);
		}
	}, [note, setNoteId, setTitle, setContext]);

	const submitForm = (event: React.FormEvent) => {
		event.preventDefault();

		if (note != undefined) {
			if (noteId != undefined && !Array.isArray(note) && (note.title != title || note.content != context)) {
				updateNote(noteId, title, context);
				toast("Note has be edited");
			}
		}

		setOpen();
	};

	const deleteNote = () => {
		if (noteId != undefined) {
			removeNote(noteId);
			toast("Note has be remove");
		}
	};

	return (
		<Drawer open={note != undefined} onOpenChange={setOpen}>
			<DrawerContent>
				<form onSubmit={submitForm}>
					<div className="relative mx-auto w-full max-w-4xl">
						<Button className="absolute top-8 right-0 sm:right-0 cursor-pointer" variant="outline" size="icon" onClick={deleteNote}>
							<Trash2 color="red" />
						</Button>

						<DrawerHeader>
							<DrawerTitle>Noto Edit</DrawerTitle>
							<DrawerDescription>note everywhere, everytime</DrawerDescription>
						</DrawerHeader>
						<div className="p-4 pb-0">
							<p className="leading-7 [&:not(:first-child)]:mt-6">Title</p>
							<Input id="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
							<p className="leading-7 [&:not(:first-child)]:mt-6">Context</p>
							<Textarea className="max-h-60 overflow-auto" id="text" value={context} placeholder="Content" onChange={(e) => setContext(e.target.value)} required />
						</div>
						<DrawerFooter>
							<Button type="submit" className="cursor-pointer">
								Save
							</Button>
							<DrawerClose asChild>
								<Button variant="outline" className="cursor-pointer">
									Cancel
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</form>
			</DrawerContent>
		</Drawer>
	);
}
