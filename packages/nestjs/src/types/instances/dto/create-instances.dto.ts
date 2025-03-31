import { ApiProperty } from "@nestjs/swagger";

export class CreateInstances {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	uuid?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	raw_base_config?: string | null;
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
