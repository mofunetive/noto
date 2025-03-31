import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entities/user.entity";

export class Notes {
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	id: number;
	@ApiProperty({
		type: "string",
	})
	title: string;
	@ApiProperty({
		type: "string",
	})
	content: string;
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
	@ApiProperty({
		type: () => User,
		required: false,
		nullable: true,
	})
	user?: User | null;
	@ApiProperty({
		type: "integer",
		format: "int32",
		nullable: true,
	})
	userId: number | null;
}
