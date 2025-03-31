import { ApiProperty } from "@nestjs/swagger";

export class SamlRelayStates {
	@ApiProperty({
		type: "string",
	})
	id: string;
	@ApiProperty({
		type: "string",
	})
	request_id: string;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	for_email: string | null;
	@ApiProperty({
		type: "string",
		nullable: true,
	})
	redirect_to: string | null;
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
}
