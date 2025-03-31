import { ApiProperty } from "@nestjs/swagger";
import { Sessions } from "../../sessions/entities/sessions.entity";

export class MfaAmrClaims {
	@ApiProperty({
		type: "string",
	})
	session_id: string;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	created_at: Date;
	@ApiProperty({
		type: "string",
		format: "date-time",
	})
	updated_at: Date;
	@ApiProperty({
		type: "string",
	})
	authentication_method: string;
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: () => Sessions,
		required: false,
	})
	sessions?: Sessions;
}
