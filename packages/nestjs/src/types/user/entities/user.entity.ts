import { ApiProperty } from "@nestjs/swagger";
import { Notes } from "../../notes/entities/notes.entity";
import { Users } from "../../users/entities/users.entity";

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
	@ApiProperty({
		type: () => Notes,
		isArray: true,
		required: false,
	})
	notes?: Notes[];
	@ApiProperty({
		type: () => Users,
		required: false,
		nullable: true,
	})
	auth?: Users | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	authId: string | null;
}
