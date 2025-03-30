import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { PrismaService } from "src/service/prisma/prisma.service";

@Injectable()
export class NotesService {
	constructor(private prisma: PrismaService) {}

	create(createNoteDto: CreateNoteDto) {
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

	update(id: number, updateNoteDto: UpdateNoteDto) {
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
