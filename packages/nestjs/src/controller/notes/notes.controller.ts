import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { NotesService } from "./notes.service";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";
import { AuthGuard } from "../../guards/auth.guard";
import { ApiBearerAuth, ApiQuery } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller("notes")
export class NotesController {
	constructor(private readonly notesService: NotesService) {}

	@Post(":userId")
	@UseGuards(AuthGuard)
	create(@Param("userId") id: number, @Body() createNoteDto: CreateNotesDto) {
		return this.notesService.create(+id, createNoteDto);
	}

	@Get()
	@UseGuards(AuthGuard)
	findAll() {
		return this.notesService.findAll();
	}

	@Get(":userId")
	@UseGuards(AuthGuard)
	@ApiQuery({ name: "sortBy", enum: ["createdAt", "updatedAt"], required: false, default: "updatedAt" })
	findAllByUser(@Param("userId") userId: string, @Query("sortBy") sortBy: "createdAt" | "updatedAt" = "updatedAt") {
		return this.notesService.findAllByUser(+userId, sortBy);
	}

	@Patch(":id")
	@UseGuards(AuthGuard)
	update(@Param("id") id: string, @Body() updateNoteDto: UpdateNotesDto) {
		return this.notesService.update(+id, updateNoteDto);
	}

	@Delete(":id")
	@UseGuards(AuthGuard)
	remove(@Param("id") id: string) {
		return this.notesService.remove(+id);
	}
}
