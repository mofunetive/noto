import { ApiProperty } from "@nestjs/swagger";

export class ConnectSessions {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
