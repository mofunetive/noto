import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class MfaAmrClaimsSessionIdAuthenticationMethodUniqueInput {
	@ApiProperty({
		type: "string",
	})
	session_id: string;
	@ApiProperty({
		type: "string",
	})
	authentication_method: string;
}

@ApiExtraModels(MfaAmrClaimsSessionIdAuthenticationMethodUniqueInput)
export class ConnectMfaAmrClaims {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: MfaAmrClaimsSessionIdAuthenticationMethodUniqueInput,
		required: false,
	})
	session_id_authentication_method?: MfaAmrClaimsSessionIdAuthenticationMethodUniqueInput;
}
