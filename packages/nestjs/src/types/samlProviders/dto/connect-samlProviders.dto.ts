import { ApiProperty } from "@nestjs/swagger";

export class ConnectSamlProviders {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	entity_id?: string;
}
