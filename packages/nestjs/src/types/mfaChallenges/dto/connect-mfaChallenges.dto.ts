import { ApiProperty } from "@nestjs/swagger";

export class ConnectMfaChallenges {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
