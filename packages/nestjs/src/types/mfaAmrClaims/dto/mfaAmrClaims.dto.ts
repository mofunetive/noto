import { ApiProperty } from "@nestjs/swagger";

export class MfaAmrClaims {
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
	})
	authentication_method: string;
	@ApiProperty({
		type: "string",
	})
	id: string;
}
