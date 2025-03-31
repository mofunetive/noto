import { ApiProperty } from "@nestjs/swagger";

export class ConnectFlowState {
	@ApiProperty({
		type: "string",
	})
	id: string;
}
