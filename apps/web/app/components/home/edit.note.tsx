"use client";

import { delNote, editNote } from "@noto/api";
import { Prisma } from "@noto/database";
import { Session } from "@supabase/supabase-js";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditNote({
	session,
	note,
	setOpen,
	mutate,
}: {
	session: Session;
	note: Prisma.notesUncheckedCreateInput | [];
	setOpen: () => void;
	mutate: () => Promise<void>;
}) {
	const refresh_token = session.refresh_token;
	// const { updateNote, removeNote } = useNoteStore();
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

	const submitForm = async (event: React.FormEvent) => {
		event.preventDefault();

		if (note != undefined) {
			if (noteId != undefined && !Array.isArray(note) && (note.title != title || note.content != context)) {
				await editNote(noteId.toString(), { content: context, title: title }, refresh_token);
				// updateNote(noteId, title, context);
				toast("โน๊ตแก้ไขเรียบร้อยแล้ว");
				await mutate();
			}
		}

		setOpen();
	};

	const deleteNote = async () => {
		if (noteId != undefined) {
			// removeNote(noteId);
			await delNote(noteId.toString(), refresh_token);
			toast("โน๊ตถูกลบเรียบร้อย");
			await mutate();
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
							<DrawerTitle>Noto แก้ไขโน๊ต</DrawerTitle>
							<DrawerDescription>บลา บลา บลา</DrawerDescription>
						</DrawerHeader>
						<div className="flex flex-col p-4 gap-4">
							<Input id="title" value={title} placeholder="ชื่อเรื่อง" onChange={(e) => setTitle(e.target.value)} required />
							<Textarea className="max-h-60 overflow-auto" id="text" value={context} placeholder="เนื้อหา" onChange={(e) => setContext(e.target.value)} required />
						</div>
						<DrawerFooter>
							<Button type="submit" className="cursor-pointer">
								บันทึก
							</Button>
							<DrawerClose asChild>
								<Button variant="outline" className="cursor-pointer">
									ยกเลิก
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</form>
			</DrawerContent>
		</Drawer>
	);
}
