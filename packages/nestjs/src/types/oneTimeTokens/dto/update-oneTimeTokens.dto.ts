import { one_time_token_type } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOneTimeTokens {
	@ApiProperty({
		enum: one_time_token_type,
		enumName: "one_time_token_type",
		required: false,
	})
	token_type?: one_time_token_type;
	@ApiProperty({
		type: "string",
		required: false,
	})
	token_hash?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	relates_to?: string;
}
