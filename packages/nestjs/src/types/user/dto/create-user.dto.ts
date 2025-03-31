import { ApiProperty } from "@nestjs/swagger";

export class CreateUser {
	@ApiProperty({
		type: "string",
	})
	name: string;
	@ApiProperty({
		type: "string",
	})
	email: string;
}
