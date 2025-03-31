import { ApiProperty } from "@nestjs/swagger";

export class SchemaMigrations {
	@ApiProperty({
		type: "string",
	})
	version: string;
}
