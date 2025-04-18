import { code_challenge_method } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateFlowState {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	user_id?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
	})
	auth_code?: string;
	@ApiProperty({
		enum: code_challenge_method,
		enumName: "code_challenge_method",
		required: false,
	})
	code_challenge_method?: code_challenge_method;
	@ApiProperty({
		type: "string",
		required: false,
	})
	code_challenge?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	provider_type?: string;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	provider_access_token?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	provider_refresh_token?: string | null;
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
		required: false,
	})
	authentication_method?: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	auth_code_issued_at?: Date | null;
}
