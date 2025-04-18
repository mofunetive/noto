import { Prisma } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";
import { Users } from "../../users/entities/users.entity";

export class Identities {
	@ApiProperty({
		type: "string",
	})
	provider_id: string;
	@ApiProperty({
		type: "string",
	})
	user_id: string;
	@ApiProperty({
		type: () => Object,
	})
	identity_data: Prisma.JsonValue;
	@ApiProperty({
		type: "string",
	})
	provider: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	last_sign_in_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	created_at: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	updated_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	email: string | null;
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: () => Users,
		required: false,
	})
	users?: Users;
}
