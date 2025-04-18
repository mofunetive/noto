import { aal_level } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSessions {
	@ApiProperty({
		type: "string",
	})
	id: string;
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
	factor_id?: string | null;
	@ApiProperty({
		enum: aal_level,
		enumName: "aal_level",
		required: false,
		nullable: true,
	})
	aal?: aal_level | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	not_after?: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		required: false,
		nullable: true,
	})
	refreshed_at?: Date | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	user_agent?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	ip?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	tag?: string | null;
}
