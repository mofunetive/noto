import { ApiProperty } from "@nestjs/swagger";

export class ConnectUser {
	@ApiProperty({
		type: "integer",
		format: "int32",
		required: false,
	})
	id?: number;
	@ApiProperty({
		type: "string",
		required: false,
	})
	email?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	authId?: string;
}
