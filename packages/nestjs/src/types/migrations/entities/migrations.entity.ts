import { ApiProperty } from "@nestjs/swagger";

export class Migrations {
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	id: number;
	@ApiProperty({
		type: "string",
	})
	name: string;
	@ApiProperty({
		type: "string",
	})
	hash: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	executed_at: Date | null;
}
