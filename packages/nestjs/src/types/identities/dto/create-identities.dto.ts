import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class CreateIdentities {
	@ApiProperty({
		type: "string",
	})
	provider_id: string;
	@ApiProperty({
		type: () => Object,
	})
	identity_data: Prisma.InputJsonValue;
	@ApiProperty({
		type: "string",
	})
	provider: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	last_sign_in_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
	@ApiProperty({
		type: "string",
		default: "dbgenerated",
		required: false,
		nullable: true,
	})
	email?: string | null;
}
