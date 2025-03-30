import { ApiProperty } from "@nestjs/swagger";
import type { notes } from "@noto/database";

export class CreateNoteDto implements notes {
	@ApiProperty()
	id: number;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty()
	updatedAt: Date;

	@ApiProperty()
	userId: number;

	@ApiProperty()
	title: string;

	@ApiProperty()
	content: string;
}
