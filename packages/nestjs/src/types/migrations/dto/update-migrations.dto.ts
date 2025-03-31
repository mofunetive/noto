import { ApiProperty } from "@nestjs/swagger";

export class UpdateMigrations {
	@ApiProperty({
		type: "string",
		required: false,
	})
	name?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	hash?: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	executed_at?: Date | null;
}
