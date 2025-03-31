import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAuditLogEntries {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	instance_id?: string | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	payload?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
}
