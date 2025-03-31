import { ApiProperty } from "@nestjs/swagger";
import { Sessions } from "../../sessions/entities/sessions.entity";

export class RefreshTokens {
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	instance_id: string | null;
	@ApiProperty({
		type: "integer",
		format: "int64",
	})
	id: bigint;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	token: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	user_id: string | null;
	@ApiProperty({
		type: "boolean",
		nullable: true,
	})
	revoked: boolean | null;
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
	parent: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	session_id: string | null;
	@ApiProperty({
		type: () => Sessions,
		required: false,
		nullable: true,
	})
	sessions?: Sessions | null;
}
