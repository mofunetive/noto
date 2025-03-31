import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMfaChallenges {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	verified_at?: Date | null;
	@ApiProperty({
		type: "string",
	})
	ip_address: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	otp_code?: string | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	web_authn_session_data?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
}
