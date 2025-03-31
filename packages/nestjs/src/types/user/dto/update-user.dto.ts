import { ApiProperty } from "@nestjs/swagger";

export class UpdateUser {
	@ApiProperty({
		type: "string",
		required: false,
	})
	name?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	email?: string;
}
