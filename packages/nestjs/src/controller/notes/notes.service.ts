import { Injectable } from "@nestjs/common";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";
import { PrismaService } from "src/service/prisma/prisma.service";

@Injectable()
export class NotesService {
	constructor(private prisma: PrismaService) {}

	create(createNoteDto: CreateNotesDto) {
		return this.prisma.notes.create({
			data: {
				...createNoteDto,
			},
		});
	}

	findAll() {
		return this.prisma.notes.findMany();
	}

	findOne(id: number) {
		return this.prisma.notes.findUnique({
			where: { id },
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
