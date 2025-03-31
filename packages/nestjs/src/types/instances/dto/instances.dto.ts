import { ApiProperty } from "@nestjs/swagger";

export class Instances {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	uuid: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	raw_base_config: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	created_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	updated_at: Date | null;
}
