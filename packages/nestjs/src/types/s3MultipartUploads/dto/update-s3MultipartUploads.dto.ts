import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateS3MultipartUploads {
	@ApiProperty({
		type: "string",
		required: false,
	})
	upload_signature?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	key?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	version?: string;
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
