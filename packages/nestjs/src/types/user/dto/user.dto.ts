import { ApiProperty } from "@nestjs/swagger";

export class User {
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	id: number;
	@ApiProperty({
		type: "string",
	})
	name: string;
	@ApiProperty({
		type: "string",
	})
	email: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	createdAt: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	updatedAt: Date;
}
