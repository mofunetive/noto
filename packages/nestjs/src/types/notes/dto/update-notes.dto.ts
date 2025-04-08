import { ApiProperty } from "@nestjs/swagger";

export class UpdateNotes {
	@ApiProperty({
		type: "integer",
		format: "int32",
		required: false,
		nullable: true,
	})
	order?: number | null;
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
