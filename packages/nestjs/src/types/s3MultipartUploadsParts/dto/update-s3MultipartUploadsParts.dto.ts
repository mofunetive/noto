import { ApiProperty } from "@nestjs/swagger";

export class UpdateS3MultipartUploadsParts {
	@ApiProperty({
		type: "integer",
		format: "int32",
		required: false,
	})
	part_number?: number;
	@ApiProperty({
		type: "string",
		required: false,
	})
	key?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	etag?: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	owner_id?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
	})
	version?: string;
}
