import { ApiProperty } from "@nestjs/swagger";

export class UpdateMfaAmrClaims {
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
	})
	authentication_method?: string;
}
