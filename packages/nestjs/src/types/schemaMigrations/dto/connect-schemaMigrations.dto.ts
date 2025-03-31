import { ApiProperty } from "@nestjs/swagger";

export class ConnectSchemaMigrations {
	@ApiProperty({
		type: "string",
	})
	version: string;
}
