import { ApiProperty } from "@nestjs/swagger";
import { Buckets } from "../../buckets/entities/buckets.entity";
import { S3MultipartUploads } from "../../s3MultipartUploads/entities/s3MultipartUploads.entity";

export class S3MultipartUploadsParts {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	upload_id: string;
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
	bucket_id: string;
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
	@ApiProperty({
		type: () => Buckets,
		required: false,
	})
	buckets?: Buckets;
	@ApiProperty({
		type: () => S3MultipartUploads,
		required: false,
	})
	s3_multipart_uploads?: S3MultipartUploads;
}
