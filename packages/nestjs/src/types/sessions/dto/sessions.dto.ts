import { aal_level } from "../../../../../db/dist";
import { ApiProperty } from "@nestjs/swagger";

export class Sessions {
	@ApiProperty({
		type: "string",
	})
	id: string;
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
	factor_id: string | null;
	@ApiProperty({
		enum: aal_level,
		enumName: "aal_level",
		nullable: true,
	})
	aal: aal_level | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	not_after: Date | null;
	@ApiProperty({
		type: "string",
		format: "date-time",
		nullable: true,
	})
	refreshed_at: Date | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	user_agent: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	ip: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	tag: string | null;
}
