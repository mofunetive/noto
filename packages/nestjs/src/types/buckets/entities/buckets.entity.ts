import { ApiProperty } from "@nestjs/swagger";
import { Objects } from "../../objects/entities/objects.entity";
import { S3MultipartUploads } from "../../s3MultipartUploads/entities/s3MultipartUploads.entity";
import { S3MultipartUploadsParts } from "../../s3MultipartUploadsParts/entities/s3MultipartUploadsParts.entity";

export class Buckets {
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
		nullable: true,
	})
	owner: string | null;
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
	@ApiProperty({
		type: "boolean",
		nullable: true,
	})
	public: boolean | null;
	@ApiProperty({
		type: "boolean",
		nullable: true,
	})
	avif_autodetection: boolean | null;
	@ApiProperty({
		type: "integer",
		format: "int64",
		nullable: true,
	})
	file_size_limit: bigint | null;
	@ApiProperty({
		type: "string",
		isArray: true,
	})
	allowed_mime_types: string[];
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	owner_id: string | null;
	@ApiProperty({
		type: () => Objects,
		isArray: true,
		required: false,
	})
	objects?: Objects[];
	@ApiProperty({
		type: () => S3MultipartUploads,
		isArray: true,
		required: false,
	})
	s3_multipart_uploads?: S3MultipartUploads[];
	@ApiProperty({
		type: () => S3MultipartUploadsParts,
		isArray: true,
		required: false,
	})
	s3_multipart_uploads_parts?: S3MultipartUploadsParts[];
}
