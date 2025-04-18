import { Prisma, factor_status, factor_type } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class MfaFactors {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	friendly_name: string | null;
	@ApiProperty({
		enum: factor_type,
		enumName: "factor_type",
	})
	factor_type: factor_type;
	@ApiProperty({
		enum: factor_status,
		enumName: "factor_status",
	})
	status: factor_status;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	updated_at: Date;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	secret: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	phone: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	last_challenged_at: Date | null;
	@ApiProperty({
		type: () => Object,
		nullable: true,
	})
	web_authn_credential: Prisma.JsonValue | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	web_authn_aaguid: string | null;
}
