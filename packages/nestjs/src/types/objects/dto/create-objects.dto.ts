import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class CreateObjects {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	name?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	owner?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		default: new Date().toISOString(),
		required: false,
		nullable: true,
	})
	last_accessed_at?: Date | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	metadata?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	version?: string | null;
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
