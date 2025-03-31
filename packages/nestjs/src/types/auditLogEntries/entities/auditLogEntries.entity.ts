import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class AuditLogEntries {
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	instance_id: string | null;
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	payload: Prisma.JsonValue | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	created_at: Date | null;
	@ApiProperty({
		type: "string",
	})
	ip_address: string;
}
