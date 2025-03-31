import { ApiProperty } from "@nestjs/swagger";

export class UpdateSsoDomains {
	@ApiProperty({
		type: "string",
		required: false,
	})
	domain?: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
}
