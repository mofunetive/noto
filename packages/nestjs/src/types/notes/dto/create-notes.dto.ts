import { ApiProperty } from "@nestjs/swagger";

export class CreateNotes {
	@ApiProperty({
		type: "integer",
		format: "int32",
		required: false,
		nullable: true,
	})
	order?: number | null;
	@ApiProperty({
		type: "string",
	})
	title: string;
	@ApiProperty({
		type: "string",
	})
	content: string;
}
