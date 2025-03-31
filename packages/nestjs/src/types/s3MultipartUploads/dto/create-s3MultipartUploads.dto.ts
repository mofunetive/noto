import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateS3MultipartUploads {
	@ApiProperty({
		type: "string",
	})
	id: string;
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
		required: false,
		nullable: true,
	})
	owner_id?: string | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	user_metadata?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
}
