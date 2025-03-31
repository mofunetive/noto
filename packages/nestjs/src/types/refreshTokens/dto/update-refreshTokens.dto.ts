import { ApiProperty } from "@nestjs/swagger";

export class UpdateRefreshTokens {
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	instance_id?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	token?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	user_id?: string | null;
	@ApiProperty({
		type: "boolean",
		required: false,
		nullable: true,
	})
	revoked?: boolean | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	created_at?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	updated_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	parent?: string | null;
}
