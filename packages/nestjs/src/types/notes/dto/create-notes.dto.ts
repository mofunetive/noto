import { ApiProperty } from "@nestjs/swagger";

export class CreateNotes {
	@ApiProperty({
		type: "string",
	})
	title: string;
	@ApiProperty({
		type: "string",
	})
	content: string;
}
