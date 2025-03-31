import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { one_time_token_type } from "@prisma/client";

export class OneTimeTokensUserIdTokenTypeUniqueInput {
	@ApiProperty({
		type: "string",
	})
	user_id: string;
	@ApiProperty({
		enum: one_time_token_type,
		enumName: "one_time_token_type",
	})
	token_type: one_time_token_type;
}

@ApiExtraModels(OneTimeTokensUserIdTokenTypeUniqueInput)
export class ConnectOneTimeTokens {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: OneTimeTokensUserIdTokenTypeUniqueInput,
		required: false,
	})
	user_id_token_type?: OneTimeTokensUserIdTokenTypeUniqueInput;
}
