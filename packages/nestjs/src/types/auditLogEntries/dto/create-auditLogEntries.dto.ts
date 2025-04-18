import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuditLogEntries {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	instance_id?: string | null;
	@ApiProperty({
		type: "string",
	})
	id: string;
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
