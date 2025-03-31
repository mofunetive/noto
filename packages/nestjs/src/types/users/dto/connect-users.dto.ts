import { ApiProperty } from "@nestjs/swagger";

export class ConnectUsers {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	phone?: string;
}
