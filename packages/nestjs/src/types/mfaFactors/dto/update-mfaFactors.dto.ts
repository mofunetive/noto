import { Prisma, factor_status, factor_type } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMfaFactors {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	friendly_name?: string | null;
	@ApiProperty({
		enum: factor_type,
		enumName: "factor_type",
		required: false,
	})
	factor_type?: factor_type;
	@ApiProperty({
		enum: factor_status,
		enumName: "factor_status",
		required: false,
	})
	status?: factor_status;
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
	})
	updated_at?: Date;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	secret?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	phone?: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	last_challenged_at?: Date | null;
	@ApiProperty({
		type: () => Object,
		required: false,
		nullable: true,
	})
	web_authn_credential?: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	web_authn_aaguid?: string | null;
}
