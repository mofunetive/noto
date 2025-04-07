import { Prisma } from "@noto/database";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

	useEffect(() => {
		if (open === false && (title.trim() || content.trim())) {
			onAdd({ title, content, userId: 1 });
			toast("โน๊ตถูกบันทึกอัตโนมัติ");
			setTitle("");
			setContent("");
			setOpen(false);
		}
	}, [title, content, open, onAdd, setOpen]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-h-screen sm:max-w-2xl">
				<DialogHeader>
					<DialogTitle>เพิ่มโน๊ต</DialogTitle>
					<DialogDescription>จดโน๊ตของคุณ เพื่อทดทวนความจำ</DialogDescription>
				</DialogHeader>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onAdd({ title, content, userId: 1 });
						setTitle("");
						setContent("");
						setOpen(false);
						toast("โน๊ตถูกสร้างขึ้นแล้ว");
					}}
				>
					<div className="flex flex-col gap-4">
						<Input id="title" value={title} placeholder="ชื่อเรื่อง" onChange={(e) => setTitle(e.target.value)} required />
						<Textarea
							className="max-w-lg sm:max-w-[39rem] h-48 resize-none"
							rows={15}
							id="content"
							value={content}
							placeholder="เนื้อหา"
							onChange={(e) => setContent(e.target.value)}
							required
						/>
						<DialogFooter>
							<DialogTrigger asChild>
								<Button className="cursor-pointer" type="submit" disabled={!title.trim() || !content.trim()}>
									เพิ่มโน๊ต
								</Button>
							</DialogTrigger>
						</DialogFooter>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
