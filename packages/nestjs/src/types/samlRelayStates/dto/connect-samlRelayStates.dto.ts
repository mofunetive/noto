import { ApiProperty } from "@nestjs/swagger";

export class ConnectSamlRelayStates {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
