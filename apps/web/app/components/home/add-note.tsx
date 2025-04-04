import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Prisma } from "@noto/database";

export default function AddNote({
	onAdd,
	open,
	setOpen,
}: {
	onAdd: (newNote: Prisma.notesCreateInput | Prisma.notesUncheckedCreateInput) => void;
	open: boolean;
	setOpen: (bool: boolean) => void;
}) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-h-screen sm:max-w-2xl">
				<DialogHeader>
					<DialogTitle>Noto Add</DialogTitle>
					<DialogDescription>Fill in the details below to add a new note.</DialogDescription>
				</DialogHeader>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onAdd({ title, content, userId: 1 });
						setTitle("");
						setContent("");
						setOpen(false);
						toast("Note has be created");
					}}
				>
					<div className="flex flex-col gap-4">
						<Input id="title" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
						<Textarea
							className="max-w-lg sm:max-w-[39rem] h-48"
							rows={15}
							id="content"
							value={content}
							placeholder="Content"
							onChange={(e) => setContent(e.target.value)}
							required
						/>
						<DialogFooter>
							<DialogTrigger asChild>
								<Button type="submit">Add Note</Button>
							</DialogTrigger>
						</DialogFooter>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
