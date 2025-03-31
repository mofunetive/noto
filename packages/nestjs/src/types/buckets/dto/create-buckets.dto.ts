import { ApiProperty } from "@nestjs/swagger";

export class CreateBuckets {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	name: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	owner?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
	@ApiProperty({
		type: "boolean",
		default: false,
		required: false,
		nullable: true,
	})
	public?: boolean | null;
	@ApiProperty({
		type: "boolean",
		default: false,
		required: false,
		nullable: true,
	})
	avif_autodetection?: boolean | null;
	@ApiProperty({
		type: "integer",
		format: "int64",
		required: false,
		nullable: true,
	})
	file_size_limit?: bigint | null;
	@ApiProperty({
		type: "string",
		isArray: true,
	})
	allowed_mime_types: string[];
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	owner_id?: string | null;
}
