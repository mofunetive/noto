import { ApiProperty } from "@nestjs/swagger";

export class ConnectRefreshTokens {
	@ApiProperty({
		type: "integer",
		format: "int64",
		required: false,
	})
	id?: bigint;
	@ApiProperty({
		type: "string",
		required: false,
	})
	token?: string;
}
