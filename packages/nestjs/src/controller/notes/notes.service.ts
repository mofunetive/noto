import { Injectable } from "@nestjs/common";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";
import { PrismaService } from "../../service/prisma/prisma.service";

@Injectable()
export class NotesService {
	constructor(private prisma: PrismaService) {}

	create(id: number, createNoteDto: CreateNotesDto) {
		return this.prisma.notes.create({
			data: {
				userId: id,
				...createNoteDto,
			},
		});
	}

	findAll() {
		return this.prisma.notes.findMany();
	}

	findAllByUser(userId: number, sortBy: "createdAt" | "updatedAt" = "updatedAt") {
		return this.prisma.notes.findMany({
			where: {
				userId,
			},
			select: {
				id: true,
				title: true,
				content: true,
				createdAt: true,
				updatedAt: true,
			},
			orderBy: {
				[sortBy]: "desc",
			},
		});
	}

	update(id: number, updateNoteDto: UpdateNotesDto) {
		return this.prisma.notes.update({
			where: { id },
			data: {
				...updateNoteDto,
			},
		});
	}

	remove(id: number) {
		return this.prisma.notes.delete({
			where: { id },
		});
	}
}
