import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiQuery } from "@nestjs/swagger";

import type { notes } from "../../../../db/dist";
import { AuthGuard } from "../../guards/auth.guard";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";
import { NotesService } from "./notes.service";

@ApiBearerAuth()
@Controller("notes")
export class NotesController {
	constructor(private readonly notesService: NotesService) {}

	@Post()
	@UseGuards(AuthGuard)
	create(@Req() req: Request, @Body() createNoteDto: CreateNotesDto) {
		return this.notesService.create(req, createNoteDto);
	}

	@Get()
	@UseGuards(AuthGuard)
	@ApiQuery({ name: "sortBy", enum: ["createdAt", "updatedAt"], required: false, default: "updatedAt" })
	find(@Req() req: Request, @Query("sortBy") sortBy: "createdAt" | "updatedAt" = "updatedAt") {
		return this.notesService.find(req, sortBy);
	}

	@Patch("order")
	@UseGuards(AuthGuard)
	moveOrder(@Req() req: Request, @Body() orders: { orders: { id: notes["id"]; order: notes["order"]; updatedAt: notes["updatedAt"] }[] }) {
		const parsedOrders: { id: notes["id"]; order: notes["order"]; updatedAt: notes["updatedAt"] }[] = Array.isArray(orders) ? orders : orders.orders;

		return this.notesService.moveOrder(
			req,
			parsedOrders.map((order) => ({ ...order, id: +order.id, updatedAt: order.updatedAt })),
		);
	}

	@Patch(":id")
	@UseGuards(AuthGuard)
	update(@Req() req: Request, @Param("id") id: string, @Body() updateNoteDto: UpdateNotesDto) {
		return this.notesService.update(req, +id, updateNoteDto);
	}

	@Delete(":id")
	@UseGuards(AuthGuard)
	remove(@Req() req: Request, @Param("id") id: string) {
		return this.notesService.remove(req, +id);
	}
}
