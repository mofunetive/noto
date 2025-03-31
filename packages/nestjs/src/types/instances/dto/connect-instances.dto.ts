import { ApiProperty } from "@nestjs/swagger";

export class ConnectInstances {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
