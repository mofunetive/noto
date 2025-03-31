import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { NotesService } from "./notes.service";
import CreateNotesDto from "./dto/create-note.dto";
import UpdateNotesDto from "./dto/update-note.dto";

@Controller("notes")
export class NotesController {
	constructor(private readonly notesService: NotesService) {}

	@Post()
	create(@Body() createNoteDto: CreateNotesDto) {
		return this.notesService.create(createNoteDto);
	}

	@Get()
	findAll() {
		return this.notesService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.notesService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateNoteDto: UpdateNotesDto) {
		return this.notesService.update(+id, updateNoteDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.notesService.remove(+id);
	}
}
