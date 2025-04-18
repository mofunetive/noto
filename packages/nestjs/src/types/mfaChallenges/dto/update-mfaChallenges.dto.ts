import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMfaChallenges {
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
	})
	created_at?: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	verified_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
	})
	ip_address?: string;
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
