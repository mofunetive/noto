import { ApiProperty } from "@nestjs/swagger";

export class ConnectBuckets {
	@ApiProperty({
		type: "string",
		required: false,
	})
	id?: string;
	@ApiProperty({
		type: "string",
		required: false,
	})
	name?: string;
}
