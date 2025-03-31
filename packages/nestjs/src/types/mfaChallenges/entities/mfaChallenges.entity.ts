import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { MfaFactors } from "../../mfaFactors/entities/mfaFactors.entity";

export class MfaChallenges {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	factor_id: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	verified_at: Date | null;
	@ApiProperty({
		type: "string",
	})
	ip_address: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	otp_code: string | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	web_authn_session_data: Prisma.JsonValue | null;
	@ApiProperty({
		type: () => MfaFactors,
		required: false,
	})
	mfa_factors?: MfaFactors;
}
