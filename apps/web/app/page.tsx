"use client";

import supabase from "@/services/supabase";
import AddNote from "@/components/home/add-note";
import { notes, Prisma } from "@noto/database";
import { useEffect, useState } from "react";
import { NotebookText } from "lucide-react";
import { useAuthStore } from "@/store/user";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNoteStore } from "./store/note";
import EditNote from "@/components/home/edit.note";
import { useNote } from "@noto/api";

export default function Home() {
	const [open, setOpen] = useState(false);
	const [editDrawerOpen, setEditDrawerOpen] = useState<Prisma.notesUncheckedCreateInput | undefined>(undefined);
	const { user, session, signIn, setUser } = useAuthStore();
	const { allNotes, addNote, getNotes } = useNoteStore();

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			const user = session?.user;
			console.log("onAuthStateChange", user, event);
			if (user === undefined) return;
			setUser(user, session);
			getNotes();
		});
	}, [getNotes, setUser, session?.refresh_token]);

	const isLogin = user !== null;
	const { isError, isLoading, notes } = useNote(session?.refresh_token);

	if (isLoading) return;
	if (isError) return;

	console.log(notes);
	return (
		<section className="h-full flex flex-col gap-4">
			{/* <Input placeholder="Search" /> */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{allNotes.length > 0 && isLogin
					? allNotes.map((note: notes) => {
							const unix = note.updatedAt ?? note.createdAt;
							const date = new Date(unix).toLocaleString();

							return (
								<Card
									key={note.id}
									className="relative break-words overflow-ellipsis cursor-pointer"
									onClick={() =>
										setEditDrawerOpen({
											title: note.title,
											content: note.content,
											userId: 1,
										})
									}
								>
									<CardHeader>
										<CardTitle className="overflow-hidden line-clamp-1">{note.title}</CardTitle>
									</CardHeader>
									<CardContent className="h-18 line-clamp-3">
										<p>{note.content}</p>
									</CardContent>
									<CardFooter className="ml-auto">
										<CardDescription>
											<Label className="text-sm">{date}</Label>
										</CardDescription>
									</CardFooter>
								</Card>
							);
						})
					: null}
			</div>
			{(!allNotes.length || !isLogin) && (
				<div className="h-full flex flex-col gap-4 justify-center items-center">
					<Label className="text-xl">สวัสดีชาวโลก, นี้คือ Noto เว็บสำหรับโน๊ต</Label>
					<Button
						className="cursor-pointer"
						onClick={() => {
							if (isLogin) {
								console.log("Login");
								setOpen(true);
							} else {
								signIn();
							}
						}}
						// disabled={isLoading}
					>
						{isLogin ? "ลองเพิ่ม Note แรกของคุณสิ!" : "เข้าสู่ระบบเพื่อเริ่ม Note!"}
					</Button>
				</div>
			)}
			{isLogin && allNotes.length > 0 && (
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
			)}
			<AddNote
				onAdd={(newNote) => {
					if (!user?.id) return;

					const note: Prisma.notesCreateInput = {
						title: newNote.title,
						content: newNote.content,
					};

					addNote(note);
				}}
				open={open}
				setOpen={setOpen}
			/>
			{editDrawerOpen ? <EditNote note={editDrawerOpen} setOpen={() => setEditDrawerOpen(undefined)} /> : undefined}
		</section>
	);
}
