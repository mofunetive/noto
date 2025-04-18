import { one_time_token_type } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class OneTimeTokens {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		enum: one_time_token_type,
		enumName: "one_time_token_type",
	})
	token_type: one_time_token_type;
	@ApiProperty({
		type: "string",
	})
	token_hash: string;
	@ApiProperty({
		type: "string",
	})
	relates_to: string;
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
}
