import { code_challenge_method } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";
import { SamlRelayStates } from "../../samlRelayStates/entities/samlRelayStates.entity";

export class FlowState {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	user_id: string | null;
	@ApiProperty({
		type: "string",
	})
	auth_code: string;
	@ApiProperty({
		enum: code_challenge_method,
		enumName: "code_challenge_method",
	})
	code_challenge_method: code_challenge_method;
	@ApiProperty({
		type: "string",
	})
	code_challenge: string;
	@ApiProperty({
		type: "string",
	})
	provider_type: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	provider_access_token: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	provider_refresh_token: string | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	created_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	updated_at: Date | null;
	@ApiProperty({
		type: "string",
	})
	authentication_method: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	auth_code_issued_at: Date | null;
	@ApiProperty({
		type: () => SamlRelayStates,
		isArray: true,
		required: false,
	})
	saml_relay_states?: SamlRelayStates[];
}
