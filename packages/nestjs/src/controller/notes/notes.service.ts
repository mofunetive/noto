import { Injectable, Req } from "@nestjs/common";

import { PrismaService } from "../../service/prisma/prisma.service";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";

@Injectable()
export class NotesService {
	constructor(private prisma: PrismaService) {}

	create(@Req() req: Request, createNoteDto: CreateNotesDto) {
		return this.prisma.notes.create({
			data: {
				userId: Number(req.headers["userId"]),
				...createNoteDto,
			},
		});
	}

	find(@Req() req: Request, sortBy: "createdAt" | "updatedAt" = "updatedAt") {
		return this.prisma.notes.findMany({
			where: {
				userId: Number(req.headers["userId"]),
			},
			orderBy: {
				[sortBy]: "desc",
			},
		});
	}

	update(@Req() req: Request, id: number, updateNoteDto: UpdateNotesDto) {
		return this.prisma.notes.update({
			where: {
				id,
				userId: Number(req.headers["userId"]),
			},
			data: {
				...updateNoteDto,
			},
		});
	}

	remove(@Req() req: Request, id: number) {
		return this.prisma.notes.delete({
			where: {
				id,
				userId: Number(req.headers["userId"]),
			},
		});
	}
}
