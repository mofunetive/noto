import { ApiProperty } from "@nestjs/swagger";

export class S3MultipartUploadsParts {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "integer",
		format: "int64",
	})
	size: bigint;
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	part_number: number;
	@ApiProperty({
		type: "string",
	})
	key: string;
	@ApiProperty({
		type: "string",
	})
	etag: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	owner_id: string | null;
	@ApiProperty({
		type: "string",
	})
	version: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
}
