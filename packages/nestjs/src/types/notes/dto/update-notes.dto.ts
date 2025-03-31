import { ApiProperty } from "@nestjs/swagger";

export class UpdateNotes {
	@ApiProperty({
		type: "string",
		required: false,
	})
	title?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	content?: string;
}
