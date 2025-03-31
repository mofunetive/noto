import { ApiProperty } from "@nestjs/swagger";

export class CreateS3MultipartUploadsParts {
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
		required: false,
		nullable: true,
	})
	owner_id?: string | null;
	@ApiProperty({
		type: "string",
	})
	version: string;
}
