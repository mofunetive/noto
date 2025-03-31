import { ApiProperty } from "@nestjs/swagger";

export class CreateSchemaMigrations {
	@ApiProperty({
		type: "string",
	})
	version: string;
}
