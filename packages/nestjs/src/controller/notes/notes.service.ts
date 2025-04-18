import { Injectable, Req } from "@nestjs/common";

import type { notes } from "../../../../db/dist";
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

	moveOrder(@Req() req: Request, orders: { id: notes["id"]; order: notes["order"]; updatedAt: notes["updatedAt"] }[]) {
		return this.prisma.$transaction(
			orders.map(({ id, order, updatedAt }) =>
				this.prisma.notes.update({
					where: {
						id,
						userId: Number(req.headers["userId"]),
					},
					data: {
						order,
						updatedAt,
					},
				}),
			),
		);
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
