import { ApiProperty } from "@nestjs/swagger";

export class CreateSamlRelayStates {
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
		required: false,
		nullable: true,
	})
	for_email?: string | null;
	@ApiProperty({
		type: "string",
		required: false,
		nullable: true,
	})
	redirect_to?: string | null;
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
}
