import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class S3MultipartUploads {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "integer",
		format: "int64",
	})
	in_progress_size: bigint;
	@ApiProperty({
		type: "string",
	})
	upload_signature: string;
	@ApiProperty({
		type: "string",
	})
	key: string;
	@ApiProperty({
		type: "string",
	})
	version: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	owner_id: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	user_metadata: Prisma.JsonValue | null;
}
