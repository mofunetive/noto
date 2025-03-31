import { ApiProperty } from "@nestjs/swagger";

export class ConnectMigrations {
	@ApiProperty({
		type: "integer",
		format: "int32",
		required: false,
	})
	id?: number;
	@ApiProperty({
		type: "string",
		required: false,
	})
	name?: string;
}
