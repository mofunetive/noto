import { ApiProperty } from "@nestjs/swagger";

export class ConnectSsoProviders {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
