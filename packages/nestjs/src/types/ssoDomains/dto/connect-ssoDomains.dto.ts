import { ApiProperty } from "@nestjs/swagger";

export class ConnectSsoDomains {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
