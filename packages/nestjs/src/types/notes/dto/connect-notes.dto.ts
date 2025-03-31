import { ApiProperty } from "@nestjs/swagger";

export class ConnectNotes {
	@ApiProperty({
		type: "integer",
		format: "int32",
	})
	id: number;
}
